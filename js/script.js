//ini js

// Fungsi untuk mengganti ke perhitungan luas/keliling
document.getElementById('switch-keliling').addEventListener('click', function() {
    document.getElementById('luas-section').classList.toggle('hidden');
    document.getElementById('keliling-section').classList.toggle('hidden');
    if(document.getElementById('luas-section').classList.contains('hidden')) {
        this.innerHTML = '<u>Switch ke luas Segitiga</u>';
    } else {
        this.innerHTML = '<u>Switch Ke keliling segitiga</u>';
    }
});	

// Fungsi perhitungan Luas
function hitungluas(){
    let alas = parseFloat(document.getElementById('alas').value);
    let tinggi = parseFloat(document.getElementById('tinggi').value);
    let luas = 0.5 *alas * tinggi;
    document.getElementById('result-luas').value= luas;
    
    let hasilhitung = document.getElementById('result-luas');
    if (!isNaN(alas) && !isNaN(tinggi)) {
        hasilhitung.innerHTML =
            `<p> L = 1/2 x ${alas} x ${tinggi}</p>
            <p> L = ${luas}</p>`
    } else {
        alert('Input tidak valid');
        luas.innerHTML = 'Input tidak valid';
    }
};

// Fungsi perhitungan Keliling
function hitungkeliling(){
    let sisi1 = parseFloat(document.getElementById('sisi-a').value);
    let sisi2 = parseFloat(document.getElementById('sisi-b').value);
    let sisi3 = parseFloat(document.getElementById('sisi-c').value);
    let keliling = parseInt(sisi1) + parseInt(sisi2) + parseInt(sisi3);
    document.getElementById('result-keliling').value = keliling;

    let hasilhitung = document.getElementById('result-keliling');
    if (!isNaN(sisi1) && !isNaN(sisi2) && !isNaN(sisi3)) {
        hasilhitung.innerHTML =
            `<p> K = ${sisi1} + ${sisi2} + ${sisi3}</p>
            <p> K = ${keliling}</p>`
    } else {
        alert('Input tidak valid');
        keliling.innerHTML = 'Input tidak valid';
    }
    
};

// Fungsi untuk mereset nilai input dan hasil perhitungan
function reset() {
    // Mengosongkan nilai input
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('sisi-a').value = '';
    document.getElementById('sisi-b').value = '';
    document.getElementById('sisi-c').value = '';

    // Mengosongkan hasil perhitungan
    document.getElementById('result-luas').textContent = '';
    document.getElementById('result-keliling').textContent = '';
}
