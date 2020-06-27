<?php

    use Inertia\Inertia;

    Route::redirect('/logout', '/about');

    Route::get('/', function () {
        return Inertia::render('Main');
    });

    Route::get('/about', function () {
        return Inertia::render('About');
    });


    Auth::routes();

    Route::middleware(['auth'])->group(function () {

        Route::resource('tags', 'TagController');


        Route::get('/items/{type?}', 'ItemController@index')->name('items.index')->where('type', 'MEMO|NOTES');
        Route::get('/items/{type}/create', 'ItemController@create')->name('items.create')->where('type', 'MEMO|NOTES');
        Route::resource('items', 'ItemController')->except(['index', 'create']);

        Route::resource('users', 'UsersController');
    });

