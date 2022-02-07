<template>
  <div>
    {{ GetElectionCardsById($route.params.id)}}
    <ElectionsCreation />
    <ElectionCandidates />

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
