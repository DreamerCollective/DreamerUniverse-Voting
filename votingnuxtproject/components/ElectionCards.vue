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
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <div>
                    Id {{card.id}}
                  </div>
                  <div class="text-overline mb-4">
                    By {{GetAuthor(card.authorId)}}
                  </div>
                  <v-list-item-title class="text-h5 mb-1">
                    {{card.title}}
                  </v-list-item-title>
                  <v-list-item-subtitle> {{card.subtitle}}</v-list-item-subtitle>
                  <v-list-item-subtitle> {{card.textInformation}}</v-list-item-subtitle>
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
      </v-main>
    </v-app>
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex';
export default
{
  name: "ElectionCards",
  computed: {
    ...mapState("Elections",["electionCards"]),
    ...mapGetters( {GetAuthor: "Users/GetUserAuthorOfElectionCardsById"}),
  },
  methods:{
    ...mapActions(['FetchElectionCards','FetchParty','FetchElectionCandidates','FetchUsers','FetchSiteOptions']),
    GetUserAuthorForElection(AuthorId)
    {
      return this.GetUserAuthorOfElectionCardsById(AuthorId)
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
