<template>
  <div>
    {{ ReturnElectionCardId($route.params.id)}}
    <ElectionsCreation />
    <ElectionCandidates />

  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      ReturnElectionCardId(id) {
        return this.$store.getters.GetElectionCardsById(id)
      },
    }
  }
}
</script>

<style scoped>

</style>
