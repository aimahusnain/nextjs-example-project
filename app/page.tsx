import Head from 'next/head';
import Layout from '../components/layout';
import Posts from '../components/home/posts';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Posts/>
    </Layout>
  )
}