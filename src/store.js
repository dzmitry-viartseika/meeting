import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      loadedMeetups: [],
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    setLoadedMeetups(state,payload) {
      state.loadedMeetups = payload;
    },
      createMeetup(state,payload) {
        state.loadedMeetups.push(payload)
      },
      setUser(state,payload) {
        state.user = payload
    },
    setError(state,payload) {
        state.error = payload
    },
    clearError(state) {
        state.error = null
    }
  },
  actions: {
    loadMeetups({commit}) {
      firebase.database().ref('meetups').once('value')
        .then((data) => {
          const meetups = [];
          const obj = data.val();
          for(let key in obj) {
            meetups.push({
              id: key,
              title: obj[key].title,
              description: obj[key].description,
              location: obj[key].location,
              time: obj[key].time,
              date: obj[key].date,
              imageUrl: obj[key].imageUrl
            })
          }
          commit('setLoadedMeetups',meetups)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    createMeetup({commit},payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        time: payload.time
      }
      firebase.database().ref('meetups').push(meetup)
        .then((data) => {
          let key = data.key
          commit('createMeetup',{
            ...meetup,
            id: key
          })
        })
        .catch((err) => {
          console.log(err)
        })

    },
    signUserUp({commit},payload) {
      firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(payload.email,payload.password)
        .then(
          user => {
              const newUser = {
                id: user.uid,
                registeredMeetups: []
              }
              commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setError', error)
          }
        )
    },
    signUserIn({commit},payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email,payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid,
              registeredMeetups: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setError', error)
          }
        )
    },
    autoSignIn({commit},payload) {
      commit('setUser', {id: payload.uid, registeredMeetups: []})
    },
    logout({commit}) {
      firebase.auth().signOut()
      commit('setUser',mull)
      this.$router.push('/')
    },
    clearError(context) {
      context.commit('clearError')
    }
  },
  getters: {
    loadedMeetups(state) {
      return state.loadedMeetups
    },
    loadedMeetup(state) {
      return  (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    },
    featuredMeetups(state,getters) {
      return getters.loadedMeetups.slice(0,5)
    },
    user(state) {
      return state.user
    },
    error(state) {
      return state.error;
    }
  }
});
