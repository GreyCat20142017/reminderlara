<?php

    namespace App\Providers;

    use App\Models\Tag;
    use Illuminate\Support\Facades\Auth;
    use Illuminate\Support\Facades\Config;
    use Inertia\Inertia;
    use Illuminate\Support\ServiceProvider;
    use Illuminate\Pagination\LengthAwarePaginator;
    use Illuminate\Support\Facades\Request;
    use Illuminate\Pagination\UrlWindow;
    use Illuminate\Support\Collection;

    class AppServiceProvider extends ServiceProvider {
        /**
         * Register any application services.
         *
         * @return void
         */

        protected function pagintaionLinks() {
            $this->app->bind(LengthAwarePaginator::class, function ($app, $values) {
                return new class (...array_values($values)) extends LengthAwarePaginator {
                    public function only(...$attributes) {
                        return $this->transform(function ($item) use ($attributes) {
                            return $item->only($attributes);
                        });
                    }

                    public function transform($callback) {
                        $this->items->transform($callback);

                        return $this;
                    }

                    public function toArray() {
                        return [
                            'data' => $this->items->toArray(),
                            'links' => $this->links(),
                        ];
                    }

                    public function links($view = null, $data = []) {
                        $this->appends(Request::all());

                        $window = UrlWindow::make($this);

                        $elements = array_filter([
                            $window['first'],
                            is_array($window['slider']) ? '...' : null,
                            $window['slider'],
                            is_array($window['last']) ? '...' : null,
                            $window['last'],
                        ]);

                        return Collection::make($elements)->flatMap(function ($item) {
                            if (is_array($item)) {
                                return Collection::make($item)->map(function ($url, $page) {
                                    return [
                                        'url' => $url,
                                        'label' => $page,
                                        'active' => $this->currentPage() === $page,
                                    ];
                                });
                            } else {
                                return [
                                    [
                                        'url' => null,
                                        'label' => '...',
                                        'active' => false,
                                    ],
                                ];
                            }
                        })->prepend([
                            'url' => $this->previousPageUrl(),
                            'label' => 'Previous',
                            'active' => false,
                        ])->push([
                            'url' => $this->nextPageUrl(),
                            'label' => 'Next',
                            'active' => false,
                        ]);
                    }
                };
            });
        }
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
                        'email' => $user->email,
                        'admin' => $user->admin
                    ]
                    : null;
            });

            Inertia::share('allTags', function () {
                return Tag::all();
            });

            $this->pagintaionLinks();
        }

        public function boot() {
        }




    }
