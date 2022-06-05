import React from "react";

function Note_Form() {
  return (
    <div className="row">
      <div className="col_md x_center">
        <form action>
          <br />
          <div className="row note_input">
            <textarea
              name
              id
              cols={30}
              rows={10}
              placeholder="Type here...."
              defaultValue={""}
            />
            <button className="btn" type="submit">
              Kaydet
            </button>
          </div>
          <br />
          <br />
          <div className="colordot">
            <span className="colorpicker">
              <input type="radio" name="renk" id defaultChecked />
              <label htmlFor="renk" className="bg-blue" />
            </span>
            <span className="colorpicker">
              <input type="radio" name="renk" id />
              <label htmlFor="renk" className="bg-orange" />
            </span>
            <span className="colorpicker">
              <input type="radio" name="renk" id />
              <label htmlFor="renk" className="bg-pink" />
            </span>
            <span className="colorpicker">
              <input type="radio" name="renk" id />
              <label htmlFor="renk" className="bg-purple" />
            </span>
            <span className="colorpicker">
              <input type="radio" name="renk" id />
              <label htmlFor="renk" className="bg-green" />
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Note_Form;
