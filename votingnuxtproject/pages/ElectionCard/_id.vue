<template>
  <div>
    <v-main>
      <v-app>
        {{ /*GetElectionCardsById($route.params.)*/}}

        <ElectionsCreation :election-card-id="$route.params.id"/>
        <ElectionCandidates />
        <ElectionVoters />
        <ElectionsEvents />
        <ElectionsResults />
      </v-app>
    </v-main>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  name: "index",

  computed: {
    ...mapGetters(["GetElectionCardsById"])
  }
}
</script>

<style scoped>

</style>
