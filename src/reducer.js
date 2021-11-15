export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  // TODO Remove after finished developing...
  // token:
  //   "BQBnH8pmw1LMX47wGggXwU56pEL3mg6CGgxyEz4WmXI1MBBdYh0xkSXw5Xzm1KmAjQkgG9vuxlbLIPIXhB3lGW_5r89ZJPT8r_mCwGzVyZgSEI2MVD1ekoRdQeTWEGRZawSA_esicorCe-kDWerpJ5jfn8T8LU7eSSYl0n08ZRqvJNoPN_Ju",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
