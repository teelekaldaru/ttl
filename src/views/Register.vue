<template>
  <section class="page-section">
      <div class="row justify-content-center container mt-5">
          <h1>Registreeri ruttu, enne kui on hilja!</h1>
      </div>
      <div class="row justify-content-center mt-5" style="height: 1000px">
          <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScV8agb7K21yUJNvTMI0hkXZPcSq82CmwW34avwKQasa2XLww/closedform"
              style="overflow: hidden; width: 100%"
          >
          </iframe>
      </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: { },
})
export default class Register extends Vue {}
</script>