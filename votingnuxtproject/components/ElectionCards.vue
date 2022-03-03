<template>
  <div>
    <v-app>
      <v-main>
        <v-row dense>
          <v-col v-for="card in electionCards"
                 :key="card.id"
                 :cols="3">
            <v-card
              class="mx-auto"
              outlined
              color="red lighten-1"
              max-width="500"
              max-height="500"
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <div>
                    Id {{card.id}}
                  </div>
                  <div class="text-overline mb-4">
                    By {{GetAuthor(card.ElectionCard.authorId)}}
                  </div>
                  <v-list-item-title class="text-h5 mb-1">
                    {{card.ElectionCard.title}}
                  </v-list-item-title>
                  <v-list-item-subtitle class="text-h7 mb-1">
                    {{card.ElectionCard.subtitle}}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle> {{card.ElectionCard.textInformation}}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar
                  size="80"
                  color="grey"
                ></v-list-item-avatar>
              </v-list-item>
              <v-row dense>
                <v-card-actions>
                  <v-btn
                    outlined
                    rounded
                    text
                  >
                    <Nuxt-link :to="`/ElectionCard/${card.id}`">
                      Edit
                    </Nuxt-link>
                  </v-btn>
                </v-card-actions>
               </v-row>
            </v-card>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col>
            <v-card
              class="mx-auto"
              outlined
              color="red lighten-1"
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <div>
                    Id {{electionCards.length}}
                  </div>
                  <div class="text-overline mb-4">
                    By Unknown
                  </div>
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
                </v-list-item-content>
                <v-list-item-avatar
                  size="80"
                  color="grey"
                ></v-list-item-avatar>
              </v-list-item>
              <v-row dense>
                <v-card-actions>
                  <v-btn
                    outlined
                    rounded
                    text
                    @click="AddElectionOptions"
                  >
                      Add
                  </v-btn>
                </v-card-actions>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex';
export default
{
  name: "ElectionCards",
  data: () => ({
    title: "",
    subtitle: "",
    textInformation: "",
  }),
  computed: {
    ...mapState("Elections",["electionCards"]),
    ...mapGetters({GetAuthor: 'Users/GetUserAuthorOfElectionCardsById'}),
  },
  methods:{
    ...mapActions(['FetchElectionCards','FetchParty','FetchElectionCandidates','FetchUsers','FetchSiteOptions','AddElectionAction']),
    AddElectionOptions(e)
    {
      e.preventDefault();
      const electionCard = {
        id: this.electionCards.length,
        authorId: 0,
        title: this.$data.title,
        subtitle: this.$data.subtitle,
        textInformation: this.$data.textInformation,
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
      }
      this.AddElectionAction(electionCard)
    },
  },
  created()
  {
    this.FetchElectionCards();
    this.FetchParty();
    this.FetchElectionCandidates();
    this.FetchSiteOptions();
    this.FetchUsers();
  }

}
</script>

<style scoped>


</style>
