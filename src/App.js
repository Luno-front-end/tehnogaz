import { useEffect, useState } from "react";
import HiroMob from "./components/mobile/HeaderMob";
// import Card from "./components/mobile/Card";
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
        <p>тут планшет і пк</p>
      )}
    </>
  );
}

export default App;
