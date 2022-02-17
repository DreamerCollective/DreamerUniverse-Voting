<template>
  <div>
    <v-app>
      <v-main>
        <v-row dense>
          <v-col v-for="card in GetElectionCards(0)"
                 :key="card.id"
                 :cols="3">
            <v-card
              class="mx-auto"
              max-width="500"
              outlined
              color="red lighten-1"
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <div>
                    Id {{GetElectionCardsById(card.id).id}}
                  </div>
                  <div class="text-overline mb-4">
                    By {{GetUserAuthorOfElectionCardsById(card.authorId).username}}
                  </div>
                  <v-list-item-title class="text-h5 mb-1">
                    {{GetElectionCardsById(card.id).title}}
                  </v-list-item-title>
                  <v-list-item-subtitle>{{GetElectionCardsById(card.id).subtitle}}</v-list-item-subtitle>
                  <v-list-item-subtitle>{{GetElectionCardsById(card.id).textInformation}}</v-list-item-subtitle>
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
    ...mapState(["electionCards", "electionCandidates"]),
    ...mapGetters(["GetElectionCardsById", "GetElectionCards", "GetUserAuthorOfElectionCardsById",])
  },
  methods:{
    ...mapActions(["FetchElectionCards"]),
  },
  created() {
    this.FetchElectionCards()
  }

}
</script>

<style scoped>


</style>
