import { Navbar, About, Skills, Works, Qualifications, Contact } from "./components";

const App = () => {
  return (
    <div className="scroll-smooth bg-primary min-h-screen text-white px-8 lg:px-20 2xl:px-56">
      
          <div className="bg-primary py-8">
            <Navbar />
          </div>

          <div className="2xl:h-screen mt-40" id="about">
            <About />
          </div>

          <div className="2xl:h-screen mt-20 2xl:-mt-[10rem]" id="skills">
            <Skills />
          </div>

          <div className="2xl:h-screen mt-20 2xl:-mt-[8rem]" id="work">
            <Works />
          </div>

          <div className="2xl:h-screen mt-20 2xl:-mt-[8rem]" id="qualifications">
            <Qualifications />
          </div>

          <div className="mt-20 mb-20 2xl:mb-72 2xl:-mt-[8rem]" id="contact">
            <Contact />
          </div>

    </div>

  );
}

export default App;
