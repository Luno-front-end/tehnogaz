import { useEffect, useState } from "react";
import HiroMob from "./components/Mobile/HeaderMob";
import HiroDesk from "./components/Desktop/Hiro/Hiro";
import SectionGoods from "./components/Desktop/SectionOne/SectionOne";
import AboutUs from "./components/Desktop/SectionAboutUs";
import Company from "./components/Desktop/SectionСompany";
import Footer from "./components/Desktop/Footer";

function App() {
  const [width, setWidth] = useState(document.body.clientWidth);

  window.onresize = function (e) {
    setWidth(e.currentTarget.screen.width);
  };
  console.log(width);
  return (
    <>
      {width < 768 ? (
        <header className="wrapper-header">
          <div className="container">
            <HiroMob />
          </div>
        </header>
      ) : (
        <>
          <header className="wrapper-header">
            <div className="container">
              <HiroDesk />
            </div>
          </header>
          <main>
            <section className="section-slider">
              <div className="container">
                <SectionGoods />
              </div>
            </section>
            <section id="AuboutUs" className="section-aboutUs">
              <div className="container">
                <AboutUs />
              </div>
            </section>
            <section className="section-company">
              <div className="container">
                <Company />
              </div>
            </section>
          </main>
          <footer className="footer">
            <div className="container">
              <Footer />
            </div>
          </footer>
        </>
      )}
    </>
  );
}

export default App;
