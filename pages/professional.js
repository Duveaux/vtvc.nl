import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>CV - {siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        I am still working on my professional page. Check back soon!
      </section>
    </Layout>
  );
}
