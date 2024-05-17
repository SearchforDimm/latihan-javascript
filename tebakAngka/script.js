const comp = Math.floor(Math.random() * 11);

console.log(comp);
let lagi = true;
let kesempatan = 0;
let tebakan;
while ( lagi ){

    tebakan = window.prompt("Tebak Angka Diantara 1-10");
    tebakan = Number(tebakan);


    if(isNaN(tebakan)) {
        window.alert("tolong masukan angka.");
    } else if (tebakan < 1 || tebakan > 10) {
        window.alert("tolong masukan angka diantara 1-10");
    } else {
        kesempatan++;
        if(tebakan < comp) {
            window.alert("terlalu rendah, coba lagi");
        } else if(tebakan > comp) {
            window.alert("terlalu tinggi, coba lagi");
        } else {
            window.alert(`selamat, kamu benar. kamu butuh ${kesempatan} kesempatan untuk menebak angkanya.`)
            lagi = false;
        }
    }

// var user = prompt("Tebak angka 1-10");
// alert("angka yang kamu masukan, " + user);

//     if (user < comp) {
//         alert("Kurang Tinggi");
//         lagi = confirm("Coba lagi");
//     } else if ( user > comp ) { 
//         alert("Lebih rendah");
//         lagi = confirm("Coba lagi")
//     } else {
//         alert("Selamat, kamu benar");
//         lagi = false;
//     }

}