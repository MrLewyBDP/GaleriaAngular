import { Component } from '@angular/core';
import { Obiekt, PodObiekt } from './interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular01';
  Kategoria:any = null;
  idPodPodzial:any = null;
  aktualnePodPodzialy:PodObiekt[] = [];
  idAktualne:number = 0;
  Ryby:Obiekt = {
    Podzial: ["Morskie", "Słodkowodne"],
    zdjeciaPodzial: ["./assets/morskie.png", "./assets/slodkie.png"],
    podPodzial: [
      {
        podzial: 0,
        nazwa: "makrela",
        zdjecie: "./assets/makrela.png",
        opis: "makrela jest rybą morską"
      },
      {
        podzial: 0,
        nazwa: "śledź",
        zdjecie: "./assets/sledz.png",
        opis: "śledź jest rybą morską"
      },
      {
        podzial: 0,
        nazwa: "tuńczyk",
        zdjecie: "./assets/tunczyk.png",
        opis: "tuńczyk jest rybą morską"
      },
      {
        podzial: 1,
        nazwa: "karp",
        zdjecie: "./assets/karp.png",
        opis: "karp jest rybą słodkowodną"
      },
      {
        podzial: 1,
        nazwa: "pstrąg",
        zdjecie: "./assets/pstrag.png",
        opis: "pstrąg jest rybą słodkowodną"
      },
      {
        podzial: 1,
        nazwa: "karaś",
        zdjecie: "./assets/karas.png",
        opis: "karaś jest rybą słodkowodną"
      },
    ]
  }
  Gady:Obiekt = {
    Podzial: ["Węże", "Jaszczurki", "Żółwie", "Krokodyle"],
    zdjeciaPodzial: ["./assets/weze.png", "./assets/jaszczurki.png", "./assets/zolwie.png", "./assets/krokodyle.png"],
    podPodzial: [
      {
        podzial: 0,
        nazwa: "Gniewosz Plamisty",
        zdjecie: "./assets/gniewosz.png",
        opis: "Gniewosz Pospolity jest wężem"
      },
      {
        podzial: 0,
        nazwa: "Wąż Eskulapa",
        zdjecie: "./assets/eskulapa.png",
        opis: "Wąż Eskulapa jest wężem"
      },
      {
        podzial: 0,
        nazwa: "Żmija Zygzakowata",
        zdjecie: "./assets/zmija.png",
        opis: "Żmija Zygzakowata jest wężem"
      },
      {
        podzial: 0,
        nazwa: "Zaskroniec Zwyczajny",
        zdjecie: "./assets/zaskroniec.png",
        opis: "Zaskroniec Zwyczajny jest wężem"
      },
      {
        podzial: 1,
        nazwa: "jaszczurka zwinka",
        zdjecie: "./assets/zwinka.png",
        opis: "jaszczurka zwinka jest jaszczurką"
      },
      {
        podzial: 1,
        nazwa: "padalec",
        zdjecie: "./assets/padalec.png",
        opis: "padalec jest jaszczurką"
      },
      {
        podzial: 1,
        nazwa: "jaszczurka żyworodna",
        zdjecie: "./assets/zyworodna.png",
        opis: "jaszczurka żyworodna jest jaszczurką"
      },
      {
        podzial: 1,
        nazwa: "murówka zwyczajna",
        zdjecie: "./assets/murowka.png",
        opis: "murówka zwyczajna jest jaszczurką"
      },
      {
        podzial: 2,
        nazwa: "Żółw Błotny",
        zdjecie: "./assets/blotny.png",
        opis: "Żółw Błotny jest żółwiem"
      },
      {
        podzial: 3,
        nazwa: "Krokodyl Amerykański",
        zdjecie: "./assets/amerykanski.png",
        opis: "Krokodyl Amerykański jest krokodylem"
      },
      {
        podzial: 3,
        nazwa: "Krokodyl Australijski",
        zdjecie: "./assets/australijski.png",
        opis: "Krokodyl Australijski jest krokodylem"
      },
    ]
  }
  Płazy:Obiekt = {
    Podzial: ["Płazy ogoniaste", "Płazy bezogonowe"],
    zdjeciaPodzial: ["./assets/ogoniaste.png", "./assets/bezogonowe.png"],
    podPodzial: [
      {
        podzial: 0,
        nazwa: "Salamandra Plamista",
        zdjecie: "./assets/salamandra.png",
        opis: "Salamandra Plamista jest płazem ogoniastym"
      },
      {
        podzial: 0,
        nazwa: "Traszka Zwyczajna",
        zdjecie: "./assets/zwyczajna.png",
        opis: "Traszka Zwyczajna jest płazem ogoniastym"
      },
      {
        podzial: 0,
        nazwa: "Traszka Grzebieniasta",
        zdjecie: "./assets/grzebieniasta.png",
        opis: "Traszka Grzebieniasta jest płazem ogoniastym"
      },
      {
        podzial: 1,
        nazwa: "Grzebiuszka Ziemna",
        zdjecie: "./assets/ziemna.png",
        opis: "Grzebiuszka Ziemna jest płazem bezogonowym"
      },
      {
        podzial: 1,
        nazwa: "Ropucha Szara",
        zdjecie: "./assets/ropucha.png",
        opis: "Ropucha Szara jest płazem bezogonowym"
      }

    ]
  }
  Ssaki:Obiekt = {
    Podzial: ["Stekowce", "Torbacze", "Łożyskowce"],
    zdjeciaPodzial: ["./assets/stekowce.png", "./assets/torbacze.png", "./assets/lozyskowce.png"],
    podPodzial: [
      {
        podzial: 0,
        nazwa: "Dziobak",
        zdjecie: "./assets/dziobak.png",
        opis: "dziobak jest stekowcem"
      },
      {
        podzial: 0,
        nazwa: "Kolczatka",
        zdjecie: "./assets/kolczatka.png",
        opis: "Kolczatka jest stekowcem"
      },
      {
        podzial: 1,
        nazwa: "Kangur",
        zdjecie: "./assets/kangur.png",
        opis: "Kangur jest torbaczem"
      },
      {
        podzial: 1,
        nazwa: "Koala",
        zdjecie: "./assets/koala.png",
        opis: "Koala jest torbaczem"
      },
      {
        podzial: 1,
        nazwa: "wiewiórka workowata",
        zdjecie: "./assets/workowata.png",
        opis: "wiewiórka workowata jest torbaczem"
      },
      {
        podzial: 2,
        nazwa: "Człowiek",
        zdjecie: "./assets/czlowiek.png",
        opis: "Człowiek jest łożyskowcem"
      },
      {
        podzial: 2,
        nazwa: "Świnia",
        zdjecie: "./assets/swinia.png",
        opis: "Świnia jest łożyskowcem"
      },
      {
        podzial: 2,
        nazwa: "Królik",
        zdjecie: "./assets/krolik.png",
        opis: "Królik jest łożyskowcem"
      },
    ]
  }

  klik1()
  {
    this.Kategoria = this.Ryby
    this.idPodPodzial = null;
    while(this.aktualnePodPodzialy.length!=0)
    {
      this.aktualnePodPodzialy.pop()
    }
  }
  klik2()
  {
    this.Kategoria = this.Gady
    this.idPodPodzial = null;
    while(this.aktualnePodPodzialy.length!=0)
    {
      this.aktualnePodPodzialy.pop()
    }
  }
  klik3()
  {
    this.Kategoria = this.Płazy
    this.idPodPodzial = null;
    while(this.aktualnePodPodzialy.length!=0)
    {
      this.aktualnePodPodzialy.pop()
    }
  }
  klik4()
  {
    this.Kategoria = this.Ssaki
    this.idPodPodzial = null;
    while(this.aktualnePodPodzialy.length!=0)
    {
      this.aktualnePodPodzialy.pop()
    }
  }
  klikP(event:MouseEvent)
  {
    let target: any = event.target
    this.idPodPodzial = parseInt(target.id)
    while(this.aktualnePodPodzialy.length!=0)
    {
      this.aktualnePodPodzialy.pop()
    }
    this.idAktualne = 0;
    for(let i=0; i<this.Kategoria.podPodzial.length; i++)
    {
      if(this.Kategoria.podPodzial[i].podzial===this.idPodPodzial)
      {
        this.aktualnePodPodzialy.push(this.Kategoria.podPodzial[i])
      }
    }
  }
  butl()
  {
    if(this.idAktualne==0)
    {
      this.idAktualne = this.aktualnePodPodzialy.length-1
    }
    else
    {
      this.idAktualne--
    }
  }
  butr()
  {
    if(this.idAktualne==this.aktualnePodPodzialy.length-1)
    {
      this.idAktualne = 0
    }
    else
    {
      this.idAktualne++
    }
  }
}
