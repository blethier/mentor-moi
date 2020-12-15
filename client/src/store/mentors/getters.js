
  export const oneMentor = (state) => {
    return state.oneMentor
  };

  export const hasMentors = (state) => {
    return state.mentors && state.mentors.length > 0
  };

  export const allTechnos = (state) => {
    return state.technos
  };

export const token = (state) => {
  return state.token;
}

export const isAuth = (state) => {
  return !!state.token;
}

export const userAuth = (state) => {
  return state.userAuth;
}

export const userId = (state) => {
  return state.userId;
}

export const mentorId = (state) => {
  const  mentors =  state.mentors
const userId =   state.userId
  const thisMentors =  mentors?.find(mentor => mentor.userId === userId ) 
  return state.mentorId ?? thisMentors?._id ?? ' ' 
  
}

export const isMentor =  (state) => {
  //const  mentors =  state.mentors
  //const userId =  state.userId
  //return mentors?.some(mentor => mentor.userId === userId ) ?? null
  const  mentors =  state.mentors
const userId =  state.userId
  const thisMentors =  mentors.find(mentor => mentor.userId === userId ) 
  const length = thisMentors?._id.length ?? 0
  return length > 1 ? true : false
}




  



