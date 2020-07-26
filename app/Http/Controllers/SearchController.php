<?php

    namespace App\Http\Controllers;

    use App\Helpers\Helper;
    use App\Models\Item;
    use App\Models\Tag;
    use Illuminate\Http\Request;
    use Inertia\Inertia;


    class SearchController extends Controller {

        const PAGE_LIMIT = 7;

        public function searchForm(Request $request) {
            $tab = $request['tab'] ?? 1;
            return Inertia::render('Search/SearchForm', ['tab' => $tab]);
        }

        public function searchByTag(Tag $tag) {
            $items = $tag->items()->paginate(self::PAGE_LIMIT);
            return Inertia::render('Search/SearchResult', [
                'title' => 'Результаты поиска по тегу ' . Helper::getWrapped($tag['name'] ?? '-'),
                'items' => $items,
                'tab' => 1
            ]);
        }

        public function searchByText(String $text) {
            $items = Item::where('text', 'like', '%' . $text . '%')->orWhere('details', 'like',
                '%' . $text . '%')->paginate(self::PAGE_LIMIT);
            return Inertia::render('Search/SearchResult', [
                'title' => 'Результаты поиска по тексту ' . Helper::getWrapped($text ?? '-'),
                'items' => $items,
                'tab' => 2
            ]);
        }

        public function viewer(String $type = 'MEMO', Tag $tag) {
            $items = Item::ofType($type)->ofTag($tag)->with('refs')->paginate(self::PAGE_LIMIT)->onEachSide(3);
            $referer = request()->headers->get('referer');

            return Inertia::render('Viewer/Viewer', [
                'items' => $items,
                'type' => $type,
                'referer' => $referer,
                'pageLimit' => self::PAGE_LIMIT,
                'filterTitle' => $tag->exists ? 'по тегу ' . $tag->name : 'все записи'
            ]);
        }
    }
