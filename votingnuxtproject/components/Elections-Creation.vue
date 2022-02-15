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
              v-model="HowManyCandidates"
              color="red"
              label="How Many Candidates?"
              hint="Be honest"
              :min="electionMetaOptions[0].minRange"
              :max="electionMetaOptions[0].maxRange"
              thumb-label
            >
              <template v-slot:append>
                <v-text-field
                  v-model="HowManyCandidates"
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
            </v-slider>
          </v-list-item>
          <v-list-item>
            <v-slider
              v-model="HowManyCandidatesCanWin"
              color="red"
              label="How Many Candidates Can Win?"
              hint="Be honest"
              :min="electionMetaOptions[1].minRange"
              :max="electionMetaOptions[1].maxRange"
              thumb-label
            >
              <template v-slot:append>
                <v-text-field
                  v-model="HowManyCandidatesCanWin"
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
            </v-slider>
          </v-list-item>
          <v-list-item>
            <v-slider
              v-model="HowManyVotesDoVotersHave"
              color="red"
              label="How Many Votes Do Voters Have?"
              hint="Be honest"
              :min="electionMetaOptions[2].minRange"
              :max="electionMetaOptions[2].maxRange"
              thumb-label
            >
              <template v-slot:append>
                <v-text-field
                  v-model="HowManyVotesDoVotersHave"
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
            </v-slider>
          </v-list-item>
          <v-list-item>
            <v-slider
              v-model="HowMuchOfAPercentageMustCandidatesNeedToWin"
              color="red"
              label="How Much Of A Percentage Must Candidates Need To Win?"
              hint="Be honest"
              :min="electionMetaOptions[3].minRange"
              :max="electionMetaOptions[3].maxRange"
              thumb-label
            >
              <template v-slot:append>
                <v-text-field
                  v-model="HowMuchOfAPercentageMustCandidatesNeedToWin"
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
            </v-slider>
          </v-list-item>
          <v-list-item>
            <v-slider
              v-model="HowManyElectionRounds"
              color="red"
              label="How Many Election Rounds?"
              hint="Be honest"
              :min="electionMetaOptions[4].minRange"
              :max="electionMetaOptions[4].maxRange"
              thumb-label
            >
              <template v-slot:append>
                <v-text-field
                  v-model="HowManyElectionRounds"
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
            </v-slider>
          </v-list-item>
          <v-list-item>
            <v-slider
              v-model="HowManyVoters"
              color="red"
              label="How Many Voters?"
              hint="Be honest"
              :min="electionMetaOptions[5].minRange"
              :max="electionMetaOptions[5].maxRange"
              thumb-label
            >
              <template v-slot:append>
                <v-text-field
                  v-model="HowManyVoters"
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
            </v-slider>
          </v-list-item>
          <v-list-item>
            <v-checkbox
              v-model="ChangeState7"
              label="Do Votes Transfer?"></v-checkbox>
          </v-list-item>
          <v-list-item>
            <v-btn
              label="Save"
              @click="SaveElectionOptions"
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
    electionCard: {
      id: this.electionCards[this.$route.params.id].id,
      authorId: this.electionCards[this.$route.params.id].authorId,
      title: this.electionCards[this.$route.params.id].title,
      subtitle: this.electionCards[this.$route.params.id].subtitle,
      textInformation: this.electionCards[this.$route.params.id].textInformation,
      HowManyCandidates: 1,
      HowManyCandidatesCanWin: 1,
      HowManyVotesDoVotersHave: 1,
      HowMuchOfAPercentageMustCandidatesNeedToWin: 20,
      HowManyElectionRounds: 1,
      HowManyVoters: 1,
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
    SaveElectionOptions(e)
    {
      e.preventDefault();
      this.ChangeElectionOptionsStateAction({
        HowManyCandidates: 1,
        HowManyCandidatesCanWin: 1,
        HowManyVotesDoVotersHave: 1,
        HowMuchOfAPercentageMustCandidatesNeedToWin: 20,
        HowManyElectionRounds: 1,
        HowManyVoters: 1,
        ElectionId: 1,
      })
    }
  },
  created:
    {

    }
}
</script>

<style scoped>

</style>
