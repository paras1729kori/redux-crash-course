const createSlice = require("@reduxjs/toolkit").createSlice;

const initalCakeState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState: initalCakeState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes -= 1;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
