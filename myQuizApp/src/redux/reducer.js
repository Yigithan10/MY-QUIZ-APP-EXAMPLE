const INITIAL_STATE = {
  lang: "",
  quiz: 0
};

//-----

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return { ...state, lang: action.payload };

    case 'SET_QUIZ':
      return { ...state, quiz: action.payload };

    default:
      return state;
  }
};