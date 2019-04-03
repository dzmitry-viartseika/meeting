import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import CreateMeetup from './components/Meetup/CreateMeetup.vue';
import Meetups from './components/Meetup/Meetups.vue';
import Profile from './components/User/Profile.vue';
import Signin from './components/User/Signin.vue';
import Signup from './components/User/Signup.vue';
import Meetup from './components/Meetup/Meetup.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Home Page - DevMeetup App',
        metaTags: [
          {
            name: 'Some information about this app',
            content: 'The home page of our example app.'
          },
          {
            property: 'og:description',
            content: 'The home page of our example app.'
          }
        ]
      }
    },
    {
      path: '/meetup/new',
      name: 'CreateMeetup',
      component: CreateMeetup,
      meta: {
        title: 'Create Page - DevMeetup App',
        metaTags: [
          {
            name: 'Some information about this app',
            content: 'The home page of our example app.'
          },
          {
            property: 'og:description',
            content: 'The home page of our example app.'
          }
        ]
      }
    },
    {
      path: '/meetups',
      name: 'Meetups',
      component: Meetups,
      meta: {
        title: 'Meetups Page - DevMeetup App',
        metaTags: [
          {
            name: 'Some information about this app',
            content: 'The home page of our example app.'
          },
          {
            property: 'og:description',
            content: 'The home page of our example app.'
          }
        ]
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {
        title: 'Profile Page - DevMeetup App',
        metaTags: [
          {
            name: 'Some information about this app',
            content: 'The home page of our example app.'
          },
          {
            property: 'og:description',
            content: 'The home page of our example app.'
          }
        ]
      }
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin,
      meta: {
        title: 'Sign In Page  - DevMeetup App',
        metaTags: [
          {
            name: 'Some information about this app',
            content: 'The home page of our example app.'
          },
          {
            property: 'og:description',
            content: 'The home page of our example app.'
          }
        ]
      }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
      meta: {
        title: 'Sign Up Page  - DevMeetup App',
        metaTags: [
          {
            name: 'Some information about this app',
            content: 'The home page of our example app.'
          },
          {
            property: 'og:description',
            content: 'The home page of our example app.'
          }
        ]
      }
    },
    {
      path: '/meetup/:id',
      name: 'Meetup',
      component: Meetup,
      props: true,
      meta: {
        title: 'Meetup Page  - DevMeetup App',
        metaTags: [
          {
            name: 'Some information about this app',
            content: 'The home page of our example app.'
          },
          {
            property: 'og:description',
            content: 'The home page of our example app.'
          }
        ]
      }
    }
  ],
  mode: 'history'
});

