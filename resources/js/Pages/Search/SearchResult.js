import React from 'react';
import {Inertia} from '@inertiajs/inertia';
import {InertiaLink} from '@inertiajs/inertia-react';

import Pagination from '@/Shared/Pagination';
import Layout from '../../Shared/Layout';
import SimpleTable, {TABLE_TYPES} from '../../Shared/SimpleTable/SimpleTable';

const SearchResult = ({items, title, tab = 1}) => {
    const {data, links} = items;

    const onEdit = (row) => {
        Inertia.visit(`/items/${row['id']}/edit`, {...row})
    };

    return (
        <Layout>
            <div className="container p-2">
                <h4>{title}</h4>
                {data && data.length > 0 ?
                    <>
                        <SimpleTable data={data} edit={onEdit} hiddenColumns={['user_id', 'pivot']}/>
                        <Pagination links={links}/>
                    </> :
                    <p className='m-2 text-primary'>данных по указанным критериям поиска не найдено</p>
                }
                <InertiaLink href={`/search/${tab}`} className='btn btn-secondary ml-2'>Назад</InertiaLink>
            </div>
        </Layout>
    )
};

export default SearchResult;
