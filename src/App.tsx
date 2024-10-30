import {Suspense, lazy} from 'react';

const TopNav = lazy(() => import('./TopNav/TopNav'));
const Profile = lazy(() => import('./Profile/Profile'));
const Skill = lazy(() => import('./Skills/Skill'));
const Project = lazy(() => import('./Project/Project'));

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
