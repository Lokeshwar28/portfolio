import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SinglePageLayout from "./components/SinglePageLayout";

function App() {
  return (
    <div className="App">
      <Header />
      <SinglePageLayout />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
