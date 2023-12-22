import {
  Navbar,
  Hero,
  Industries,
  Services,
  ServiceInformation,
  OurWork,
  Careers,
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
        <Careers />
        <Footer />
      </div>
    </div>
  );
}

export default App;
