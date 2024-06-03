var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        penumpang.push(namaPenumpang);
        return penumpang
    } else {
        for ( var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == undefined) {
                penumpang[i] = namaPenumpang
                return penumpang;
            } 
            else if (penumpang[i] == namaPenumpang) {
                console.log("Penumpang bernama " + namaPenumpang + ", sudah ada di dalam angkot.");
            } 
            else if (i == penumpang.length - 1) {
                penumpang.push(namaPenumpang);
                return namaPenumpang;
            }
        }
    }
}

var hapusPenumpang = function(namaPenumpang, penumpang) {

    if(penumpang.length === 0) {
        console.log("Angkot sedang kosong.");
    } else {
        for ( var i = 0; i < penumpang.length; i++) {
            if(penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined;
                console.log(namaPenumpang + " Telah turun dari angkot.")
            } else if(i == penumpang.length - 1) {
                console.log(namaPenumpang + " Tidak ada di angkot.");
            }
        }
    }
    return penumpang
}

console.log(penumpang);