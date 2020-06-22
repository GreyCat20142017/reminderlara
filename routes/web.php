<?php

    use Inertia\Inertia;

    Route::redirect('/logout', '/about');

    Route::get('/', function () {
        return Inertia::render('Main');
    });

    Route::get('/about', function () {
        return Inertia::render('About');
    });


//    Route::get('/questions', function () {
//        return Inertia::render('Content', ['title' => 'Вопросы']);
//    });

//    Route::get('/problems', function () {
//        return Inertia::render('Content', ['title' => 'Грабли']);
//    });

    Auth::routes();

    Route::resource('tags', 'TagController')->middleware(['auth']);
    Route::resource('items', 'ItemController')->middleware(['auth']);
    Route::resource('users', 'UsersController')->middleware(['auth']);

