<template>
  <div>
    <v-app>
      <v-main>
        <v-row dense>
          <v-col v-for="card in ElectionParties"
                 :key="card.id"
                 :cols="3">
            <v-card
              class="mx-auto"
              outlined
              color="red lighten-1"
              max-width="500"
              max-height="500"
            >
              <v-list color="red lighten-1">
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="text-overline mb-4" v-for="Author in GetUserAuthorOfElectionCardsById(card.PartyCard.authorId)">
                      By {{Author.Username}}
                    </div>
                    <v-list-item-title class="text-h5 mb-1">
                      {{card.PartyCard.PartyName}}
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-h7 mb-1">
                      {{card.PartyCard.PartyDescription}}
                    </v-list-item-subtitle>
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
                    >
                      <Nuxt-link :to="`/PartyCardMainPage/PartyCard/${card.id}`">
                        Edit
                      </Nuxt-link>
                    </v-btn>
                  </v-card-actions>
                  <v-card-actions>
                    <v-btn
                      outlined
                      rounded
                      text
                      @click="DeletePartyAction(card)"
                    >
                      Delete
                    </v-btn>
                  </v-card-actions>
                </v-row>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col>
            <v-card
              class="mx-auto"
              outlined
              color="red lighten-1"
            >
              <v-list color="red lighten-1">
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="text-overline mb-4">
                      By Unknown
                    </div>
                    <v-list-item>
                      <v-text-field
                        label="Election Name"
                        placeholder="Please type the name of the election"
                        v-model="PartyName"
                      ></v-text-field>
                    </v-list-item>
                    <v-list-item>
                      <v-text-field
                        label="Election Subtitle"
                        placeholder="Please type the election subtitles"
                        v-model="PartyDescription"
                      ></v-text-field>
                    </v-list-item>
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
                      @click="AddPartyOptions"
                    >
                      Add
                    </v-btn>
                  </v-card-actions>
                </v-row>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex';
import nanoid from "nanoid"
export default
{
  name: "ElectionCards",
  data: () => ({
    PartyName: "",
    PartyDescription: "",
  }),
  computed: {
    ...mapState("Parties",["ElectionParties"]),
    ...mapGetters("Users", ['GetUserAuthorOfElectionCardsById']),
    ...mapGetters("Elections", ['GetElections']),
  },
  methods:{
    ...mapActions(['FetchElections','FetchParty','FetchElectionCandidates','FetchUsers','FetchSiteOptions','AddPartyAction', "DeletePartyAction"]),
    AddPartyOptions(e)
    {
      e.preventDefault();
      this.AddPartyAction({
        id: 0,
        authorId: 0,
        PartyName: this.$data.PartyName,
        PartyDescription: this.$data.PartyDescription,
      })
    },
  },
  created()
  {
    this.FetchElections();
    this.FetchParty();
    this.FetchElectionCandidates();
    this.FetchSiteOptions();
    this.FetchUsers();
  }

}
</script>

<style scoped>


</style>
