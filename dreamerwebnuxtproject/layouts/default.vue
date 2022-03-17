<template>
  <div>
    <v-main>
      <v-app>
        <v-app-bar
          color="red lighten-1"
        >
          <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
          <v-toolbar-title>Voting</v-toolbar-title>
          <v-spacer></v-spacer>


          <v-btn icon nuxt="nuxt"
          @click="BackToHome">
            <v-icon>mdi-arrow-left-top-bold</v-icon>
          </v-btn>
        </v-app-bar>
        <v-navigation-drawer
          v-model="drawer"
          absolute
          temporary
        >
          <v-list
            nav
            dense
          >
            <v-list-item-group
              active-class=" text--accent-4"
            >
              <v-list-item @click="ToElectionMainPage">
                <v-list-item-icon>
                  <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Elections</v-list-item-title>
              </v-list-item>
              <v-list-item @click="ToCandidateMainPage">
                <v-list-item-icon>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Candidates</v-list-item-title>
              </v-list-item>
              <v-list-item @click="ToVoterMainPage">
                <v-list-item-icon>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Parties</v-list-item-title>
              </v-list-item>
              <v-list-item @click="ToPartiesMainPage">
                <v-list-item-icon>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Voters</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
        <nuxt />
      </v-app>
    </v-main>
  </div>
</template>

<script>
export default
{
  data: () => ({
    drawer: false,
    group: null,
  }),
  methods:
    {
      BackToHome()
      {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
      },
      ToElectionMainPage()
      {
        this.$router.push("/ElectionCardMainPage")
      },
      ToCandidateMainPage()
      {
        this.$router.push("/CandidateCardMainPage")
      },
      ToVoterMainPage()
      {
        this.$router.push("/VoterCardMainPage")
      },
      ToPartiesMainPage()
      {
        this.$router.push("/PartiesCardMainPage")
      }
    }
}

</script>

<style scoped>

</style>

