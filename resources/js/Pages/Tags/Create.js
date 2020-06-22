import React, {useState} from 'react'
import Layout from '@/Shared/Layout'
import {Inertia} from '@inertiajs/inertia'
import {InertiaLink} from '@inertiajs/inertia-react';

export default function Create(props) {

    const [name, setName] = useState('');

    const createTag = event => {
        event.preventDefault();

        Inertia.post('/tags', {
            name,
        })
            .then(() => {
                // code
            })
    };

    return (
        <Layout>
            <div className="container">
                <h4>Создание тега</h4>
                <div className="col-md-6">
                    {Object.keys(props.errors).length > 0 &&
                    <div className="alert alert-danger mt-4">
                        {props.errors[Object.keys(props.errors)[0]][0]}
                    </div>
                    }

                    <form action="/tags" method="POST" className="my-5" onSubmit={createTag}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Name" value={name}
                                   onChange={(evt) => setName(evt.target.value)}/>
                        </div>

                        <button type="submit" className="btn btn-primary">Создать тег</button>
                        <InertiaLink href='/tags' className='btn btn-secondary ml-2'>Назад</InertiaLink>
                    </form>
                </div>
            </div>
        </Layout>
    )
}
