<template>
    <nav class="navbar navbar-expand-lg bg-primary text-uppercase fixed-top" id="mainNav" >
        <div class="container">
            <a class="navbar-brand js-scroll-trigger fs-sm" href="/">TAMSALU TANTSULAAGER</a>
            <button
                class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation">
                Menüü
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item mx-0 mx-lg-1">
                        <a class="nav-link py-3 px-0 px-lg-3 fs-xs rounded js-scroll-trigger" href="/registreerimine">Registreerima</a>
                    </li>
                    <li class="nav-item mx-0 mx-lg-1">
                        <a class="nav-link py-3 px-0 px-lg-3 fs-xs rounded js-scroll-trigger" href="/pildid">Pildid</a>
                    </li>
                    <li class="nav-item mx-0 mx-lg-1">
                        <a class="nav-link py-3 px-0 px-lg-3 fs-xs rounded js-scroll-trigger" href="/#meeskond">Meeskond</a>
                    </li>
                    <li class="nav-item mx-0 mx-lg-1">
                        <a class="nav-link py-3 px-0 px-lg-3 fs-xs rounded js-scroll-trigger" href="/#kontakt">Kontakt</a>
                    </li>
                    <li class="nav-item mx-0 mx-lg-1">
                        <a class="nav-link px-0 px-lg-2 fs-lg rounded js-scroll-trigger" href="https://facebook.com/tamsalutantsulaager">
                            <i class="fab fa-facebook-square social-icon"></i>
                        </a>
                    </li>
                    <li class="nav-item mx-0 mx-lg-1">
                        <a class="nav-link px-0 px-lg-2 fs-lg rounded js-scroll-trigger" href="https://instagram.com/tamsalutantsulaager">
                            <i class="fab fa-instagram social-icon"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
    components: {}
})
export default class Navigation extends Vue {}
</script>

<style scoped lang="scss">
.navbar {
    @media (min-width: 1200px) {
        .container {
            max-width: 100%;
            margin: 0 3rem;
        }
    }
    .social-icon {
        font-size: 1.25rem;
        vertical-align: middle;
    }
}
</style>
