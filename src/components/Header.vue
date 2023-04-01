<template>
  <header class="masthead bg-primary text-white text-center">
        <div class="container d-flex align-items-center flex-column">
            <img
                class="masthead-avatar mb-5"
                src="assets/images/tamtants.png"
                alt="..."
            />
            <h1 class="masthead-heading text-uppercase mb-1">
                TANTSULAAGER TULEB TAAS!
            </h1>

            <h2 class="text-uppercase mb-0">VÕIMSAMALT KUI KUNAGI VAREM!</h2>

            <div class="divider-custom divider-light">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon">
                    <i class="fas fa-star"></i>
                </div>
                <div class="divider-custom-line"></div>
            </div>
            <p class="masthead-subheading font-weight-light mb-0">
                TANTSULAAGER TOIMUB SEL AASTAL
            </p>
            <p class="masthead-subheading font-weight-light mb-1">
                18.07 - 26.08
            </p>
        </div>
    </header>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
    components: {}
})
export default class Header extends Vue {}
</script>