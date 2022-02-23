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
              v-model="electionCard.HowManyCandidates"
              color="red"
              label="How Many Candidates?"
              hint="Be honest"
              :min="this.electionMetaOptions[0].minRange"
              :max="this.electionMetaOptions[0].maxRange"
              thumb-label
            >
              <template v-slot:append>
                <v-text-field
                  v-model="electionCard.HowManyCandidates"
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
            </v-slider>
          </v-list-item>
          <v-list-item>
            <v-slider
              v-model="electionCard.HowManyCandidatesCanWin"
              color="red"
              label="How Many Candidates Can Win?"
              hint="Be honest"
              :min="this.electionMetaOptions[1].minRange"
              :max="this.electionMetaOptions[1].maxRange"
              thumb-label
            >
              <template v-slot:append>
                <v-text-field
                  v-model="electionCard.HowManyCandidatesCanWin"
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
            </v-slider>
          </v-list-item>
          <v-list-item>
            <v-slider
              v-model="electionCard.HowManyVotesDoVotersHave"
              color="red"
              label="How Many Votes Do Voters Have?"
              hint="Be honest"
              :min="this.electionMetaOptions[2].minRange"
              :max="this.electionMetaOptions[2].maxRange"
              thumb-label
            >
              <template v-slot:append>
                <v-text-field
                  v-model="electionCard.HowManyVotesDoVotersHave"
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
            </v-slider>
          </v-list-item>
          <v-list-item>
            <v-slider
              v-model="electionCard.HowMuchOfAPercentageMustCandidatesNeedToWin"
              color="red"
              label="How Much Of A Percentage Must Candidates Need To Win?"
              hint="Be honest"
              :min="this.electionMetaOptions[3].minRange"
              :max="this.electionMetaOptions[3].maxRange"
              thumb-label
            >
              <template v-slot:append>
                <v-text-field
                  v-model="electionCard.HowMuchOfAPercentageMustCandidatesNeedToWin"
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
            </v-slider>
          </v-list-item>
          <v-list-item>
            <v-slider
              v-model="electionCard.HowManyElectionRounds"
              color="red"
              label="How Many Election Rounds?"
              hint="Be honest"
              :min="this.electionMetaOptions[4].minRange"
              :max="this.electionMetaOptions[4].maxRange"
              thumb-label
            >
              <template v-slot:append>
                <v-text-field
                  v-model="electionCard.HowManyElectionRounds"
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
            </v-slider>
          </v-list-item>
          <v-list-item>
            <v-slider
              v-model="electionCard.HowManyVoters"
              color="red"
              label="How Many Voters?"
              hint="Be honest"
              :min="this.electionMetaOptions[5].minRange"
              :max="this.electionMetaOptions[5].maxRange"
              thumb-label
            >
              <template v-slot:append>
                <v-text-field
                  v-model="electionCard.HowManyVoters"
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
            </v-slider>
          </v-list-item>
          <v-list-item>
            <v-checkbox
              v-model="electionCard.CanYouVoteForParties"
              label="Can You Vote For Parties?"></v-checkbox>
          </v-list-item>
          <v-list-item>
            <v-checkbox
              v-model="electionCard.DoVotesTransfer"
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
      id: null,
      authorId: 0,
      title: "",
      subtitle: "",
      textInformation: "",
      HowManyCandidates: 1,
      HowManyCandidatesCanWin: 1,
      HowManyVotesDoVotersHave: 1,
      HowMuchOfAPercentageMustCandidatesNeedToWin: 10,
      HowManyElectionRounds: 1,
      HowManyVoters: 1,
      CanYouVoteForParties: false,
      DoVotesTransfer: false,
      specificElectionCandidates: [
        {
          electionCandidatesId: 0,
          votedFor: false,
        },
      ],
      voters: [
        {
          UserId: 0,
          hasVoted: false,
        }
      ]
    },
  }),
  computed: {
    ...mapState(["electionMetaOptions", "electionCards", "electionCandidates", "users"]),
    ...mapGetters(["GetElectionMetaOptions"])
  },
  methods: {
    ...mapActions([
      "ChangeOptionSelectedStateAction", "FetchElectionCards", "FetchSiteOptions"
    ]),
    SaveElectionOptions(e)
    {
      e.preventDefault();
      this.ChangeOptionSelectedStateAction(this.$data.electionCard)
    }

  },
  props: {
    electionCardId: String,
  },
  created()
  {
    this.FetchElectionCards()
    this.FetchSiteOptions()
  }
}
</script>

<style scoped>

</style>
