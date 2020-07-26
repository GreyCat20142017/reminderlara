import React from 'react';
import {Inertia} from '@inertiajs/inertia';
import {InertiaLink} from '@inertiajs/inertia-react';

import Layout from '../../Shared/Layout';
import Pagination from '@/Shared/Pagination';
import SimpleTable from '../../Shared/SimpleTable/SimpleTable';

const Index = ({tags, links, successMessage}) => {
    const {data} = tags;

    const onEdit = (row) => {
        Inertia.visit(`tags/${row['id']}/edit`, {...row});
    };

    return (
        <Layout>
            <div className="container">
                <h4>Список тегов</h4>
                <div className='my-5'>
                    <InertiaLink href='/tags/create' className='btn btn-primary'>Создать тег</InertiaLink>
                </div>
                <SimpleTable data={data} edit={onEdit}/>
                <Pagination links={links}/>
                <hr/>
                <p className='text-info'>{successMessage}</p>
            </div>
        </Layout>
    )
};

export default Index;
