import React from 'react'
import Layout from '@/Shared/Layout'
import {InertiaLink} from '@inertiajs/inertia-react'
import {getInlineSvg} from '../../icons';

export default function Index(props) {
    return (
        <Layout>
            <div className='container'>
                {props.successMessage &&
                <div className='alert alert-success mt-4'>
                    {props.successMessage}
                </div>
                }

                <div className='my-5'>
                    <InertiaLink href='/users/create' className='btn btn-primary'>Создать пользователя</InertiaLink>
                </div>

                <table className='table table-striped'>
                    <thead>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <InertiaLink href={`/users/${user.id}/edit`}>
                                    {getInlineSvg('edit', 18, 18, 'black')}
                                </InertiaLink>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}
