<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex md12>
        <div class="select-report">
          <v-col class="d-flex" cols="6" sm="6">
            <v-select :items="items" :height="height" label="Solo field" solo></v-select>
          </v-col>
        </div>
        <material-card color="red" title="Report BPJSTk">
          <v-data-table
            :headers="headers"
            :items="desserts"
            :items-per-page="5"
            class="elevation-1"
          >
            <template slot="items" slot-scope="{ item }">
              <td>{{ item.SP }}</td>
              <td>{{ item.PAW}}</td>
              <td>{{ item.PAK }}</td>
              <td>{{ item.GP }}</td>
              <td>{{ item.TPph }}</td>
              <td>{{ item.TLL }}</td>
              <td>{{ item.HIS }}</td>
              <td>{{ item.PPK }}</td>
              <td>{{ item.PPPph }}</td>
              <td>{{ item.JThr }}</td>
              <td>{{ item.JB }}</td>
              <td>{{ item.BJ }}</td>
              <td>{{ item.ITJ }}</td>
              <td>{{ item.JP }}</td>
              <td>{{ item.JPN }}</td>
              <td>{{ item.JNS }}</td>
              <td>{{ item.Ptkp}}</td>
              <td>{{ item.PS}}</td>
              <td>{{ item.P21S}}</td>
              <td>{{ item.p21T}}</td>
              <td>{{ item.P21B}}</td>
              <!-- <td>{{item.iron}}</td> -->
              <!-- <td class="text-xs-right">
                <v-btn class="ma-2" color="purple" dark @click.prevent="edit">
                 <v-icon dark>mdi-wrench</v-icon>
                </v-btn>
        <v-btn class="ma-2" color="indigo" dark>
          <v-icon dark>mdi-cloud-upload</v-icon>
              </v-btn></td>-->
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
          text: "Status Pajak",
          align: "left",
          sortable: false,
          value: "SP"
        },
        { text: "Periode Awal", value: "PAW" },
        { text: "Periode Akhir", value: "PAK" },
        { text: "Gaji Pensiun", value: "GP" },
        { text: "Tunjangan Pph", value: "TPph" },
        { text: "Tunjangan Lain Lembur", value: "TLL" },
        { text: "Honor Imbalan Sejenis", value: "HIS" },
        { text: "Prembayar Pemberi Kerja", value: "PPK" },
        { text: "Penerima Potongan PPh", value: "PPPph" },
        { text: "JasProd Thr", value: "JThr" },
        { text: "Jumlah Bruto", value: "JB" },
        { text: "Biaya Jabatan", value: "BJ" },
        { text: "Iuran Tht Jht", value: "ITJ" },
        { text: "Jumlah Pengurangan", value: "JP" },
        { text: "Jumlah Penghasilan Netto", value: "JPN" },
        { text: "Jumlah Netto Setahun", value: "JNS" },
        { text: "Ptkp", value: "Ptkp" },
        { text: "Pkp Setahun", value: "PS" },
        { text: "Pph21 Sebelum", value: "P21S" },
        { text: "Pph21 Urut Tahun", value: "p21T" },
        { text: "Pph21 Urut Bulan", value: "P21B" }
      ],
      desserts: [
        {
          SP: "Aktif",
          PAW: "Bulan Awal",
          PAK: "Bulan Akhir",
          GP: 0,
          TPph: 10000,
          TTL: 75000,
          HIS: 0,
          PPK: 0,
          PPPph: 400000,
          JThr: 0,
          JB: 5200000,
          BJ: 230000,
          ITJ: 300000,
          JP: 76000,
          JPN: 4960000,
          JNS: 5200000,
          Ptkp: 0,
          PS: 0,
          P21S: 0,
          p21T: 0,
          P21B: 0
        }
      ],items: ['foo', 'bar', 'fizz', 'buzz'],
      height: "10px"
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

<style lang="scss">
.select-report {
  display: flex;
  justify-content: flex-end;
}
</style>