<template>
  <section class="page-section bg-primary text-white text-center">
      <div class="container">
        <h3 class="page-section-heading mb-4">
          Kontakt
        </h3>
        <h5 class="page-section-content">Võta julgelt ühendust!</h5>

        <div class="row">
          <div class="col-3"></div>
          <div class="col-6">
            <div class="row text-left">
              <div class="col">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div class="col">
                <h6 class="text-uppercase">Aadress</h6>
                <p>Tehnika 1a, Tamsalu 46107</p>
              </div>
            </div>
            <div class="row text-left">
              <div class="col">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div class="col">
                <h6 class="text-uppercase">E-post</h6>
                <p>tamtants@gmail.com</p>
              </div>
            </div>
          </div>
          <div class="col-3"></div>
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