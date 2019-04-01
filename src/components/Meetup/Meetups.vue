<template>
    <div id="meetups">
     <v-container>
       <v-layout row wrap>
          <v-flex xs12>
            <v-card class="info ma-4" v-for="(item,i) in meetups" :key="item.id">
              <v-container fluid>
                <v-layout row>
                  <v-flex xs5 sm4 md3 offset-sm1 offset-md2>
                      <v-card-media
                      :src="item.imageUrl"
                      height="130px"
                      >

                      </v-card-media>
                  </v-flex>
                  <v-flex xs7 sm8 md9>
                    <v-card-title primary-title>
                      <div>
                        <h5  class="headline">{{item.title}}</h5>
                        <div>{{item.date}}</div>
                        <div>{{item.time}}</div>
                      </div>
                    </v-card-title>
                    <v-card-actions>
                      <v-btn :to="/meetup/ + item.id">View Meetup</v-btn>
                    </v-card-actions>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
       </v-layout>
     </v-container>
    </div>
</template>

<script>




    export default {
        name: "Meetups",
      computed: {
          meetups() {
            return this.$store.getters.loadedMeetups
          }
      }
    }
</script>

<style scoped>

</style>
