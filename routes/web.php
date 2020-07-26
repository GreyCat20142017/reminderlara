<?php

    use Inertia\Inertia;

    Route::redirect('/logout', '/');

    Route::get('/', function () {
        return Inertia::render('Main');
    })->name('home');


    Route::get('/search/{tab?}', 'SearchController@searchForm')->name('search')->where('tab', '[1-2]');
    Route::get('/search/tag/{tag}', 'SearchController@searchByTag')->name('search.tag');
    Route::get('/search/text/{text}', 'SearchController@searchByText')->name('search.text');

    Route::get('/viewer/{type}/{tag}', 'SearchController@viewer')->name('viewer')->where('type', 'MEMO|NOTES');

    Auth::routes();


    Route::middleware(['auth'])->group(function () {

        Route::resource('tags', 'TagController');

        Route::get('/items/{type}/{tag?}', 'ItemController@index')->name('items.index')->where('type', 'MEMO|NOTES');
        Route::get('/items/{type}/create', 'ItemController@create')->name('items.create')->where('type', 'MEMO|NOTES');
        Route::resource('items', 'ItemController')->except(['index', 'create']);

        Route::resource('users', 'UsersController');
    });

