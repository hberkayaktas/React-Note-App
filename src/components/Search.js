import {useState} from "react";
import { useDispatch } from "react-redux";
import {changeActiveFilter} from "../redux/notes/notesSlice";

function Search() {
      const dispacth = useDispatch();
      const [filter, setFilter] = useState("");
      const handleSubmit = (e) => {
            e.preventDefault();
            
                  dispacth(changeActiveFilter({filter}));
              
              // console.log({id:nanoid(), content,status:"Added",color:colorSheme});
              // console.log(renk);
            
      }
  return (
    <div className="row x_center y_center mt_5px">
      <form className="x_center" onSubmit={handleSubmit}>
      <input type="text" className="search" value={filter} placeholder="Search" onChange={(e) => setFilter(e.target.value)} onKeyUp={handleSubmit}/>
      <button className="search">Ara</button>
      </form>
    </div>
  );
}

export default Search;
