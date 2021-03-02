<template>
<b-container>
  <b-card title="Card Title" no-body>
    <b-card-header header-tag="nav">
      <b-nav card-header pills align="center">
        <b-nav-item to="/components/Products/" exact exact-active-class="active">TOOTED</b-nav-item>
        <b-nav-item to="/components/Orders/" exact exact-active-class="active">ORDERS</b-nav-item>
        <b-nav-item @click="logUserOut" exact exact-active-class="active">LOGI VÄLJA</b-nav-item>
      </b-nav>
    </b-card-header>

    <b-card-body>
      <router-view/>
    </b-card-body>
  </b-card>
  
</b-container>
</template>

<script>
import Orders from '../components/Orders.vue';
import Products from '../components/Products.vue';
import VueJwtDecode from "vue-jwt-decode";
export default {
  data() {
    return {
      user: {}
    };
  },
  methods: {
    getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;
    },
    logUserOut() {
      localStorage.removeItem("jwt");
      this.$router.push("/");
    }
  },
  created() {
    this.getUserDetails();
  }
};
</script>
<style scoped></style>
