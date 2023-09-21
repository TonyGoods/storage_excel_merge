import "./App.css";
import { useEffect, useState } from "react";
import { SelectFile } from "./Step/SelectFile";
import { InputInfo } from "./Step/InputInfo";
import { message } from "antd";
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
    return <InputInfo workbook={workbook} setStep={setStep} filename={file.name}/>;
  }
}

export default App;
