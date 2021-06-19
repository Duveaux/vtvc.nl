import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { differenceInCalendarYears, parse } from "date-fns";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I'm Vic,{" "}
          {differenceInCalendarYears(
            new Date(),
            parse("03/06/1989", "dd/MM/yyyy", new Date())
          )}
          , hailing from Utrecht.
        </p>
      </section>
    </Layout>
  );
}
