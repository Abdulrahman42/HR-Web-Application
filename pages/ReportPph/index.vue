<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout  wrap>
      <v-flex md4>
        <div class="text-xs-right"></div>
        <material-card color="red" title="Report PPH21">
               <v-data-table
            :headers="headers"
            :items="desserts"
            :items-per-page="5"
            class="elevation-1"
          >
            <template slot="items" slot-scope="{ item }">
                <td>
                  <router-link to="ReportPph/month">
                  {{ item.name }}
                  </router-link>
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
          text: "Company",
          align: "left",
          sortable: false,
          value: "name"
        },
        // { text: "Jumlah", value: "total"}
      ],
      desserts: [
        {
          name: "Shopciety",
          total: 21
        },
        {
          name: "Tokopedia",
          total: 24
        },
        {
          name: "Shopee",
          total: 32
        }
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