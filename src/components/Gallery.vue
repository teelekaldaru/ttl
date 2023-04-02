<template>
  <div class="container">
      <div class="row justify-content-center">
          <a :href="url" target="_blank" class="btn btn-info btn-lg">Vaata pilte</a>
      </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: {
      url: String,
  }
})
export default class Gallery extends Vue {
  url!: string;
}
</script>