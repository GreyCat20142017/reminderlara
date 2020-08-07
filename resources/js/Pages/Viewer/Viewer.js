import React, {useState} from 'react';
import {Inertia} from '@inertiajs/inertia';

import Layout from '@/Shared/Layout'
import Pagination from '@/Shared/Pagination';
import Refs from '@/Shared/Refs';
import FilterByTag from '@/Shared/Filter/FilterByTag';
import FilterButtons from '@/Shared/Filter/FilterButtons';
import {isNotEmptyArray, isValidIndex} from '@/functions';
import {CONTENT_TITLES, CONTENT_TYPES} from '@/constants';

const changePage = (active, links, direction = 1) => {
    if (active && active['label']) {
        const currentActive = active['label'];
        const url = links[currentActive + direction]['url'];
        if (url) {
            Inertia.visit(url);
        }
    }
};

const getRefPage = (referer) => (referer ? parseInt(referer.split('page=').pop()) : 1);

const getInitialIndex = (links, referer, pageLimit) => {
    const active = links.find(el => el.active);
    return active && (active['label'] < getRefPage(referer)) ? pageLimit - 1 : 0;
}

const ItemViewer = ({item}) => {

    const {text, details, refs} = item;

    return (
        <>
            <h5>{text}</h5>
            <textarea className="form-control no-resize" id="details" readOnly={true}
                      placeholder="Решение или ответ"
                      value={details} title={'Решение или ответ'} rows={10}/>
            <Refs refs={refs}/>
        </>
    )
};

const Viewer = ({items, type, referer, allTags, filterTitle = '', filtered = false}) => {
    const {data, links} = items;
    const [filterMode, setFilterMode] = useState(false);
    const [current, setCurrent] = useState(getInitialIndex(links, referer, data ? data.length : 0));
    const suffix = (type === CONTENT_TYPES.MEMO) ? 'ая' : 'ий';

    const active = links.find(el => el.active);


    const goPrev = () => {
        if (isValidIndex(current - 1, data)) {
            setCurrent(current - 1);
        } else if (current === 0) {
            changePage(active, links, -1);
        }
    };

    const goNext = () => {
        if (isValidIndex(current + 1, data)) {
            setCurrent(current + 1);
        } else if (current === (data.length - 1)) {
            changePage(active, links, 1);
        }
    };

    const onFilter = (id = null) => {
        setFilterMode(false);
        setCurrent(0);
        Inertia.visit(id ? `/viewer/${type}/${id}` : `/viewer/${type}`);
    };

    const onFilterReset = () => onFilter();

    const onFilterShow = () => setFilterMode(true);

    const title = `Сквозной просмотр списка ${CONTENT_TITLES[type].split(' ').pop()}`;

    return (
        <Layout>
            <div className='container text-align-center my-2'>

                {filterMode ?
                    <FilterByTag allTags={allTags} setFilterMode={setFilterMode}
                                 title={title} onFilter={onFilter}/>
                    :
                    <>
                        <h4 className='text-primary'>{title}</h4>
                        <h6>Фильтр: {filterTitle}</h6>
                        <FilterButtons filtered={filtered} onFilterShow={onFilterShow} onFilterReset={onFilterReset}/>
                        <hr/>

                        {
                            (isNotEmptyArray(data) && isValidIndex(current, data)) ?
                                <>
                                    <ItemViewer item={data[current]}/>
                                    <div className='my-3'>
                                        <button className='btn btn-sm  btn-outline-primary' onClick={goPrev}
                                                title={`предыдущ${suffix} элемент`}>
                                            предыдущ{suffix}
                                        </button>
                                        <button className='btn btn-sm btn-outline-primary ml-1' onClick={goNext}
                                                title={`следующ${suffix} элемент`}>
                                            следующ{suffix}
                                        </button>
                                        <span
                                            className='btn btn-sm text-primary ml-2'>{current + 1} из {data.length}</span>
                                    </div>
                                    <hr/>
                                    <Pagination links={links}/>
                                </> :
                                <p>нет данных</p>
                        }
                    </>
                }
            </div>
        </Layout>
    )
};

export default Viewer;
