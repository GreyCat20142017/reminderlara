<?php
//
//namespace App\Http\Controllers\Auth;
//
//use App\Http\Controllers\Controller;
//use Illuminate\Foundation\Auth\AuthenticatesUsers;
//
//class LoginController extends Controller
//{
//    /*
//    |--------------------------------------------------------------------------
//    | Login Controller
//    |--------------------------------------------------------------------------
//    |
//    | This controller handles authenticating users for the application and
//    | redirecting them to your home screen. The controller uses a trait
//    | to conveniently provide its functionality to your applications.
//    |
//    */
//
//    use AuthenticatesUsers;
//
//    /**
//     * Where to redirect users after login.
//     *
//     * @var string
//     */
//    protected $redirectTo = '/home';
//
//    /**
//     * Create a new controller instance.
//     *
//     * @return void
//     */
//    public function __construct()
//    {
//        $this->middleware('guest')->except('logout');
//    }
//}


    namespace App\Http\Controllers\Auth;

    use Illuminate\Support\Facades\Auth;
    use Inertia\Inertia;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\URL;
    use App\Http\Controllers\Controller;
    use Illuminate\Support\Facades\Session;
    use Illuminate\Support\Facades\Redirect;
    use Illuminate\Support\Facades\Response;
    use Illuminate\Foundation\Auth\AuthenticatesUsers;

    class LoginController extends Controller {
        /*
        |--------------------------------------------------------------------------
        | Login Controller
        |--------------------------------------------------------------------------
        |
        | This controller handles authenticating users for the application and
        | redirecting them to your home screen. The controller uses a trait
        | to conveniently provide its functionality to your applications.
        |
        */

        use AuthenticatesUsers;

        /**
         * Where to redirect users after login.
         *
         * @var string
         */
        protected $redirectTo = '/';

        public function showLoginForm() {
            return Inertia::render('Login');
        }


        public function login(Request $request) {
            if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
                return Redirect::intended();
            } else {
                return back()->withErrors('Ошибка входа!');
            }
        }

        public function logout(Request $request) {
            Auth::logout();
            return Inertia::render('About', [
                'user' => Auth::user(),
            ]);

        }
    }
