import React from 'react';
import {getInlineSvg} from '../../icons';

const getControl = (Control, callback, buttonType, colInd, rowInd) => (
    <Control key={rowInd + ' ' + colInd} callback={callback} buttonType={buttonType} ind={rowInd}/>
);

export const ArrayRowCells = ({element, controls = [], rowInd}) => (
    <>
        <td className='d-flex flex-grow-1 justify-content-between w-100'>
            {element}
            <button className={'btn btn-sm ml-auto'}>
                {getInlineSvg('edit', 18, 18, 'black')}
            </button>
        </td>
        {/*{controls.length > 0 ?*/}
        {/*    <>*/}
        {/*        <td className='d-flex align-items-center justify-content-center flex-nowrap h-100'>*/}
        {/*            {controls.map((control, colInd) =>*/}
        {/*                getControl(control.Control, control.callback, control.buttonType, colInd, rowInd))}*/}
        {/*        </td>*/}
        {/*        <td>qq {getInlineSvg('edit')}</td>*/}
        {/*    </>*/}
        {/*    : null*/}
        {/*}*/}
    </>
);
