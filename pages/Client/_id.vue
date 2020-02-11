<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex md12>
            <div class="action-header">
            <v-col class="d-flex" cols="6" sm="6">
              <v-select :items="itemsMount" label="Pilih Bulan" solo v-model="mount" @click.prevent="pickMount"></v-select>
            </v-col>
            <router-link :to="`/ReportPph`">
              <v-btn class="ma-2" color="purple" dark>Kembali</v-btn>
            </router-link>
        </div>
        <material-card color="green" title="Daftar Karyawan">
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
     
              <td class="action">
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-icon color="blue" dark @click.prevent="addReportBpjs" v-on="on">mdi-plus</v-icon>
                  </template>
                  <span class="tol">Tambah Report Bpjs</span>
                </v-tooltip>
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-icon color="red" dark @click.prevent="editReportBpjs" v-on="on">mdi-pen</v-icon>
                  </template>
                  <span class="tol">Ubah Report Bpjs</span>
                </v-tooltip>
              </td>
            <td class="action">
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-icon color="blue" dark @click.prevent="addReportSalary" v-on="on">mdi-plus</v-icon>
                  </template>
                  <span class="tol">Tambah Report Salary</span>
                </v-tooltip>
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-icon color="red" dark @click.prevent="editReportSalary" v-on="on">mdi-pen</v-icon>
                  </template>
                  <span class="tol">Ubah Report Salary</span>
                </v-tooltip>
              </td>
            <td class="action">
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-icon color="blue" dark @click.prevent="addReportBpjstk" v-on="on">mdi-plus</v-icon>
                  </template>
                  <span class="tol">Tambah Report BpjsTk</span>
                </v-tooltip>
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-icon color="red" dark @click.prevent="editReportBpjstk" v-on="on">mdi-pen</v-icon>
                  </template>
                  <span class="tol">Ubah Report BpjsTk</span>
                </v-tooltip>
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
          value: "name"
        },
        { text: "Report Bpjs", sortable: false, },
        { text: "Report Salary", sortable: false, },
        { text: "Report BpjsTk", sortable: false, }
      ],
      desserts: [
        {
          name: "Abdul Rahman",
        },
        {
          name: "Joko"
        }
      ],
      itemsMount: [
        'Januari',
        'Februari',
        'Maret',
        'April',
        'Mei',
        'Juni',
        'Juli',
        'Agustus',
        'September',
        'Oktober',
        'November',
        'Desember'
      ],
      mount:''
    };
  },
  methods: {
    pickMount() {

    },
    addReportBpjs() {
      this.$router.push("/Client/addReportBpjs");
    },
    editReportBpjs() {
      this.$router.push("/Client/editReportBpjs");
    },
    addReportSalary() {

    },
    editReportSalary() {

    },
    addReportBpjstk() {

    },
    editReportBpjstk() {

    }
  }
};
</script>

<style lang="scss">
.action-header {
  display: flex;
  justify-content: space-between;
}
</style>