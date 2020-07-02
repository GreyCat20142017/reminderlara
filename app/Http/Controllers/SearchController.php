<?php

    namespace App\Http\Controllers;

    use App\Models\Link;
    use Illuminate\Http\Request;
    use Inertia\Inertia;

    class SearchController extends Controller {

        public function searchForm() {
            return Inertia::render('Search/SearchForm');
        }
    }
