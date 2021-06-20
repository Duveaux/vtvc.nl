import Layout from "../../components/layout";
import { getAllJobsIds, getJob } from "../../lib/jobs";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

export default function Post({ jobData }) {
  return (
    <Layout>
      <Head>
        <title>{jobData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{jobData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={jobData.dateFrom} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: jobData.contentHtml }} />
      </article>
    </Layout>
  );
}
export async function getStaticPaths() {
  const paths = getAllJobsIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const jobData = await getJob(params.id);
  return {
    props: {
      jobData,
    },
  };
}
