import React, { useEffect, useState, Suspense } from "react";
import HiroMob from "./components/Mobile/HeaderMob";
import HiroDesk from "./components/Desktop/Hiro/Hiro";
// import SectionGoods from "./components/Desktop/SectionOne/SectionOne";
// import AboutUs from "./components/Desktop/SectionAboutUs";
// import Company from "./components/Desktop/SectionСompany";
// import Footer from "./components/Desktop/Footer";

import Preload from "./components/Preload";

// const HiroMob = React.lazy(() => import("./components/Mobile/HeaderMob"));
// const HiroDesk = React.lazy(() => import("./components/Desktop/Hiro/Hiro"));
const SectionGoods = React.lazy(() =>
  import("./components/Desktop/SectionOne/SectionOne")
);
const AboutUs = React.lazy(() => import("./components/Desktop/SectionAboutUs"));
const Company = React.lazy(() => import("./components/Desktop/SectionСompany"));
const Footer = React.lazy(() => import("./components/Desktop/Footer"));

function App() {
  const [width, setWidth] = useState(document.body.clientWidth);

  window.onresize = function (e) {
    setWidth(e.currentTarget.screen.width);
  };
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
                <Suspense fallback={<Preload />}>
                  <SectionGoods />
                </Suspense>
              </div>
            </section>
            <section id="AuboutUs" className="section-aboutUs">
              <div className="container">
                <Suspense fallback={<Preload />}>
                  <AboutUs />
                </Suspense>
              </div>
            </section>
            <section className="section-company">
              <div className="container">
                <Suspense fallback={<Preload />}>
                  <Company />
                </Suspense>
              </div>
            </section>
          </main>
          <footer className="footer">
            <div className="container">
              <Suspense fallback={<Preload />}>
                <Footer />
              </Suspense>
            </div>
          </footer>
        </>
      )}
    </>
  );
}

export default App;
