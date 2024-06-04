var tanya = true;
while ( tanya ) {

var p = prompt('pilih : gajah, semut, orang');

var comp = Math.random();
if (comp < 0.34) {
    comp = "gajah"
} else if (comp >= 0.34 && comp < 0.67) {
    comp = "orang";
} else {
    comp = "semut";
}

hasil = ""
if ( p == comp ) {
    hasil = "SERI!"
} else if( p == "gajah") {
    // if (comp == "orang") {
    //     hasil = "MENANG!"
    // } else {
    //     hasil = "KALAH :("
    // }
    hasil = (comp == "orang" ? "MENANG!" : "KALAH :(")
}  else if ( p == "orang") {
    // if (comp == "semut") {
    //     hasil = "MENANG!"
    // } else {
    //     hasil = "KALAH :("
    // }
    hasil = (comp == "semut" ? "MENANG!" : "KALAH :(")

} else if ( p == "semut") {
    // if ( comp == "gajah") {
    //     hasil = "MENANG!"
    // } else {
    //     hasil = "KALAH :("
    // }
    hasil = (comp == "gajah" ? "MENANG!" : "KALAH :(")
} else {
    hasil = "salah input broku"
}
alert("Kamu memilih : " + p + " dan Komputer memilih : " + comp + "\n maka hasilnya kamu : " + hasil);

    tanya = confirm('lagi?')
}

alert("thanks for playing!")
console.log(comp);

