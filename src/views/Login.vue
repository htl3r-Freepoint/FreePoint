<template>
  <div id="login" class="container">
    <div class="row justify-content-center align-content-center">
      <div id="login-form" class="shadow-lg p-3 mb-5 bg-white rounded">
        <h2>Anmelden</h2>
        <form-login class="p-4"></form-login>
<!--        <p>
          <router-link to="/forgot-password">Passwort vergessen</router-link>
        </p>-->
        <p>
          Sie haben noch keinen Account? Sie können sich hier
          <router-link to="/register">registrieren.</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import FormLogin from "@/components/forms/FormLogin";

export default {
  name: "Login",
  components: {FormLogin},
  created() {
    if (this.$store.state.user.token){
      console.debug("User is already logged in", this.$store.state.user)
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push({path: '/'})
    }
  }
}
</script>

<style scoped>
#login{
  padding: 2em;
}
</style>