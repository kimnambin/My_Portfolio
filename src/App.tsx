import {Suspense, lazy} from 'react';

const TopNav = lazy(() => import('./components/topNav/TopNav'));
const Profile = lazy(() => import('./pages/Profile'));
const Skill = lazy(() => import('./components/skills/Skill'));
const Project = lazy(() => import('./pages/Project'));

function App() {
  return (
    <>
      <Suspense fallback={<div>⌛Loading...</div>}>
        <TopNav />
        <Profile />
        <Skill />
        <Project />
      </Suspense>
    </>
  );
}

export default App;
