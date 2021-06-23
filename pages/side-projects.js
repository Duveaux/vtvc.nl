import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { getSortedProjects } from "./../lib/projects";

export default function SideProjects({ allProjects }) {
  return (
    <Layout home>
      <Head>
        <title>Side projects - Vic van Cooten</title>
      </Head>
      <section className={utilStyles.headingMd}>Side projects</section>
      <section>This overview is incomplete</section>
      <section>
        <ul className={utilStyles.list}>
          {allProjects.map(({ id, title }) => (
            <li
              className={utilStyles.listItem}
              key={id}
              style={{
                display: "flex",
                margin: "15px 0",
              }}
            >
              <Link href={`/projects/${id}`}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allProjects = getSortedProjects();
  return {
    props: {
      allProjects,
    },
  };
}
