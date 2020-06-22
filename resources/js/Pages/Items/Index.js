import React from 'react';
import {Inertia} from '@inertiajs/inertia';
import {InertiaLink} from '@inertiajs/inertia-react';
import Pagination from '@/Shared/Pagination';
import Layout from '../../Shared/Layout';
import SimpleTable from '../../Shared/SimpleTable/SimpleTable';


const Index = ({items, links}) => {
    const {data} = items;

    const action = (row) => {
        Inertia.visit(`items/${row['id']}/edit`, {...row})
            .then(() => {
            })
    }

    return (
        <Layout>
            <div className="container">
                <h4>Список проблем</h4>
                <div className='my-5'>
                    <InertiaLink href='/items/create' className='btn btn-primary'>Создать элемент</InertiaLink>
                </div>
                <SimpleTable data={data} action={action}/>
                <Pagination links={links}/>
            </div>
        </Layout>
    )
};

export default Index;
