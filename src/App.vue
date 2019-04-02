<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      class="teal accent-3"
    >
      <v-list>
        <v-list-tile
          v-for="(item,i) in menuItems" :key="i"
          :to="item.link"
        >
          <v-list-tile-action>
            <v-icon>
              {{ item.icon }}
            </v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{ item.title }}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>


        <v-list-tile>
          <v-list-tile-action>
            <v-icon @click="onLogout">
              exit_to_app
            </v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
           Logout
          </v-list-tile-content>
        </v-list-tile>


    </v-navigation-drawer>
    <v-toolbar class="teal accent-3">
      <v-toolbar-side-icon @click="drawer = !drawer" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title><router-link :to="'/'" style="cursor: pointer" tag="span">DevMeetup</router-link></v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down" v-for="(item,i) in menuItems" :key="i">
        <router-link class="button" tag="a" :to="item.link" ><v-btn class="teal accent-3"><v-icon left>{{ item.icon }}</v-icon>{{ item.title }}</v-btn>
        </router-link>
      </v-toolbar-items>
      <v-toolbar-items  class="hidden-sm-and-down">
      <v-btn v-if="userAuthenticated"
             @click="onLogout"
             class="teal accent-3" > <v-icon left>exit_to_app</v-icon>Logout</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
        <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>


export default {
  name: 'App',
  data () {
    return {
      drawer: false
    }
  },
  computed: {
    menuItems() {
      let menuItems = [
        {
          icon: 'face',
          title: 'Sign up',
          link: '/signup'
        }
        ,
        {
          icon: 'lock_open',
          title: 'Sign in',
          link: '/signin'
        }
      ]
      if (this.userAuthenticated) {
        menuItems = [
          {
            icon: 'supervised_user_circle',
            title: 'View Meetups',
            link: '/meetups'
          },
          {
            icon: 'room',
            title: 'Organize Meetup',
            link: '/meetup/new'
          },
          {
            icon: 'person',
            title: 'Profile',
            link: '/profile'
          },
        ]
    }
      return menuItems;
    },
    userAuthenticated() {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>


<style lang="less">
  .button {
    display: block;
    height: 63px;
    text-decoration: none;
  }


</style>
