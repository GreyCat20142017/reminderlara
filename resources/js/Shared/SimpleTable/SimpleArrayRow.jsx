import {ArrayRowCells} from './ArrayRowCells';
import React from 'react';
import {getInlineSvg} from '../../icons';

export const SimpleArrayRow = ({controls, element, rowInd, moveRow = null}) => (
    <tr className='d-flex align-items-center' key={rowInd}>
        <td className='d-flex flex-grow-1 justify-content-between w-100'>
            {element}
            <button className={'btn btn-sm ml-auto'}>
                {getInlineSvg('edit', 18, 18, 'black')}
            </button>
        </td>
    </tr>
);
