<template>
    <TeamMembers title="Korraldajad" :members="organizers"/>
    <TeamMembers title="Treenerid" :members="trainers" />
    <TeamMembers title="Vabatahtlikud" :members="voluntees" class="page-section-last" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TeamMembers from "../components/TeamMembers.vue";
import { Role } from "../domain/enums/Role";
import { Person } from "../domain/models/Person";

@Options({
    components: { TeamMembers }
})
export default class Team extends Vue {
    organizers: Person[] = [];
    trainers: Person[] = [];
    voluntees: Person[] = [];

    mounted(): void {
        this.organizers = this.people.filter(p => p.role === Role.Organizer);
        this.trainers = this.people.filter(p => p.role === Role.Trainer);
        this.voluntees = this.people.filter(p => p.role === Role.Voluntee);
    }

    private people: Person[] = [
        {
            name: "Eliise Lindre",
            description: {
                "3 asja, milleta elada ei suudaks:": "Lähedased, muusika, huumor",
                "Milliste sõnadega end iseloomustad?": "Sihikindel, julge, aus ja hooliv",
                "Lemmikfilm/sari:": "\"Bridgerton\"",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": "Elu muutub palju tähendusrikkamaks, kui sa mõistad, et sa ei saa kogeda sama hetke mitu korda."
            },
            role: Role.Organizer,
            image: "Eliise.jpg"
        },
        {
            name: "Lisanne Lindre",
            description: {
                "3 asja, milleta elada ei suudaks:": "Šokolaad, muusika, reisimine",
                "Milliste sõnadega end iseloomustad?": "Heasüdamlik, loominguline, tagasihoidlik",
                "Lemmikfilm/sari:": "\"Harry Potter\", \"Breaking Bad\"",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": "You are only as pretty as you treat people."
            },
            role: Role.Organizer,
            image: "Lisanne.jpg"
        },
        {
            name: "Evgenia Iarnia",
            description: {
                "3 asja, milleta elada ei suudaks:": "Märkmik, prillid, auto",
                "Milliste sõnadega end iseloomustad?": "Uudishimulik, põhjalik, tegus",
                "Lemmikfilm/sari:": "\"The Holiday\"",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": "\"Kui töö ei suju ja muutub raskeks, siis tuleb teha kohvipaus.\" - Stephen Hawking"
            },
            role: Role.Organizer,
            image: "Evgenia.jpg"
        },
        {
            name: "Lisette Akkuratov",
            description: {
                "3 asja, milleta elada ei suudaks:": "Tants, vesi, muusika",
                "Milliste sõnadega end iseloomustad?": "Enesekindel, ambitsioonikas ja hooliv",
                "Lemmikfilm/sari:": "\"Outer banks\"",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": "Kõik juhtub põhjusega."
            },
            role: Role.Trainer,
            image: "Lisette.jpg"
        },
        {
            name: "Moona Mürk",
            description: {
                "3 asja, milleta elada ei suudaks:": "Päike, muusika, šokolaad",
                "Milliste sõnadega end iseloomustad?": "Hooliv, särav, lühike",
                "Lemmikfilm/sari:": "-",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": "Oma elu elamiseks on ainult kaks võimalust. Esimene on uskuda, et miski pole ime. Teine on uskuda, et kõik on ime."
            },
            role: Role.Trainer,
            image: "Moona.jpg"
        },
        {
            name: "Caroline Kiviberg ",
            description: {
                "3 asja, milleta elada ei suudaks:": "Toorjuustukook, klaver, pintsel",
                "Milliste sõnadega end iseloomustad?": "Energiline, lojaalne, loov",
                "Lemmikfilm/sari:": "\"Kättemaksukontor\", \"Rapuntsel\"",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": "Raha tuleb tagasi, kuid aeg mitte."
            },
            role: Role.Trainer,
            image: "Caroline.jpg"
        },
        {
            name: "Marii Pukki",
            description: {
                "3 asja, milleta elada ei suudaks:": "TTL, vesi, tantsud",
                "Milliste sõnadega end iseloomustad?": "Naljakas, otsekohene, hea südamega",
                "Lemmikfilm/sari:": "\"Titanic\", \"Ginny&Georgia\"",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": "\"Tants olii megaaa!! Teeme ühe korra veel\""
            },
            role: Role.Trainer,
            image: "Marii.jpg"
        },
        {
            name: "Elly Naigla",
            description: {
                "3 asja, milleta elada ei suudaks:": "Tants, söök, sõbrad",
                "Milliste sõnadega end iseloomustad?": "Kohati omamoodi, goofy, hooliv, lojaalne",
                "Lemmikfilm/sari:": "\"My Little Pony\", \"My Name\", \"The Babysitter\", \"The Shallows\"",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": "Kui keegi ütleb sulle, et sa ei saa hakkama siis nad on lihtsalt kadedad, et oled jõudnud kaugemale kui nad algselt arvasid.\n\"Be prepared. Just when you think you found your way, life will throw you onto a new path.\" -Mattias Frozen II"
            },
            role: Role.Trainer,
            image: "Elly.jpg"
        },
        {
            name: "Aleksia Yarnya",
            description: {
                "3 asja, milleta elada ei suudaks:": "Vürtsikad nuudlid, hea huumor, jazzmuusika",
                "Milliste sõnadega end iseloomustad?": "Alati positiivne, avatud ja usaldusväärne",
                "Lemmikfilm/sari:": "\"The First Avenger\", \"Divergent\", \"You\"",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": "Don't waste your time by overthinking - just live and trust your intuition and you’ll feel better!!!"
            },
            role: Role.Trainer,
            image: "Aleksia.jpg"
        },
        {
            name: "Helena Anette Hanni",
            description: {
                "3 asja, milleta elada ei suudaks:": "Tants, suvi, juicy gossip",
                "Milliste sõnadega end iseloomustad?": "Otsekohene, järjekindel",
                "Lemmikfilm/sari:": "\"Baby\"",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": "Keep calm and dance"
            },
            role: Role.Trainer,
            image: "Helena.jpg"
        },
        {
            name: "Marcos Veeber",
            description: {
                "3 asja, milleta elada ei suudaks:": "",
                "Milliste sõnadega end iseloomustad?": "",
                "Lemmikfilm/sari:": "",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": ""
            },
            role: Role.Trainer,
            image: "profile.png"
        },
        {
            name: "Marta Kolde",
            description: {
                "3 asja, milleta elada ei suudaks:": "Muusika, loodus, kallid",
                "Milliste sõnadega end iseloomustad?": "Abivalmis, tugev, omapärane",
                "Lemmikfilm/sari:": "\"Gilmore Girls\" ning \"Friends\"",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": "Headust leidub kõigis!"
            },
            role: Role.Voluntee,
            image: "Marta.jpg"
        },
        {
            name: "Kärt Maasik",
            description: {
                "3 asja, milleta elada ei suudaks:": "Voodi, padi ja tekk",
                "Milliste sõnadega end iseloomustad?": "Omamoodi huumorimeelega",
                "Lemmikfilm/sari:": "\"Howl the moving castle\"",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": "Live love laugh"
            },
            role: Role.Voluntee,
            image: "Kärt.jpg"
        },
        {
            name: "Elis Viibur",
            description: {
                "3 asja, milleta elada ei suudaks:": "Tants, sport, loodus",
                "Milliste sõnadega end iseloomustad?": "Kohusetundlik, sõbralik, võistlushimuline, tore",
                "Lemmikfilm/sari:": "\"Normal people\"",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": "Do it with passion or not at all."
            },
            role: Role.Voluntee,
            image: "Elis.jpg"
        },
        {
            name: "Elina Kaska",
            description: {
                "3 asja, milleta elada ei suudaks:": "Hommikukohv, mu koer ja mu voodi",
                "Milliste sõnadega end iseloomustad?": "Pean ennast rõõmsameelseks ning avatud inimeseks, kellele meeldib inimestega suhelda.",
                "Lemmikfilm/sari:": "\"10 põhjust miks sind vihata\", \"Friends\"",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": "Elu mõte on leida elu mõte."
            },
            role: Role.Voluntee,
            image: "Elina.jpg"
        },
        {
            name: "Liis Tomasov",
            description: {
                "3 asja, milleta elada ei suudaks:": "Loodus, toredad inimesed, suvi",
                "Milliste sõnadega end iseloomustad?": "Siiras, rõõmus, hooliv",
                "Lemmikfilm/sari:": "Ei suuda valida, häid filme ja sarju on liiga palju.",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": "Mõista päriselt, et käesolev hetk on kõik, mis sul eales on."
            },
            role: Role.Voluntee,
            image: "Liis.jpg"
        },
        {
            name: "Sten-Lenar Nirgi",
            description: {
                "3 asja, milleta elada ei suudaks:": "Internet, raha, kaamerad",
                "Milliste sõnadega end iseloomustad?": "Lõbus ja spontaanne",
                "Lemmikfilm/sari:": "\"Breaking bad\"",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": "It always seems impossible until it's done."
            },
            role: Role.Voluntee,
            image: "Sten.jpg"
        },
        {
            name: "Riho Valdok",
            description: {
                "3 asja, milleta elada ei suudaks:": "Vesi, sõbrad ja sarkasm",
                "Milliste sõnadega end iseloomustad?": "Energiline, vormis, sõbralik, hea isuga",
                "Lemmikfilm/sari:": "\"Stargate SG-1\"",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": "Tempora mutantur et nos mutamur in illis"
            },
            role: Role.Voluntee,
            image: "Riho.jpg"
        },
        {
            name: "Emma-Lotta Vikk",
            description: {
                "3 asja, milleta elada ei suudaks:": "Muusika, pilved, äkilised naerupahvakud",
                "Milliste sõnadega end iseloomustad?": "Päikseline, mitmekülgne, sihikindel",
                "Lemmikfilm/sari:": "\"Clueless\"",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": "Ära mine närvi"
            },
            role: Role.Voluntee,
            image: "Emma.jpg"
        },
        {
            name: "Teele Kaldaru",
            description: {
                "3 asja, milleta elada ei suudaks:": "Trenn, kaerapiim, geelküüned",
                "Milliste sõnadega end iseloomustad?": "Sihikindel, püüdlik, tähelepanelik",
                "Lemmikfilm/sari:": "\"Interstellar\", \"The Imitation Game\", \"Peaky Blinders\"",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": "Unista suurelt ja ära karda ebaõnnestuda."
            },
            role: Role.Voluntee,
            image: "Teele.jpg"
        },
        {
            name: "Lola Hannus",
            description: {
                "3 asja, milleta elada ei suudaks:": "Söömine, magamine, päike",
                "Milliste sõnadega end iseloomustad?": "Koomiline, omamoodi",
                "Lemmikfilm/sari:": "\"Kättemaksukontor\", \"Moana\"",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": "Live laugh love"
            },
            role: Role.Voluntee,
            image: "Lola.jpg"
        },
        {
            name: "Martta Raudsepp",
            description: {
                "3 asja, milleta elada ei suudaks:": "Krõpsud, hiphop ja koerad",
                "Milliste sõnadega end iseloomustad?": "Energiline, empaatiline, näljane",
                "Lemmikfilm/sari:": "\"Step up\"",
                "Quote/sõnum, mis sind inspireerib/mille soovid teistele edasi anda:": "One day this pain will make sense to you"
            },
            role: Role.Voluntee,
            image: "profile.png"
        }
    ]
    }
</script>