<template>
  <div>
    <v-main>
      <v-app>
        <v-app-bar
          color="red lighten-1"
        >
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
          <v-toolbar-title>Voting</v-toolbar-title>
          <v-spacer></v-spacer>

          <v-btn icon nuxt="nuxt"
          @click="BackToHome">
            <v-icon>mdi-arrow-left-top-bold</v-icon>
          </v-btn>
        </v-app-bar>
        <nuxt />
      </v-app>
    </v-main>
  </div>
</template>

<script>
export default
{
  methods:
    {
      BackToHome()
      {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
      }
    }
}

</script>

<style scoped>

</style>

