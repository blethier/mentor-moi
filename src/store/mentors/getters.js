
export const allMentors = (state) => {
    return state.mentors
  };

  export const hasMentors = (state) => {
    return state.mentors && state.mentors.length > 0
  };