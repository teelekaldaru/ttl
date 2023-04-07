<template>
  <section class="page-section page-section-last text-center">
      <div class="container">
        <h3 class="page-section-heading  text-secondary">
          Registreerimine
        </h3>

        <div class="row pb-5">
          <div class="col">
            <h5 class="page-section-content py-3">
              Tamsalu Tantsulaager 2022 REGISTREERIMINE toimub 1. maist - 30. maini!
            </h5>
            <button type="button" class="btn btn-primary">REGISTREERI TANTSIJAKS <i class="fa fa-arrow-right ml-1"></i></button>
          </div>
        </div>

        <div class="row">
            <div class="col">
              <h5 class="page-section-content py-3">
                Sel aastal on peale tantsijate meil ka lavakujunduse rühm 4. - 12. klassi noortele! (Kohti selles rühmas on 10)<br />
                Lavakujunduse rühm tegeleb juhendaja eestvedamisel laagris erinevate loovate tegevustega (meisterdamine, maalimine jms),
                osaleb laagri vältel põnevates loovates töötubades ning vastutab kontserdi lavakujunduse ning dekoratsioonide valmimise eest. 
                Kui tunned, et soovid laagris osaleda, aga ei ole kõige pädevam tantsulõvi,
                vaid pigem terava silma ja loovate ideedega, siis nüüd saad selleks võimaluse!
              </h5>
              <button type="button" class="btn btn-primary">REGISTREERI LAVAKUJUNDAJAKS <i class="fa fa-arrow-right ml-1"></i></button>
            </div>
        </div>
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