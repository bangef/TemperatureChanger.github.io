// Main
function konvertSuhu() {
    var inpPiliSuhu = document.getElementById('inpPiliSuhu').value;
    var inpSuhu = document.getElementById('inpSuhu').value;

    switch (inpPiliSuhu) {
        case 'c':
            hide(inpPiliSuhu);
            rumus(inpPiliSuhu, inpSuhu);
            proses(inpPiliSuhu, inpSuhu);

            break;
        case 'r':
            hide(inpPiliSuhu);
            rumus(inpPiliSuhu, inpSuhu);
            proses(inpPiliSuhu, inpSuhu);
            
            break;
        case 'f':
            hide(inpPiliSuhu);
            rumus(inpPiliSuhu, inpSuhu);
            proses(inpPiliSuhu, inpSuhu);
            
            break;
        default:
            hide(inpPiliSuhu);
            rumus(inpPiliSuhu, inpSuhu);
            proses(inpPiliSuhu, inpSuhu);
            
            break;
    }
}

// nyembunyiin element
function hide(e) {
    a = document.getElementById('outF');
    b = document.getElementById('outR');
    c = document.getElementById('outK');
    d = document.getElementById('outC');

    switch (e) {
        case 'c':
            a.style.display = 'block';
            b.style.display = 'block';
            c.style.display = 'block';
            d.style.display = 'none';
            break;
        case 'r':
            a.style.display = 'block';
            b.style.display = 'none';
            c.style.display = 'block';
            d.style.display = 'block';
            break;
        case 'f':
            a.style.display = 'none';
            b.style.display = 'block';
            c.style.display = 'block';
            d.style.display = 'block';
            break;
        default:
            a.style.display = 'block';
            b.style.display = 'block';
            c.style.display = 'none';
            d.style.display = 'block';
            break;
    }
}

// keterangan rumus
function rumus(i, a) {

    b = document.getElementById('rumF');
    c = document.getElementById('rumR');
    d = document.getElementById('rumK');
    e = document.getElementById('rumC');

    if (a !== null && a !== '') {
        switch (i) {
            case 'c':
                b.innerHTML = `32 + 9 / 5 x <strong>${a}</strong>`;
                c.innerHTML = `4 / 5 x <strong>${a}</strong>`;
                d.innerHTML = `(32 + 9 / 5) + <strong>${a}</strong>`;
                break;
            case 'r':
                b.innerHTML = `32 + 9 / 4 x <strong>${a}</strong>`;
                e.innerHTML = `5 / 4 x <strong>${a}</strong>`;
                d.innerHTML = `273,15 + 5 / 4 x <strong>${a}</strong>`;
                break;
            case 'f':
                e.innerHTML = `5 / 9 x (<strong>${a}</strong> - 32)`;
                c.innerHTML = `4 / 9 x (<strong>${a}</strong> - 32)`;
                d.innerHTML = `273,15 + 5 / 9 x (<strong>${a}</strong> - 32)`;
                break;
            case 'k':
                b.innerHTML = `32 + 9 / 5 x (<strong>${a}</strong> - 273,15)`;
                c.innerHTML = `4 / 5 x (<strong>${a}</strong> - 273,15)`;
                e.innerHTML = `<strong>${a}</strong> - 273,15`;
                break;
        }
    } else {
        return b.innerHTML = null,
            c.innerHTML = null,
            d.innerHTML = null,
            e.innerHTML = null;
    }
}

// proses aritmatika
function proses(i, a) {
    b = document.getElementById('inpF');
    c = document.getElementById('inpR');
    d = document.getElementById('inpK');
    e = document.getElementById('inpC');

    if (a !== null && a !== '') {
        switch (i) {
            case 'c':
                b.value = parseFloat(32 + 9 / 5 * a);
                c.value = parseFloat(4 / 5 * a);
                d.value = parseFloat(a + 273.15);
                break;
            case 'r':
                b.value = parseFloat(32 + 9 / 4 * a);
                e.value = parseFloat(5 / 4 * a);
                d.value = parseFloat(273.15 + 5 / 4 * a);
                break;
            case 'f':
                e.value = parseFloat(5 / 9 * (a - 32));
                c.value = parseFloat(4 / 9 * (a - 32));
                d.value = parseFloat(273.15 + 5 / 9 * (a - 32));
                break;
            case 'k':
                b.value = parseFloat(32 + 9 / 5 * (a - 273.15));
                c.value = parseFloat(4 / 5 * (a - 273.15));
                e.value = parseFloat(a - 273.15);
                break;
        }
    } else {
        return b.value = null,
            c.value = null,
            d.value = null,
            e.value = null;
    }
}