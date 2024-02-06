alert("WELCOMEE di Ticket App lur \n Ada baiknya senyum dulu sebelum memilih \n Gass yang masih berumur");
const umur = prompt("Masukkan Umur");

if (umur >= 6) {
    const studio = prompt("Masukkan studio ngeb \n A : studio A \n B : studio B \n C : studio C");

if (studio == "A" || studio == "B" ||studio == "C") {
    const film = prompt ("Pilih film \n 1 : mumun \n 2 : pengabdi maung \n 3 : diambang nasgor");
   
    let namaFilm;
    if(film == "1") {
        namaFilm ="Mumun";
    } else if (film == "2"){
        namaFilm="Pengabdi Maung";
    }else if (film ==  "3") {
        namaFilm= "Diambang Nasgor";
    }

if (film == "1" || film == "2" || film ==  "3") {
    const nama = prompt("Masukkan Nama");
    alert(`Ini tiket  \n nama : ${nama} \n umur :  ${umur} \n studio :  ${studio} \n film :  ${namaFilm}`);
} else {
    alert ("Ciee gak bisaaa");
    }   
} else {
    alert ("Milih studio ngeb");
    }
} else {
    alert ("Gak bisa masuk, umur masih kecik");
}

