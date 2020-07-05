import React from 'react';
import {Inertia} from '@inertiajs/inertia';
import {InertiaLink} from '@inertiajs/inertia-react';
import Pagination from '@/Shared/Pagination';
import Layout from '../../Shared/Layout';
import SimpleTable from '../../Shared/SimpleTable/SimpleTable';
import {CONTENT_TITLES} from '../../constants';


const Index = ({items, type = CONTENT_TYPES.MEMO}) => {
    const {data, links} = items;

    const onEdit = (row) => {
        Inertia.visit(`/items/${row['id']}/edit`, {...row})
    };

    return (
        <Layout>
            <div className="container">
                <h4>{CONTENT_TITLES[type]}</h4>
                <div className='my-5'>
                    <InertiaLink href={`/items/${type}/create`} className='btn btn-primary'>Создать
                        элемент</InertiaLink>
                </div>
                <SimpleTable data={data} edit={onEdit} hiddenColumns={['user_id', 'type']}/>
                <Pagination links={links}/>
            </div>
        </Layout>
    )
};

export default Index;
