import HiroMob from "./components/mobile/HeaderMob";
import Card from "./components/mobile/Card";
function App() {
  return (
    <>
      <header>
        <div className="container">
          <HiroMob />
        </div>
      </header>
      <main>
        <Card />
      </main>
    </>
  );
}

export default App;
