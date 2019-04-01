<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <h4>Create new Meetup</h4>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="onCreateMeetup">
          <v-layout row>
            <v-flex xs12 sm6>
              <v-text-field
                name="title"
                label="Title"
                id="title"
                required
                v-model="title"
              >
              </v-text-field>
            </v-flex>
          </v-layout>


          <v-layout row>
            <v-flex xs12 sm6>
              <v-text-field
              name="location"
              label="Location"
              id="location"
              v-model="location"
              required
            >
            </v-text-field>
      </v-flex>
    </v-layout>

          <v-layout row>
            <v-flex xs12 sm6>
              <v-text-field
                name="imageUrl"
                label="Image Url"
                id="image-url"
                v-model="imageUrl"
                required
              >
              </v-text-field>
    </v-flex>
    </v-layout>
          <v-layout row>
            <v-flex xs12 sm6>
              <img :src="imageUrl" alt="" height="150px">
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6>
              <v-text-field
                name="description"
                label="Description"
                id="description"
                v-model="description"
                required
                multi-line
              >
              </v-text-field>
              <h3>Choose Day and Time</h3>
              <v-date-picker color="green lighten-1" v-model="date"></v-date-picker>
              <p>{{date}}</p>
              <v-time-picker color="green lighten-1"  v-model="time"></v-time-picker>
              <p>{{time}}</p>
            </v-flex>
          </v-layout>

          <v-layout row >
            <v-flex xs12 sm6 offset-sm3>
              <v-btn
                :disabled="!formisValid"
                type="submit"
              >Create Meetup</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: "CreateMeetup",
    data() {
      return {
        title: '',
        location: '',
        imageUrl: '',
        description: '',
        date: '',
        time: ''
      }
    },
    computed: {
      formisValid() {
        return this.title !== '' && this.location !== '' && this.imageUrl !== '' && this.description !== '' && this.time !== '' && this.date !== ''
      }
    },
    methods: {
      onCreateMeetup() {
        const meetupData = {
          title: this.title,
          location: this.location,
          imageUrl: this.imageUrl,
          description: this.description,
          date: this.date,
          time: this.time
        }
        this.$store.dispatch('createMeetup',meetupData)
        this.$router.push('/meetups')
      }
    }
  }
</script>

<style scoped>

</style>
