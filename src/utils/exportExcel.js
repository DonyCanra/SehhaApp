import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export const exportToExcel = (data, fileName = "data.xlsx", sheetName = "Sheet1") => {
  if (!data || data.length === 0) {
    alert("No data available to download!");
    return;
  }

  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
  const blob = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });

  saveAs(blob, fileName);
};
