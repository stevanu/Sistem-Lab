// Data master untuk pengelompokan
const MASTER_TEST_GROUP = {
  "CT - ANALISA CAIRAN TUBUH": [
    "ADENOSIN DEAMINASE (PLEURA)",
    "ALBUMIN (PLEURA)",
    "ALBUMIN - CAIRAN TUBUH LAIN",
    "ANALISA CAIRAN SENDI (MIKROSKOPIS)",
    "BERAT JENIS - CAIRAN TUBUH LAIN",
    "BERAT JENIS PLEURA",
    "GLUKOSA - CAIRAN TUBUH LAIN",
    "GLUKOSA LCS",
    "GLUKOSA PLEURA",
    "HITUNG JENIS SEL",
    "HITUNG JENIS SEL - CAIRAN TUBUH LAIN",
    "HITUNG JENIS SEL PLEURA",
    "JUMLAH SEL",
    "JUMLAH SEL (C.SENDI)",
    "JUMLAH SEL - CAIRAN TUBUH LAIN",
    "JUMLAH SEL PLEURA",
    "LDH PLEURA",
    "LDH TRANS / EXUDAT",
    "NONNE",
    "PANDY",
    "PROTEIN - CAIRAN TUBUH LAIN",
    "PROTEIN TOTAL PLEURA",
    "RIVALTA PLEURA",
  ],
  "ED - ENDOKRIN": [
    "AMH (ANTI MULERIEN HORMON)",
    "FT4",
    "INTACT PTH",
    "LH",
    "PROLACTIN",
    "SKRINING TSHS NEONATUS SHK (DKK)",
    "T3 TOTAL",
    "TESTOTERON",
    "TSHS",
  ],
  "HC - HISTOLOGI & SITOLOGI": [
    "FNAB+SITOLOGI",
    "HISTOPATOLOGI JARINGAN BESAR",
    "HISTOPATOLOGI JARINGAN KECIL",
    "HISTOPATOLOGI JARINGAN SEDANG",
    "HISTOPATOLOGI JARINGAN SEDANG (LUAR)",
    "SITOLOGI : CAIRAN",
    "SITOLOGI : PAP SMEAR (KONVENSIONAL)",
    "SITOLOGI : PAP SMEAR (LIQUID BASE)",
  ],
  "HM - HEMATOLOGI": [
    "APUS MALARIA",
    "ASAM FOLAT",
    "COOMBS TEST",
    "EOSINOPHYL",
    "ERITROSIT",
    "G6PD WHOLE BLOOD",
    "GAMBARAN DARAH TEPI",
    "GAMBARAN SUMSUM TULANG",
    "GOL. DARAH & RH FAKTOR",
    "HB ELEKTROFORESA",
    "HEMATOKRIT",
    "HEMATOLOGI 18 PARAMETER",
    "HEMATOLOGI 35 PARAMETER",
    "HEMATOLOGI RUTIN",
    "HEMOGLOBIN",
    "HITUNG JENIS (DIFF)",
    "LAJU ENDAP DARAH (BSE)",
    "LEUKOSIT",
    "MALARIA",
    "MCH",
    "MCHC",
    "MCV",
    "MPV",
    "PUNGSI SUMSUM TULANG",
    "RESISTENSI OSMOTIK",
    "RETIKULOSIT",
    "SATURASI TRANSFERIN",
    "SEL LE",
    "TIBC",
    "TRANSFERIN",
    "TROMBOSIT",
    "VITAMIN B12",
  ],
  "HP - HEPATITIS MARKER": [
    "ANTI HAV",
    "ANTI HAV IGM",
    "ANTI HBC",
    "ANTI HBC IGM",
    "ANTI HBE",
    "ANTI HBS",
    "ANTI HCV",
    "HBEAG",
    "HBSAG",
    "HBSAG KONFRIMASI",
    "HBSAG KONFRIMASI TITER",
    "HBSAG KUALITATIF",
    "HBSAG KUANTITATIF",
    "HBV DNA KUALITATIF",
    "HBV DNA KUANTITATIF (REALTIME PCR)",
    "HCV GENOTIPE",
    "HCV RNA KUALITATIF",
  ],
  "IM - IMUNOLOGI": [
    "ALFA 1 ACID GLYCOPROTEIN",
    "ALFA 1 ANTITRYPSIN",
    "AMPHETAMINE RAMBUT",
    "AMPHETAMINE SERUM",
    "ANTI CHLAMYDIA IGG",
    "ANTI CHLAMYDIA IGM",
    "ANTI HELICO BACTER PILORI IGG",
    "ANTI HELICOBACTER PILORI IGM",
    "ANTI HIV (3 METODE)",
    "ANTI HIV ELISA",
    "ANTI HIV RAPID",
    "ANTIGEN COVID FLU",
    "BENZODIAZAEPINE SERUM",
    "CANNABIS SERUM",
    "CERULOPLASMIN",
    "COCCAINE SERUM",
    "CRP KUANTITATIF",
    "DENGUE RAPID",
    "IGA",
    "IGE RAST 54 JENIS",
    "IGE RAST 96 JENIS",
    "IGE TOTAL",
    "IGG",
    "IGM ANTI SALMONELLA",
    "IGRA TB",
    "KADAR ALKOHOL DALAM DARAH",
    "METHAMPETAMINE",
    "NS-1 DENGUE",
    "OPIAT SERUM",
    "RA TEST KUALITATIF",
    "RAPID TEST ANTIGEN",
    "TPHA",
    "TUBEX TF",
    "VDRL",
    "VITAMIN D 25 (OH)",
    "WIDAL REAKSI",
  ],
  "KG - HEMOSTASIS": [
    "AGREGASI TROMBOSIT",
    "APTT",
    "AT III",
    "D-DIMER",
    "FIBRINOGEN",
    "MASA PEMBEKUAN",
    "MASA PERDARAHAN",
    "MASA PROTOMBIN (PT)",
    "PROTEIN C",
    "PROTEIN S",
    "TEG",
    "THROMBOTEST OWREN",
    "VISKOSITAS DARAH",
    "VISKOSITAS PLASMA",
    "WAKTU PEMBEKUAN",
    "WAKTU PENDARAHAN",
  ],
  "KM - KIMIA KLINIK": [
    "ADIPONEKTIN",
    "ALBUMIN",
    "ALDOSTERON",
    "ALKALI FOSFTASE",
    "ALBUMIN CREATINE RATIO (ACR)",
    "AMILASE DARAH",
    "ANALISA GAS DARAH",
    "APO-A1",
    "APO-B",
    "ASAM FOSFATASE PROSTAT",
    "ASAM FOSFATASE TOTAL",
    "ASAM LAKTAT",
    "ASAM URAT",
    "ASTRUP ARTERI",
    "ASTO KUANTITATIF",
    "B2-MIKROGLOBULIN",
    "B-CROSS LAPS",
    "BILIRUBIN DIREK",
    "BILIRUBIN DIREK / INDIREK",
    "BILIRUBIN INDIREK",
    "BILIRUBIN MIKRO",
    "BILIRUBIN TOTAL",
    "BIKARBONAT",
    "CALCIUM",
    "CALCIUM ION",
    "CALCIUM TOTAL",
    "CHLORIDA",
    "CHOLESTEROL (HDL)",
    "CHOLESTEROL (LDL)",
    "CHOLESTEROL HDL",
    "CHOLESTEROL LDL",
    "CHOLESTEROL TOTAL",
    "CHOLINESTERASE",
    "CK-MB",
    "CK-NAC",
    "C-PEPTIDE",
    "CYSTATIN-C",
    "ELEKTROFORESA PROTEIN",
    "FE SERUM",
    "FERRITIN",
    "FOSFOR ANORGANIK",
    "GAMMA GT",
    "GLIKOSILATED HBA1C",
    "GLOBULIN",
    "GLUKOSA DARAH 2 JAM PP",
    "GLUKOSA DARAH BAYI",
    "GLUKOSA DARAH PUASA",
    "GLUKOSA DARAH SEWAKTU",
    "GTT",
    "HBA1C (DARAH EDTA)",
    "HOMOCYSTEIN",
    "HS-CRP",
    "INSULIN",
    "KALIUM",
    "KREATININ",
    "KREATININ KLIRENS",
    "LDH",
    "LIPASE",
    "LP(A)",
    "MAGNESIUM",
    "NATRIUM",
    "NT-PROBNP",
    "OSTEOCALCIN",
    "PROCALCITONIN(PCT)",
    "PROTEIN ALBUMIN / GLOBULIN",
    "PROTEIN TOTAL",
    "SGPT (ALT)",
    "SGOT (AST)",
    "TROPONIN I",
    "TROPONIN I KUANTITATIF",
    "TROPONIN T",
    "TROPONIN T KUANTITATIF",
    "TRIGLISERIDA",
    "UREUM",
    "UREUM / UREA-N",
    "AFP (ALFA FETO PROTEIN)",
  ],
  "MC - MICROBIOLOGY": [
    "BULJON KULTUR AEROB & RESISTENSI",
    "GAL KULTUR",
    "KULTUR MICRO ORGANISME SPUTUM & RESISTENSI",
    "KULTUR PUS & RESISTENSI",
    "PCR COVID",
    "PEWARNA GRAM",
    "PEWARNA ZN (BTA)",
    "TEST CEPAT MOLEKULER",
    "URINE KULTUR & RESISTENSI",
  ],
  "PI - PMI": [
    "CROSS MATCH PER LABU",
    "PEMAKAIAN DARAH PER LABU PRC",
    "PEMAKAIAN DARAH PER LABU TROMBOSIT CONCENTRATE",
    "PEMAKAIAN DARAH PER LABU WB",
    "PLEBOTOMY (450 ML)",
    "TROMBOSIT APHERASIS",
  ],
  "TJ - ANALISA FAECES": [
    "CALPROTECTIN",
    "FAECES LENGKAP (RUTIN)",
    "FAECES TERHADAP BENZIDIN",
  ],
  "TM - PENANDA TUMOR": ["CA 125", "CEA", "PSA"],
  "UR - URINALISA": [
    "DRUG 6 PARAMETER",
    "MIKROALBUMIN (KUANTITATIF)",
    "PROTEIN",
    "SEDIMEN",
    "URINE KIMIA",
    "URINE PP TEST",
  ],
};

