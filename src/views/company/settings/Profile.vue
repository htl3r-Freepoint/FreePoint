<template>

  <form>
    <div id="preview">
      <img v-if="this.$store.state.company.logo" :src="url"/>
    </div>

    <fp-input label="Logo"
              description="Laden Sie hier ihr eigenes Logo hoch. Alternativ wird einfach ihr Firmenname Angezeigt.">
      <font-awesome-icon slot="prepend" icon="image"/>
      <input type="file" @change="onFileChange" accept="image/*">
    </fp-input>


    <fp-input label="Firmenname"
              description="Ihr Firmenname ist dafür da, ihr Unternehmen zu finden, wir empfehlen nicht diesen zu ändern, außer es ist absolut nötig.">
      <font-awesome-icon slot="prepend" icon="sign"/>
      <input type="text" class="form-control" v-model="companyName" placeholder="Firmenname" disabled>
    </fp-input>

    <fp-input label="Kontakt Email"
              description="Ihre Kontakt-Email ist für alle Kunden sichtbar">
      <font-awesome-icon slot="prepend" icon="envelope"/>
      <input type="email" class="form-control" v-model="email" placeholder="Kontakt Email">
    </fp-input>

    <fp-input label="Tauschrate"
              description="Dieser Wert bestimmt, wie viel € einen Punkt wert ist.">
      <font-awesome-icon slot="prepend" icon="receipt"/>
      <input type="number" min="1" class="form-control text-right" v-model="exchangeRate">
      <font-awesome-icon slot="append" icon="euro-sign"/>
    </fp-input>

    <div class="d-flex justify-content-center">
      <button type="button" class="btn btn-primary" @click="saveChanges">Speichern</button>
      <button type="button" class="btn btn-danger font-weight-bold" @click="modalDelete">Firma Löschen</button>
    </div>

    <transition name="fade" v-on:enter="enterSuccess">
      <div class="alert alert-success" v-if="success">
        Daten wurden gespeichert
      </div>
    </transition>

    <modal id="deleteConfirmation">
      <form class="d-flex flex-column">
        <fp-input label="Geben sie ihr Passwort zur Bestätiugung ein">
          <input class="form-control" type="password" v-model="userPassword">
        </fp-input>
        <button class="btn btn-danger" type="button" @click="deleteCompany" :disabled="!userPassword">Löschen</button>
      </form>
    </modal>
  </form>

</template>

<script>
import FpInput from "@/components/Form Components/FpInput";

import {library} from "@fortawesome/fontawesome-svg-core";
import {faImage, faSign, faEnvelope, faEuroSign, faReceipt} from "@fortawesome/free-solid-svg-icons";
import Modal from "@/components/Modal";

library.add(faImage, faSign, faEnvelope, faEuroSign, faReceipt)

export default {
  name: "Profile",
  components: {Modal, FpInput},
  data() {
    return {
      success: false,
      userPassword: '',
      logo: '',
      url: '',
      companyName: '',
      email: '',
      exchangeRate: 1
    }
  },
  created() {
    this.$http.post(this.$store.state.url + "/getCompany", {
      hash: this.$store.state.user.token,
      companyName: this.$store.state.company.companyName
    }).then(response => {
      console.debug("Response:", response.data)
      this.logo = response.data.company.logo
      this.companyName = response.data.company.companyName
      this.email = response.data.company.contactMail
      this.exchangeRate = response.data.company.conversionRate
    })
  },
  methods: {
    modalDelete() {
      this.$('#deleteConfirmation').modal()
    },
    onFileChange(event) {
      this.logo = event.target.files[0]
      this.url = URL.createObjectURL(this.logo)
      this.$store.commit('setLogo', this.url)
    },
    saveChanges() {
      this.$http.post(this.$store.state.url + "/updateCompany", {
        hash: this.$store.state.user.token,
        companyName: this.companyName,
        contactMail: this.email,
        conversionRate: this.exchangeRate,
        logo: this.url
      }).then(response => {
        console.debug(response)
        this.success = true
      }).catch(error => {
        console.error(error)
      })
    },
    deleteCompany() {
      this.$http.post(this.$store.state.url + "/deleteCompany", {
        hash: this.$store.state.user.token,
        companyName: this.$store.state.company.companyName,
        password: this.userPassword
      })
    },
    enterSuccess() {
      setTimeout(() => {
        this.success = false;
      }, 3000);
    }
  }
}
</script>

<style scoped>
#preview {
  display: flex;
  justify-content: left;
  align-items: center;
}

#preview img {
  max-width: 200px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}

.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>