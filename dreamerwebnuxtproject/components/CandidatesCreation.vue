<template>
  <div>
    <v-app>
      <v-main>
        <v-card>
          <v-divider></v-divider>
          <v-list
            three-line
            subheader
          >
            <v-subheader>Election Candidates</v-subheader>
            <v-row dense>
              <v-col  v-for="candidate in this.$store.set('Candidates/GetElectionsCandidatesFromElectionId', this.$store.get('Elections/GetOneElections', this.$route.params.id))"
                      :key="candidate.id"
                      :cols="3">

                <v-card
                  class="mx-auto"
                  max-width="500"
                  outlined
                  color="red lighten-1"
                >
                  <v-list color="red lighten-1">
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title class="text-h5 mb-1">{{candidate.candidateName}}</v-list-item-title>
                        <v-list-item-subtitle>{{candidate.candidateDescription}}</v-list-item-subtitle>
                        <v-list-item v-for="issue in this.$store.get('Candidates/GetIssuesFromCandidates', candidate.Issues)"
                                     :key="issue.id"
                        >
                          <v-list-item-content>
                            <v-list-item-title>Issue: {{issue.issueName}}</v-list-item-title>
                            <v-list-item-subtitle>{{issue.issueDescription}}</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list-item-content>
                      <v-list-item-avatar
                        size="80"
                        color="grey"
                      ></v-list-item-avatar>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-col>
            </v-row>
          </v-list>
        </v-card>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";

export default {
  name: "Elections-Creation",

  data: () => ({
    candidateName: "",
    candidateDescription: "",
  }),
  computed: {
    ...mapState("Candidates",["ElectionCandidates"]),
    ...mapState("Options",["ElectionOptions"]),
    ...mapState("Elections",["ElectionsVariables"]),
    ...mapState("Users",["Users"]),
    ...mapGetters("Elections", ["GetOneElections"]),
    ...mapGetters("Candidates", ["GetElectionsCandidatesFromElectionId", "GetIssuesFromCandidates"])
  },
  methods: {
    ...mapActions(['FetchElections','FetchParty','FetchElectionCandidates','FetchUsers','FetchSiteOptions','AddElectionAction', "ChangeOptionSelectedStateAction"]),
    findCardId()
    {
      const electionCardRouteId = this.$route.params.id.toString()
      return parseInt(electionCardRouteId)
    },
    SaveElectionOptions(e)
    {
      e.preventDefault();
      this.$store.set('ChangeOptionSelectedStateAction', {
        id: parseInt(this.$route.params.id.toString()),
        authorId: 0,
        candidateName: this.$data.candidateName,
        candidateDescription: this.$data.candidateDescription,
      })
    }
  },
  created()
  {
    this.$store.set('FetchElections!', null);
    this.$store.set('FetchParty!', null);
    this.$store.set('FetchElectionCandidates!', null);
    this.$store.set('FetchSiteOptions!', null);
    this.$store.set('FetchUsers!', null);
  }
}
</script>

<style scoped>

</style>

