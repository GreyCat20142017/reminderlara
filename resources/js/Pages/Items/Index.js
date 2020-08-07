import React, {useState} from 'react';
import {Inertia} from '@inertiajs/inertia';
import {InertiaLink} from '@inertiajs/inertia-react';

import Pagination from '@/Shared/Pagination';
import Layout from '@/Shared/Layout';
import SimpleTable from '@/Shared/SimpleTable/SimpleTable';
import FilterByTag from '@/Shared/Filter/FilterByTag';
import FilterButtons from '@/Shared/Filter/FilterButtons';
import {CONTENT_TITLES} from '@/constants';


const Index = ({items, type = CONTENT_TYPES.MEMO, allTags, filterTitle = '', filtered = false}) => {
    const [filterMode, setFilterMode] = useState(false);
    const {data, links} = items;

    const onEdit = (row) => {
        Inertia.visit(`/items/${row['id']}/edit`, {...row})
    };

    const onFilter = (id = null) => {
        setFilterMode(false);
        Inertia.visit(id ? `/items/${type}/${id}` : `/items/${type}`);
    };

    const onFilterReset = () => onFilter();

    const onFilterShow = () => setFilterMode(true);

    return (
        <Layout>
            <div className="container">
                {filterMode ?
                    <FilterByTag allTags={allTags} setFilterMode={setFilterMode}
                                 title={CONTENT_TITLES[type]} onFilter={onFilter}/>
                    :
                    <>
                        <h4>{CONTENT_TITLES[type]}</h4>
                        <h6>Фильтр: {filterTitle}</h6>
                        <hr/>
                        <div className='my-3'>
                            <InertiaLink href={`/items/${type}/create`} className='btn btn-outline-primary'
                                         title={'Создание нового элемента'}>
                                Создать элемент
                            </InertiaLink>
                            <InertiaLink href={`/viewer/${type}`} className='btn btn-outline-primary ml-2'
                                         title={'Сквозной просмотр'}>
                                Пролистать все
                            </InertiaLink>
                            <FilterButtons filtered={filtered} margin={'ml-2'}
                                           onFilterShow={onFilterShow} onFilterReset={onFilterReset}/>
                        </div>
                        <SimpleTable data={data} edit={onEdit} hiddenColumns={['user_id', 'type']}/>
                        <Pagination links={links}/>
                        {data && data.length < 1 && filterTitle !== 'все записи' &&
                        <p className='text-primary'>нет данных с фильтром {filterTitle}</p>
                        }
                    </>
                }
            </div>
        </Layout>
    )
};

export default Index;
