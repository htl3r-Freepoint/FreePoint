<template>
  <form role="form">
    <div class="row row-input">
      <div class="form-group col">
        <input type="text" class="form-control" placeholder="Titel" v-model="title"/>
      </div>
    </div>

    <div class="row row-input">
      <div class="form-group col">
        <textarea class="form-control" placeholder="Beschreibung" v-model="text"/>
      </div>
    </div>

    <div class="row">
      <div class="form-group col">
        <input type="number" class="form-control" placeholder="Benötigte Punkte" v-model="value"/>
      </div>
    </div>

    <div class="row row-input btn-toolbar">
      <div class="col btn-group">
        <label class="btn btn-primary">
          <input type="radio" :value="false" v-model="isPercent">
          <span class="underline">Euro €</span>
        </label>
        <label class="btn btn-primary">
          <input type="radio" :value="true" v-model="isPercent">
          <span class="underline">Prozent %</span>
        </label>
      </div>
    </div>

    <div class="row row-input">
      <div v-if="isPercent" class="input-group col">
        <input type="range" min="0" max="100" class="col form-control px-0" v-model="percentage"/>
        <div class="input-group-append">
          <input type="number" min="0" max="100" class="input-group-text" v-model="percentage">
          <span class="input-group-text">%</span>
        </div>
      </div>
      <div v-else class="input-group col">
        <input type="number" class="col form-control" v-model="price" placeholder="Preis"/>
        <div class="input-group-append">
          <span class="input-group-text">€</span>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row control-buttons justify-content-between">
        <button type="button" class="col-5 btn btn-danger" data-dismiss="modal" @click="resetData">Abbrechen</button>
        <button type="button" class="col-5 btn btn-primary" data-dismiss="modal" @click="saveCoupon">Speichern</button>
      </div>
    </div>

  </form>
</template>

<script>

export default {
  name: "FormEditCoupon",
  components: {},
  props: ['coupon'],
  data() {
    return {
      id: 0,
      isPercent: true,
      title: "",
      text: "",
      price: 0,
      percentage: 0,
      value: 0
    }
  },
  created() {
    if (this.coupon) {
      this.resetData()
    }
  },
  methods: {
    saveCoupon() {
      this.$store.commit("pushCouponsEdit", {
        id: this.id,
        isPercent: this.isPercent,
        title: this.title,
        text: this.text,
        price: this.price,
        percentage: this.percentage,
        value: this.value
      })
    },
    resetData() {
      this.id = this.coupon.id
      this.isPercent = this.coupon.isPercent
      this.title = this.coupon.title
      this.text = this.coupon.text
      this.price = this.coupon.price
      this.percentage = this.coupon.percentage
      this.value = this.coupon.value
    }
  }
}
</script>

<style scoped lang="scss">
.row-input {
  padding-bottom: 0.5em;
}


.form-control {
  border-radius: 1rem;
  border-width: 2px;
}

input:valid.form-control {
  border-color: var(--store-primary);
}

textarea:valid.form-control {
  border-color: var(--store-primary);
}

input[type="radio"] {
  visibility: hidden;
}

input + label {
  border-color: var(--store-primary);
  border-radius: 1rem;
  border-width: 2px;
}

input[type="radio"] + span {
  font-weight: normal;
}


input[type="radio"]:checked + span {
  color: var(--text-color);
  transition: 0.3s;
  font-weight: bold;
  text-decoration: underline;
  text-decoration-thickness: 3px;
}


.control-buttons {
  padding-top: 2em;
}
</style>