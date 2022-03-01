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
            <v-text-field
              label="Election Name"
              placeholder="Please type the name of the election"
              v-model="title"
            ></v-text-field>
          </v-list-item>
          <v-list-item>
            <v-text-field
              label="Election Subtitle"
              placeholder="Please type the election subtitles"
              v-model="subtitle"
            ></v-text-field>
          </v-list-item>
          <v-list-item>
            <v-text-field
              label="Election Information"
              placeholder="Please type any election information"
              v-model="textInformation"
            ></v-text-field>
          </v-list-item>
          <v-list-item>
            <v-slider
              v-model="HowManyCandidates"
              color="red"
              label="How Many Candidates?"
              hint="Be honest"
              :min="1"
              :max="20"
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
              :min="1"
              :max="10"
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
              :min="1"
              :max="10"
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
              :min="10"
              :max="70"
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
              :min="1"
              :max="10"
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
              :min="1"
              :max="1000"
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
              v-model="CanYouVoteForParties"
              label="Can You Vote For Parties?"></v-checkbox>
          </v-list-item>
          <v-list-item>
            <v-checkbox
              v-model="DoVotesTransfer"
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
      const electionCardRouteId = this.$route.params.id.toString()
      const electionCard = {
        id: parseInt(electionCardRouteId),
        authorId: 0,
        title: this.$data.title,
        subtitle: this.$data.subtitle,
        textInformation: this.$data.textInformation,
        HowManyCandidates: this.$data.HowManyCandidates,
        HowManyCandidatesCanWin: this.$data.HowManyCandidatesCanWin,
        HowManyVotesDoVotersHave: this.$data.HowManyVotesDoVotersHave,
        HowMuchOfAPercentageMustCandidatesNeedToWin: this.$data.HowMuchOfAPercentageMustCandidatesNeedToWin,
        HowManyElectionRounds: this.$data.HowManyElectionRounds,
        HowManyVoters: this.$data.HowManyVoters,
        CanYouVoteForParties: this.$data.CanYouVoteForParties,
        DoVotesTransfer: this.$data.DoVotesTransfer,
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
      }
      this.ChangeOptionSelectedStateAction(electionCard)
    }

  },
  created()
  {

  }
}
</script>

<style scoped>

</style>
