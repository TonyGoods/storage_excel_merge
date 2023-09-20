import { Button } from "antd";
import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { InputComponent } from "./InputComponents";

const Wrapper = styled.div``;

export const InputInfo = ({ setFile, workbook }) => {
  const handleBackClick = useCallback(() => {
    setFile(null);
  }, [setFile]);
  const hasTotalSheet = useRef(false);

  const [infoObj, setInfoObj] = useState({});
  const infoRef = useRef();

  useEffect(() => {
    const tempObj = {};
    if (workbook) {
      workbook.SheetNames.forEach((sheetName) => {
        if (sheetName === "结余") {
          hasTotalSheet.current = true;
        } else {
          tempObj[sheetName] = {
            in_arr: [],
            in_number: "",
            out_arr: [],
            out_number: "",
            start_row: "",
          };
        }
      });
      setInfoObj(tempObj);
      console.log(tempObj);
      infoRef.current = tempObj;
    }
  }, [workbook]);

  return (
    <Wrapper>
      {Object.keys(infoObj).map((name) => (
        <InputComponent infoRef={infoRef} name={name} key={name} />
      ))}

      <Button onClick={handleBackClick}>返回上一步</Button>
    </Wrapper>
  );
};
