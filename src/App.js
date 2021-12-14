import { useEffect, useState } from "react";
import HiroMob from "./components/Mobile/HeaderMob";
import HiroDesk from "./components/Desktop/Hiro/Hiro";
import SectionGoods from "./components/Desktop/SectionOne/SectionOne";
// // import Card from "./components/mobile/Card";
function App() {
  const [width, setWidth] = useState(document.body.clientWidth);

  // useEffect(() => {
  //   console.log(onWidthDesktop());
  //   // return () => {
  //   //   cleanup
  //   // }
  // }, [width]);
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
          </main>
        </>
      )}
    </>
  );
}

export default App;
