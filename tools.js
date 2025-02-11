import fs from "fs/promises";

export function convertToCSV(array) {
  if (!array.length) {
    return "";
  }

  const headers = Object.keys(array[0]);

  const rows = array.map((obj) => {
    return headers
      .map((header) => {
        const value = obj[header] !== undefined ? obj[header] : "";
        return `"${value.toString().replace(/"/g, '""')}"`;
      })
      .join(",");
  });

  return [headers.join(","), ...rows].join("\n");
}

export async function createFile(content) {
  await fs.appendFile("report.csv", content);
}
