<template>
  <section class="page-section">
        <div class="row justify-content-center container mt-5">
            <h1>Siit leiad Tantsulaagri pildid!</h1>
        </div>
    </section>
    <div class="row">
        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6" style="min-height: 300px" >
          <h3 class="page-section-heading text-center text-secondary my-5">
            2021
          </h3>
          <Gallery url="/" />
        </div>
        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6" style="min-height: 300px" >
          <h3 class="page-section-heading text-center text-secondary my-5">
            2019
          </h3>
          <Gallery url="/" />
        </div>
        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6" style="min-height: 300px" >
          <h3 class="page-section-heading text-center text-secondary my-5">
            2018
          </h3>
          <Gallery url="/" />
        </div>
        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6" style="min-height: 300px" >
          <h3 class="page-section-heading text-center text-secondary my-5">
            2017
          </h3>
          <Gallery url="/" />
        </div>
    </div>
</template>


<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Gallery from "../components/Gallery.vue";

@Options({
  components: { Gallery }
})
export default class Pictures extends Vue {}
</script>