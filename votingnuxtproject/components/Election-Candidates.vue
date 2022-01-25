<template>
  <div>
    <v-app>
      <v-divider></v-divider>
      <v-list
        three-line
        subheader
      >
        <v-subheader>Election Candidates</v-subheader>
        <v-row dense>
          <v-col  v-for="candidate in $data.electionCandidates"
                  :key="candidate.id"
                  :cols="3">

            <v-card
              class="mx-auto"
              max-width="500"
              outlined
              color="red lighten-1"
            >
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="text-h5 mb-1">{{candidate.candidateName}}</v-list-item-title>
                  <v-list-item-subtitle>{{candidate.candidateDescription}}</v-list-item-subtitle>
                  <v-list-item v-for="issue in candidate.issues"
                               :key="issue.id"
                  >
                    <v-list-item-content>
                      <v-list-item-title>Issue: {{issue.id + 1}} {{issue.issueName}}</v-list-item-title>
                      <v-list-item-subtitle>{{issue.issueDescription}}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item-title>Vote For</v-list-item-title>
                  <v-checkbox v-model="candidate.votedFor">
                  </v-checkbox>
                </v-list-item-content>
                <v-list-item-avatar
                  size="80"
                  color="grey"
                ></v-list-item-avatar>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
      </v-list>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "Election-Candidates",
  data() {
    return {
      electionCandidates: this.$store.state.electionCandidates,
    }
  },
}
</script>

<style scoped>

</style>
