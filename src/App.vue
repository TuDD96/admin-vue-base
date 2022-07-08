<template>
  <div class="app header-default side-nav-dark">
    <div class="layout" :class="setClass()">
      <router-view name="header"/>
      <router-view name="navbar"/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  methods: {
    setClass() {
      if (this.$route.name == "login") {
        return "bg-gradient-info";
      }

      return "";
    },
  },
});
</script>
