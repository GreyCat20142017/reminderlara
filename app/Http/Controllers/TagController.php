<?php

    namespace App\Http\Controllers;

    use App\Models\Tag;
    use Inertia\Inertia;
    use Illuminate\Http\Request;

    class TagController extends Controller {
        /**
         * Display a listing of the resource.
         *
         * @return \Illuminate\Http\Response
         */
        public function index() {
            $tags = Tag::paginate(3);
            $links = $tags->links();

            return Inertia::render('Tags/Index', [
                   'tags' => $tags,
                    'links' => $links


//                'tags' => Tag::paginate(3)
//                    ->transform(function ($tag) {
//                        return [
//                            'id' => $tag->id,
//                            'name' => $tag->name
//                        ];
//                    }),
            ]);
        }


        /**
         * Show the form for creating a new resource.
         *
         * @return \Illuminate\Http\Response
         */
        public function create() {
            //
        }

        /**
         * Store a newly created resource in storage.
         *
         * @param \Illuminate\Http\Request $request
         * @return \Illuminate\Http\Response
         */
        public function store(Request $request) {
            //
        }

        /**
         * Display the specified resource.
         *
         * @param \App\Models\Tag $tag
         * @return \Illuminate\Http\Response
         */
        public function show(Tag $tag) {
            //
        }

        /**
         * Show the form for editing the specified resource.
         *
         * @param \App\Models\Tag $tag
         * @return \Illuminate\Http\Response
         */
        public function edit(Tag $tag) {
            //
        }

        /**
         * Update the specified resource in storage.
         *
         * @param \Illuminate\Http\Request $request
         * @param \App\Models\Tag $tag
         * @return \Illuminate\Http\Response
         */
        public function update(Request $request, Tag $tag) {
            //
        }

        /**
         * Remove the specified resource from storage.
         *
         * @param \App\Models\Tag $tag
         * @return \Illuminate\Http\Response
         */
        public function destroy(Tag $tag) {
            //
        }
    }
