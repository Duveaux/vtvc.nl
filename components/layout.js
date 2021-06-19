import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.scss";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { mdiTextBoxSearchOutline, mdiWrenchOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { Tooltip } from "@material-ui/core";

const name = "Vic van Cooten";
export const siteTitle = "Vic van Cooten";

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Vic van Cooten" />
        <meta property="og:image" content={`https://vtvc.nl/images/vic.jpg`} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <div className={styles.mainMenu} style={{ width: home ? 100 : 80 }}>
        <div className={styles.mainIcon}>
          <Tooltip placement="right" title="CV">
            <Link href="/">
              <Image
                priority
                src="/images/vic.jpg"
                className={utilStyles.borderCircle}
                height={home ? 65 : 50}
                width={home ? 65 : 50}
                alt={name}
                placeholder="blur"
              />
            </Link>
          </Tooltip>
        </div>
        <Tooltip placement="right" title="Side projects">
          <Link href="/professional">
            <a>
              <div style={{ width: "100%", height: 75, textAlign: "center" }}>
                <Icon
                  path={mdiTextBoxSearchOutline}
                  size={1}
                  color="red"
                  style={{
                    width: home ? 100 : 80,
                    margin: 15,
                    alignContent: "center",
                  }}
                />
              </div>
            </a>
          </Link>
        </Tooltip>
        <Link href="/side-projects">
          <a>
            <div style={{ width: "100%", height: 75, textAlign: "center" }}>
              <Icon
                path={mdiWrenchOutline}
                size={1}
                color="red"
                style={{ width: home ? 100 : 80, margin: 15 }}
              />
            </div>
          </a>
        </Link>
      </div>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </header>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
