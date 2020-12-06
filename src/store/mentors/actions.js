/* eslint-disable no-console */
import axios from 'axios';

export const registerMentor = (context, data) => {

         const mentorData = {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          avatar: data.avatar,
          role: data.role,
          title: data.title,
          presentation: data.presentation,
          technos: data.technos,
          socials: data.socials      
    };

    
    axios.post('http://localhost:5000/api/mentors', mentorData, {
    headers: {
          // remove headers
        }
      }).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err.response);
      });

    context.commit('registerMentor', mentorData)
};

export const loadMentors = (context) => {
    const mentors = axios.get('http://localhost:5000/api/mentors', {
        headers: {
              // remove headers
            }
          }).then(res => {
            console.log(res);
          }).catch(err => {
            console.log(err.response);
          });
    context.commit('setMentors', mentors)
}
