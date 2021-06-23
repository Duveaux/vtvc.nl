import Layout from "../../components/layout";
import { getAllProjectIds, getProject } from "../../lib/projects";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";

export default function Project({ project }) {
  return (
    <Layout>
      <Head>
        <title>{project.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>
          <Link href="/side-projects">
            <a>
              <MdKeyboardArrowLeft style={{ position: "relative", top: 5 }} />
            </a>
          </Link>
          {project.title}
        </h1>

        <div dangerouslySetInnerHTML={{ __html: project.contentHtml }} />
      </article>
    </Layout>
  );
}
export async function getStaticPaths() {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = await getProject(params.id);
  return {
    props: {
      project,
    },
  };
}
