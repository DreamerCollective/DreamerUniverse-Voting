<template>
  <div>
    <v-app id="app">
      <v-card
        class="mx-auto"
        max-width="500"
        outlined
        color="red lighten-1"
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">
              By {{ReturnUserAuthorOfElectionCardsById}}
            </div>
            <v-list-item-title class="text-h5 mb-1">
              {{ElectionCards.title}}
            </v-list-item-title>
            <v-list-item-subtitle>{{ElectionCards.subtitle}}</v-list-item-subtitle>
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
              @click="new RevealCardAction({cardid: ElectionCards.id})"
            >
              More
            </v-btn>
          </v-card-actions>
          <v-card-actions>
            <v-btn
              outlined
              rounded
              text
              @click="electionCards = true"
            >
              <Nuxt-link :to="`/ElectionCard/${ElectionCards.id}`">
                Edit
              </Nuxt-link>
            </v-btn>
          </v-card-actions>
         </v-row>
        <v-expand-transition>
          <v-card
            v-if="ElectionCards.reveal"
            class="transition-fast-in-fast-out v-card--reveal"
            color ="red darken-3"
            style="height: 150%;"
          >
            <v-card-text class="pb-0">
              <p class="text-h4 text--primary">
                {{ElectionCards.title}}
              </p>
              <p> {{ElectionCards.textInformation }}</p>

            </v-card-text>
            <v-card-actions class="pt-0">
              <v-btn
                text
                color="white"
                @click="new RevealCardAction({cardid: ElectionCards.id})"
              >
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-expand-transition>
      </v-card>

    </v-app>
  </div>
</template>

<script>
export default
{
  name: "ElectionCards",
  props: ["ElectionCards"],
  data() {
    return {
      electionCards: this.$store.state.electionCards,
      electionCandidates: this.$store.state.electionCandidates,
      users: this.$store.state.users,
    }
  },
  computed: {
    ReturnElectionCardId() {
      return this.$store.getters.GetElectionCardsById
    },
    ReturnUserAuthorOfElectionCardsById() {
      return this.$store.getters.GetUserAuthorOfElectionCardsById[this.$data.electionCards.authorId]
    },
  },
  methods:{
    RevealCardAction(cardId)
    {
      this.$store.dispatch('RevealCardAction', cardId)
    }
  }

}
</script>

<style scoped>

</style>
