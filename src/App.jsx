import "./App.css";
import { useEffect, useState } from "react";
import { SelectFile } from "./Step/SelectFile";
import { InputInfo } from "./Step/InputInfo";
import { message } from "antd";
<<<<<<< HEAD
import { read } from "xlsx";
=======
>>>>>>> 5fa98031565d58c7b20cde812e14acb37bee1553
import { readFile } from "./utils/readFile";

function App() {
  const [step, setStep] = useState(0);
  const [file, setFile] = useState();
  const [workbook, setWorkbook] = useState();

  useEffect(() => {
    if (file) {
      setStep(1);
      try {
        readFile(file, setWorkbook);
      } catch (e) {
<<<<<<< HEAD
        console.log(e);
=======
>>>>>>> 5fa98031565d58c7b20cde812e14acb37bee1553
        setStep(0);
        message.error({
          content: "加载出错，请重试。",
        });
        setWorkbook(undefined);
      }
    } else {
      setStep(0);
      setWorkbook(undefined);
    }
  }, [file]);

  if (step === 0) {
    return <SelectFile setFile={setFile} />;
  } else if (step === 1) {
<<<<<<< HEAD
    return <InputInfo workbook={workbook} setFile={setFile} />;
=======
    return <InputInfo workbook={workbook} setStep={setStep} filename={file.name}/>;
>>>>>>> 5fa98031565d58c7b20cde812e14acb37bee1553
  }
}

export default App;
