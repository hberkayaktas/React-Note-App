import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../redux/notes/notesSlice";
function Begin() {
  const dispactch = useDispatch();
  const items = useSelector((state) =>
    state.notes.items.filter((item) => item.status === "Keep")
  );
  const activeFilter = useSelector((state) => state.notes.activeFilter);

  const filtered =  items.filter((item) => {
    var ifade = new RegExp(activeFilter.filter,"gi");
    if(ifade.test(item.content)){
      return item;
    }}
    )
  //console.log(items);
  return (
    <div className="col_md_4 x_center f_wrap">
      <h3>Devam Edenler</h3>
      <br />
      <div className="col w_100 x_center">
        {filtered.map((item) => (
          <div
            key={item.id}
            className={`${item.color} p_4 w_75 mx_25 mb_5px card`}
          >
            {item.content}
            <button
              className="btn_status keep"
              onClick={() => dispactch(toggle({ id: item.id }))}
            >
              <i className="fa-solid fa-circle-radiation" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Begin;