// Variabel global untuk menyimpan data
let uploadedData = [];
let groupedData = {};

// Konstanta untuk indeks kolom
const COLUMN_INDEX = {
  NOMOR: 0,
  EXAM: 1,
  BPJS: 2,
  NON_BPJS: 3,
  TOTAL: 4,
};

// Inisialisasi aplikasi
function initApp() {
  setupEventListeners();
}

// Setup event listeners
function setupEventListeners() {
  document
    .getElementById("fileInput")
    .addEventListener("change", handleFileUpload);
  document.getElementById("processBtn").addEventListener("click", processData);
  document
    .getElementById("downloadBtn")
    .addEventListener("click", downloadResults);
  setupDragAndDrop();
}

// Setup drag and drop functionality
function setupDragAndDrop() {
  const dropZone = document.getElementById("dropZone");

  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.style.borderColor = "#3498db";
    dropZone.style.backgroundColor = "#e8f4fc";
  });

  dropZone.addEventListener("dragleave", () => {
    dropZone.style.borderColor = "#ccc";
    dropZone.style.backgroundColor = "#f8f9fa";
  });

  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.style.borderColor = "#ccc";
    dropZone.style.backgroundColor = "#f8f9fa";

    if (e.dataTransfer.files.length) {
      document.getElementById("fileInput").files = e.dataTransfer.files;
      handleFileUpload();
    }
  });

  dropZone.addEventListener("click", () => {
    document.getElementById("fileInput").click();
  });
}

