import { Outlet } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Footer from './components/Footer';


function Container() {

  return (
    <>
      <NavTabs />
      <main className="mx-3">
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default Container