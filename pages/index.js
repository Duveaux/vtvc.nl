import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { differenceInCalendarYears, parse } from "date-fns";
import Spotify from "../components/spotify";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section
        className={utilStyles.headingMd}
        style={{
          marginTop: "30vh",
        }}
      >
        <p>
          Hi, I'm Vic,{" "}
          {differenceInCalendarYears(
            new Date(),
            parse("03/06/1989", "dd/MM/yyyy", new Date())
          )}
          , hailing from Utrecht. I use a broad set of (technical) skills to
          make things work better.
        </p>
        <p>
          Feel free to <a href="mailto:hi@vtvc.nl">contact me</a>.
        </p>
      </section>
      <section>
        <Spotify />
      </section>
    </Layout>
  );
}
