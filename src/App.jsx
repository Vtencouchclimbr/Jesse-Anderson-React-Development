import { Outlet } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Footer from './components/Footer';

const styles = {

  body: {
    height: '100vh',
    margin: '0',
    backgroundColor: '#b9baa3',
  },
  main: {
    height: '100%',
    margin: '0',
    display: 'flex',
    flexDirection: 'column',
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
