<template>
   <v-container>
     <v-layout row wrap>
       <v-flex xs12>
         <v-card>
           <v-card-title>
             <h6>{{meetup.title}}</h6>
           </v-card-title>
             <v-card-media
           :src="meetup.imageUrl"
         ></v-card-media>
           <v-card-text>
              <div>
                {{meetup.date}}
                {{meetup.time}}
              </div>

             <div>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium expedita necessitatibus neque ratione rem sed similique tenetur unde veniam.
             </div>
           </v-card-text>
           <v-card-actions>
             <v-spacer></v-spacer>
             <v-btn class="warning">Register</v-btn>
           </v-card-actions>
         </v-card>
       </v-flex>
     </v-layout>
   </v-container>
</template>

<script>


    export default {
        name: "Meetup",
      props:['id'],
      computed: {
          meetup() {
            return this.$store.getters.loadedMeetup(this.id)
          }
      }
    }
</script>

<style scoped>

</style>
