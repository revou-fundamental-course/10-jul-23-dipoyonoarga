function hitungBMI(event) {
  event.preventDefault();

  var berat = document.forms["bmiForm"]["berat"].value;
  var usia = document.forms["bmiForm"]["usia"].value;
  var tinggi = document.forms["bmiForm"]["tinggi"].value;

  // Validasi input
  if (berat <= 0) {
    alert("Nilai berat harus lebih besar dari 0");
    return false;
  }

  if (usia <= 0) {
    alert("Nilai usia harus lebih besar dari 0");
    return false;
  }

  if (tinggi <= 0) {
    alert("Nilai tinggi harus lebih besar dari 0.");
    return false;
  }

  // Menghitung BMI
  var bmi = berat / (tinggi / 100) ** 2;

  // Menentukan Kategori BMI dan Rekomendasinya
  var category = "";
  if (bmi < 18.5) {
    category = "Kekurangan berat badan";
    document.getElementById("rekomendasi").innerHTML =
      "Pertahankan pola makan sehat dan pastikan untuk mengonsumsi makanan bergizi dalam jumlah yang cukup.";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal (ideal)";
    document.getElementById("rekomendasi").innerHTML =
      "Pertahankan pola makan sehat dan aktifitas fisik yang cukup untuk menjaga kesehatan.";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Kelebihan berat badan";
    document.getElementById("rekomendasi").innerHTML =
      "Pertahankan pola makan sehat dan lakukan aktifitas fisik secara teratur untuk mencapai berat badan yang sehat.";
  } else {
    category = "Kegemukan (obesitas)";
    document.getElementById("rekomendasi").innerHTML =
      "Segera konsultasikan dengan dokter atau ahli gizi untuk mendapatkan panduan khusus dalam menurunkan berat badan dan mengadopsi gaya hidup yang lebih sehat.";
  }

  // Hasil Kategori
  document.getElementById("category").innerHTML =
    "Kategori BMI Anda: " + category;

  // Hasil BMI
  document.getElementById("bmiAnda").innerHTML = "Hasil BMI Anda adalah: ";
  document.getElementById("hasilBMI").innerHTML = bmi.toFixed(2);

  // Tombol Hitung Lagi
  document.getElementById("hitungLagi").style.display = "inline";
}

function hitungLagi() {
  // Mekanisme Hitung Lagi
  document.getElementById("berat").value = "";
  document.getElementById("usia").value = "";
  document.getElementById("tinggi").value = "";
  document.getElementById("bmiAnda").innerHTML = "";
  document.getElementById("hasilBMI").innerHTML = "";
  document.getElementById("category").innerHTML = "";
  document.getElementById("rekomendasi").innerHTML = "";
  document.getElementById("hitungLagi").style.display = "none";
}
