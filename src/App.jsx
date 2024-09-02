import { Outlet } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Footer from './components/Footer';
import vertColor from './utils/vertColor.jpg';


// const styles = {

//   body: {
//     height: '100vh',
//     margin: '0',
//     backgroundColor: '#16325B',
//   },
//   main: {
//     height: '100%',
//     margin: '0',
//     display: 'flex',
//     flexDirection: 'column',
//   }
// };

function App() {

  return (
    <>
      <body style={{ border: '2px solid #007bff' }} className="d-flex flex-column">
      <NavTabs />
        <main  style={{ 
  backgroundImage: `url(${vertColor})`,
  backgroundSize: 'cover', 
  backgroundPosition: 'center', 
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}} >
          
          <Outlet />
        </main>
        <Footer />
      </body>
    </>
  );
}

export default App


// style={{ 
//   backgroundImage: `url(${shapes})`,
//   backgroundSize: 'cover', 
//   backgroundPosition: 'center', 
//   height: '100vh',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center'
// }}