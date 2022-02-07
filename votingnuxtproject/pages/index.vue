<template>
  <div>
    <v-app>
      <v-main>
        <v-row>
          <v-col>
            <ElectionCards v-for="card in electionCards"
                           :key="card.id"
                           :cols="3"
                           :id="card.id"/>
          </v-col>
        </v-row>
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

