<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="inputValue"
    app
    dark
    floating
    persistent
    mobile-break-point="991"
    width="260"
  >
    <v-img :src="image" height="100%">
      <v-layout class="fill-height" tag="v-list" column>
        <v-list dense>
          <v-list-tile avatar to="/">
            <v-list-tile-avatar color="white">
              <v-img :src="logo" height="34" contain />
            </v-list-tile-avatar>
            <v-list-tile-title class="title">Vuetify MD</v-list-tile-title>
          </v-list-tile>
        </v-list>
        <v-divider />
        <v-list dense>
          <v-list-tile v-if="responsive">
            <v-text-field class="purple-input search-input" label="Search..." color="purple" />
          </v-list-tile>
            <div v-if="enables < 2">
          <v-list-tile
            v-for="(link, i) in links_SU"
            :key="i"
            :to="link.to"
            :active-class="color"
            avatar
            class="v-list-item"
          >
              <v-list-tile-action>
                <v-icon>{{ link.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-title v-text="link.text" />
          </v-list-tile>
            </div>
            <div v-if="enables === 2">
          <v-list-tile
            v-for="(link, i) in links_C"
            :key="i"
            :to="link.to"
            :active-class="color"
            avatar
            class="v-list-item"
          >
              <v-list-tile-action>
                <v-icon>{{ link.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-title v-text="link.text" />
          </v-list-tile>
            </div>
        </v-list>
      </v-layout>
    </v-img>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      logo: "/vuetifylogo.png",
      links_SU: [
        {
          to: "/dashboard",
          icon: "mdi-view-dashboard",
          text: "Dashboard"
        },
        // {
        //   to: "/user-profile",
        //   icon: "mdi-account",
        //   text: "User Profile",
        //   role: 1
        // },
        // {
        //   to: '/table-list',
        //   icon: 'mdi-clipboard-outline',
        //   text: 'Table List'
        // },
        {
          to: "/Client/",
          icon: "mdi-account-multiple",
          text: "Client"
        },
        {
          to: "/Service",
          icon: "mdi-server",
          text: "Service"
        },
        {
          to: "/icons",
          icon: "mdi-chart-bubble",
          text: "Icons"
        },
        // {
        //   to: '/maps',
        //   icon: 'mdi-account-switch',
        //   text: 'Employee'
        // },
        {
          to: "/ReportPph",
          icon: "mdi-folder",
          text: "Report Pph"
        },
        {
          to: "/ReportBpjs",
          icon: "mdi-folder",
          text: "Report BPJS"
        },
        {
          to: "/ReportSalary",
          icon: "mdi-folder",
          text: "Report Salary",
        },
        {
          to: "/ReportBpjstk",
          icon: "mdi-folder",
          text: "Report BPJSTK"
        },
        {
          to: "/setting",
          icon: "mdi-settings",
          text: "Setting"
        }
      ],
      links_C: [
        {
          to: "/dashboard",
          icon: "mdi-view-dashboard",
          text: "Dashboard"
        },
        {
          to: "/icons",
          icon: "mdi-chart-bubble",
          text: "Icons"
        },
        {
          to: "/ReportPph",
          icon: "mdi-animation",
          text: "Report Pph"
        },
        {
          to: "/ReportBpjs",
          icon: "mdi-animation",
          text: "Report BPJS"
        },
        {
          to: "/ReportSalary",
          icon: "mdi-animation",
          text: "Report Salary",
        },
        {
          to: "/ReportBpjstk",
          icon: "mdi-animation",
          text: "Report BPJSTK"
        },
        {
          to: "/setting",
          icon: "mdi-settings",
          text: "Setting"
        }
      ],
      enables: 0,
      responsive: true
    };
  },
  computed: {
    ...mapGetters({
      image: "app/getImage",
      color: "app/getColor",
      drawer: "app/getDrawer"
    }),
    ...mapState({
      role: state => state.Client.user.roleID
    }),
    enable() {
      this.role.forEach(element => {
        this.enables = element.roleID
      });
    },
    inputValue: {
      get() {
        return this.drawer;
      },
      set(val) {
        this.setDrawer(val);
      }
    }
  },
  mounted() {
    this.enable
    this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  },
  methods: {
    ...mapActions({
      setDrawer: "app/setDrawer"
    }),

    onResponsiveInverted() {
      this.responsive = window.innerWidth < 991;
    }
  }
};
</script>

<style lang="scss">
#app-drawer {
  &.v-navigation-drawer .v-list {
    background: rgba(27, 27, 27, 0.4);
    padding: 0;
  }

  .v-divider {
    margin: 0;
  }

  .v-list__tile {
    border-radius: 4px;

    &--buy {
      margin-top: auto;
      margin-bottom: 17px;
    }

    &__title {
      color: #ffffff;
    }
  }

  .v-image__image--contain {
    top: 9px;
    height: 60%;
  }

  .search-input {
    margin-bottom: 30px !important;
    padding-left: 15px;
    padding-right: 15px;
  }
}
</style>
