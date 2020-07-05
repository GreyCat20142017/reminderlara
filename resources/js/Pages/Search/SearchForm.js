import React, {useState} from 'react'
import Layout from '@/Shared/Layout'
import {TagList} from '../Items/TagList';
import {Inertia} from '@inertiajs/inertia';

const TABS = {tag: 'по тегу', text: 'по тексту'};

const SearchForm = ({title = 'Поиск', allTags = []}) => {
    const [activeTab, setActiveTab] = useState(TABS.tag);
    const [tag, setTag] = useState(null);
    const [text, setText] = useState('');


    const onTagClick = (ind) => {
        setTag(allTags[ind]);
    };

    const searchByTag = () => {
        if (tag) {
         Inertia.visit(`/search/tag/${tag['id']}`);
        }
    };

    const searchByText = () => {
        if (text) {
         Inertia.visit(`/search/text/${text}`);
        }
    };


    return (
        <Layout>
            <h3>{title}</h3>
            <ul className='nav nav-tabs'>
                <li className='nav-item'>
                    <button className={'nav-link ' + (activeTab === TABS.tag ? 'active' : '')} data-toggle='tab'
                            title='Поиск по тегу' onClick={() => setActiveTab(TABS.tag)}>
                        Поиск по тегу
                    </button>
                </li>
                <li className='nav-item'>
                    <button className={'nav-link ' + (activeTab === TABS.text ? 'active' : '')} data-toggle='tab'
                            title='Поиск по тексту' onClick={() => setActiveTab(TABS.text)}>
                        По тексту
                    </button>
                </li>
            </ul>
            <div className='tab-content p-2 text-center'>
                <h5 className={'text-primary'}>поиск по {activeTab}</h5>
                <div className={'tab-pane fade text-center ' + (activeTab === TABS.tag ? 'show active' : '')}>
                    <TagList isAll={true} onTagClick={onTagClick} tags={allTags}/>
                    {tag ?
                        <button className={'btn btn-primary mt-2'} onClick={searchByTag}>
                            искать по тегу {tag['name']}
                        </button> :
                        <p className='text-primary'>необходимо выбрать тег для поиска</p>
                    }
                </div>
                <div className={'tab-pane fade ' + (activeTab === TABS.text ? 'show active' : '')}>
                    <input className='form-control' type='text' value={text}
                           onChange={(evt) => setText(evt.target.value)}/>
                    {text ?
                        <button className={'btn btn-primary mt-2'} onClick={searchByText}>
                            искать по тексту {text}
                        </button> :
                        <p className='text-primary mt-2'>необходимо заполнить текст для поиска</p>
                    }
                </div>
            </div>

        </Layout>
    )
};

export default SearchForm;
