<template>
    <TeamMembers title="Korraldajad" :members="organizers"/>
    <TeamMembers title="Treenerid" :members="trainers" />
    <TeamMembers title="Meeskond" :members="voluntees" />
    <TeamMembers title="Heli ja Valgus" :members="technicians" />
    <TeamMembers title="Veebiarendus" :members="webDevelopers" />
    <TeamMembers title="Turundus" :members="marketing" class="page-section-last" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TeamMembers from "../components/TeamMembers.vue";
import { Role } from "../domain/enums/Role";
import { Person } from "../domain/models/Person";

export default defineComponent({
    components: { TeamMembers },
    data() {
        return {
            organizers: [] as Person[],
            trainers: [] as Person[],
            voluntees: [] as Person[],
            technicians: [] as Person[],
            webDevelopers: [] as Person[],
            marketing: [] as Person[]
        };
    },
    mounted() {
        const people: Person[] = [
        {
            name: "Eliise",
            description: {
                "3 asja, milleta elada ei suudaks:": "Lähedased, muusika, huumor",
                "Milliste sõnadega end iseloomustad?": "Sihikindel, julge, aus ja hooliv",
                "Lemmikfilm/sari:": "\"Bridgerton\"",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": "Elu muutub palju tähendusrikkamaks, kui sa mõistad, et sa ei saa kogeda sama hetke mitu korda."
            },
            role: Role.Organizer,
            image: "TTL_meeskond_koduleht_Eliise-7565.jpg"
        },
        {
            name: "Lisanne",
            description: {
                "3 asja, milleta elada ei suudaks:": "Šokolaad, muusika, reisimine",
                "Milliste sõnadega end iseloomustad?": "Heasüdamlik, loominguline, tagasihoidlik",
                "Lemmikfilm/sari:": "\"Love Island\"",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": "You are only as pretty as you treat people."
            },
            role: Role.Organizer,
            image: "TTL_meeskond_koduleht_Sannu-7453.jpg"
        },
        {
            name: "Moona",
            description: {
                "3 asja, milleta elada ei suudaks:": "Päike, muusika, šokolaad",
                "Milliste sõnadega end iseloomustad?": "Hooliv, särav, lühike",
                "Lemmikfilm/sari:": "-",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": "Oma elu elamiseks on ainult kaks võimalust. Esimene on uskuda, et miski pole ime. Teine on uskuda, et kõik on ime."
            },
            role: Role.Organizer,
            image: "Moona.jpg"
        },
        {
            name: "Marii",
            description: {
                "3 asja, milleta elada ei suudaks:": "Krõbinad, mu padi ja mu kassid",
                "Milliste sõnadega end iseloomustad?": "Otsekohene, veits naljakas ka, aktiivne ja hull ",
                "Lemmikfilm/sari:": "\"Kättemaksukontor!!!\"",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": "Ole sina ise✌🏻"
            },
            role: Role.Trainer,
            image: "TTL_meeskond_koduleht_Marii-7469.jpg"
        },
        {
            name: "Eva-Liisa",
            description: {
                "3 asja, milleta elada ei suudaks:": "Raamatud, tomatid, sõbrad",
                "Milliste sõnadega end iseloomustad?": "Jutukas, sõbralik, lõbus",
                "Lemmikfilm/sari:": "\"12 vihast meest\"",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": "\"Pole veel aeg muretseda” - Atticus Finch -“ Tappa laulurästast\"",
            },
            role: Role.Voluntee,
            image: "TTL_meeskond_koduleht_Eva-Liisa-7547.jpg"
        },
        {
            name: "Karoliine",
            description: {
                "3 asja, milleta elada ei suudaks:": "Muusika, sõbrad, mullivesi",
                "Milliste sõnadega end iseloomustad?": "Rõõmsameelne ja sõbralik",
                "Lemmikfilm/sari:": "\"The Office\"",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": "Ära loe päevi – pane päevad lugema."
            },
            role: Role.Voluntee,
            image: "TTL_meeskond_koduleht_Karoliine-7510.jpg"
        },
        {
            name: "Aleksia",
            description: {
                "3 asja, milleta elada ei suudaks:": "Vürtsikad nuudlid, hea huumor, jazzmuusika",
                "Milliste sõnadega end iseloomustad?": "Alati positiivne, avatud ja usaldusväärne",
                "Lemmikfilm/sari:": "\"The First Avenger\", \"Divergent\", \"You\"",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": "Don't waste your time by overthinking - just live and trust your intuition and you’ll feel better!!!"
            },
            role: Role.Trainer,
            image: "TTL_meeskond_koduleht_Aleksia-7409.jpg"
        },
        {
            name: "Helena Anette",
            description: {
                "3 asja, milleta elada ei suudaks:": "Tants, suvi, juicy gossip",
                "Milliste sõnadega end iseloomustad?": "Otsekohene, järjekindel",
                "Lemmikfilm/sari:": "\"Baby\"",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": "Keep calm and dance"
            },
            role: Role.Trainer,
            image: "TTL_meeskond_koduleht_Helena-7441.jpg"
        },
        {
            name: "Lola",
            description: {
                "3 asja, milleta elada ei suudaks:": "Söömine, magamine, päike",
                "Milliste sõnadega end iseloomustad?": "Koomiline, omamoodi",
                "Lemmikfilm/sari:": "\"Kättemaksukontor\", \"Moana\"",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": "Live laugh love"
            },
            role: Role.Trainer,
            image: "TTL_meeskond_koduleht_Lola-7577.jpg"
        },
        {
            name: "Katarina",
            description: {
                "3 asja, milleta elada ei suudaks:": "Muusika, raamatud, rändamine",
                "Milliste sõnadega end iseloomustad?": "Mitmekülgne, hooliv, otsekohene",
                "Lemmikfilm/sari:": "\"10 things I hate about you\"",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": "Be afraid and do it anyway."
            },
            role: Role.Trainer,
            image: "TTL_meeskond_koduleht_Katarina-7461.jpg"
        },
        {
            name: "Kertrud",
            description: {
                "3 asja, milleta elada ei suudaks:": "Padi, roosa värv, Pinterest",
                "Milliste sõnadega end iseloomustad?": "Avatud, lõbus, sõbralik",
                "Lemmikfilm/sari:": "\"On my block\", \"The office\"",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": "\"Kui sa oled seest ilus, siis seda on väljast näha\" - Kate Moss"
            },
            role: Role.Trainer,
            image: "TTL_meeskond_koduleht_Kertrud-7526.jpg"
        },
        {
            name: "Nele",
            description: {
                "3 asja, milleta elada ei suudaks:": "Deodorant, hambahari, emps",
                "Milliste sõnadega end iseloomustad?": "mul emme alati öelnud, et olen eriline",
                "Lemmikfilm/sari:": "\"Coco\"",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": "kui oled kaelani sõnnikus, siis ära lase pead norgu, muidu saab nägu ka mustaks"
            },
            role: Role.Trainer,
            image: "profile.png"
        },
        {
            name: "Helle-Marii",
            description: {
                "3 asja, milleta elada ei suudaks:": "Vesi, sõbrad ja huumor",
                "Milliste sõnadega end iseloomustad?": "Sõbralik, avameelne, energiline",
                "Lemmikfilm/sari:": "\"10 things i hate about you\"",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": "Everything happens for a reason"
            },
            role: Role.Trainer,
            image: "profile.png"
        },
        {
            name: "Marta",
            description: {
                "3 asja, milleta elada ei suudaks:": "Muusika, loodus, kallid",
                "Milliste sõnadega end iseloomustad?": "Töökas, rõõmus, usaldav",
                "Lemmikfilm/sari:": "\"Bridgerton\" ja dokumentaalid",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": "Riskides satume kõige ägedamatesse seiklustesse."
            },
            role: Role.Marketing,
            image: "TTL_meeskond_koduleht_Marta-7616.jpg"
        },
        {
            name: "Elis",
            description: {
                "3 asja, milleta elada ei suudaks:": "Kummikommid, kaamera, sport",
                "Milliste sõnadega end iseloomustad?": "Kohusetundlik, otsekohene, tore",
                "Lemmikfilm/sari:": "\"Ohtlik lend\"",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": "Alles siis, kui viimane puu on maha raiutud, viimane jõgi mürgitatud ja viimane kala püütud, saame aru, et raha ei saa süüa."
            },
            role: Role.Voluntee,
            image: "TTL_meeskond_koduleht_Elis-7487.jpg"
        },
        {
            name: "Elina",
            description: {
                "3 asja, milleta elada ei suudaks:": "Hommikukohv, mu koer ja mu voodi",
                "Milliste sõnadega end iseloomustad?": "Pean ennast rõõmsameelseks ning avatud inimeseks, kellele meeldib inimestega suhelda.",
                "Lemmikfilm/sari:": "\"10 põhjust miks sind vihata\", \"Friends\"",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": "Elu mõte on leida elu mõte."
            },
            role: Role.Voluntee,
            image: "TTL_meeskond_koduleht_Elina-7394.jpg"
        },
        {
            name: "Toomas",
            description: {
                "3 asja, milleta elada ei suudaks:": "Tantsimine, tantsimine ja tantsimine",
                "Milliste sõnadega end iseloomustad?": "Olen konkreetne ja nõudlik. Vajadusel aitan alati ja olen toeks.",
                "Lemmikfilm/sari:": "\"Creep\" 2014",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": "Kui mõistusega ei saa, proovi jõuga."
            },
            role: Role.Trainer,
            image: "TTL_meeskond_koduleht_Toomas-7552.jpg"
        },
        {
            name: "Farida",
            description: {
                "3 asja, milleta elada ei suudaks:": "Lähedased inimesed, hea huumor ja muusika",
                "Milliste sõnadega end iseloomustad?": "Empaatiline, siiras ja usaldusväärne",
                "Lemmikfilm/sari:": "\"Breaking Bad\", \"The Office\"",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": "Mõnikord ei saa sa kunagi teada ühe hetke väärtust enne, kui sellest saab mälestus."
            },
            role: Role.Voluntee,
            image: "TTL_meeskond_koduleht_Farida-7557.jpg"
        },
        {
            name: "Riho",
            description: {
                "3 asja, milleta elada ei suudaks:": "Vesi, sõbrad ja sarkasm",
                "Milliste sõnadega end iseloomustad?": "Energiline, vormis, sõbralik, hea isuga",
                "Lemmikfilm/sari:": "\"Stargate SG-1\"",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": "Tempora mutantur et nos mutamur in illis"
            },
            role: Role.Technician,
            image: "TTL_meeskond_koduleht_Riho-7600.jpg"
        },
        {
            name: "Emma Lotta",
            description: {
                "3 asja, milleta elada ei suudaks:": "Muusika, pilved, äkilised naerupahvakud",
                "Milliste sõnadega end iseloomustad?": "Päikseline, mitmekülgne, sihikindel",
                "Lemmikfilm/sari:": "\"Lotte ja Kuukivi saladus\"",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": "Ära mine närvi"
            },
            role: Role.Voluntee,
            image: "TTL_meeskond_koduleht_Emma-7504.jpg"
        },
        {
            name: "Grete",
            description: {
                "3 asja, milleta elada ei suudaks:": "Pinterest, paber ja sõõrikud",
                "Milliste sõnadega end iseloomustad?": "Tagasihoidlik, vaikne, inspireeritud",
                "Lemmikfilm/sari:": "Pipi Pikksuka filmid",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": "Me ei mäleta päevi, me mäletame hetki."
            },
            role: Role.Voluntee,
            image: "TTL_meeskond_koduleht_Grete-7592.jpg"
        },
        {
            name: "Teele",
            description: {
                "3 asja, milleta elada ei suudaks:": "Jõusaal, Stanley cup, geelküüned",
                "Milliste sõnadega end iseloomustad?": "Sihikindel, loov, tähelepanelik",
                "Lemmikfilm/sari:": "\"Interstellar\", \"The Imitation Game\", \"Peaky Blinders\"",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": "Unista suurelt ja ära karda ebaõnnestuda."
            },
            role: Role.WebDeveloper,
            image: "Teele.jpg"
        },
        {
            name: "Annike",
            description: {
                "3 asja, milleta elada ei suudaks:": "Muusika, kunst, puhkepäevad",
                "Milliste sõnadega end iseloomustad?": "Rahulik, loominguline, abivalmis",
                "Lemmikfilm/sari:": "\"Lord of the rings\", \"Interstellar\", \"Dark\", \"Severance\"",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": "Ära kiirusta"
            },
            role: Role.WebDeveloper,
            image: "profile.png"
        }
    ];

        this.organizers = people.filter(p => p.role === Role.Organizer);
        this.trainers = people.filter(p => p.role === Role.Trainer);
        this.voluntees = people.filter(p => p.role === Role.Voluntee);
        this.technicians = people.filter(p => p.role === Role.Technician);
        this.webDevelopers = people.filter(p => p.role === Role.WebDeveloper);
        this.marketing = people.filter(p => p.role === Role.Marketing);
    }
});
</script>