<template>
  <submenu title="Einstellungen">

    <nav slot="links">
      <router-link to="/company/settings/profile">
        <font-awesome-icon icon="user-circle"/>
        <div class="text-left">Profil bearbeiten</div>
      </router-link>
      <router-link to="/company/settings/register">
        <font-awesome-icon icon="cash-register"/>
        <div class="text-left">Kassa verwalten</div>
      </router-link>
      <router-link to="/company/settings/design">
        <font-awesome-icon icon="palette"/>
        <div class="text-left">Design</div>
      </router-link>
      <router-link to="/company/settings/statistics">
        <font-awesome-icon icon="chart-bar"/>
        <div class="text-left">Kundenstatistiken</div>
      </router-link>
      <router-link to="/company/settings/flyer">
        <font-awesome-icon icon="book-open"/>
        <div class="text-left">Flyer-Customizer</div>
      </router-link>
      <router-link to="/company/settings/location">
        <font-awesome-icon icon="compass"/>
        <div class="text-left">Standorte</div>
      </router-link>
      <router-link to="/company/settings/staff">
        <font-awesome-icon icon="user-friends"/>
        <div class="text-left">Mitarbeiter</div>
      </router-link>
      <router-link to="/company/settings/info">
        <font-awesome-icon icon="info"/>
        <div class="text-left">Info</div>
      </router-link>
    </nav>

    <router-view class="settings-view pb-5"></router-view>

  </submenu>
</template>

<script>
import Submenu from "@/components/Submenu";
import {library} from "@fortawesome/fontawesome-svg-core";
import {
  faBookOpen,
  faCashRegister,
  faChartBar,
  faCompass,
  faInfo,
  faPalette,
  faUserCircle,
  faUserFriends
} from "@fortawesome/free-solid-svg-icons";

library.add(faInfo, faUserFriends, faCompass, faBookOpen, faChartBar, faPalette, faUserCircle, faCashRegister)

export default {
  name: "Settings",
  components: {Submenu}
}
</script>

<style scoped lang="scss">
nav {
  div {
    padding-left: 1em;
  }
}

@media (min-width: 576px) {
  .settings-view {
    padding-left: 50px;
    padding-right: 50px;
  }
}

@media (max-width: 576px) {
  .settings-view {
    padding-top: 25px;
  }
}

</style>