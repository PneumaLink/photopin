const pinReducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return [];
    }

    case "CREATE": {
      return [action.data, ...state];
    }

    case "EDIT": {
      return state.map((it) =>
        it.id === action.data.id
          ? {
              id: it.id,
              createTime: it.createTime,
              location: it.location,
              ...action.data,
            }
          : it,
      );
    }

    case "REMOVE": {
      return state.filter((it) => it.id !== action.targetId);
    }

    default: {
      console.log("case name : ", action.type);
    }
  }
};

export default pinReducer;
