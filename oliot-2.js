class Kirja {
    constructor(nimi, kirjailija, julkaisuvuosi, sivumaara, luettu) {
        this.nimi = nimi;
        this.kirjailija = kirjailija;
        this.julkaisuvuosi = julkaisuvuosi;
        this.sivumaara = sivumaara;
        this.luettu = false;
    }
    isItRead() {
        this.luettu = true;
        return this.luettu;
    }
    showInfo() {
        if(this.luettu == true){
        document.getElementById("info").innerHTML = "Kirjan nimi: " + this.nimi + "<br>" + "Kirjailija: " + this.kirjailija +  "<br>" +"Julkaisuvuosi: " + this.julkaisuvuosi + "." + "<br>" + "Sivumäärä: " + this.sivumaara + "<br>" + "Onko kirja luettu: Kyllä"  
        }else{
            document.getElementById("info").innerHTML = "Kirjan nimi: " + this.nimi + "<br>" + "Kirjailija: " + this.kirjailija +  "<br>" +"Julkaisuvuosi: " + this.julkaisuvuosi + "." + "<br>" + "Sivumäärä: " + this.sivumaara + "<br>" + "Onko kirja luettu: Ei"  
        }
        console.log(this.nimi);
        console.log(this.kirjailija);
        console.log(this.julkaisuvuosi);
        console.log(this.sivumaara);
        console.log(this.luettu);
    }
}

var taruSormustenHerrasta = new Kirja("Taru sormusten herrasta", "J. R. R. Tolkien", 1954, 432, false )

taruSormustenHerrasta.showInfo();
