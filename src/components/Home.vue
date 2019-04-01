<template>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6 class="text-sm-right text-xs-center">
          <v-btn large class="teal accent-3" :to="'/meetups'">EXPOLORE MEETUP</v-btn>
        </v-flex>
        <v-flex xs12 sm6  class="text-sm-left text-xs-center">
          <v-btn large class="teal accent-3" :to="'/meetup/new'">ORGANIZE MEETUP</v-btn>
        </v-flex>
        <v-flex xs12>
          <v-carousel class="slider">
            <v-carousel-item
              v-for="(item,i) in meetups"
              :src="item.imageUrl"
              :key="item.id"
              class="text-sm-center text-xs-center"
              @click="onloadMeetup(item.id)"
            >
              <div class="title">
                {{ item.title }}
              </div>
            </v-carousel-item>
          </v-carousel>
        <v-flex>
          <div class="text-sm-center text">Join our awesome meetups!</div>
        </v-flex>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Home",
      computed: {
          meetups() {
            return this.$store.getters.featuredMeetups
          }
      },
      methods: {
        onloadMeetup(id) {
          this.$router.push('/meetup/' + id)
        }
      }
    }
</script>

<style scoped>
    .title {
      color: white;
      font-weight: bold;
      font-size: 50px;
      padding-top: 50px;
    }

    .text {
      padding-top: 20px;
    }


</style>
