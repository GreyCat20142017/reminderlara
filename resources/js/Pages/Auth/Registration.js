import React, {useState} from 'react';
import {Inertia, InertiaLink} from '@inertiajs/inertia';
import {usePage} from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';
import Errors from '@/Shared/Errors';

const Registration = () => {
    const {errors} = usePage();
    const [sending, setSending] = useState(false);
    const [values, setValues] = useState({
        email: '',
        name: '',
        password: '',
        password_confirmation: ''
    });


    const onInputChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setValues(values => ({
            ...values,
            [key]: value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setSending(true);
        Inertia.post('/register', values);
    };

    return (
        <Layout>
            <section className='col-12 col-md-6 py-3 justify-content-center container'>
                <form className='needs-validation mx-auto p-3 white mdb-color-text rounded shadow-lg text-center'
                      onSubmit={onSubmit}>
                    <div className='col-12 d-flex flex-column mt-2'>
                        <label className='text-left' htmlFor='name'>Имя</label>
                        <input className='form-control'
                               type='text' name='name' placeholder='Имя' id='name' required
                               value={values.name} onChange={onInputChange}/>
                        <span className='invalid-feedback'></span>
                    </div>
                    <div className='col-12 d-flex flex-column mt-2'>
                        <label className='text-left' htmlFor='email'>Логин (email)</label>
                        <input className='form-control '
                               type='email' name='email' placeholder='Логин' id='email' required
                               value={values.email} onChange={onInputChange}/>
                        <span className='invalid-feedback'></span>
                    </div>
                    <div className='col-12 d-flex flex-column mt-2'>
                        <label className='text-left' htmlFor='password'>Пароль</label>
                        <input className='form-control '
                               type='password' name='password' placeholder='Пароль' required
                               value={values.password} onChange={onInputChange}/>
                        <span className='invalid-feedback'></span>
                    </div>
                    <div className='col-12 d-flex flex-column mt-2'>
                        <label className='text-left' htmlFor='password_confirmation'>Подтверждение пароля</label>
                        <input className='form-control '
                               type='password' name='password_confirmation' placeholder='Подтверждение пароля' required
                               value={values.password_confirmation} onChange={onInputChange}/>
                        <span className='invalid-feedback'></span>
                    </div>
                        <button className='btn btn-primary mt-3' type='submit' onClick={onSubmit}
                                onSubmit={onSubmit}>Зарегистрироваться
                        </button>
                </form>
                <Errors errors={errors}/>
            </section>
        </Layout>
    );
};


export default Registration;
