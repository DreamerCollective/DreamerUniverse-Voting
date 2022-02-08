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
            <v-slider
              color="red"
              label="How Many Candidates?"
              hint="Be honest"
              min="1"
              max="20"
              thumb-label
            ><template v-slot:append>
              <v-text-field
                :value="range[0]"
                hide-details
                single-line
                type="number"
                style="width: 60px"
                @change="$set(range, 0, $event)"
              ></v-text-field>
            </template></v-slider>
          </v-list-item>
          <v-list-item>
            <v-slider
              color="red"
              label="How Many Candidates Can Win?"
              hint="Be honest"
              min="1"
              max="10"
              thumb-label
            ></v-slider>
          </v-list-item>
          <v-list-item>
            <v-slider
              color="red"
              label="How Many Votes Do Voters Have?"
              hint="Be honest"
              min="1"
              max="10"
              thumb-label
            ></v-slider>
          </v-list-item>
          <v-list-item>
            <v-range-slider
              v-model="range"
              color="red"
              label="How Much Of A Percentage Must Candidates Need To Win?"
              hint="Be honest"
              min="min"
              max="max"
            ><template v-slot:prepend>
              <v-text-field
                :value="range[0]"
                single-line
                type="number"
                @change="$set(range, 0, $event)"
              ></v-text-field>
            </template>
            <template v-slot:append>
              <v-text-field
                :value="range[1]"
                single-line
                type="number"
                @change="$set(range, 1, $event)"
              ></v-text-field>
            </template></v-range-slider>
          </v-list-item>
          <v-list-item>
            <v-slider
              color="red"
              label="How Many Election Rounds?"
              hint="Be honest"
              min="1"
              max="10"
              thumb-label
            ></v-slider>
          </v-list-item>
          <v-list-item>
            <v-slider
              color="red"
              label="How Many Voters?"
              hint="Be honest"
              min="1"
              max="1000"
              thumb-label
            ></v-slider>
          </v-list-item>
          <v-list-item>
            <v-checkbox label="Do Votes Transfer?"></v-checkbox>
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
import {mapActions, mapGetters, mapState} from "vuex";

export default {
  name: "Elections-Creation",
  data() {
    return {
      electionCards: this.$store.state.electionCards,
      min: 20,
      max: 70,
      range: [20, 70],
    }

  },
  computed: {
    ...mapState(["electionCards", "electionCandidates", "users"]),
    ...mapGetters(["GetElectionCardsById", "GetUserAuthorOfElectionCardsById",])
  },
  methods: {
    ...mapActions([""]),
  }
}
</script>

<style scoped>

</style>
