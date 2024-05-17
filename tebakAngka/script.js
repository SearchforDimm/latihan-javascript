var comp = Math.floor(Math.random() * 11);
console.log(comp);

var lagi = true;
var selesai = false;
while ( lagi === true ){

var user = prompt("Tebak angka 1-10");
alert("angka yang kamu masukan, " + user);

    if (user < comp) {
        alert("Kurang Tinggi");
        lagi = confirm("Coba lagi");
    } else if ( user > comp ) { 
        alert("Lebih rendah");
        lagi = confirm("Coba lagi")
    } else {
        alert("Selamat, kamu benar");
        lagi = false;
    }

}