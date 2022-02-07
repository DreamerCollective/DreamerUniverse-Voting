<template>
  <div>
      <v-app-bar
        app
        color="red lighten-1"
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Voting</v-toolbar-title>



        <v-spacer></v-spacer>

        <v-btn icon nuxt>
          <v-icon>mdi-arrow-left-top-bold</v-icon>
          <nuxt-link to="/"></nuxt-link>
        </v-btn>
      </v-app-bar>
      <nuxt />
  </div>
</template>

<script>
export default {

}

</script>

<style scoped>

</style>

