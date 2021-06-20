import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedJobs } from "../lib/jobs";
import Link from "next/link";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";

export default function Professional({ allJobs }) {
  return (
    <Layout home>
      <Head>
        <title>Professional experience - Vic van Cooten</title>
      </Head>
      <section className={utilStyles.headingMd}>
        Professional experience
      </section>
      <section>
        <p>A summary of the fields I have experience in.</p>
        <Accordion>
          <AccordionSummary>
            <Typography>General</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Project management"
                    secondary="Researching, planning, executing. Strict deadlines, lots of responsibilities."
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Process management"
                    secondary="Looking within a company to see what processes need improvement, planning and implementing these changes. Training people to work with them."
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Product management"
                    secondary="Worked to create and improve internal and external products."
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="IT"
                    secondary="Adequate general IT experience"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Digital marketing"
                    secondary="Have set up various SEO / SEA and marketing campaigns."
                  />
                </ListItem>
              </List>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Typography>Programming languages</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <ListItemText
                  primary="Modern web"
                  secondary="Javascript (ES6), Typescript. HTML, CSS."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="JS Frameworks"
                  secondary="React, Next, Babel"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="JS Backends"
                  secondary="Node, Yarn, NPM, Express, Socket.io"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Android"
                  secondary="Java, Kotlin, Android-specific buildtools"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Others"
                  secondary="PHP, LWC, Apex (SF)"
                />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Typography>Databases</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <ListItemText primary="NoSQL" secondary="MongoDB, Firebase" />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="SQL"
                  secondary="MySQL, MsSQL, SOQL (SF)"
                />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Typography>Tools / Platforms</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <ListItemText
                  primary="Salesforce"
                  secondary="Currently primarily responsible for the management of our frontoffice application. I have a deep understanding of the inner workings of the platform."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="PowerBI"
                  secondary="Reports / Business Information"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Microsoft Business Central"
                  secondary="Some experience with a backend application built in Nav Business Central. "
                />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Typography>Other</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ListItem>
                <ListItemText
                  primary="Security"
                  secondary={
                    <>
                      Some casual pentesting experience, 'Pro Hacker' rank on{" "}
                      <a
                        href="https://app.hackthebox.eu/profile/220289"
                        target="_blank"
                      >
                        HackTheBox
                      </a>
                      .
                    </>
                  }
                />
              </ListItem>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </section>
      <section className={utilStyles.headingMd} style={{ marginTop: 15 }}>
        Work experience
      </section>
      <section>I have worked in the following companies.</section>
      <section>
        <ul className={utilStyles.list}>
          {allJobs.map(({ id, dateFrom, title, role, summary }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/jobs/${id}`}>
                <a>{role}</a>
              </Link>
              - <small>{title}</small>{" "}
              <small className={utilStyles.lightText}>{dateFrom}</small>
              <div>{summary}</div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allJobs = getSortedJobs();
  return {
    props: {
      allJobs,
    },
  };
}
