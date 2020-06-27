import React from 'react';
import {InertiaLink} from '@inertiajs/inertia-react';
import classNames from 'classnames';

const BTN_STYLES = ['mr-1', 'mb-1', 'py-1', 'px-2', 'border rounded', 'text-sm', 'btn-sm '];

const PageLink = ({active, label, url}) => {
    const className = classNames(
        [
            ...BTN_STYLES,

        active ? 'bg-primary text-white' : ' btn-outline-primary']
    );
    return (
        <InertiaLink className={className} href={url}>
            {label}
        </InertiaLink>
    );
};

const PageLinkDisabled = ({label}) => {
    const className = classNames(
        BTN_STYLES,
        'bg-light text-muted'
    );
    return <span className={className}>{label}</span>;
};

export default ({links = []}) => {
    if (links.length <= 3) return null;
    links[0].label = 'Назад';
    links[links.length - 1].label = 'Далее';
    return (
        <div className="mt-6 mb-1 flex flex-wrap w-75 mx-auto">
            {links.map(({active, label, url}) => {
                return url === null ? (
                    <PageLinkDisabled key={label} label={label}/>
                ) : (
                    <PageLink key={label} label={label} active={active} url={url}/>
                );
            })}
        </div>
    );
};
