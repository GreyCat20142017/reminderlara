import React from 'react';
import {getInlineSvg} from '../../icons';

export const TABLE_TYPES = {
    'OBJECT': 'OBJECT',
    'ARRAY': 'ARRAY',
    'OBJECTARRAY': 'OBJECTARRAY'
};

const EDIT_TITLE = 'изменить';
const DELETE_TITLE = 'удалить';

const isObjectArray = (data) => (data && Array.isArray(data) && data.length > 0 && typeof data[0] === 'object');

const isNotHidden = (hidden, key) => (hidden && Array.isArray(hidden) && (hidden.indexOf(key) === -1));

const notZero = (indexRow) => (indexRow || indexRow === 0);


const Actions = ({edit, del, row = null}) => {
    const onEditClick = (row) => {
        if (edit && notZero(row)) {
            edit(row)
        }
    };

    const onDelClick = (row) => {
        if (del && notZero(row)) {
            del(row)
        }
    };
    return (
        (notZero(row)) ? <>
            {edit && <td>
                <button className={'btn btn-sm'} onClick={() => onEditClick(row)}
                        title={'изменение'}>
                    {getInlineSvg('edit', 18, 18, 'grey')}
                </button>
            </td>
            }
            {
                del && <td>
                    <button className={'btn btn-sm'} onClick={() => onDelClick(row)}
                            title={'удаление'}>
                        {getInlineSvg('del', 18, 18, 'grey')}
                    </button>
                </td>
            }

        </> : null
    )
};

const ObjectArrayHeader = ({data, hidden = []}) => (
    isObjectArray(data) ?
        <>
            {Object.keys(data[0]).map((key) => (
                isNotHidden(hidden, key) && <th key={key}>{key}</th>))
            }
        </>
        :
        null
);

const ArrayHeader = () => (
    <th className='th-sm font-weight-bold'>Список</th>
);

const ObjectHeader = () => (
    <>
        <th className='th-sm font-weight-bold'>Название поля</th>
        <th className='th-sm font-weight-bold'>Значение</th>
    </>
);

const ObjectArrayBody = ({data, edit = null, del = null, hidden = []}) => {

    return (
        isObjectArray(data) && data.map((row, ind) =>
            <tr key={ind}>
                {Object.keys(row).map((key) => (
                    isNotHidden(hidden, key) && <td key={key}>{row[key]}</td>
                ))}
                <Actions edit={edit} del={del} row={row}/>
            </tr>
        )
    );
};

export const ArrayBody = ({data, edit = null, del = null}) => (
    data.map((element, rowInd) => (
        <tr key={rowInd}>
            <td>
                {element}

            </td>
            <Actions edit={edit} del={del} row={rowInd}/>
        </tr>
    ))
);

export const ObjectBody = ({data, edit = null, del = null}) => {
    const columns = Array.isArray(data) ? data : Object.keys(data);
    return (
        <>
            {columns.map((element, ind) => (
                <tr key={ind}>
                    <td>{element}</td>
                    <td>{data[element]}</td>
                    <Actions edit={edit} del={del} row={element}/>
                </tr>
            ))}

        </>);
};

export const TableHeader = ({noHeader = false, data = [], hidden = [], actionHeaders}) => {
    const type = Array.isArray(data) ? (
            isObjectArray(data) ? TABLE_TYPES.OBJECTARRAY : TABLE_TYPES.ARRAY) :
        TABLE_TYPES.OBJECT;
    if (noHeader) return null;
    const components = {
        [TABLE_TYPES.ARRAY]: <ArrayHeader/>,
        [TABLE_TYPES.OBJECT]: <ObjectHeader/>,
        [TABLE_TYPES.OBJECTARRAY]: <ObjectArrayHeader data={data} hidden={hidden} actionHeaders={actionHeaders}/>
    };
    return (
        <thead>
        <tr>
            {components[type] || null}
            {actionHeaders['edit'] && <th>{EDIT_TITLE}</th>}
            {actionHeaders['del'] && <th>{DELETE_TITLE}</th>}
        </tr>
        </thead>)
};


export const TableBody = ({data = [], edit = null, del = null, hidden = []}) => {
    const type = Array.isArray(data) ? (
            isObjectArray(data) ? TABLE_TYPES.OBJECTARRAY : TABLE_TYPES.ARRAY) :
        TABLE_TYPES.OBJECT;


    const components = {
        [TABLE_TYPES.ARRAY]: <ArrayBody data={data} edit={edit} del={del}/>,
        [TABLE_TYPES.OBJECT]: <ObjectBody data={data} edit={edit} del={del}/>,
        [TABLE_TYPES.OBJECTARRAY]: <ObjectArrayBody data={data} edit={edit} del={del} hidden={hidden}/>
    };
    return <tbody className={'w-100'}>{components[type] || null}</tbody>
};


const SimpleTable = ({data, noHeader = false, type = TABLE_TYPES.ARRAY, edit = null, del = null, hiddenColumns = []}) => (
    <table className='table table-sm table-bordered w-100'>
        <TableHeader data={data} noHeader={noHeader} hidden={hiddenColumns}
                     actionHeaders={{edit: !!edit, del: !!del}}/>
        <TableBody data={data} edit={edit} del={del} hidden={hiddenColumns}/>
    </table>
);

export default SimpleTable;

