<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout wrap>
      <v-flex md12>
        <div class="action-header">
            <v-col class="d-flex" cols="6" sm="6">
              <v-select :items="itemsMount" label="Pilih Bulan" solo v-model="mount" @click.prevent="pickMount"></v-select>
            </v-col>
            <router-link :to="`/ReportSalary`">
              <v-btn class="ma-2" color="purple" dark>Kembali</v-btn>
            </router-link>
        </div>
                <material-card color="red" title="Report Pph per Bulan">
          <v-data-table
            :headers="headers"
            :items="desserts"
            :items-per-page="5"
            class="elevation-1"
          >
            <template slot="items" slot-scope="{ item }">
              <td>{{ item.name }}</td>
              <td>{{ item.RD}}</td>
              <td>{{ item.BS }}</td>
              <td>{{ item.Allow }}</td>
              <td>{{ item.THR }}</td>
              <td>{{ item.TI }}</td>
              <td>{{ item.D }}</td>
              <td>{{ item.TD }}</td>
              <td>{{ item.THP }}</td>
              <td>{{ item.RN }}</td>
              <td>{{ item.BPJSA }}</td>
              <td>{{ item.BPJSTKD }}</td>
              <td>{{ item.BPJSKD }}</td>
              <td>{{ item.PPH21 }}</td>
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
        { text: "Report Date", value: "RD" },
        { text: "Base Salary", value: "BS" },
        { text: "Allowance", value: "Allow" },
        { text: "Thr", value: "THR" },
        { text: "Total Income", value: "TI" },
        { text: "Deduction", value: "D" },
        { text: "Total Deduction", value: "TD" },
        { text: "Take Home Pay", value: "THP" },
        { text: "Report Number", value: "RN" },
        { text: "BPJS Allowance", value: "BPJSA" },
        { text: "BPJSTK Deduction", value: "BPJSTKD" },
        { text: "BPJSK Deduction", value: "BPJSKD" },
        { text: "PPH21", value: "PPH21" }
      ],
      desserts: [
        {
          name: "Abdul Rahman",
          RD: 20.2,
          BS: 8500000,
          Allow: 1500000,
          THR: 0,
          TI: 1000000,
          D: 0,
          TD: 0,
          THP: 10000000,
          RN: 20/2,
          BPJSA: '',
          BPJSTKD: '',
          BPJSKD: '',
          PPH21:''
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
    edit() {
      this.$router.push("edit");
    },
    create() {
      this.$router.push("create");
    },
    async getMount() {
      try {
        const { data } = this.$axios.get('report')
        this.desserts = data
      } catch (e) {
        Console.log(e)
      }
    },
    async pickMount() {
      const chooseReportPphByMount = {
        mount: this.mount
      }
      await this.$store.dispatch('reportSalary/mount', chooseReportPphByMount)
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