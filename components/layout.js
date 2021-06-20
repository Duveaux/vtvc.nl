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
          <Link href="/">
            <Image
              priority
              src="/images/vic.jpg"
              className={utilStyles.borderCircle}
              height={65}
              width={65}
              alt={name}
              placeholder="blur"
            />
          </Link>
        </div>
        <Link href="/professional">
          <a>
            <div style={{ width: "100%", height: 75, textAlign: "center" }}>
              <Tooltip title="Professional page" placement="right">
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
              </Tooltip>
            </div>
          </a>
        </Link>
        <Link href="/side-projects">
          <a>
            <div style={{ width: "100%", height: 75, textAlign: "center" }}>
              <Tooltip title="Side projects" placement="right">
                <Icon
                  path={mdiWrenchOutline}
                  size={1}
                  color="red"
                  style={{ width: home ? 100 : 80, margin: 15 }}
                />
              </Tooltip>
            </div>
          </a>
        </Link>
      </div>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={utilStyles.heading2Xl}>
            Vic <span className={styles.lastName}>van Cooten</span>
          </h1>
        </header>
        <main>{children}</main>
      </div>
    </>
  );
}
