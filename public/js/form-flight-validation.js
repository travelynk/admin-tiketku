/* eslint-disable */

// Get airline code to display in flight number input
document.getElementById('select-airline').addEventListener('change', function () {
  const flightNumber = document.getElementById('flight-number');
  const selectedText = this.options[this.selectedIndex].text;
  const codeAirline = selectedText.split(' - ')[0];

  flightNumber.value = codeAirline;
});

// Check if flight number is same with airline code
document.getElementById('flight-number').addEventListener('change', function () {
  const selectAirline = document.getElementById('select-airline');
  const selectedText = selectAirline.options[selectAirline.selectedIndex].text;
  const codeAirline = selectedText.split(' - ')[0];

  // get 2 caracter from flight number
  const codeFlightInFlightNumber = this.value.substring(0, 2);

  if (codeFlightInFlightNumber != codeAirline) {
    showToast('error', "Error", 'Maaf, nomor penerbangan tidak sesuai dengan kode maskapai yang dipilih');
  }

  // cek if flight number after 2 character is 4 digit number (output must like AF2001)
  const numberFlightInFlightNumber = this.value.substring(2, this.value.length);

  if (numberFlightInFlightNumber.length !== 4 || isNaN(numberFlightInFlightNumber)) {
    showToast('error', "Error", 'Maaf, nomor penerbangan tidak sesuai dengan format. Contoh: AF2001');
  }

});

// Change estimated duration from deviation arrival time and departure time
document.getElementById('arrival-time').addEventListener('change', function () {
  const arrivalTime = new Date(this.value);
  const departureTime = new Date(document.getElementById('departure-time').value);

  if (arrivalTime < departureTime) {
    showToast('error', "Error", 'Maaf, waktu kedatangan tidak boleh lebih kecil dari waktu keberangkatan');
  }

  const diff = arrivalTime - departureTime;
  let diffInHours = diff / 1000 / 60 / 60;

  // round up to 2 decimal
  diffInHours = Math.round(diffInHours * 100) / 100;

  document.getElementById('estimated-duration').value = diffInHours;
});

// Check seat capacity must be more than 50
document.getElementById('seat-capacity').addEventListener('change', function () {
  if (this.value < 70) {
    showToast('error', "Error", 'Maaf, kapasitas kursi minimal 50');
  }
});
