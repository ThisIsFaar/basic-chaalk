import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import Main from "./components/main/main";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <div style={{ display: "flex", alignItems: "center" }}>
        <Sidebar />
        <Board />
      </div> */}
      <Main />
      <Footer />
    </div>
  );
}

export default App;
