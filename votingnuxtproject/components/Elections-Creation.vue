<template>
  <div>
    <v-app>
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-icon>mdi-close</v-icon>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-list
          three-line
          subheader
        >
          <v-subheader>Election Options</v-subheader>
          <v-list-item>
            <v-list-item-title>
              Plurality System
            </v-list-item-title>
            <v-list-item-subtitle>
              VoteForOne
            </v-list-item-subtitle>
            <v-btn></v-btn>
          </v-list-item>
        </v-list>



        <v-divider></v-divider>
        <v-list
          three-line
          subheader
        >
          <v-subheader>Election Results</v-subheader>
        </v-list>
      </v-card>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "Elections-Creation",
  data() {
    return {
      electionCards: this.$store.state.electionCards,
    }
  },
  computed:
  {
    ReturnElectionCardOptionSelectedStateById()
    {
      return this.$store.getters.GetElectionCardOptionSelectedState
    }
  }
}
</script>

<style scoped>

</style>
