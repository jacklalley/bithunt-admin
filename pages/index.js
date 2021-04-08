import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectTable from "../components/ProjectTable";

export default function Home({ projects }) {
  console.log(projects);
  return (
    <div className="container mx-auto px-24">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main>
        <div className="flex sm:px-0 px-8 py-4 mb-5 w-full items-center justify-between">
          <a className="font-medium bg-gray-200 px-3 py-1 rounded-md">
            New Projects
          </a>
        </div>
        {projects == undefined ? (
          "Loading..."
        ) : (
          <ProjectTable projects={projects} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps(context) {
  const url = process.env.NEXT_PUBLIC_BASE_URL + "/admin/projects";
  const res = await fetch(url, {
    headers: new Headers({
      Authorization:
        "Bearer " +
        "6a2edcb58bc9b8488586887fac1a94b40a402b2cd96d087dd90e26c68878b74511846b5ea2964735444076973f91cdf61ab1d0554c4c09a86b751661820f4f5a",
      "Content-Type": "application/x-www-form-urlencoded",
    }),
  });
  const projects = await res.json();

  return {
    props: {
      projects,
    },
  };
}
