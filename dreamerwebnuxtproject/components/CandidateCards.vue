<template>
  <div>
    <v-app>
      <v-main>
        <v-row dense>
          <v-col v-for="card in this.$store.get('Elections/ElectionCandidates')"
                 :key="card.id"
                 :cols="3">
            <v-card
              class="mx-auto"
              outlined
              color="red lighten-1"
              max-width="500"
              max-height="500"
            >
              <v-list color="red lighten-1">
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="text-overline mb-4" v-for="Author in this.$store.get('GetUserAuthorOfElectionCardsById', card.CandidateCard.authorId)">
                      By {{Author.Username}}
                    </div>
                    <v-list-item-title class="text-h5 mb-1">
                      {{card.CandidateCard.candidateName}}
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-h7 mb-1">
                      {{card.CandidateCard.candidateDescription}}
                    </v-list-item-subtitle>
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
                      <Nuxt-link :to="`/CandidateCardMainPage/CandidateCard/${card.id}`">
                        Edit
                      </Nuxt-link>
                    </v-btn>
                  </v-card-actions>
                  <v-card-actions>
                    <v-btn
                      outlined
                      rounded
                      text
                      @click="this.$store.set('DeleteCandidateAction', card)"
                    >
                      Delete
                    </v-btn>
                  </v-card-actions>
                </v-row>
              </v-list>
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
              <v-list color="red lighten-1">
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="text-overline mb-4">
                      By Unknown
                    </div>
                    <v-list-item>
                      <v-text-field
                        label="Candidate Name"
                        placeholder="Please type the name of the election"
                        v-model="title"
                      ></v-text-field>
                    </v-list-item>
                    <v-list-item>
                      <v-text-field
                        label="Candidate Description"
                        placeholder="Please type the election subtitles"
                        v-model="subtitle"
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
                      @click="AddCandidate"
                    >
                      Add
                    </v-btn>
                  </v-card-actions>
                </v-row>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex';
import nanoid from "nanoid"
export default
{
  name: "ElectionCards",
  data: () => ({
    title: "",
    subtitle: "",
  }),
  computed: {
  },
  methods:{
    AddCandidate(e)
    {
      e.preventDefault();
      this.$store.set('AddCandidateAction', {
        id: 0,
        authorId: 0,
        candidateName: this.$data.title,
        candidateDescription: this.$data.subtitle,
        Party: 0,
        Issues: [0,1]
      })
    },
  },
  created()
  {
    this.$store.set('FetchElections', null);
    this.$store.set('FetchParty', null);
    this.$store.set('FetchElectionCandidates', null);
    this.$store.set('FetchSiteOptions', null);
    this.$store.set('FetchUsers', null);
  }

}
</script>

<style scoped>

</style>
