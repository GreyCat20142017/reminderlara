import React, {useState, useEffect} from 'react'
import {Inertia} from '@inertiajs/inertia'
import Layout from '@/Shared/Layout'

const Edit = (props) => {
    const [name, setName] = useState(props.user.name);
    const [email, setEmail] = useState(props.user.email);
    const [password, setPassword] = useState(props.user.password);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        return () => {
            const abortController = new AbortController();
            abortController.abort();
        };
    }, [])

    const updateUser = event => {
        event.preventDefault();

        setLoading(true);
        Inertia.patch(`/users/${props.user.id}`, {
            name,
            email
        })
            .then(() => {
            })
    }

    const deleteUser = event => {
        event.preventDefault();

        if (confirm('Вы действительно хотите удалить пользователя?')) {
            Inertia.delete(`/users/${props.user.id}`)
                .then(() => {

                })
        }
    }

    return (
        <Layout>
            <div className="container">
                <div className="col-md-6">
                    {Object.keys(props.errors).length > 0 &&
                    <div className="alert alert-danger mt-4">
                        {props.errors[Object.keys(props.errors)[0]][0]}
                    </div>
                    }

                    <form action="/users" method="POST" className="my-5" onSubmit={updateUser}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Имя"
                                   defaultValue={props.user.name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Email"
                                   defaultValue={props.user.email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Пароль"
                                   onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className={'btn-group'}>
                            <button type="submit" className="d-flex btn btn-primary" disabled={loading}>
                                <span>Изменить</span>
                            </button>
                            <button className="btn btn-danger ml-3" onClick={deleteUser}>Удалить</button>
                        </div>
                    </form>
                </div>

            </div>
        </Layout>
    )
};

export default Edit;
