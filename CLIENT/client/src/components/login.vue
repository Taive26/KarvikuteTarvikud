<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <form
          class="text-center border border-success p-5"
          style="margin-top:30px;height:auto;padding-top:100px !important;"
          @submit.prevent="loginUser"
        >
          <input
            type="text"
            id="email"
            class="form-control mb-5"
            placeholder="Email"
            v-model="login.email"
          />
          <!-- Password -->
          <input
            type="password"
            id="password"
            class="form-control mb-5"
            placeholder="Password"
            v-model="login.password"
          />

          <!-- Sign in button -->
          <center>
            <button class="btn btn-success btn-block w-75 my-4" type="submit">
              Logi sisse
            </button>
          </center>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async loginUser() {
      try {
        let response = await this.$http.post("/api/login", this.login);
        let token = response.data.token;
        localStorage.setItem("jwt", token);

        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        req.userData = decoded;
        console.log(req.userData);
        const userType = req.userData.userType;

        if (token) {
          if (userType = "ADMIN") {
            this.$swal("Success", "Login Successful", "success");
            this.$router.push("/homeAdmin");
          }
          if (userType = "NOTADMIN") {
            this.$swal("Success", "Login Successful", "success");
            this.$router.push("/homeUser");
          }
        }
      } catch (err) {
        this.$swal("Error", "Something Went Wrong", "error");
        console.log(err.response);
      }
    },
  },
};
</script>
