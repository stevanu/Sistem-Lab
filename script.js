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

// Inisialisasi aplikasi
document.addEventListener("DOMContentLoaded", function () {
  initCategories();
  setupEventListeners();
});

// Tampilkan kategori yang dikenali
function initCategories() {
  const categoriesList = document.getElementById("categoriesList");
  categoriesList.innerHTML = "";

  for (const category in MASTER_TEST_GROUP) {
    const badge = document.createElement("div");
    badge.className = "category-badge";
    badge.textContent = category;
    categoriesList.appendChild(badge);
  }
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

  // Setup drag and drop
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

  // Tampilkan loading
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

        // Aktifkan tombol proses
        document.getElementById("processBtn").disabled = false;

        // Sembunyikan loading
        hideLoading();

        alert(
          'File berhasil diunggah! Silakan klik "Proses Data" untuk melanjutkan.'
        );
      } else {
        throw new Error("File Excel kosong atau format tidak sesuai");
      }
    } catch (error) {
      alert("Error membaca file: " + error.message);
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

  // Tampilkan loading
  showLoading();

  // Beri waktu untuk UI update sebelum memproses data berat
  setTimeout(() => {
    try {
      // Tentukan kolom yang berisi nama pemeriksaan (kolom B)
      const examColumnIndex = 1;

      // Tentukan kolom yang berisi jumlah BPJS (kolom C)
      const bpjsColumnIndex = 2;

      // Tentukan kolom yang berisi jumlah Non-BPJS (kolom D)
      const nonBpjsColumnIndex = 3;

      // Tentukan kolom yang berisi jumlah total (kolom E)
      const totalColumnIndex = 4;

      // Kelompokkan data
      groupedData = {};

      // Tambahkan kategori untuk item yang tidak terklasifikasi
      groupedData["UNCLASSIFIED"] = {
        exams: [],
        bpjsTotal: 0,
        nonBpjsTotal: 0,
        overallTotal: 0,
      };

      for (let i = 1; i < uploadedData.length; i++) {
        const row = uploadedData[i];
        if (row.length <= examColumnIndex) continue;

        const examName = String(row[examColumnIndex]).trim().toUpperCase();
        if (!examName) continue;

        // Ambil jumlah BPJS
        let bpjsCount = 0;
        if (row.length > bpjsColumnIndex) {
          bpjsCount = isNaN(row[bpjsColumnIndex])
            ? 0
            : Number(row[bpjsColumnIndex]);
        }

        // Ambil jumlah Non-BPJS
        let nonBpjsCount = 0;
        if (row.length > nonBpjsColumnIndex) {
          nonBpjsCount = isNaN(row[nonBpjsColumnIndex])
            ? 0
            : Number(row[nonBpjsColumnIndex]);
        }

        // Ambil jumlah total
        let totalCount = 0;
        if (row.length > totalColumnIndex) {
          totalCount = isNaN(row[totalColumnIndex])
            ? 0
            : Number(row[totalColumnIndex]);
        }

        // Jika totalCount 0, hitung dari bpjsCount + nonBpjsCount
        if (totalCount === 0) {
          totalCount = bpjsCount + nonBpjsCount;
        }

        // Cari kategori untuk pemeriksaan ini
        let category = "UNCLASSIFIED";

        // Cari di semua kategori untuk pemeriksaan
        for (const [cat, tests] of Object.entries(MASTER_TEST_GROUP)) {
          for (const test of tests) {
            // Gunakan pencarian yang lebih cerdas untuk menghindari false positive
            if (
              examName === test.toUpperCase() ||
              (examName.includes(test.toUpperCase()) &&
                (examName.length === test.length ||
                  examName.startsWith(test.toUpperCase() + " ") ||
                  examName.endsWith(" " + test.toUpperCase())))
            ) {
              category = cat;
              break;
            }
          }
          if (category !== "UNCLASSIFIED") break;
        }

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

      // Tampilkan hasil
      displayResults();

      // Aktifkan tombol download
      document.getElementById("downloadBtn").disabled = false;

      // Tampilkan area hasil
      document.getElementById("resultArea").style.display = "block";

      // Sembunyikan loading
      hideLoading();
    } catch (error) {
      alert("Error memproses data: " + error.message);
      hideLoading();
    }
  }, 100);
}

// Fungsi untuk menampilkan hasil
function displayResults() {
  const resultTable = document.getElementById("resultTable");
  const resultCount = document.getElementById("resultCount");
  const groupedResults = document.getElementById("groupedResults");

  // Hitung total pemeriksaan
  let totalExams = 0;
  let totalBpjs = 0;
  let totalNonBpjs = 0;
  let totalOverall = 0;

  for (const category in groupedData) {
    if (
      category === "UNCLASSIFIED" &&
      groupedData[category].exams.length === 0
    ) {
      continue; // Lewati kategori unclassified jika kosong
    }

    totalExams += groupedData[category].exams.length;
    totalBpjs += groupedData[category].bpjsTotal;
    totalNonBpjs += groupedData[category].nonBpjsTotal;
    totalOverall += groupedData[category].overallTotal;
  }

  resultCount.textContent = `${totalExams} pemeriksaan (Total: ${totalOverall})`;

  // Kosongkan tabel
  resultTable.innerHTML = "";
  groupedResults.innerHTML = "";

  // Tampilkan summary
  for (const category in groupedData) {
    // Lewati kategori unclassified jika kosong
    if (
      category === "UNCLASSIFIED" &&
      groupedData[category].exams.length === 0
    ) {
      continue;
    }

    const examCount = groupedData[category].exams.length;
    const bpjsTotal = groupedData[category].bpjsTotal;
    const nonBpjsTotal = groupedData[category].nonBpjsTotal;
    const overallTotal = groupedData[category].overallTotal;

    // Tambahkan ke tabel summary
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${category}</td>
            <td>${examCount}</td>
            <td class="exam-count">${bpjsTotal}</td>
            <td class="exam-count">${nonBpjsTotal}</td>
            <td class="exam-count">${overallTotal}</td>
        `;
    resultTable.appendChild(row);

    // Buat card untuk setiap kategori
    const categoryCard = document.createElement("div");
    categoryCard.className = "mb-4";
    categoryCard.innerHTML = `
            <h5 class="mb-3">${category} 
                <span class="badge bg-secondary">${examCount} item</span>
                <span class="bpjs-badge">BPJS: ${bpjsTotal}</span>
                <span class="non-bpjs-badge">Non-BPJS: ${nonBpjsTotal}</span>
                <span class="total-badge-small">Total: ${overallTotal}</span>
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
                        ${groupedData[category].exams
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

  // Tambahkan baris total keseluruhan
  if (Object.keys(groupedData).length > 0) {
    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `
            <td><strong>Total Keseluruhan</strong></td>
            <td><strong>${totalExams}</strong></td>
            <td class="exam-count"><strong>${totalBpjs}</strong></td>
            <td class="exam-count"><strong>${totalNonBpjs}</strong></td>
            <td class="exam-count"><strong>${totalOverall}</strong></td>
        `;
    totalRow.style.backgroundColor = "#f8f9fa";
    resultTable.appendChild(totalRow);
  } else {
    resultTable.innerHTML =
      '<tr><td colspan="5" class="text-center">Tidak ada data yang dapat dikelompokkan</td></tr>';
  }
}

// Fungsi untuk mendownload hasil
function downloadResults() {
  if (Object.keys(groupedData).length === 0) {
    alert("Tidak ada data untuk diunduh. Silakan proses data terlebih dahulu.");
    return;
  }

  // Tampilkan loading
  showLoading();

  // Beri waktu untuk UI update sebelum memproses data berat
  setTimeout(() => {
    try {
      // Buat workbook baru
      const wb = XLSX.utils.book_new();

      // Buat worksheet untuk setiap kategori
      for (const category in groupedData) {
        // Lewati kategori unclassified jika kosong
        if (
          category === "UNCLASSIFIED" &&
          groupedData[category].exams.length === 0
        ) {
          continue;
        }

        const data = [];

        // Tambahkan header
        data.push([
          "No",
          "Nama Pemeriksaan",
          "BPJS",
          "Non-BPJS",
          "Jumlah",
          "Kategori",
        ]);

        // Tambahkan data untuk kategori ini
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

        // Tambahkan baris total
        data.push([
          "",
          "TOTAL",
          groupedData[category].bpjsTotal,
          groupedData[category].nonBpjsTotal,
          groupedData[category].overallTotal,
          "",
        ]);

        const ws = XLSX.utils.aoa_to_sheet(data);
        XLSX.utils.book_append_sheet(wb, ws, category.substring(0, 30)); // Batasi panjang nama sheet
      }

      // Buat worksheet ringkasan
      const summaryData = [
        ["KATEGORI", "JUMLAH PEMERIKSAAN", "BPJS", "NON-BPJS", "TOTAL"],
      ];

      for (const category in groupedData) {
        // Lewati kategori unclassified jika kosong
        if (
          category === "UNCLASSIFIED" &&
          groupedData[category].exams.length === 0
        ) {
          continue;
        }

        summaryData.push([
          category,
          groupedData[category].exams.length,
          groupedData[category].bpjsTotal,
          groupedData[category].nonBpjsTotal,
          groupedData[category].overallTotal,
        ]);
      }

      // Tambahkan total keseluruhan
      let totalExams = 0;
      let totalBpjs = 0;
      let totalNonBpjs = 0;
      let totalOverall = 0;

      for (const category in groupedData) {
        // Lewati kategori unclassified jika kosong
        if (
          category === "UNCLASSIFIED" &&
          groupedData[category].exams.length === 0
        ) {
          continue;
        }

        totalExams += groupedData[category].exams.length;
        totalBpjs += groupedData[category].bpjsTotal;
        totalNonBpjs += groupedData[category].nonBpjsTotal;
        totalOverall += groupedData[category].overallTotal;
      }

      summaryData.push([
        "TOTAL KESELURUHAN",
        totalExams,
        totalBpjs,
        totalNonBpjs,
        totalOverall,
      ]);

      const summaryWs = XLSX.utils.aoa_to_sheet(summaryData);
      XLSX.utils.book_append_sheet(wb, summaryWs, "RINGKASAN");

      XLSX.writeFile(wb, "Hasil_Pengelompokan_Pemeriksaan.xlsx");

      hideLoading();
    } catch (error) {
      alert("Error membuat file Excel: " + error.message);
      hideLoading();
    }
  }, 100);
}
