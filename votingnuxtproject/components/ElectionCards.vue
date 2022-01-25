<template>
  <div>
    <v-app id="app">
      <v-container>
        <v-row dense>
          <v-col  v-for="card in $data.electionCards"
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
                  <div class="text-overline mb-4">
                    By {{card.authorId}}
                  </div>
                  <v-list-item-title class="text-h5 mb-1">
                    {{card.title}}
                  </v-list-item-title>
                  <v-list-item-subtitle>{{card.subtitle}}</v-list-item-subtitle>
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
                    @click="card.reveal = true"
                  >
                    More
                  </v-btn>
                </v-card-actions>
               </v-row>
              <v-expand-transition>
                <v-card
                  v-if="card.reveal"
                  class="transition-fast-in-fast-out v-card--reveal"
                  color ="red darken-3"
                  style="height: 150%;"
                >
                  <v-card-text class="pb-0">
                    <p class="text-h4 text--primary">
                      {{card.title}}
                    </p>
                    <p> {{card.textInformation }}</p>

                  </v-card-text>
                  <v-card-actions class="pt-0">
                    <v-btn
                      text
                      color="white"
                      @click="card.reveal = false"
                    >
                      Close
                    </v-btn>
                    <v-card-actions>
                      <v-btn
                        outlined
                        rounded
                        text
                        @click="card = true"
                      >
                        <Nuxt-link :to="`/Elections/_id/${card.id}`">
                          Edit
                        </Nuxt-link>
                      </v-btn>
                    </v-card-actions>
                  </v-card-actions>
                </v-card>
              </v-expand-transition>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import axios from "axios"
export default
{
  name: "ElectionCards",
  data() {
    return {
      electionCards: this.$store.state.electionCards,
      electionCandidates: this.$store.state.electionCandidates,
      users: this.$store.state.users,
    }
  },
  computed: {
    ReturnElectionCardId(id)
    {
      return this.$store.getters.GetElectionCardsById(id)
    },
    ReturnElectionCardOptionSelectedStateById(id)
    {
      return this.$store.getters.GetElectionCardOptionSelectedState(id)
    }
  }

}
</script>

<style scoped>

</style>
