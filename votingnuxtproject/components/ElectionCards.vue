<template>
  <v-app id="app">
    <v-container>
      <v-row dense>
        <v-col  v-for="card in electionCards"
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

                  </v-list>
                  <v-divider></v-divider>
                  <v-list
                    three-line
                    subheader
                  >
                    <v-subheader>Election</v-subheader>
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
export default {
name: "ElectionCards",
    data: () => ({
      electionCards:[
        {id: 1, author: "Example User", title: "Example Election", subtitle: "Example Subtitle", textInformation: "Example text to so the underlying example long text information",
          reveal: false, dialog: false, notification: false, sound: false, widgets: false

        }
      ]
    }),
}
</script>

<style scoped>

</style>
