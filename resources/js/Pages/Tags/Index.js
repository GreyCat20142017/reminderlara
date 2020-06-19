import React from 'react';
import Layout from '../../Shared/Layout';
import Pagination from '@/Shared/Pagination';
import SimpleTable from '../../Shared/SimpleTable/SimpleTable';

const Index = ({tags, links}) => {
    const {data} = tags;
    return (
        <Layout>
            <div className="container">
                <h3>Список тегов</h3>
                <SimpleTable data={data}/>
                <Pagination links={links}/>
            </div>
        </Layout>
    )
};

export default Index;
