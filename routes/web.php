<?php

    use Inertia\Inertia;

    Route::redirect('/logout', '/about');

    Route::get('/', function () {
        return Inertia::render('Main');
    });

    Route::get('/about', function () {
        return Inertia::render('About');
    });


    Route::get('/questions', function () {
        return Inertia::render('Content', ['title' => 'Вопросы']);
    });

    Route::get('/problems', function () {
        return Inertia::render('Content', ['title' => 'Грабли']);
    });

    Auth::routes();

    Route::get('/users', 'UsersController@index')->name('users.index');
    Route::get('/users/create', 'UsersController@create')->name('users.create');
    Route::post('/users', 'UsersController@store')->name('users.store');
    Route::get('/users/{user}/edit', 'UsersController@edit')->name('users.edit');
    Route::patch('/users/{user}', 'UsersController@update')->name('users.update');
    Route::delete('/users/{user}', 'UsersController@destroy')->name('users.destroy');
