<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex md12>
         <div class="text-xs-right">
          <router-link :to="`/Client`">
            <v-btn class="ma-2" color="purple" dark>Kembali</v-btn>
          </router-link>
        </div>
        <material-card color="green" title="Daftar Client">
          <v-data-table
            :headers="headers"
            :items="desserts"
            :items-per-page="5"
            class="elevation-1"
          >
            <template slot="items" slot-scope="{ item }">
              <!-- <router-link :to="`/Employee`"> -->
                <td>{{ item.name }}</td>
              <!-- </router-link> -->
     
              <td>
              <router-link :to="`/ReportBpjs/edit`">
                {{ item.report_bpjs }}
              </router-link>
              </td>
              <td>
                <router-link :to="`/ReportSalary/edit`">
                  {{item.report_salary}}
                </router-link>
              </td>
              <td>
                <router-link :to="`/ReportBpjstk/edit`">
                  {{ item.report_bpjstk}}
                </router-link>
              </td>
              <!-- <td class="text-xs-right">
                <v-btn class="ma-2" color="purple" dark @click.prevent="edit">
                  <v-icon dark>mdi-wrench</v-icon>
                </v-btn>
                <v-btn class="ma-2" color="indigo" dark>
                  <v-icon dark>mdi-cloud-upload</v-icon>
                </v-btn>
              </td> -->
            </template>
          </v-data-table>
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
      headers: [
        {
          text: "Nama",
          align: "left",
          sortable: false,
          value: "name"
        },
        // { text: "Report Pph" },
        { text: "Report Bpjs" },
        { text: "Report Salary" },
        { text: "Report BpjsTk" }
      ],
      desserts: [
        {
          name: "Abdul Rahman",
          // report_pph: "Ubah",
          report_bpjs: "Ubah",
          report_salary: "ubah",
          report_bpjstk: "ubah"
        },
      ]
    };
  },
  methods: {
    edit() {
      this.$router.push("edit");
    },
    create() {
      this.$router.push("create");
    }
  }
};
</script>

<style>
</style>