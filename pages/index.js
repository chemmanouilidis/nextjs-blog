import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title> {siteTitle} </title>{" "}
      </Head>{" "}
      <section className={utilStyles.headingMd}>
        <p>
          {" "}
          Γεια σας!Ειμαι ο Emmanouilidis Christos!Ειμαι παντρεμενος με την Μαρια
          Συμεωνιδου και ζουμε στον Ταυρο.Περιμενουμε παιδακι.Ο Χρηστος ειναι 36
          χρονών και η Μαρια 25. Εργαζεται σαν μηχανικος αναπτυξης λογισμικου
          και προγραμματισμου ρομποτ ενώ η Μαρια διατηρει επιχειρηση
          διαφημιστικου σκοπου στο Μενιδι Αττικης!
        </p>{" "}
        <p>
          (Αυτο ειναι το προσωπικο μου blog.Μπορειτε να επισκευτητε την
          ιστοσελιδα μας{" "}
          <a href="https://www.irisplus.gr"> our Next.js tutorial </a>.){" "}
        </p>{" "}
      </section>{" "}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}> Blog </h2>{" "}
        <ul className={utilStyles.list}>
          {" "}
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}{" "}
        </ul>{" "}
      </section>{" "}
    </Layout>
  );
}
