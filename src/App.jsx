import { BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import { About, Contact, Experience, Feedbacks, Navbar, Tech, Works, StarsCanvas, SocialMedia, Education, VolunteerExperience } from "./components";

const Hero = lazy(() => import('./components/Hero'));

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className=' bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Suspense fallback={<div className="text-black">Loading...</div>}>
            <Hero />
          </Suspense>
        </div>
        <SocialMedia/>
        <About />
        <Education/>
        <Experience />
        <Works />
        <Tech />
        {/* <Feedbacks /> */}
        <VolunteerExperience/>
        <div className='relative z-0'>
          <Contact />
          {/* <StarsCanvas /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
