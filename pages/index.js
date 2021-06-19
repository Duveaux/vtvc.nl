import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { differenceInCalendarYears, parse } from "date-fns";
import Spotify from "../components/spotify";
import Image from "next/image";
import { Tooltip } from "@material-ui/core";

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
          <b>Hi.</b> I'm Vic,{" "}
          {differenceInCalendarYears(
            new Date(),
            parse("03/06/1989", "dd/MM/yyyy", new Date())
          )}
          , hailing from Utrecht. I use a broad set of (technical) skills to
          make things work better.
        </p>
        <p>
          I am currently working to improve internal processes at{" "}
          <Tooltip placement="right" title="UBN Uitzendbureau">
            <a href="https://ubnuitzendbureau.com" target="_blank">
              <Image
                priority
                src="/images/ubn.png"
                height={25}
                width={25}
                alt="UBN"
                placeholder="blur"
              />
              .
            </a>
          </Tooltip>
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
