import "./App.css";
import "./placement.css";

//component
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import NoteForm from "./components/NoteForm";
import NotBegin from "./components/NotBegin";
import Begin from "./components/Begin";
import Completed from "./components/Completed";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Search />
      <NoteForm />
      <div className="row mt_5px">
        <div className="col_md x_center">
            <NotBegin/>
            <Begin/>
            <Completed/>
        </div>
      </div>
    </div>
  );
}

export default App;
