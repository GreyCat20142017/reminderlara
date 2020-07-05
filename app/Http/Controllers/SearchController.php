<?php

    namespace App\Http\Controllers;

    use App\Models\Item;
    use App\Models\Tag;
    use Inertia\Inertia;

    class SearchController extends Controller {

        public function searchForm() {
            return Inertia::render('Search/SearchForm');
        }

        public function searchByTag(Tag $tag) {
            $items = $tag->items()->paginate(7);
            return Inertia::render('Search/SearchResult', [
                'title' => 'Результаты поиска по тегу ' . ($tag['name'] ?? '-'),
                'items' => $items,
                'links' => $items->links()
            ]);
        }

        public function searchByText(String $text) {

            $items = Item::where('text', 'like', '%' . $text . '%')->paginate(7);
            return Inertia::render('Search/SearchResult', [
                'title' => 'Результаты поиска по тексту ' . ($text ?? '-'),
                'items' => $items,
                'links' => $items->links()
            ]);
        }
    }
