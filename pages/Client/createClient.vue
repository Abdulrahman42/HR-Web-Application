<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex md12 sm12 lg4></v-flex>
      <v-flex md12 sm12 lg4>
        <material-card color="green" title="Tambah Client">
          <form>
            <v-text-field
              v-model="form.name"
              :error-messages="nameErrors"
              :counter="25"
              label="Name"
              required
              @input="$v.form.name.$touch()"
              @blur="$v.form.name.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="form.email"
              :error-messages="emailErrors"
              label="E-mail"
              required
              @input="$v.form.email.$touch()"
              @blur="$v.form.email.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="form.company"
              :error-messages="companyErrors"
              label="Company"
              required
              @input="$v.form.company.$touch()"
              @blur="$v.form.company.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="form.phone"
              :error-messages="phoneErrors"
              label="Phone"
              required
              @input="$v.form.phone.$touch()"
              @blur="$v.form.phone.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="form.address"
              :error-messages="addressErrors"
              label="Address"
              required
              @input="$v.form.address.$touch()"
              @blur="$v.form.address.$touch()"
            ></v-text-field>
            <!-- <div class="datePicker">
              <p>Tanggal Mulai</p>
              <date-picker v-model="form.tanggalMulai" valuetype="format"></date-picker>
            </div> -->

            <v-select
              v-model="form.service"
              :items="options"
              :menu-props="{ maxHeight: '400' }"
              :error-messages="serviceErrors"
              label="Service"
              multiple
              required
              @input="$v.form.service.$touch()"
              @blur="$v.form.service.$touch()"
              hint="Pilih Service yang di inginkan!"
              persistent-hint
            ></v-select>
            <v-text-field
              v-model="form.password"
              :error-messages="passwordErrors"
              label="Password"
              required
              @input="$v.form.password.$touch()"
              @blur="$v.form.password.$touch()"
              :append-icon="password ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="() => (password = !password)"
              :type="password ? 'password' : 'text'"
            >
            </v-text-field>
            <v-snackbar v-model="snackbar" :timeout="timeout" :right="'right'" :top="'top'">
              {{ text }}
              <v-btn small color="success" text @click="snackbar = false">Close</v-btn>
            </v-snackbar>
            <v-btn small color="success" @click="addClient">Submit</v-btn>
          </form>
        </material-card>
      </v-flex>
      <v-flex md12 sm12 lg4>
        <div class="text-xs-right">
          <router-link :to="`/Client`">
            <v-btn class="ma-2" color="purple" dark>Kembali</v-btn>
          </router-link>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import materialCard from "~/components/material/AppCard";
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";
export default {
  components: { DatePicker, materialCard },
  mixins: [validationMixin],
  layout: "dashboard",
  data() {
    return {
      form: {
        name: "",
        email: "",
        company: "",
        tanggalMulai: "",
        service: [],
        phone: "",
        address: "",
        password: ""
      },
      password: String,
      options: ["1. BPJS", "2. PPH 21", "3. Salary Report", "4. BPJSTK"],
      snackbar: false,
      timeout: 3000,
      text: "Data Berhasil di tambah"
    };
  },
  validations: {
    form: {
      name: { required },
      email: { required, email },
      company: { required },
      phone: { required },
      service: { required },
      address: { required },
      password: { required }
    }
  },
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.form.name.$dirty) return errors;
      // !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
      !this.$v.form.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.form.email.$dirty) return errors;
      !this.$v.form.email.email && errors.push("Must be valid e-mail");
      !this.$v.form.email.required && errors.push("E-mail is required");
      return errors;
    },
    companyErrors() {
      const errors = [];
      if (!this.$v.form.company.$dirty) return errors;
      !this.$v.form.company.required && errors.push("Company is required.");
      return errors;
    },
    phoneErrors() {
      const errors = [];
      if (!this.$v.form.phone.$dirty) return errors;
      !this.$v.form.phone.required && errors.push("Phone is required.");
      return errors;
    },
    serviceErrors() {
      const errors = [];
      if (!this.$v.form.service.$dirty) return errors;
      !this.$v.form.service.required && errors.push("Service is required.");
      return errors;
    },
    addressErrors() {
      const errors = [];
      if (!this.$v.form.address.$dirty) return errors;
      !this.$v.form.address.required && errors.push("Address is required.");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.form.password.$dirty) return errors;
      !this.$v.form.password.required && errors.push("Password is required.");
      return errors;
    }
  },
  methods: {
    addClient() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
      } else {
        this.$store.dispatch('client/create', this.form)
        setTimeout(()=>{
          this.snackbar = true;
          this.$v.$reset();
          this.form.name = "";
          this.form.email = "";
          this.form.company = "";
          this.form.phone = "";
          this.form.service = [];
          this.form.address = "";
          this.form.password = "";
        }, 2000)
      }
    },
    clear() {}
  }
};
</script>

<style lang="scss" scoped>
.datePicker {
  display: flex;
  p {
    margin-right: 10px;
  }
}
</style>