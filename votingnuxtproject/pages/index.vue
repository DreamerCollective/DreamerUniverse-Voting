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
    ...mapState(['electionCards'])

  }


}
</script>
<style scoped>


</style>

