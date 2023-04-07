<template>
  <section class="page-section page-section-main text-center">
    <div class="container">
        <h3 class="page-section-heading  text-secondary">
          Pildid
        </h3>

        <div class="row pb-3">
          <div class="col">
            <h5 class="py-3">
              Siit leiad eelmiste aastate pildid!
            </h5>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <h5 class="page-section-content pb-1">
              2022
            </h5>
            <button type="button" class="btn btn-primary">Vaata pilte</button>
          </div>
          <div class="col">
            <h5 class="page-section-content pb-1">
              2021
            </h5>
            <button type="button" class="btn btn-primary">Vaata pilte</button>
          </div>
          <div class="col">
            <h5 class="page-section-content pb-1">
              2019
            </h5>
            <button type="button" class="btn btn-primary">Vaata pilte</button>
          </div>
          <div class="col">
            <h5 class="page-section-content pb-1">
              2018
            </h5>
            <button type="button" class="btn btn-primary">Vaata pilte</button>
          </div>
        </div>
      </div>
    </section>
</template>


<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Gallery from "../components/Gallery.vue";

@Options({
  components: { Gallery }
})
export default class Pictures extends Vue {}
</script>