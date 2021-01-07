export const registerMentor = (state, payload) => {
    return state.mentors.push(payload);
  };


  export const updateMentor = (state, payload) => {
    return state.mentors.push(payload);
  };

export const setMentors = (state, payload) => {
  return state.mentors = payload;
}

export const setMentorId = (state, payload) => {
  return state.mentorId = payload;
}

export const setOneMentor = (state, payload) => {
  return state.oneMentor = payload;
}

export const setErrors = (state, payload) => {
  return state.errors = payload;
}

export const setUser = (state, payload) => {
  state.userId = payload.userId
  state.token = payload.token
  state.userAuth = payload.userAuth
      }

      