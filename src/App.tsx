import { AboutComponent } from './components/about/AboutComponent';
import { EducationComponent } from './components/education/EducationComponent';
import { ExperienceComponent } from './components/experience/ExperienceComponent';
import { Navbar } from './components/navbar/Navbar';
import { PortfolioComponent } from './components/portfolio/PortfolioComponent';
import { SkillsComponent } from './components/skills/SkillsComponent';

export const App = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid p-0">
        <AboutComponent />
        <hr className="m-0" />
        <ExperienceComponent />
        <hr className="m-0" />
        <EducationComponent />
        <hr className="m-0" />
        <SkillsComponent />
        <hr className="m-0" />
        <PortfolioComponent />
      </div>
    </>
  );
};
