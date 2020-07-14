<?php

    namespace App\Http\Controllers;

    use App\Helpers\Helper;
    use App\Http\Requests\TagRequest;
    use App\Models\Tag;
    use Inertia\Inertia;

    class TagController extends Controller {

        public function index() {
            $tags = Tag::paginate(7);
            $links = $tags->links();
            return Inertia::render('Tags/Index', [
                'tags' => $tags,
                'links' => $links

            ]);
        }

        public function create() {
            $referer = request()->headers->get('referer');
            return Inertia::render('Tags/Create', ['referer' => $referer]);
        }

        public function store(TagRequest $request) {
            $url = $request['referer'] ?? route('tags.index');
            Tag::create([
                'name' => $request->name
            ]);

            return redirect($url)->with('successMessage',
                'Тег ' . Helper::getWrapped($request->name) . ' успешно добавлен!');
        }

        public function show(Tag $tag) {
            $referer = request()->headers->get('referer');
            return Inertia::render('Tags/Edit', [
                'tag' => $tag,
                'readOnly' => true
            ]);
        }

        public function edit(Tag $tag) {
            $referer = request()->headers->get('referer');
            return Inertia::render('Tags/Edit', [
                'tag' => $tag,
                'referer' => $referer
            ]);
        }


        public function update(TagRequest $request, Tag $tag) {
            $url = $request['referer'] ?? route('tags.index');
            $tag->update([
                'name' => $request->name
            ]);

            return redirect($url)->with('successMessage',
                'Тег ' . Helper::getWrapped($request->name) . ' успешно изменен!');
        }

        public function destroy(Tag $tag) {
            $tag->delete();

            return redirect()->route('tags.index')->with('successMessage', 'Тег успешно удален!');
        }
    }
