<template>
    <header class="masthead bg-primary text-white text-center">
        <div class="container d-flex align-items-center flex-column">
            <img
                class="masthead-avatar mb-5"
                src="@/assets/img/tamtants.png"
                alt="..."
            />
            <h1 class="masthead-heading font-weight-light text-uppercase mt-4 mb-3">
                TAMSALU TANTSULAAGER 15
            </h1>
            <h2 class="font-weight-light mt-3 mb-5">Tantsulaager tuleb taas!</h2>
            <p class="masthead-subheading font-weight-light my-1">
                TANTSULAAGER TOIMUB SEL AASTAL
            </p>
            <p class="masthead-subheading font-weight-light mb-5">
                01.08 - 09.08
            </p>
            <p class="masthead-subheading font-weight-light my-2">
                <!--<Countdown />-->
                Kontsertid toimuvad 9. augustil Tamsalu Kultuurimajas
            </p>
        </div>
    </header>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Countdown from "./Countdown.vue";

@Options({
    components: { Countdown }
})
class Header extends Vue {}

export default Header;
</script>