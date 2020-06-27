<?php

    namespace App\Http\Controllers;

    use App\Models\Item;
    use App\Http\Requests\ItemRequest;
    use Illuminate\Http\Request;
    use Inertia\Inertia;

    class ItemController extends Controller {

        public function index(String $type = 'MEMO') {
            $items = Item::ofType($type)->paginate(7);
            $links = $items->links();
            return Inertia::render('Items/Index', [
                'items' => $items,
                'links' => $links,
                'type' => $type
            ]);
        }

        public function create(Request $request) {
            return Inertia::render('Items/Create', ['type' => $request->type]);
        }

        public function store(ItemRequest $request) {
            Item::create([
                'text' => $request->text,
                'details' => $request->details,
                'type' => $request->type
            ]);

            return redirect()->route('items.index', ['type' => $request->type])->with('successMessage',
                'Элемент успешно добавлен!');
        }

        public function show(Item $item) {
            return Inertia::render('Items/Edit', [
                'item' => $item,
                'tags' => $item->tags(),
                'readOnly' => true
            ]);
        }

        public function edit(Item $item) {
            return Inertia::render('Items/Edit', [
                'item' => $item,
                'tags' => $item->tags()->get()->toArray(),
            ]);
        }

        public function update(ItemRequest $request, Item $item) {

            $item->update([
                'text' => $request->text,
                'details' => $request->details,
            ]);
            if ($request['tags']) {
                $item->tags()->detach();
                $item->tags()->attach($request['tags']);
            }

            return redirect()->route('items.index', ['type' => $item->type])->with('successMessage',
                'Элемент успешно изменен!');
        }

        public function destroy(Item $item) {
            $type = $item.type;
            $item->delete();

            return redirect()->route('items.index', ['type' => $type])->with('successMessage',
                'Элемент успешно удален!');
        }

        }