// Fungsi untuk menangani upload file
function handleFileUpload(e) {
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];

  if (!file) return;

  const fileName = file.name;
  if (!fileName.endsWith(".xlsx") && !fileName.endsWith(".xls")) {
    alert("Harap unggah file Excel (.xlsx atau .xls)");
    return;
  }

  showLoading();

  const reader = new FileReader();

  reader.onload = function (e) {
    try {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      // Ambil sheet pertama
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];

      // Konversi ke JSON
      const jsonData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });

      if (jsonData.length > 0) {
        uploadedData = jsonData;
        document.getElementById("processBtn").disabled = false;

        alert(
          'File berhasil diunggah! Silakan klik "Proses Data" untuk melanjutkan.'
        );
      }
    } catch (error) {
      alert("Error membaca file: " + error.message);
    } finally {
      hideLoading();
    }
  };

  reader.onerror = function () {
    alert("Error membaca file");
    hideLoading();
  };

  reader.readAsArrayBuffer(file);
}

// Fungsi untuk menampilkan loading
function showLoading() {
  document.getElementById("loadingOverlay").style.display = "flex";
}

// Fungsi untuk menyembunyikan loading
function hideLoading() {
  document.getElementById("loadingOverlay").style.display = "none";
}

// Fungsi untuk memproses data
function processData() {
  if (uploadedData.length === 0) {
    alert("Silakan unggah file terlebih dahulu");
    return;
  }

  showLoading();

  setTimeout(() => {
    try {
      processExcelData();
      displayResults();

      document.getElementById("downloadBtn").disabled = false;
      document.getElementById("resultArea").style.display = "block";
    } catch (error) {
      alert("Error memproses data: " + error.message);
    } finally {
      hideLoading();
    }
  }, 100);
}

