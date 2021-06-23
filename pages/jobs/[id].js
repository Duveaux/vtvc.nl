import Layout from "../../components/layout";
import { getAllJobsIds, getJob } from "../../lib/jobs";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";

export default function Post({ job }) {
  return (
    <Layout>
      <Head>
        <title>{job.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>
          <Link href="/professional">
            <a>
              <MdKeyboardArrowLeft style={{ position: "relative", top: 5 }} />
            </a>
          </Link>
          {job.title}
        </h1>
        <div className={utilStyles.lightText}>
          <small className={utilStyles.lightText}>
            <time>{format(Date.parse(job.dateFrom), "MMMM yyyy")}</time>
          </small>{" "}
          -{" "}
          <small className={utilStyles.lightText}>
            {format(
              job.dateUntil === "NOW" ? new Date() : Date.parse(job.dateUntil),
              "MMMM yyyy"
            )}
          </small>{" "}
        </div>
        <div style={{ float: "right" }}>
          <Image
            priority
            src={job.image}
            height={65}
            width={65}
            alt={job.title}
            placeholder="blur"
          />
        </div>
        <div dangerouslySetInnerHTML={{ __html: job.contentHtml }} />
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
  const job = await getJob(params.id);
  return {
    props: {
      job,
    },
  };
}
