export const SetLanguage = lang => {
  return {
    type: 'SET_LANGUAGE',
    payload: lang,
  };
};

export const SetQuiz = quiz => {
  return {
    type: 'SET_QUIZ',
    payload: quiz,
  };
};