<?php

use Illuminate\Database\Seeder;

use Illuminate\Support\Carbon;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if (DB::table('users')->get()->count() == 0) {
            DB::table('users')->insert([
                [
                    'id' => 1,
                    'name' => 'Кукушкин К.К.',
                    'email' => 'qq@qq.qq',
                    'password' => '$2y$10$9zF4rRq9LthD9rGggwDgSuy9qJrQhMQNJTgzEUuKnRn2s7PapAmyG',
                    'email_verified_at' => now(),
                    'admin' => 0,
                    'created_at' => Carbon::now()
                ]
            ]);

        } else {
            echo "\e[31mТаблица не пустая. Заполнение данными отменено.";
        }
    }
}
