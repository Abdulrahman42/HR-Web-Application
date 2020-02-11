<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex md12>
        <div class="text-xs-right">
          <router-link to="/Client/createClient">
            <v-btn fab class="ma-2" color="purple" dark>
              <v-icon dark>mdi-account-plus</v-icon>
            </v-btn>
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
              <td>{{ item.name }}</td>
              <td>{{ item.email }}</td>
              <td>
                <router-link :to="`/Client/${1}`">{{ item.company}}</router-link>
              </td>
              <!-- <td >
                <div @click.prevent="companyToEmployee">
                  {{item.company}}
                  </div> 
                </td> -->
              <!-- <td>
              <router-link :to="`/Client/editReportPph`">
                {{ item.report_pph}}
              </router-link>
              </td>-->
              <td class="action">
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-icon color="blue" dark @click.prevent="addReport" v-on="on">mdi-plus</v-icon>
                  </template>
                  <span class="tol">Tambah Report PPH21</span>
                </v-tooltip>
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-icon color="red" dark @click.prevent="editReport" v-on="on">mdi-pen</v-icon>
                  </template>
                  <span class="tol">Ubah Report PPH21</span>
                </v-tooltip>
              </td>
              <td>{{ item.address }}</td>
              <td>{{ item.phone }}</td>
              <td>{{item.date}}</td>
              <td>{{item.service}}</td>
              <td class="text-xs-right action">
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-icon color="blue" dark @click.prevent="editClient" v-on="on">mdi-pencil</v-icon>
                  </template>
                  <span class="tol">Ubah Data Perusahaan</span>
                </v-tooltip>
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-icon color="red" dark @click.prevent="deleteClient" v-on="on">mdi-delete</v-icon>
                  </template>
                  <span class="tol">Hapus Data Perusahaan</span>
                </v-tooltip>
              </td>
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
        { text: "Email", value: "email" },
        { text: "Perusahaan", value: "company" },
        { text: "Report PPH21", value: "", sortable: false },
        { text: "Alamat", value: "address" },
        { text: "No. Hp", value: "phone" },
        { text: "Tanggal Mulai", value: "date" },
        { text: "Service", value: "service" },
        { text: "Action", value: "", align: "right", sortable: false }
      ],
      desserts: [
        {
          name: "Budi",
          email: "budi@gmail.com",
          company: "Shopciety",
          address: "PIK",
          phone: 89994,
          date: 4.0,
          service: "BPJS"
        },
        {
          name: "joko",
          email: "joko@gmail.com",
          company: "Tokopedia",
          address: "Sudirman",
          phone: +628,
          date: 4.0,
          service: "BPJS, Salary"
        }
      ]
    };
  },
  methods: {
    addReport() {
      this.$router.push("/Client/addReportPph")
    },
    editReport() {
      this.$router.push("/CLient/editReportPph")
    },
    editClient() {
      this.$router.push({
        path: "/Client/editClient"
      });
    },
    deleteClient() {
      this.$confirm("Apa Anda Yakin?").then(() => {});
    },
    companyToEmployee() {
      this.$router.push({
        path: `/Client/${1}`
      })
    }
  }
};
</script>

<style lang="scss">
.action {
  i {
    margin: 10px;
  }
}
.tol {
  color: white;
}
</style>