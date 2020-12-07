
export const allUsers = (state) => {
    return state.users
  };

  export const allMentors = (state) => {
    return state.mentors
  };

  export const hasMentors = (state) => {
    return state.users && state.users.length > 0
  };

  export const allTechnos = (state) => {
    return state.technos
  };

  export const role = (state) => {
    const mentors = state.users
    const role = mentors.map(mentor => mentor.role)
    const mentorArray = role.filter(function(e) { return e !== 'alumni' })
    const unique =  mentorArray.filter(function(item, pos) {
      return mentorArray.indexOf(item) == pos;
  })
  return unique.toString()

  };
  



