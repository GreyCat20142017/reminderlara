<?php

    namespace App\Http\Controllers;

    use App\Models\Item;
    use App\Models\Tag;
    use App\Http\Requests\ItemRequest;
    use Illuminate\Http\Request;
    use Inertia\Inertia;

    class ItemController extends Controller {

        const PAGE_LIMIT = 7;

        public function index(String $type = 'MEMO', Tag $tag) {
            $items = Item::ofType($type)->ofTag($tag)->paginate(self::PAGE_LIMIT);
            return Inertia::render('Items/Index', [
                'items' => $items,
                'type' => $type,
                'filterTitle' => $tag->exists ? 'по тегу ' . $tag->name : 'все записи',
                'filtered' => $tag->exists
            ]);
        }

        public function create(Request $request) {
            $referer = request()->headers->get('referer');
            return Inertia::render('Items/Create', [
                'type' => $request->type,
                'referer' => $referer
            ]);
        }

        public function store(ItemRequest $request) {
            $url = $request['referer'] ?? route('items.index', ['type' => $request->type]);
            $item = Item::create([
                'text' => $request->text,
                'details' => $request->details,
                'type' => $request->type
            ]);

            $item->updateRelated($request['tags'], $request['refs']);

            return redirect($url)->with('successMessage',
                'Элемент успешно добавлен!');
        }

        public function show(Item $item) {
            $referer = request()->headers->get('referer');
            return Inertia::render('Items/Edit', [
                'item' => $item,
                'tags' => $item->tags()->get()->toArray(),
                'refs' => $item->refs()->get()->toArray(),
                'readOnly' => true,
                'referer' => $referer
            ]);
        }

        public function edit(Item $item) {
            $referer = request()->headers->get('referer');
            return Inertia::render('Items/Edit', [
                'item' => $item,
                'tags' => $item->tags()->get()->toArray(),
                'refs' => $item->refs()->get()->toArray(),
                'referer' => $referer
            ]);
        }

        public function update(ItemRequest $request, Item $item) {
            $url = $request['referer'] ?? route('items.index', ['type' => $item->type]);

            $item->update([
                'text' => $request->text,
                'details' => $request->details,
            ]);
            $item->updateRelated($request['tags'], $request['refs']);

            return redirect($url)->with('successMessage', 'Элемент успешно изменен!');
        }

        public function destroy(Item $item) {
            $type = $item->type;
            $item->delete();

            return redirect()->route('items.index', ['type' => $type])->with('successMessage',
                'Элемент успешно удален!');
        }

    }
