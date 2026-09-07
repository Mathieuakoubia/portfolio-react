import { useCallback, useEffect, useState } from 'react';
import './index.css';
import Navbar          from './components/common/Navbar.jsx';
import Footer           from './components/common/Footer.jsx';
import HeroStory        from './components/sections/HeroStory.jsx';
import CompanyFocus     from './components/sections/CompanyFocus.jsx';
import CaseStudies      from './components/sections/CaseStudies/CaseStudies.jsx';
import EducationTimeline from './components/sections/EducationTimeline.jsx';
import SkillsMatrix     from './components/sections/SkillsMatrix.jsx';
import Retrospective    from './components/sections/Retrospective.jsx';
import VisionFuture     from './components/sections/VisionFuture.jsx';
import Acknowledgments  from './components/sections/Acknowledgments.jsx';
import FlightPath        from './components/layout/FlightPath.jsx';
import ProjectDetailPage from './components/sections/ProjectDetail/ProjectDetailPage.jsx';
import projectsData      from './data/projectsData';

const HASH_PREFIX = '#/projet/';
const projectIdFromHash = () =>
  window.location.hash.startsWith(HASH_PREFIX)
    ? decodeURIComponent(window.location.hash.slice(HASH_PREFIX.length))
    : null;

function App() {
  const [activeProjectId, setActiveProjectId] = useState(projectIdFromHash);

  useEffect(() => {
    const sync = () => setActiveProjectId(projectIdFromHash());
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);

  const openProject = useCallback((project) => {
    window.location.hash = `${HASH_PREFIX}${encodeURIComponent(project.id)}`;
  }, []);

  const closeProject = useCallback(() => {
    window.location.hash = '';
  }, []);

  const activeProject = activeProjectId
    ? projectsData.find((p) => p.id === activeProjectId && p.detail)
    : null;

  if (activeProject) {
    return <ProjectDetailPage project={activeProject} onClose={closeProject} />;
  }

  return (
    <div style={{ position: 'relative', overflowX: 'hidden' }}>
      <Navbar />
      <HeroStory />
      <CompanyFocus />
      <CaseStudies onOpenDetail={openProject} />
      <EducationTimeline />
      <SkillsMatrix />
      <Retrospective />
      <VisionFuture />
      <Acknowledgments />
      <Footer />
      <FlightPath />
    </div>
  );
}

export default App;
