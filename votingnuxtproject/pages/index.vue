<template>
  <div>
    <v-app>
      <v-main>
        <ElectionCards/>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex';
export default
{
  name: "index",
  computed: {
    ...mapState(['electionCards']),
  },
  methods: {
    ...mapActions(['FetchElectionCards','FetchParty','FetchElectionCandidates','FetchUsers','FetchSiteOptions'])
  },
  created()
  {
    this.FetchElectionCards();
    this.FetchParty();
    this.FetchElectionCandidates();
    this.FetchUsers();
    this.FetchSiteOptions();
  }
}
</script>
<style scoped>


</style>

