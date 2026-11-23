import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryPath = `${outputDir}/entry.txt`;

// Revisi: lebih hangat, alasan konkret "sekarang" (gratis + langsung pakai), frasa natural teman ke teman
const sentence =
  "Coba serahkan ide aplikasi yang kau simpan lama ke agen AI di make.fun — gratis ikut, nggak usah nulis kode, dan nanti kau pegang aplikasinya yang bisa dipakai langsung.";

mkdirSync(dirname(entryPath), { recursive: true });
writeFileSync(entryPath, sentence, "utf-8");
console.log(`Ditulis ke ${entryPath} (${sentence.length} karakter)`);