import React from 'react';
import {InertiaLink, usePage} from '@inertiajs/inertia-react';
import {LoggedStatus} from '../Shared/LoggedStatus';

export default function Layout({children}) {
    const {currentUser} = usePage();

    return (
        <main>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className='container'>
                    <a className="navbar-brand" href="/" title={'Перейти на главную'}>Reminder</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav  ml-auto">
                            <InertiaLink href="/about" className="nav-item nav-link">О программе</InertiaLink>
                            <InertiaLink href="/questions" className="nav-item nav-link">Вопросы</InertiaLink>
                            <InertiaLink href="/problems" className="nav-item nav-link">Проблемы</InertiaLink>
                            {!currentUser && <InertiaLink href="/login" className="nav-item nav-link">Вход</InertiaLink>}
                            {currentUser && <InertiaLink href="/logout" method="post" className="nav-item nav-link">Выход</InertiaLink>}
                        </div>
                    </div>

                </div>
            </nav>

            <article>
                <div className='container p-2'>
                    {children}
                    <LoggedStatus user={currentUser}/>
                </div>
            </article>
        </main>
    )
}
