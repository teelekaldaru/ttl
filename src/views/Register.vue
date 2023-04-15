<template>
  <section class="page-section page-section-main text-center">
      <div class="container">
        <h3 class="page-section-heading  text-secondary">
          Registreerimine
        </h3>

        <div class="row pb-5">
          <div class="col">
            <h5 class="page-section-content py-4">
              Tamsalu Tantsulaager 2023 REGISTREERIMINE toimub 1. maist - 30. maini!
            </h5>
            <button type="button" class="btn btn-lg btn-primary" @click="openForm()">REGISTREERI TANTSIJAKS </button>
          </div>
        </div>
      </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: { },
})
export default class Register extends Vue {

  openForm() {
    window.open("https://forms.gle/34z4WooyeoTpwgX58");
  }
}
</script>