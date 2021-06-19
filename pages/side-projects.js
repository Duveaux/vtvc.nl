import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Side projects - Vic van Cooten</title>
      </Head>
      <section className={utilStyles.headingMd}>Side projects</section>
    </Layout>
  );
}
