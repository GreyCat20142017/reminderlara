import React from 'react';
import {SimpleArrayRow} from './SimpleArrayRow';

export const TABLE_TYPES = {
    'OBJECT': 'OBJECT',
    'ARRAY': 'ARRAY',
    'OBJECTARRAY': 'OBJECTARRAY'
};

const isObjectArray = (data) => (data && Array.isArray(data) && data.length > 0 && typeof data[0] === 'object');

const ObjectArrayHeader = ({data}) => (
    isObjectArray(data) ?
        <tr>
            {Object.keys(data[0]).map((key) => (<th key={key}>{key}</th>))}
        </tr>
        :
        null
);

const ArrayHeader = () => (
    <tr>
        <th className='th-sm font-weight-bold mdb-color'>Список</th>
    </tr>
);

const ObjectHeader = () => (
    <tr>
        <th className='th-sm font-weight-bold mdb-color'>Название поля</th>
        <th className='th-sm font-weight-bold mdb-color'>Значение</th>
    </tr>
);

const ObjectArrayBody = ({data}) => (
    isObjectArray(data)  && data.map((row, ind) =>
        <tr key={ind}>
            {Object.keys(row).map((key) => (<td key={key}>{row[key]}</td>))}
        </tr>
    )
);

export const ArrayBody = ({data, controls = []}) => (
    data.map((element, rowInd) => (
        <SimpleArrayRow element={element} controls={controls} rowInd={rowInd} key={'row' + rowInd}/>
    ))
);

export const ObjectBody = ({data}) => {
    const columns = Array.isArray(data) ? data : Object.keys(data);
    return (
        <>
            {columns.map((element, ind) => (
                <tr key={ind}>
                    <td>{element}
                    </td>
                    <td>{data[element]}</td>
                </tr>
            ))}
        </>);
};

export const TableHeader = ({noHeader = false, data = []}) => {
    const type = Array.isArray(data) ? (
            isObjectArray(data) ? TABLE_TYPES.OBJECTARRAY : TABLE_TYPES.ARRAY) :
        TABLE_TYPES.OBJECT;
    if (noHeader) return null;

    const components = {
        [TABLE_TYPES.ARRAY]: <ArrayHeader/>,
        [TABLE_TYPES.OBJECT]: <ObjectHeader/>,
        [TABLE_TYPES.OBJECTARRAY]: <ObjectArrayHeader data={data}/>
    };
    return <thead>{components[type] || null}</thead>
};


export const TableBody = ({data = []}) => {
    const type = Array.isArray(data) ? (
            isObjectArray(data) ? TABLE_TYPES.OBJECTARRAY : TABLE_TYPES.ARRAY) :
        TABLE_TYPES.OBJECT;

    const components = {
        [TABLE_TYPES.ARRAY]: <ArrayBody data={data}/>,
        [TABLE_TYPES.OBJECT]: <ObjectBody data={data}/>,
        [TABLE_TYPES.OBJECTARRAY]: <ObjectArrayBody data={data}/>
    };
    return <tbody>{components[type] || null}</tbody>
};


const SimpleTable = ({data, noHeader = false, controls = [], type = TABLE_TYPES.ARRAY}) => (
    <table className='table table-sm table-bordered w-100'>
        <TableHeader data={data} noHeader={noHeader}/>
        <TableBody data={data}/>
    </table>
);

export default SimpleTable;

