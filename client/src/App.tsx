import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';

import NavTabs from './components/NavTabs.tsx';
import Resume from './pages/Resume.tsx';
import Home from './pages/Home.tsx';
import Portfolio from './pages/Portfolio.tsx';
import Contact from './pages/Contact.tsx';
import './App.css';

// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
     <div className="portfolio"> 
      <NavTabs />
      <section id="home" className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
        <Home />
      </section>
      <section id="portfolio" className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
        <Portfolio />
      </section>
      <section id="resume" className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
        <Resume />
      </section>
      <section id="contact" className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
        <Contact />
      </section>
    </div>
  </ApolloProvider>
  );
}

export default App;
