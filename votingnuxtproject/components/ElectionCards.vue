<template>
  <v-app id="app">
    <v-container>
      <v-row dense>
        <v-col  v-for="card in $data.electionCards"
              :key="card.id"
              :cols="3">

          <v-card
            class="mx-auto"
            max-width="500"
            outlined
            color="red lighten-1"
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-4">
                  By {{card.author}}
                </div>
                <v-list-item-title class="text-h5 mb-1">
                  {{ card.title}}
                </v-list-item-title>
                <v-list-item-subtitle>{{ card.subtitle}}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-avatar
                size="80"
                color="grey"
              ></v-list-item-avatar>
            </v-list-item>
            <v-row dense>
              <v-card-actions>
                <v-btn
                  outlined
                  rounded
                  text
                  @click="card.reveal = true"
                >
                  More
                </v-btn>
              </v-card-actions>
                <v-dialog
                  fullscreen
                  hide-overlay
                  transition="dialog-bottom-transition"
                  v-model="card.dialog"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-card-actions>
                      <v-btn
                        outlined
                        rounded
                        text
                        @click="card.dialog = true"
                        v-bind = "attrs"
                        v-on="on"

                      >
                        Edit
                      </v-btn>
                    </v-card-actions>
                  </template>
                <v-card>
                  <v-toolbar
                    dark
                    color="primary"
                  >
                    <v-btn
                      icon
                      dark
                      @click="card.dialog = false"
                    >
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Settings</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                      <v-btn
                        dark
                        text
                        @click="card.dialog = false"
                      >
                        Save
                      </v-btn>
                    </v-toolbar-items>
                  </v-toolbar>
                  <v-list
                    three-line
                    subheader
                  >
                    <v-subheader>Election Options</v-subheader>
                    <v-list>
                      <v-list-group
                      v-for="options in card.electionOptions"
                      :key="options.id"
                      :disabled="options.hide">

                        <template v-slot:activator >
                          <v-list-item-content>
                            <v-list-item-title v-text="options.title" ></v-list-item-title>
                            <v-checkbox v-model="options.selected"></v-checkbox>
                          </v-list-item-content>
                        </template>
                        <v-list-item v-for="optionChild in options.SystemOptions"
                                     :key="optionChild.title"
                                     v-model="optionChild.selected"
                                     :disabled="optionChild.hide"
                        >
                          <v-list-item-title v-text="optionChild.title"></v-list-item-title>
                          <v-checkbox v-model="optionChild.selected" $Click="FlipHideElectionOptions()"></v-checkbox>
                        </v-list-item>
                      </v-list-group>
                    </v-list>
                  </v-list>

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
                  <v-divider></v-divider>
                  <v-list
                    three-line
                    subheader
                  >
                    <v-subheader>Election Events</v-subheader>
                  </v-list>
                  <v-divider></v-divider>
                  <v-list
                    three-line
                    subheader
                  >
                    <v-subheader>Election Results</v-subheader>
                  </v-list>
                </v-card>
              </v-dialog>
             </v-row>
            <v-expand-transition>
              <v-card
                v-if="card.reveal"
                class="transition-fast-in-fast-out v-card--reveal"
                color ="red darken-3"
                style="height: 150%;"
              >
                <v-card-text class="pb-0">
                  <p class="text-h4 text--primary">
                    {{ card.title}}
                  </p>
                  <p> {{ card.textInformation }}</p>

                </v-card-text>
                <v-card-actions class="pt-0">
                  <v-btn
                    text
                    color="white"
                    @click="card.reveal = false"
                  >
                    Close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios"
export default
{
  name: "ElectionCards",
  data() {
    return {
      electionCards: this.$store.state.electionCards,
      electionCandidates: this.$store.state.electionCandidates,
      users: this.$store.state.users,
    }
  },
  computed: {
    ReturnElectionCardId(id)
    {
      return this.$store.getters.GetElectionCardOptionSelectedState(id)
    },
    ReturnElectionCardOptionSelectedStateById()
    {

    }
  }

}
</script>

<style scoped>

</style>
