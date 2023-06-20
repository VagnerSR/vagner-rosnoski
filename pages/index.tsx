import About from "@/components/About/About";
import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import Skills from "@/components/Skills/Skills";
import { Inter } from "next/font/google";
import Contact from "@/components/Contact/Contact";
import Projects from "@/components/Projects/Projects";
import Layout from "./layout/layout";
import Head from "next/head";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <div className="">
        <Head>
          <title>Vagner Rosnoski</title>
        </Head>
        <section className="" id="main">
          <Main />
        </section>

        <section className="" id="about">
          <About />
        </section>

        <section className="" id="skills">
          <Skills />
        </section>

        <section className="" id="projects">
          <Projects />
        </section>

        <section className=" flex justify-center items-center" id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    </Layout>
  );
}
