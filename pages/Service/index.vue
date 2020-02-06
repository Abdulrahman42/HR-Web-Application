<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex md12>
        <div class="text-xs-right"></div>
        <material-card color="red" title="Service">
               <v-data-table
            :headers="headers"
            :items="desserts"
            :items-per-page="5"
            class="elevation-1"
          >
            <template slot="items" slot-scope="{ item }">
                <td>{{ item.name }}</td>
                <td>{{ item.total }}</td>
              <!-- <td>
              <router-link :to="`/Employee`">
                {{ item.company}}
              </router-link>
              </td> -->
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
          text: "Service",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Jumlah", value: "total"}
      ],
      desserts: [
        {
          name: "PPH21",
          total: 21
        },
        {
          name: "BPJS",
          total: 24
        },
        {
          name: "Salary",
          total: 32
        },
        {
          name: "BPJSTK",
          total: 19
        },
      ],
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