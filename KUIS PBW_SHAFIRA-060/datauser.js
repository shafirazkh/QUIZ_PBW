function displayData(nama, email, kontak, alamat, novel, opsi) {
    var table = document.createElement("table");
    table.style.border = "1px solid black"; // Menambahkan border pada tabel
    table.style.margin = "0 auto"; // Mengatur posisi tabel di tengah

    var tbody = document.createElement("tbody");

    // Menambahkan baris NAMA
    var rowNama = document.createElement("tr");
    var cellNamaLabel = document.createElement("td");
    cellNamaLabel.textContent = "NAMA";
    cellNamaLabel.style.border = "1px solid black"; // Menambahkan border pada sel
    var cellNamaValue = document.createElement("td");
    cellNamaValue.textContent = nama;
    cellNamaValue.style.border = "1px solid black"; // Menambahkan border pada sel
    rowNama.appendChild(cellNamaLabel);
    rowNama.appendChild(cellNamaValue);
    tbody.appendChild(rowNama);

    // Menambahkan baris E-MAIL
    var rowEmail = document.createElement("tr");
    var cellEmailLabel = document.createElement("td");
    cellEmailLabel.textContent = "E-MAIL";
    cellEmailLabel.style.border = "1px solid black"; // Menambahkan border pada sel
    var cellEmailValue = document.createElement("td");
    cellEmailValue.textContent = email;
    cellEmailValue.style.border = "1px solid black"; // Menambahkan border pada sel
    rowEmail.appendChild(cellEmailLabel);
    rowEmail.appendChild(cellEmailValue);
    tbody.appendChild(rowEmail);

    // Menambahkan baris KONTAK
    var rowKontak = document.createElement("tr");
    var cellKontakLabel = document.createElement("td");
    cellKontakLabel.textContent = "KONTAK";
    cellKontakLabel.style.border = "1px solid black"; // Menambahkan border pada sel
    var cellKontakValue = document.createElement("td");
    cellKontakValue.textContent = kontak;
    cellKontakValue.style.border = "1px solid black"; // Menambahkan border pada sel
    rowKontak.appendChild(cellKontakLabel);
    rowKontak.appendChild(cellKontakValue);
    tbody.appendChild(rowKontak);

    // Menambahkan baris ALAMAT
    var rowAlamat = document.createElement("tr");
    var cellAlamatLabel = document.createElement("td");
    cellAlamatLabel.textContent = "ALAMAT";
    cellAlamatLabel.style.border = "1px solid black"; // Menambahkan border pada sel
    var cellAlamatValue = document.createElement("td");
    cellAlamatValue.textContent = alamat;
    cellAlamatValue.style.border = "1px solid black"; // Menambahkan border pada sel
    rowAlamat.appendChild(cellAlamatLabel);
    rowAlamat.appendChild(cellAlamatValue);
    tbody.appendChild(rowAlamat);

    // Menambahkan baris JUDUL
    var rowJudul = document.createElement("tr");
    var cellJudulLabel = document.createElement("td");
    cellJudulLabel.textContent = "JUDUL";
    cellJudulLabel.style.border = "1px solid black"; // Menambahkan border pada sel
    var cellJudulValue = document.createElement("td");
    cellJudulValue.textContent = novel.join(", ");
    cellJudulValue.style.border = "1px solid black"; // Menambahkan border pada sel
    rowJudul.appendChild(cellJudulLabel);
    rowJudul.appendChild(cellJudulValue);
    tbody.appendChild(rowJudul);

    // Menambahkan baris PEMBAYARAN
    var rowPembayaran = document.createElement("tr");
    var cellPembayaranLabel = document.createElement("td");
    cellPembayaranLabel.textContent = "PEMBAYARAN";
    cellPembayaranLabel.style.border = "1px solid black"; // Menambahkan border pada sel
    var cellPembayaranValue = document.createElement("td");
    cellPembayaranValue.textContent = opsi;
    cellPembayaranValue.style.border = "1px solid black"; // Menambahkan border pada sel
    rowPembayaran.appendChild(cellPembayaranLabel);
    rowPembayaran.appendChild(cellPembayaranValue);
    tbody.appendChild(rowPembayaran);

    table.appendChild(tbody);

    // Menampilkan tabel di dalam elemen dengan ID "output"
    var outputElement = document.getElementById("output");
    outputElement.innerHTML = "";
    outputElement.appendChild(table);
}
