import React, {useState} from 'react'
import {Inertia} from '@inertiajs/inertia'
import {InertiaLink} from '@inertiajs/inertia-react';

import Layout from '@/Shared/Layout'

const Edit = ({errors, tag, readOnly = false, referer}) => {
    const [name, setName] = useState(tag.name);
    const [error, setError] = useState(null);


    const update = evt => {
        evt.preventDefault();
        Inertia.patch(`/tags/${tag['id']}`, {
            name,
            referer
        })
    }


    const deleteTag = evt => {
        evt.preventDefault();

        if (confirm('Вы действительно хотите удалить тег?')) {
            Inertia.delete(`/tags/${tag['id']}`)
                .then(() => {
                })
                .catch(err => setError(err.message));
        }
    };

    return (
        <Layout>
            <div className='container'>
                <div className='col-md-6'>
                    <h4>Изменение тега</h4>
                    {Object.keys(errors).length > 0 &&
                    <div className='alert alert-danger mt-4'>
                        {errors[Object.keys(errors)[0]][0]}
                    </div>
                    }

                    <form action='/tags' method='POST' className='my-5' onSubmit={update}>
                        <div className='form-group'>
                            <label htmlFor='name'>Тег</label>
                            <input className='form-control' id='name' placeholder='Тег' type='text'
                                   title={'Название тега'}
                                   value={name} onChange={(e) => setName(e.target.value)} readOnly={readOnly}/>
                        </div>

                        <div className={'btn-group'}>
                            <button className='btn btn-primary' type='submit' disabled={readOnly}
                                    title={'Сохранить изменения'}>
                                <span>Изменить</span>
                            </button>
                            <button className='btn btn-danger ml-3' onClick={deleteTag} disabled={readOnly}
                                    title={'Удалить тег'}>
                                Удалить
                            </button>
                            <InertiaLink className='btn btn-secondary text-white ml-3' href={referer || '/tags'}
                                         title={'Вернуться к предыдущему экрану без сохранения изменений'}>
                                Назад
                            </InertiaLink>
                        </div>
                    </form>
                </div>

            </div>
        </Layout>
    )
};

export default Edit;
