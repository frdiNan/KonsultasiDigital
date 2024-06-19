const questions = document.querySelectorAll(".question");
const resultContainer = document.getElementById("result");

let answers = {
  cannotPowerOn: false,
  noDisplay: false,
  shutsDown: false,
  slowPerformance: false,
  beepSound: false,
  blueScreen: false,
  hardwareNotDetected: false,
  errorAccessingFiles: false,
  overheating: false,
  networkIssues: false,
};

function handleAnswer(questionId, isChecked) {
  if (questionId === "question1") {
    answers.cannotPowerOn = isChecked;
  } else if (questionId === "question2") {
    answers.noDisplay = isChecked;
  } else if (questionId === "question3") {
    answers.shutsDown = isChecked;
  } else if (questionId === "question4") {
    answers.slowPerformance = isChecked;
  } else if (questionId === "question5") {
    answers.beepSound = isChecked;
  } else if (questionId === "question6") {
    answers.blueScreen = isChecked;
  } else if (questionId === "question7") {
    answers.hardwareNotDetected = isChecked;
  } else if (questionId === "question8") {
    answers.errorAccessingFiles = isChecked;
  } else if (questionId === "question9") {
    answers.overheating = isChecked;
  } else if (questionId === "question10") {
    answers.networkIssues = isChecked;
  }
}

function showResult() {
  let resultText = "Tidak dapat menentukan masalah berdasarkan jawaban Anda.";

  if (answers.cannotPowerOn) {
    resultText =
      "Kemungkinan masalah dengan daya, seperti kabel power yang rusak, power supply yang gagal, atau motherboard yang rusak.";
  } else if (answers.noDisplay) {
    resultText =
      "Masalah bisa pada kabel monitor, kartu grafis yang rusak, atau monitor itu sendiri yang bermasalah.";
  } else if (answers.shutsDown) {
    resultText =
      "Bisa disebabkan oleh overheating, masalah pada power supply, atau kerusakan komponen lainnya seperti motherboard atau RAM.";
  } else if (answers.slowPerformance) {
    resultText =
      "Kemungkinan masalah pada hard drive, kurangnya RAM, atau infeksi malware.";
  } else if (answers.beepSound) {
    resultText =
      "Bunyi beep biasanya menunjukkan kode error hardware, seperti masalah dengan RAM, kartu grafis, atau motherboard.";
  } else if (answers.blueScreen) {
    resultText =
      "Blue screen biasanya disebabkan oleh driver yang rusak, masalah hardware, atau konflik software.";
  } else if (answers.hardwareNotDetected) {
    resultText =
      "Bisa jadi masalah pada port USB, driver perangkat keras yang hilang atau rusak, atau perangkat keras itu sendiri yang bermasalah.";
  } else if (answers.errorAccessingFiles) {
    resultText =
      "Kemungkinan ada kerusakan pada hard drive, masalah izin akses, atau file yang rusak.";
  } else if (answers.overheating) {
    resultText =
      "Masalah bisa pada kipas yang tidak berfungsi, ventilasi yang tersumbat, atau pasta termal yang sudah kering.";
  } else if (answers.networkIssues) {
    resultText =
      "Masalah bisa pada router, kartu jaringan, driver jaringan, atau penyedia layanan internet.";
  }

  resultContainer.innerText = resultText;
}
