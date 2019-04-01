<template>
    <div>
      <v-alert
        :value="true"
        type="info"
        @input="onClose"
      >
       {{text}}
      </v-alert>

    </div>
</template>

<script>
    export default {
        name: "Alert",
      props: ['text'],
      methods: {
        onClose() {
            this.$emit('dismissed')
          }
      }
    }
</script>

<style scoped>

</style>
