<template>
    <About />
    <Staff />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import About from "./About.vue";
import Staff from "./Staff.vue";

@Options({
    components: { About, Staff }
})
export default class Home extends Vue {}
</script>