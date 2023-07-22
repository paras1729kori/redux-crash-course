const { cakeActions } = require("../cake/cakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

const initialIceCreamState = {
  numOfIceCreams: 20,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState: initialIceCreamState,
  reducers: {
    ordered: (state, action) => {
      state.numOfIceCreams -= action.payload;
    },
    restocked: (state, action) => {
      state.numOfIceCreams += action.payload;
    },
  },
  //   this works but is not an ideal way to do so
  //   extraReducers: {
  //     ["cake/ordered"]: (state) => {
  //       state.numOfIceCreams--;
  // },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIceCreams--;
    });
  },
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;
