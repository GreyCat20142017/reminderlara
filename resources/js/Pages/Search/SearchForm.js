import React from 'react'
import Layout from '@/Shared/Layout'

const SearchForm = ({title = 'Поиск'}) => {
    return (
        <Layout>
            <h1>{title}</h1>
            <h3>Напоминалка по разным вопросам</h3>
        </Layout>
    )
};

export default SearchForm;
