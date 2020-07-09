import React, {useState} from 'react';
import Layout from '@/Shared/Layout'
import Pagination from '@/Shared/Pagination';
import {isNotEmptyArray, isValidIndex} from '../../functions';

const ItemViewer = ({item}) => {

    const {text, details} = item;

    return (
        <>
            <h5>{text}</h5>
            <textarea className="form-control no-resize" id="details" readOnly={true}
                      placeholder="Решение или ответ"
                      value={details} title={'Решение или ответ'} rows={10}
            />

        </>
    )
};

const Viewer = ({items}) => {
    const {data, links} = items;
    const [current, setCurrent] = useState(0);

    const goPrev = () => {
        if (isValidIndex(current - 1, data)) {
            setCurrent(current - 1);
        }
    };

    const goNext = () => {
        if (isValidIndex(current + 1, data)) {
            setCurrent(current + 1);
        }
    };

    return (
        <Layout>
            <div className='container text-align-center my-2'>
                <h4 className='text-primary'>Сквозной просмотр списка</h4>
                <hr/>
                {
                    (isNotEmptyArray(data) && isValidIndex(current, data)) ?
                        <>
                            <ItemViewer item={data[current]}/>
                            <div className='my-3'>
                                <button className='btn btn-sm  btn-outline-primary' onClick={goPrev}>
                                    предыдущий
                                </button>
                                <button className='btn btn-sm btn-outline-primary' onClick={goNext}>
                                    следущий
                                </button>
                            </div>
                            <Pagination links={links}/>
                        </> :
                        <p>нет данных</p>
                }
            </div>
        </Layout>)
};

export default Viewer;
