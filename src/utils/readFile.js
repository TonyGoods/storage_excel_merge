<<<<<<< HEAD


=======
>>>>>>> 5fa98031565d58c7b20cde812e14acb37bee1553
const XLSX = require("xlsx");

export function readFile(file, setWorkbook) {
  const reader = new FileReader();
  reader.onload = (e) => {
    setWorkbook(XLSX.read(e.target.result));
<<<<<<< HEAD
  }

  reader.readAsArrayBuffer(file);
}
=======
  };

  reader.readAsArrayBuffer(file);
}
>>>>>>> 5fa98031565d58c7b20cde812e14acb37bee1553
