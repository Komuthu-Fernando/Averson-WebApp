import {
  Navbar,
  Hero,
  Industries,
  Services,
  ServiceInformation,
  OurWork,
  Careers,
  Blogs,
  Footer,
} from './components'

function App() {
  return (
    <div>
      <div>
        <Navbar />
        <Hero />
        <Industries />
        <Services />
        <ServiceInformation />
        <OurWork />
        <Blogs />
        <Careers />
        <Footer />
      </div>
    </div>
  );
}

export default App;