// Proses data Excel
function processExcelData() {
  groupedData = {};

  for (let i = 3; i < uploadedData.length; i++) {
    const row = uploadedData[i];
    if (row.length <= COLUMN_INDEX.EXAM) continue;

    const examName = String(row[COLUMN_INDEX.EXAM]).trim().toUpperCase();
    if (!examName) continue;

    // Ambil data dari kolom
    const bpjsCount = getNumericValue(row, COLUMN_INDEX.BPJS);
    const nonBpjsCount = getNumericValue(row, COLUMN_INDEX.NON_BPJS);
    let totalCount = getNumericValue(row, COLUMN_INDEX.TOTAL);

    // Jika totalCount 0, hitung dari bpjsCount + nonBpjsCount
    if (totalCount === 0) {
      totalCount = bpjsCount + nonBpjsCount;
    }

    // Cari kategori untuk pemeriksaan
    const category = findCategoryForExam(examName);

    // Tambahkan ke kategori
    if (!groupedData[category]) {
      groupedData[category] = {
        exams: [],
        bpjsTotal: 0,
        nonBpjsTotal: 0,
        overallTotal: 0,
      };
    }

    groupedData[category].exams.push({
      name: examName,
      bpjsCount: bpjsCount,
      nonBpjsCount: nonBpjsCount,
      totalCount: totalCount,
      rowData: row,
    });

    groupedData[category].bpjsTotal += bpjsCount;
    groupedData[category].nonBpjsTotal += nonBpjsCount;
    groupedData[category].overallTotal += totalCount;
  }
}

// Dapatkan nilai numerik dari row
function getNumericValue(row, index) {
  return row.length > index && !isNaN(row[index]) ? parseInt(row[index]) : 0;
}

// Cari kategori untuk pemeriksaan
function findCategoryForExam(examName) {
  // Prioritaskan pencarian untuk protein khusus terlebih dahulu
  if (
    examName.includes("PROTEIN TOTAL PLEURA") ||
    examName.includes("PROTEIN - CAIRAN TUBUH LAIN") ||
    examName.includes("LDH PLEURA") ||
    examName.includes("LDH TRANS / EXUDAT")
  ) {
    return "CT - ANALISA CAIRAN TUBUH";
  } else if (
    examName.includes("PROTEIN ALBUMIN / GLOBULIN") ||
    examName.includes("PROTEIN TOTAL") ||
    examName.includes("GLUKOSA DARAH SEWAKTU")
  ) {
    return "KM - KIMIA KLINIK";
  } else if (examName.includes("TROMBOSIT APHERASIS")) {
    return "PI - PMI";
  }

  // Cari di semua kategori untuk pemeriksaan lainnya
  for (const [category, tests] of Object.entries(MASTER_TEST_GROUP)) {
    for (const test of tests) {
      if (examName.includes(test.toUpperCase())) {
        return category;
      }
    }
  }

  return "JUMLAH PEMERIKSAAN";
}

// Fungsi untuk menampilkan hasil
function displayResults() {
  const resultTable = document.getElementById("resultTable");
  const resultCount = document.getElementById("resultCount");
  const groupedResults = document.getElementById("groupedResults");

  // Hitung total
  const totals = calculateTotals();
  resultCount.textContent = `${totals.exams} pemeriksaan (Total: ${totals.overall})`;

  // Kosongkan tabel
  resultTable.innerHTML = "";
  groupedResults.innerHTML = "";

  // Tampilkan summary
  displaySummaryTable(resultTable, totals);

  // Tampilkan detail grouped results
  displayGroupedResults(groupedResults);
}

// Hitung total keseluruhan
function calculateTotals() {
  let exams = 0,
    bpjs = 0,
    nonBpjs = 0,
    overall = 0;

  for (const category in groupedData) {
    exams += groupedData[category].exams.length;
    bpjs += groupedData[category].bpjsTotal;
    nonBpjs += groupedData[category].nonBpjsTotal;
    overall += groupedData[category].overallTotal;
  }

  return { exams, bpjs, nonBpjs, overall };
}

