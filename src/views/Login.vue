<template>
  <v-container test fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm7 md6 lg4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form v-model="valid">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                required
                prepend-icon="email"
                label="E-mail"
                type="text"
              ></v-text-field>
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                prepend-icon="lock"
                label="Password"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              :loading="loading"
              :disabled="!valid || loading"
              @click.stop="login"
              color="primary"
            >Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      valid: false,
      email: "",
      emailRules: [
        val => !!val || "Email is required",
        val => /\S+@\S+\.\S{2,}/.test(val) || "Email should be valid"
      ],
      password: "",
      passwordRules: [
        val => !!val || "Password is required",
        val => val.length >= 6 || "Enter at least 6 characters"
      ]
    };
  },
  computed: {
    ...mapGetters(["loading"])
  },
  methods: {
    login() {
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password
        })
        .then(() => this.$router.push("/"))
        .catch(error => console.log(error));
    }
  }
};
</script>

<style>
</style>
