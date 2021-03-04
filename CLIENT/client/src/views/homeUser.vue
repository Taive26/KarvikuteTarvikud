<template>
<b-container>
  <b-card title="Card Title" no-body>
    <b-card-header header-tag="nav">
      <b-nav card-header pills align="center">
        <b-nav-item to="/homeUser/products/" exact exact-active-class="active">TOOTED</b-nav-item>
        <b-nav-item to="/homeUser/addorder/" exact exact-active-class="active">ORDERS</b-nav-item>
        <b-nav-item @click="logUserOut" exact exact-active-class="active">LOGI VÄLJA</b-nav-item>
      </b-nav>
    </b-card-header>

    <b-card-body>
      <h3>Tere tulemast e-poodi, mis pakub kõike vajalikku Sinu lemmikloomale!</h3>
      <b-container fluid class="p-4 bg-light">
  <b-row>
    <b-col>
      <b-img thumbnail fluid src="/" alt="Image 1"></b-img>
    </b-col>
    <b-col>
      <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=58" alt="Image 2"></b-img>
    </b-col>
    <b-col>
      <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
    </b-col>
  </b-row>
</b-container>
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
<style scoped>
h3 {
  margin: 40px 0 0;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20pt;
  color: purple;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #da0b95;
}
</style>