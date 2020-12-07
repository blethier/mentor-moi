export const registerMentor = (state, payload) => {
    return state.users.push(payload);
  };

export const setMentors = (state, payload) => {
  return state.mentors = payload;
}

export const setErrors = (state, payload) => {
  return state.errors = payload;
}

