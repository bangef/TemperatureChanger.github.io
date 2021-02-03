function konvertSuhu() {
    var inp = document.getElementById("inp").value;
    var konvSuhu = document.getElementById("konvSuhu").value;
    var celc = document.getElementById("c");
    var ream = document.getElementById("r");
    var fahr = document.getElementById("f");
    var kelv = document.getElementById("k");
    
    switch (konvSuhu) {
        case 'c':
            ubahWarna(celc, fahr, ream, kelv);
            celc.value = null;
            parseFloat(ream.value = inp * (4/5));
            parseFloat(fahr.value = inp * (9/5) + 32);
            parseFloat(kelv.value = inp + 273.15);
            break;
        case 'r':
            ubahWarna(ream, fahr, celc, kelv);
            parseFloat(celc.value = inp * 5/4);
            ream.value = null;
            parseFloat(fahr.value = inp * (9/4) + 32);
            parseFloat(kelv.value = inp * 5/4 + 273);
            break;
        case 'f':
            ubahWarna(fahr, ream, celc, kelv);
            parseFloat(celc.value = (inp - 32) * 5/9);
            parseFloat(ream.value = (inp - 32) * 4/9);
            fahr.value = null;
            parseFloat(kelv.value = (inp - 32) * 5/9 + 273.15);
            break;
        case 'k':
            ubahWarna(kelv, ream, celc, fahr);
            parseFloat(celc.value = inp - 273.15);
            parseFloat(ream.value = (inp -273) * 4 / 5 );
            parseFloat(fahr.value = (inp - 273.15) * 9/5 + 32);
            kelv.value = null;
            break;
    }   
}

function ubahWarna(a, b, c, d){
    var warna1 = a.style.backgroundColor = '#f2f2f2';
    var warna2 = b.style.backgroundColor = '#ffffff';
    var warna3 = c.style.backgroundColor = '#ffffff';
    var warna4 = d.style.backgroundColor = '#ffffff';

    return warna1,warna2,warna3,warna4;
}

