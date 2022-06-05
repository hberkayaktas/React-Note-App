import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
      name:"notes",
      initialState:{
            items:[{
                        id:1,
                        content:"1Lorem impsum dolor sit amet",
                        status:"Added",
                        color:"bg-blue"
                  },
                  {
                        id:2,
                        content:"2Lorem impsum dolor sit amet",
                        status:"Added",
                        color:"bg-pink"
                  },
                  {
                        id:3,
                        content:"3Lorem impsum dolor sit amet",
                        status:"Keep",
                        color:"bg-orange"
                  },
                  {
                        id:4,
                        content:"4Lorem impsum dolor sit amet",
                        status:"Completed",
                        color:"bg-purple"
                  }],
      },
      reducers:{
            addNote: (state,action) => {
                  state.items.push(action.payload)
            }
      },
});
export const {addNote} = notesSlice.actions;
export default notesSlice.reducer;