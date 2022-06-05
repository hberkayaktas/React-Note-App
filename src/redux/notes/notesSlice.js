import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
      name:"notes",
      initialState:{
            items:[{
                        id:1,
                        content:"1Lorem impsum dolor sit amet",
                        status:"Added"
                  },
                  {
                        id:2,
                        content:"2Lorem impsum dolor sit amet",
                        status:"Added"
                  },
                  {
                        id:3,
                        content:"3Lorem impsum dolor sit amet",
                        status:"Keep"
                  },
                  {
                        id:4,
                        content:"4Lorem impsum dolor sit amet",
                        status:"Completed"
                  }],
      },
      reducers:{},
});

export default notesSlice.reducer;