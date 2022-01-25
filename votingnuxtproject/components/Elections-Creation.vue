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
          <v-list>
            <v-list-group
              v-for="options in electionCards.electionOptions"
              :key="options.id"
              :disabled="options.hide">

              <template v-slot:activator >
                <v-list-item-content>
                  <v-list-item-title v-text="options.title" ></v-list-item-title>
                  <v-checkbox v-model="options.selected"></v-checkbox>
                </v-list-item-content>
              </template>
              <v-list-item v-for="optionChild in options.SystemOptions"
                           :key="optionChild.title"
                           v-model="optionChild.selected"
                           :disabled="optionChild.hide"
              >
                <v-list-item-title v-text="optionChild.title"></v-list-item-title>
                <v-checkbox v-model="optionChild.selected" $Click="FlipHideElectionOptions()"></v-checkbox>
              </v-list-item>
            </v-list-group>
          </v-list>
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
}
</script>

<style scoped>

</style>
