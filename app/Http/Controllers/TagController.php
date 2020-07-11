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
            return Inertia::render('Tags/Create');
        }

        public function store(TagRequest $request) {
            Tag::create([
                'name' => $request->name
            ]);

            return redirect()->route('tags.index')->with('successMessage',
                'Тег ' . Helper::getWrapped($request->name) . ' успешно добавлен!');
        }

        public function show(Tag $tag) {
            return Inertia::render('Tags/Edit', [
                'tag' => $tag,
                'readOnly' => true
            ]);
        }

        public function edit(Tag $tag) {

            return Inertia::render('Tags/Edit', [
                'tag' => $tag,
            ]);
        }


        public function update(TagRequest $request, Tag $tag) {
            $tag->update([
                'name' => $request->name
            ]);

            return redirect()->route('tags.index')->with('successMessage',
                'Тег ' . Helper::getWrapped($request->name) . ' успешно изменен!');
        }

        public function destroy(Tag $tag) {
            $tag->delete();

            return redirect()->route('tags.index')->with('successMessage', 'Тег успешно удален!');
        }
    }
