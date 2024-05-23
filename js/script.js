//ini js
document.getElementById('switch-keliling').addEventListener('click', function() {
    document.getElementById('triangle-form').classList.toggle('hidden');
    document.getElementById('triangle-keliling-form').classList.toggle('hidden');
    document.getElementById('keliling-section').classList.toggle('hidden');
    if (document.getElementById('triangle-form').classList.contains('hidden')) {
        this.innerHTML = '<u>Switch ke Luas Segitiga</u>';
    } else {
        this.innerHTML = '<u>Switch ke Keliling Segitiga</u>';
    }
});

document.getElementById('hitung-luas-btn').addEventListener('click', function() {
    const alas = parseFloat(document.getElementById('alas').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);

    if (!isNaN(alas) && !isNaN(tinggi)) {
        const luas = 0.5 * alas * tinggi;
        document.getElementById('result-luas').textContent = `Luas Segitiga: ${luas}`;
    } else {
        document.getElementById('result-luas').textContent = 'Input tidak valid';
    }
});

document.getElementById('hitung-keliling-btn').addEventListener('click', function() {
    const sisi1 = parseFloat(document.getElementById('sisi1').value);
    const sisi2 = parseFloat(document.getElementById('sisi2').value);
    const sisi3 = parseFloat(document.getElementById('sisi3').value);

    if (!isNaN(sisi1) && !isNaN(sisi2) && !isNaN(sisi3)) {
        const keliling = sisi1 + sisi2 + sisi3;
        document.getElementById('result-keliling').textContent = `Keliling Segitiga: ${keliling}`;
    } else {
        document.getElementById('result-keliling').textContent = 'Input tidak valid';
    }
});
