<template>
  <div>
    <v-main>
      <v-app>
        {{ /*GetElectionCardsById($route.params.)*/}}

        <ElectionsCreation/>
        <ElectionCandidates />
        <ElectionVoters />
        <ElectionsEvents />
        <ElectionsResults />
      </v-app>
    </v-main>
  </div>
</template>

<script>
export default {
  name: "index",
}
</script>

<style scoped>

</style>
