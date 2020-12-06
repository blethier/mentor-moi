export const registerMentor = (state, payload) => {
    return state.users.push(payload);
  };

export const setMentors = (state, payload) => {
  return state.mentors = payload;
}

