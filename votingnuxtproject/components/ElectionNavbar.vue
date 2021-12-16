<template>
  <v-app id="voting">
    <v-card>
      <v-tabs
        v-model="tab"
        background-color="red lighten-2"
        dark
      >
        <v-tab
          v-for="n in length"
          :key="n"
        >
          Item {{ n }}
        </v-tab>
      </v-tabs>
    </v-card>
    <v-card>
      <v-tabs
        background-color="red lighten-2"
        dark
      >
        <v-tab>
          Election Creation
        </v-tab>
        <v-tab>
          Election Events
        </v-tab>
        <v-tab>
          Election Management
        </v-tab>
        <v-tab>
          Elections Results
        </v-tab>
      </v-tabs>
    </v-card>

    <v-main>
      <!--  -->
    </v-main>
  </v-app>
</template>

<script>
export default {
name: "ElectionNavbar",
    data: () => ({
      length: 4,
      tab: null,
    }),
    watch: {
      length (val) {
        this.tab = val - 1
      },
    },
}
</script>

<style scoped>

</style>
