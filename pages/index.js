import Head from "next/head";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import GradientLine from "../components/GradientLine";
import { About } from "../components/Landing/About";
import { About2 } from "../components/Landing/About2";
import { Header } from "../components/Landing/Header";
import Roadmap from "../components/Landing/Roadmap";
import SupportedBy from "../components/Landing/SupportedBy";
import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <GradientLine />
      <Navbar />
      <div className="bg-bg min-h-screen">
        <Head>
          <title>Mintable Blocks</title>

          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <About />
        <About2 />
        <div id="roadmap">
          <Roadmap />
        </div>
        <div id="supporters">
          <SupportedBy />
        </div>
        <Footer />
      </div>
    </div>
  );
}
