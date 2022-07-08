<template>
  <div class="container">
    <div class="row full-height align-items-center">
      <div class="col-md-5 mx-auto">
        <div class="card">
          <div class="card-body">
            <div class="p-15">
              <div class="m-b-30">
                <img
                  class="img-responsive inline-block"
                  src="/images/logo/logo.png"
                  alt=""
                />
                <h2 class="inline-block pull-right m-v-0 p-t-15">Login</h2>
              </div>
              <p class="m-t-15 font-size-13">
                <a>Login With Phone</a>
              </p>
              <div>
                <div v-if="type === typeLogin.EMAIL_PASSWORD">
                  <div class="form-group">
                    <input
                      v-model="email"
                      type="email"
                      class="form-control"
                      placeholder="User name"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      v-model="password"
                      type="password"
                      class="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div class="checkbox font-size-13 d-inline-block p-v-0 m-v-0">
                    <input id="agreement" name="agreement" type="checkbox" />
                    <label for="agreement">Keep Me Signed In</label>
                  </div>
                  <div class="pull-right">
                    <a href="#">Forgot Password?</a>
                  </div>
                </div>
                <div v-if="type === typeLogin.PHONE">
                  <input
                    v-model="email"
                    type="email"
                    class="form-control"
                    placeholder="User name"
                  />
                  <div style="height: 30px"></div>
                </div>
                <div class="m-t-20 text-right">
                  <button
                    style="width: 100%"
                    type="button"
                    class="btn btn-gradient-success"
                    @click="loginAdmin()"
                  >
                    Login
                  </button>
                </div>
                <div class="list-social-login">
                  <button
                    type="button"
                    class="btn btn-gradient-success"
                    @click="loginAdmin()"
                  >
                    Phone
                  </button>
                  <button
                    type="button"
                    class="btn btn-gradient-success"
                    @click="loginAdmin()"
                  >
                    Facebook
                  </button>
                  <button
                    type="button"
                    class="btn btn-gradient-success"
                    @click="loginAdmin()"
                  >
                    Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import { TYPE_LOGIN } from "@/definition/constants";

export default defineComponent({
  name: "HomePage",
  data() {
    return {
      email: "",
      password: "",
      phone: "",
      type: TYPE_LOGIN.PHONE,
      typeLogin: TYPE_LOGIN,
    };
  },
  methods: {
    ...mapActions({
      login: "Auth/login",
      loginPhone: "Auth/loginPhone",
    }),
    loginAdmin() {
      // this.login({ email: this.email, password: this.password })
      //   .then(() => {
      //     this.$router.push("/");
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     // alert(err);
      //   });

      this.loginPhone({});
    },
    changeTypeLogin(type) {
      this.type = type;
    },
  },
});
</script>

<style lang="scss" scoped>
.list-social-login {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .social-item {
  }
}
</style>
