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
            <button type="button" class="btn btn-lg btn-primary" @click="openForm()">REGISTREERI TANTSIJAKS !</button>
          </div>
        </div>
      </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import router from '@/router';

export default defineComponent({
    methods: {
        openForm() {
            window.open("https://docs.google.com/forms/d/1Ft1Xzn_58usJROfkHC3Z-8am6Ntj-mVmrTw_QWYZvmY");
        },
        backToHome() {
            router.push({ path: '/' });
        }
    }
});
</script>