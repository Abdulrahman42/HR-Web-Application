<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex md12>
        <div class="text-xs-right"></div>
        <material-card color="red" title="Setting">
          <form>
            <v-text-field
              v-model="name"
              :error-messages="nameErrors"
              :counter="15"
              label="Name"
              required
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="form.oldPassword"
              :error-messages="emailErrors"
              label="Password Lama"
              required
              @input="$v.password.$touch()"
              @blur="$v.password.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="form.newPassword"
              :error-messages="emailErrors"
              label="Password Baru"
              required
              @input="$v.password.$touch()"
              @blur="$v.password.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="form.confirmPassword"
              :error-messages="emailErrors"
              label="Konfirmasi Password"
              required
              @input="$v.password.$touch()"
              @blur="$v.password.$touch()"
            ></v-text-field>
            <v-snackbar v-model="snackbar" :timeout="timeout" :right="'right'" :top="'top'">
              {{ text }}
              <v-btn small color="success" text @click="snackbar = false">Close</v-btn>
            </v-snackbar>
            <v-btn small color="success" @click="addClient">Submit</v-btn>
          </form>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import materialCard from "~/components/material/AppCard";
export default {
  layout: "dashboard",
  components: {
    materialCard
  },
  data() {
    return {
      form: {
        name: "",
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
      },
      snackbar: false,
      timeout: 3000,
      text: "Data Berhasil di tambah"
    };
  },
  methods: {
    addClient() {
      this.snackbar = true;
    }
  }
};
</script>

<style>
</style>