import React from "react";
import { useSelector } from "react-redux";

function Begin() {
  const items = useSelector((state) =>
    state.notes.items.filter((item) => item.status === "Keep")
  );
  console.log(items);
  return (
    <div className="col_md_4 x_center f_wrap">
      <h3>Devam Edenler</h3>
      <br />
      <div className="col w_100 x_center">
        {items.map((item) => (
          <div key={item.id} className={`${item.color} p_4 w_75 mx_25 mb_5px card`}>
            {item.content}
            <button className="btn_status keep">
              <i className="fa-solid fa-circle-radiation" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Begin;