// Tampilkan summary table
function displaySummaryTable(resultTable, totals) {
  for (const category in groupedData) {
    const data = groupedData[category];
    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${category}</td>
            <td>${data.exams.length}</td>
            <td class="exam-count">${data.bpjsTotal}</td>
            <td class="exam-count">${data.nonBpjsTotal}</td>
            <td class="exam-count">${data.overallTotal}</td>
        `;

    resultTable.appendChild(row);
  }

  // Tambahkan baris total keseluruhan
  if (Object.keys(groupedData).length > 0) {
    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `
            <td><strong>Total Keseluruhan</strong></td>
            <td><strong>${totals.exams}</strong></td>
            <td class="exam-count"><strong>${totals.bpjs}</strong></td>
            <td class="exam-count"><strong>${totals.nonBpjs}</strong></td>
            <td class="exam-count"><strong>${totals.overall}</strong></td>
        `;
    totalRow.style.backgroundColor = "#f8f9fa";
    resultTable.appendChild(totalRow);
  } else {
    resultTable.innerHTML =
      '<tr><td colspan="5" class="text-center">Tidak ada data yang dapat dikelompokkan</td></tr>';
  }
}

// Tampilkan grouped results
function displayGroupedResults(groupedResults) {
  for (const category in groupedData) {
    const data = groupedData[category];
    const categoryCard = document.createElement("div");
    categoryCard.className = "mb-4";

    categoryCard.innerHTML = `
            <h5 class="mb-3">${category} 
                <span class="badge bg-secondary">${
                  data.exams.length
                } item</span>
                <span class="bpjs-badge">BPJS: ${data.bpjsTotal}</span>
                <span class="non-bpjs-badge">Non-BPJS: ${
                  data.nonBpjsTotal
                }</span>
                <span class="total-badge-small">Total: ${
                  data.overallTotal
                }</span>
            </h5>
            <div class="table-responsive">
                <table class="table table-sm table-striped">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama Pemeriksaan</th>
                            <th>BPJS</th>
                            <th>Non-BPJS</th>
                            <th>Jumlah</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${data.exams
                          .map(
                            (exam, index) => `
                            <tr>
                                <td>${index + 1}</td>
                                <td>${exam.name}</td>
                                <td>${exam.bpjsCount}</td>
                                <td>${exam.nonBpjsCount}</td>
                                <td class="exam-count">${exam.totalCount}</td>
                            </tr>
                        `
                          )
                          .join("")}
                    </tbody>
                </table>
            </div>
        `;

    groupedResults.appendChild(categoryCard);
  }
}

// Fungsi untuk mendownload hasil
function downloadResults() {
  if (Object.keys(groupedData).length === 0) {
    alert("Tidak ada data untuk diunduh. Silakan proses data terlebih dahulu.");
    return;
  }

  showLoading();

  setTimeout(() => {
    try {
      const wb = XLSX.utils.book_new();

      // Buat worksheet untuk setiap kategori
      createCategoryWorksheets(wb);

      // Buat worksheet ringkasan
      createSummaryWorksheet(wb);

      XLSX.writeFile(wb, "Hasil_Pengelompokan_Pemeriksaan.xlsx");
    } catch (error) {
      alert("Error membuat file Excel: " + error.message);
    } finally {
      hideLoading();
    }
  }, 100);
}

// Buat worksheet untuk setiap kategori
function createCategoryWorksheets(wb) {
  for (const category in groupedData) {
    const data = [];

    // Header
    data.push([
      "No",
      "Nama Pemeriksaan",
      "BPJS",
      "Non-BPJS",
      "Jumlah",
      "Kategori",
    ]);

    // Data
    groupedData[category].exams.forEach((exam, index) => {
      data.push([
        index + 1,
        exam.name,
        exam.bpjsCount,
        exam.nonBpjsCount,
        exam.totalCount,
        category,
      ]);
    });

    // Total
    data.push([
      "",
      "TOTAL",
      groupedData[category].bpjsTotal,
      groupedData[category].nonBpjsTotal,
      groupedData[category].overallTotal,
      "",
    ]);

    const ws = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, category.substring(0, 30));
  }
}

// Buat worksheet ringkasan
function createSummaryWorksheet(wb) {
  const summaryData = [
    ["KATEGORI", "JUMLAH PEMERIKSAAN", "BPJS", "NON-BPJS", "TOTAL"],
  ];

  const totals = calculateTotals();

  for (const category in groupedData) {
    summaryData.push([
      category,
      groupedData[category].exams.length,
      groupedData[category].bpjsTotal,
      groupedData[category].nonBpjsTotal,
      groupedData[category].overallTotal,
    ]);
  }

  summaryData.push([
    "TOTAL KESELURUHAN",
    totals.exams,
    totals.bpjs,
    totals.nonBpjs,
    totals.overall,
  ]);

  const summaryWs = XLSX.utils.aoa_to_sheet(summaryData);
  XLSX.utils.book_append_sheet(wb, summaryWs, "RINGKASAN");
}

// Inisialisasi aplikasi ketika DOM siap
document.addEventListener("DOMContentLoaded", initApp);
