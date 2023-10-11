import Head from 'next/head'
import Layout from '/components/layout';
import List from '/components/about/list';

export default function MyPage() {

    return (
        <Layout>
            <List/>
        </Layout>
    )
}