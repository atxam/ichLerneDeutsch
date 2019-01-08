<template>
  <div>
    <!-- TOOLBAR -->
    <v-toolbar color="primary" dark app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" class="pointer">Ich Lerne Deutsch</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="(item,i) in menuItems" :key="i" :to="item.url" flat>
          <v-icon medium class="mr-2">{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
        <v-btn v-if="getUser" @click="dialog = true" flat>
          <v-icon medium class="mr-2">exit_to_app</v-icon>Logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <!-- NAVBAR -->
    <v-navigation-drawer v-model="drawer" temporary app>
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.url" @click>
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="getUser" @click="dialog = true">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <!-- DIALOG FROM EXIT -->
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Confirm</v-card-title>
        <v-card-text>Do you really want to exit?</v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="success" @click="logout">Exit</v-btn>
          <v-btn color="primarsy" @click="dialog = false">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      dialog: false,
      drawer: false,
      menuItem: [
        {
          title: "Books",
          url: "/books",
          icon: "bookmarks"
        },
        {
          title: "Login",
          url: "/login",
          icon: "input"
        },
        {
          title: "Registration",
          url: "/register",
          icon: "person_add"
        },
        {
          title: "Profile",
          url: "/profile",
          icon: "person"
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["getUser"]),
    menuItems() {
      if (this.getUser) {
        return [
          {
            title: "Books",
            url: "/books",
            icon: "bookmarks"
          },
          {
            title: "Profile",
            url: "/profile",
            icon: "person"
          }
        ];
      }
      return [
        {
          title: "Books",
          url: "/books",
          icon: "bookmarks"
        },
        {
          title: "Login",
          url: "/login",
          icon: "input"
        },
        {
          title: "Registration",
          url: "/register",
          icon: "person_add"
        }
      ];
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
      this.drawer = false;
      this.dialog = false;
    }
  }
};
</script>

<style>
.pointer {
  cursor: pointer;
}
</style>
