<?php

    namespace App\Providers;

    use Illuminate\Support\Facades\Auth;
    use Illuminate\Support\Facades\Config;
    use Inertia\Inertia;
    use Illuminate\Support\ServiceProvider;

    class AppServiceProvider extends ServiceProvider {
        /**
         * Register any application services.
         *
         * @return void
         */
        public function register() {

            Inertia::share('errors', function () {
                return session()->get('errors') ? session()->get('errors')->getBag('default')->getMessages() : (object)[];
            });

            Inertia::share('successMessage', function () {
                return session()->get('successMessage') ? session()->get('successMessage') : null;
            });

            Inertia::share('currentUser', function () {
                $user = auth()->user();
                return $user ?
                    [
                        'id' => $user->id,
                        'name' => $user->name,
                        'email' => $user->email
                    ]
                    : null;
            });
        }

        public function boot() {
        }
    }
