<template>
  <div>
    <v-app>
      <v-main>
        <PartyCards/>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default
{
  name: "index",
  methods:{
    ...mapActions(['FetchElections','FetchParty','FetchElectionCandidates','FetchUsers','FetchSiteOptions']),
  },
  created() {
    this.FetchUsers()
  }
}
</script>
<style scoped>


</style>
