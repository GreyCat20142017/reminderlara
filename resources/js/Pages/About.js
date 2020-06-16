import React from 'react'
import Layout from '@/Shared/Layout'

const About = ({title = 'О программе'}) => {
    return (
        <Layout>
            <h1>{title}</h1>
            <h3>Напоминалка по разным вопросам</h3>
        </Layout>
    )
};

export default About;
