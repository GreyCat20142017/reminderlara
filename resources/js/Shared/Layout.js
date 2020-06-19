import React, {useState} from 'react';
import {InertiaLink, usePage} from '@inertiajs/inertia-react';
import {LoggedStatus} from '../Shared/LoggedStatus';

export default function Layout({children}) {
    const {currentUser} = usePage();

    const [modalState, setModalState] = useState(false);
    const modalClass = (modalState ? '' : 'collapse') + ' navbar-collapse'

    return (
        <main style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className='container'>
                    <a className="navbar-brand" href="/" title={'Перейти на главную'}>Reminder</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            onClick={() => setModalState(!modalState)}
                            data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={modalClass} id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto">
                            <InertiaLink href="/about" className="nav-item nav-link">О программе</InertiaLink>
                            <InertiaLink href="/questions" className="nav-item nav-link">Вопросы</InertiaLink>
                            <InertiaLink href="/problems" className="nav-item nav-link">Проблемы</InertiaLink>
                            {!currentUser &&
                            <InertiaLink href="/login" className="nav-item nav-link">Вход</InertiaLink>}
                            {currentUser &&
                            <InertiaLink href="/logout" method="post" className="nav-item nav-link">Выход</InertiaLink>}
                        </div>
                    </div>

                </div>
            </nav>

            <section style={{flexGrow: 1}}>
                <div className='container p-2'>
                    {children}
                </div>
            </section>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className='container'>
                    <LoggedStatus user={currentUser}/>
                    <div className="navbar-nav ml-auto">
                        <InertiaLink href="/tags" className="nav-item nav-link">Теги</InertiaLink>
                        <InertiaLink href="/users" className="nav-item nav-link">Пользователи</InertiaLink>
                    </div>
                </div>
            </nav>
        </main>
    )
}
