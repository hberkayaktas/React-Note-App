import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
      name:"notes",
      initialState:{
            items:[{
                        id:1,
                        content:"1 Lorem impsum dolor sit amet",
                        status:"Added",
                        color:"bg-blue"
                  },
                  {
                        id:2,
                        content:"2 Lorem impsum dolor sit amet",
                        status:"Added",
                        color:"bg-pink"
                  },
                  {
                        id:5,
                        content:"5 Lorem impsum dolor sit amet",
                        status:"Added",
                        color:"bg-green"
                  },
                  {
                        id:3,
                        content:"3 Lorem impsum dolor sit amet",
                        status:"Keep",
                        color:"bg-orange"
                  },
                  {
                        id:4,
                        content:"4 Lorem impsum dolor sit amet",
                        status:"Completed",
                        color:"bg-purple"
                  }],
            activeFilter:'',
      },
      reducers:{
            addNote: (state,action) => {
                  state.items.push(action.payload)
            },
            toggle: (state,action) => {
                  const {id} = action.payload;
                  const item = state.items.find(item => item.id === id);
                  if(item.status ==="Added"){
                        item.status = "Keep";
                  }else if(item.status === "Keep"){
                        item.status = "Completed";
                  }else{
                        const filtered =state.items.filter((item)=> item.id !== id );
                        state.items = filtered;
                  }
            },
            changeActiveFilter : (state,action)=>{
                  state.activeFilter = action.payload;
            },
      },
});
export const {addNote,toggle,changeActiveFilter} = notesSlice.actions;
export default notesSlice.reducer;