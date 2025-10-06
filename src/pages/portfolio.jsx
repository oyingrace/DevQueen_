import {
  Navbar,
  Contact,
  Footer,
  Hero,
  Projects,
  Services,
  Skills,
  SEO,
} from "../components";

function Home() {
  return (
    <>
      <SEO
        title="DevQueen"
        description="I enjoy creating blockchain solutions with solid foundations, scalability, and excellent user experiences."
      />
      <main>
        <Navbar />
        <Hero />
        <Services />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default Home;
