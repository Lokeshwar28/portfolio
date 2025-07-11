import Header from './components/Header';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import SinglePageLayout from './components/SinglePageLayout';

function App() {
  return (
    <ErrorBoundary>
      <Header />
      <main role="main">
        <SinglePageLayout />
      </main>
      <Footer />
    </ErrorBoundary>
  );
}

export default App;