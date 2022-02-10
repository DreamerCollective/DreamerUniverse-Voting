<template>
  <div>
    <v-app>
      <v-card>

        <v-list
          three-line
          subheader
        >
          <v-subheader>Election Options</v-subheader>
          <v-list-item>
            <v-slider
              v-model="ChangeState.ChangeState1"
              color="red"
              label="How Many Candidates?"
              hint="Be honest"
              :min="electionMetaOptions[0].minRange"
              :max="electionMetaOptions[0].maxRange"
              thumb-label
            >
              <template v-slot:append>
                <v-text-field
                  v-model="ChangeState.ChangeState1"
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
            </v-slider>
          </v-list-item>
          <v-list-item>
            <v-slider
              v-model="ChangeState.ChangeState2"
              color="red"
              label="How Many Candidates Can Win?"
              hint="Be honest"
              :min="electionMetaOptions[1].minRange"
              :max="electionMetaOptions[1].maxRange"
              thumb-label
            >
              <template v-slot:append>
                <v-text-field
                  v-model="ChangeState.ChangeState2"
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
            </v-slider>
          </v-list-item>
          <v-list-item>
            <v-slider
              v-model="ChangeState.ChangeState3"
              color="red"
              label="How Many Votes Do Voters Have?"
              hint="Be honest"
              :min="electionMetaOptions[2].minRange"
              :max="electionMetaOptions[2].maxRange"
              thumb-label
            >
              <template v-slot:append>
                <v-text-field
                  v-model="ChangeState.ChangeState3"
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
            </v-slider>
          </v-list-item>
          <v-list-item>
            <v-range-slider
              v-model="ChangeState.ChangeState4"
              color="red"
              label="How Much Of A Percentage Must Candidates Need To Win?"
              hint="Be honest"
              :min="electionMetaOptions[3].minRange"
              :max="electionMetaOptions[3].maxRange"
              thumb-label
            >
              <template v-slot:prepend>
                <v-text-field
                  v-model="ChangeState.ChangeState4[0]"
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
              <template v-slot:append>
                <v-text-field
                  v-model="ChangeState.ChangeState4[1]"
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
            </v-range-slider>
          </v-list-item>
          <v-list-item>
            <v-slider
              v-model="ChangeState.ChangeState5"
              color="red"
              label="How Many Election Rounds?"
              hint="Be honest"
              :min="electionMetaOptions[4].minRange"
              :max="electionMetaOptions[4].maxRange"
              thumb-label
            >
              <template v-slot:append>
                <v-text-field
                  v-model="ChangeState.ChangeState5"
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
            </v-slider>
          </v-list-item>
          <v-list-item>
            <v-slider
              v-model="ChangeState.ChangeState6"
              color="red"
              label="How Many Voters?"
              hint="Be honest"
              :min="electionMetaOptions[5].minRange"
              :max="electionMetaOptions[5].maxRange"
              thumb-label
            >
              <template v-slot:append>
                <v-text-field
                  v-model="ChangeState.ChangeState6"
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
            </v-slider>
          </v-list-item>
          <v-list-item>
            <v-checkbox
              v-model="ChangeState.ChangeState7"
              label="Do Votes Transfer?"></v-checkbox>
          </v-list-item>
          <v-list-item>
            <v-btn
              label="Save"
              @click="this.ChangeElectionOptionsStateAction(ChangeState)"
            >Save</v-btn>
          </v-list-item>
        </v-list>
      </v-card>
    </v-app>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";

export default {
  name: "Elections-Creation",
  data: () => ({
    ChangeState:
      {
        ChangeState1: 1,
        ChangeState2: 1,
        ChangeState3: 1,
        ChangeState4: [20,20],
        ChangeState5: 1,
        ChangeState6: 1,
        ElectionId: 0,
      },
    ChangeState7: false,
  }),
  computed: {
    ...mapState(["electionMetaOptions", "electionCards", "electionCandidates", "users"]),
    ...mapGetters(["GetElectionCardsById", "GetUserAuthorOfElectionCardsById",])
  },
  methods: {
    ...mapActions([
      "ChangeElectionOptionsStateAction",
    ]),
  }
}
</script>

<style scoped>

</style>
