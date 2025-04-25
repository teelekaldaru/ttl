<template>
  <section class="page-section page-section-main text-center">
      <div class="container">
        <h3 class="page-section-heading  text-secondary">
          Registreerimine
        </h3>

        <div class="row pb-5">
          <div class="col">
            <h5 class="page-section-content py-4">
              Registreerimine avaneb 1. mail kell 10.00!
            </h5>
            <button type="button" class="btn btn-lg btn-primary" @click="openForm()">REGISTREERI TANTSIJAKS </button>
            <!--<button type="button" class="btn btn-lg btn-primary" @click="backToHome()">TAGASI AVALEHELE</button>-->
          </div>
        </div>
      </div>
  </section>
</template>

<script lang="ts">
import router from "@/router";
import { Options, Vue } from "vue-class-component";

@Options({
  components: { },
})
export default class Register extends Vue {

  openForm() {
    window.open("https://docs.google.com/forms/d/1P_s4q4_hEs6smIcCj7x5D7AQQt7dgumjdmjVI-PDHRc/");
  }

  backToHome() {
    router.push({ path: '/'})
  }
}
</script>