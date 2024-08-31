import { Outlet } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Footer from './components/Footer';

const styles = {

  body: {
    height: '100vh',
    margin: '0',
  },
  main: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#1f7945',
  }
};

function App() {

  return (
    <>
      <body style={styles.body}>
        <NavTabs />
        <main style={styles.main}>
          <Outlet />
        </main>
        <Footer />
      </body>
    </>
  );
}

export default App
