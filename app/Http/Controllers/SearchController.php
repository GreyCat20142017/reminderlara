<?php

    namespace App\Http\Controllers;

    use App\Models\Item;
    use App\Models\Tag;
    use Illuminate\Http\Request;
    use Inertia\Inertia;



    class SearchController extends Controller {

        public function searchForm(Request $request) {
            $tab = $request['tab'] ?? 1;
            return Inertia::render('Search/SearchForm', ['tab' => $tab]);
        }

        public function searchByTag(Tag $tag) {
            $items = $tag->items()->paginate(7);
            return Inertia::render('Search/SearchResult', [
                'title' => 'Результаты поиска по тегу ' . ($tag['name'] ?? '-'),
                'items' => $items,
                'tab' => 1
            ]);
        }

        public function searchByText(String $text) {
            $items = Item::where('text', 'like', '%' . $text . '%')->orWhere('details', 'like',
                '%' . $text . '%')->paginate(7);
            return Inertia::render('Search/SearchResult', [
                'title' => 'Результаты поиска по тексту "' . ($text ?? '-') . '"',
                'items' => $items,
                'tab' => 2
            ]);
        }

        public function viewer (String $type = 'MEMO') {
            $items = Item::ofType($type)->paginate(7);

            return Inertia::render('Viewer/Viewer', ['items' => $items]);
        }
    }
