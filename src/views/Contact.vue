<template>
  <section class="page-section section-contact bg-dark text-white" id="kontakt">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <img
                class="mb-5"
                src="@/assets/img/tamtants_2022.jpg"
                alt="..."
            />
          </div>
          <div class="col-sm-12 col-md-6">
            <h3 class="page-section-heading mb-3 mt-1">
              Kontakt
            </h3>
            <h5 class="page-section-content mb-5">
              Võta julgelt ühendust!
            </h5>
            <p class="mb-1">Tamsalu Tantsulaager</p>
            <p class="mb-1">tamtants@gmail.com</p>
          </div>
        </div>
      </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: { }
})
export default class Contact extends Vue {}
</script>