import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>first post</title>
      </Head>
      <h1>最初のポスト</h1>
      <h2>
        <Link href='/'>
          <a>back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
