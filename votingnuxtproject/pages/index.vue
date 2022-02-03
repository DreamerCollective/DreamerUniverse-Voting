<template>
  <div>
    <v-row>
      <v-col>
        <ElectionCards v-for="card in $data.electionCards"
                       :key="card.id"
                       :cols="3"
                       :election-cards="electionCards"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default
{
  name: "index",
  data() {
    return {
      electionCards: this.$store.state.electionCards,
      electionCandidates: this.$store.state.electionCandidates,
      users: this.$store.state.users,
    }
  }
}
</script>
<style scoped>


</style>

