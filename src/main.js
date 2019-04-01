import Vue from 'vue';
import './plugins/vuetify'
import App from './App.vue';
import router from './router';
import store from './store';
import  * as firebase from 'firebase'
import Alert from './components/Alert'


Vue.component('app-alert',Alert);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyDxri2EBibF6rdytTmKENBxWL3jDGayvdo",
      authDomain: "meeting-9480d.firebaseapp.com",
      databaseURL: "https://meeting-9480d.firebaseio.com",
      projectId: "meeting-9480d",
      storageBucket: "",
    })
    firebase.auth().onAuthStateChanged((user) => {
        if(user) {
          this.$store.dispatch('autoSignIn',user)
        }
    })

    this.$store.dispatch('loadMeetups')
  },
}).$mount('#app');
