<?php

namespace App\Http\Controllers;

use App\Models\Item;
use App\Http\Requests\ItemRequest;
use Inertia\Inertia;

class ItemController extends Controller
{
    public function index() {
        $items = Item::paginate(7);
        $links = $items->links();
        return Inertia::render('Items/Index', [
            'items' => $items,
            'links' => $links

        ]);
    }

    public function create() {
        return Inertia::render('Items/Create');
    }

    public function store(ItemRequest $request) {
        Item::create([
            'text' => $request->text,
            'details' => $request->details
        ]);

        return redirect()->route('items.index')->with('successMessage', 'Элемент успешно добавлен!');
    }

    public function show(Item $item) {
        return Inertia::render('Items/Edit', [
            'item' => $item,
            'readOnly' => true
        ]);
    }

    public function edit(Item $item) {

        return Inertia::render('Items/Edit', [
            'item' => $item,
        ]);
    }

    public function update(ItemRequest $request, Item $item) {
        $item->update([
            'text' => $request->text,
            'details' => $request->details,
        ]);

        return redirect()->route('items.index')->with('successMessage', 'Элемент успешно изменен!');
    }

    public function destroy(Item $item) {
        $item->delete();

        return redirect()->route('items.index')->with('successMessage', 'Элемент успешно удален!');
    }
}
