import React from 'react';
import {SimpleArrayRow} from './SimpleArrayRow';
import {getInlineSvg} from '../../icons';

export const TABLE_TYPES = {
    'OBJECT': 'OBJECT',
    'ARRAY': 'ARRAY',
    'OBJECTARRAY': 'OBJECTARRAY'
};

const EDIT_TITLE = 'изменить';

const isObjectArray = (data) => (data && Array.isArray(data) && data.length > 0 && typeof data[0] === 'object');

const ObjectArrayHeader = ({data}) => (
    isObjectArray(data) ?
        <tr>
            {Object.keys(data[0]).map((key) => (
                <th key={key}>{key}</th>))
            }
            <th>{EDIT_TITLE}</th>
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
        <th>{EDIT_TITLE}</th>
    </tr>
);

const ObjectArrayBody = ({data, action = null}) => {
    const onActionClick = (row) => {
        if (action && row) {
            action(row)
        }
    };

    return (
        isObjectArray(data) && data.map((row, ind) =>
            <tr key={ind}>
                {Object.keys(row).map((key) => (
                    <td key={key}>{row[key]}</td>

                ))}
                <td>
                    <button className={'btn btn-sm'} onClick={() => onActionClick(row)}>
                        {getInlineSvg('edit', 18, 18, 'black')}
                    </button>
                </td>
            </tr>
        )
    );
};

export const ArrayBody = ({data}) => (
    data.map((element, rowInd) => (
        <tr className='d-flex align-items-center' key={rowInd}>
            <td className='d-flex flex-grow-1 justify-content-between w-100'>
                {element}
                <button className={'btn btn-sm'}>
                    {getInlineSvg('edit', 18, 18, 'black')}
                </button>
            </td>
        </tr>
    ))
);

export const ObjectBody = ({data}) => {
    const columns = Array.isArray(data) ? data : Object.keys(data);
    return (
        <>
            {columns.map((element, ind) => (
                <tr key={ind}>
                    <td>{element}</td>
                    <td>{data[element]}</td>
                    <td>
                        <button className={'btn btn-sm ml-auto'}>
                            {getInlineSvg('edit', 18, 18, 'black')}
                        </button>
                    </td>
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


export const TableBody = ({data = [], action = null}) => {
    const type = Array.isArray(data) ? (
            isObjectArray(data) ? TABLE_TYPES.OBJECTARRAY : TABLE_TYPES.ARRAY) :
        TABLE_TYPES.OBJECT;

    const components = {
        [TABLE_TYPES.ARRAY]: <ArrayBody data={data} action={action}/>,
        [TABLE_TYPES.OBJECT]: <ObjectBody data={data} action={action}/>,
        [TABLE_TYPES.OBJECTARRAY]: <ObjectArrayBody data={data} action={action}/>
    };
    return <tbody>{components[type] || null}</tbody>
};


const SimpleTable = ({data, noHeader = false, type = TABLE_TYPES.ARRAY, action = null}) => (
    <table className='table table-sm table-bordered w-100'>
        <TableHeader data={data} noHeader={noHeader}/>
        <TableBody data={data} action={action}/>
    </table>
);

export default SimpleTable;

