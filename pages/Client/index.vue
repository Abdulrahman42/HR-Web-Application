<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex md12>
        <div class="text-xs-right">
          <router-link to="/Client/create">
          <v-btn  fab class="ma-2" color="purple" dark>
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
              <router-link :to="`/Employee`">
                {{ item.company}}
              </router-link>
              </td>
              <td>{{ item.address }}</td>
              <td>{{ item.phone }}</td>
              <td>{{item.date}}</td>
              <td>{{item.service}}</td>
              <td class="text-xs-right action">
                  <v-icon color="blue" dark @click.prevent="edit">mdi-pencil</v-icon>
                  <v-icon color="red" dark @click.prevent="del">mdi-delete</v-icon>
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
        { text: "Email", value: "email"},
        { text: "Perusahaan", value: "company" },
        { text: "Alamat", value: "address" },
        { text: "No. Hp", value: "phone" },
        { text: "Tangg Mulai", value: "date" },
        { text: "Service", value: "service" },
        { text: "Action", value: "", align: "right" }
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
          company: "shopciety",
          address: "PIK",
          phone: +628,
          date: 4.0,
          service: "BPJS"
        }
      ],
    };
  },
  methods: {
    edit() {
      this.$router.push({
        path:'Client/edit'
      })
    },
    created() {
      this.$router.push("Client/create");
    },
    del() {
      this.$confirm("Apa Anda Yakin?").then(()=> {

      })
    }
  }
};
</script>

<style lang="scss">
.action {
  i{
  margin: 10px;
  }
}
</style>