import Head from 'next/head'
import Layout from '/components/Layout';
import Events from '/components/events/events';

export default function MyPage() {

    return (
        <Layout>
            <Events/>
        </Layout>
    )
}