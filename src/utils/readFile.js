const XLSX = require("xlsx");

export function readFile(file, setWorkbook) {
  const reader = new FileReader();
  reader.onload = (e) => {
    setWorkbook(XLSX.read(e.target.result));
  };

  reader.readAsArrayBuffer(file);
}
