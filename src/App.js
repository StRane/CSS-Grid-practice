import "./App.scss";

import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import Homes from "./components/Homes/Homes";
import Realtors from "./components/Realtors/Realtors";
import SideBar from "./components/Sidebar/Sidebar";
import Story from "./components/Story/Story";

function App() {
  return (
    <div className="App">
      <SideBar />
      <Header />
      <Realtors />
      <Features />
      <Story />
      <Homes />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
