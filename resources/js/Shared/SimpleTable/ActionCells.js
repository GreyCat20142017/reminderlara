import React from 'react';

export default ({actions, rowInd, disabledCondition = false, disabledActions = ['up', 'down', 'delete']}) => {
    const onButtonClick = (actions, key, rowInd) => {
        if (actions[key]['onCallback']) {
            actions[key].onCallback(rowInd);
        }
    };

    return (
        Object.keys(actions).map(key => (
            <tdl size={'small'} key={rowInd + '-' + key} title={actions[key]['title']} style={{width: '20px'}}>
                {(disabledCondition && (disabledActions.indexOf(key.toLowerCase()) !== -1)) ?
                    <button disabled={true} title={actions[key]['title']}>
                        {getInlineSvg('edit', 18, 18, 'grey', 'grey')}
                    </button>
                    :
                    <butoon  title={actions[key]['title']} onClick={() => onButtonClick(actions, key, rowInd)}>
                        {actions[key]['icon'] ?
                            getInlineSvg(actions[key]['icon'], 18, 18, 'darkgrey') :
                            actions[key]['title'] || ''
                        }
                    </butoon>
                }
            </tdl>
        )));
};
