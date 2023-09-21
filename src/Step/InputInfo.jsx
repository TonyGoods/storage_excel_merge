import { Button } from "antd";
import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { InputComponent } from "./InputComponents";
import { utils, writeFile } from "xlsx";

const Wrapper = styled.div`
  margin: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  padding-top: 10px;
`;

let name_join_str = "&!*";

export const InputInfo = ({ setStep, workbook, filename }) => {
  const handleBackClick = useCallback(() => {
    setStep(0);
  }, [setStep]);
  const hasTotalSheet = useRef(undefined);

  const [infoObj, setInfoObj] = useState({});
  const infoRef = useRef();

  useEffect(() => {
    const tempObj = {};
    if (workbook) {
      workbook.SheetNames.forEach((sheetName) => {
        if (sheetName === "结余") {
          hasTotalSheet.current = workbook.Sheets[sheetName];
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
      infoRef.current = tempObj;
    }
  }, [workbook]);

  const handleClickConfirm = useCallback(() => {
    let storage = {};

    for (let sheetName of workbook.SheetNames) {
      if (sheetName !== "结余") {
        let sheet = workbook.Sheets[sheetName];

        const sheetInfoObj = infoRef.current[sheetName];

        let endNumberReg = /:([A-Za-z])([0-9]+)$/;
        const endNumber = sheet["!ref"].match(endNumberReg)[2];
        let index = Number(sheetInfoObj.start_row);
        while (index <= endNumber) {
          let in_name = sheetInfoObj.in_arr
            .split(" ")
            .map((name) => sheet[`${name}${index}`]?.v)
            .join(name_join_str);
          if (
            in_name.indexOf(name_join_str) &&
            !isNaN(Number(sheet[`${sheetInfoObj.in_number}${index}`]?.v))
          ) {
            if (storage[in_name]) {
              storage[in_name] += Number(
                sheet[`${sheetInfoObj.in_number}${index}`]?.v
              );
            } else {
              storage[in_name] = Number(
                sheet[`${sheetInfoObj.in_number}${index}`]?.v
              );
            }
          }

          let out_name = sheetInfoObj.out_arr
            .split(" ")
            .map((name) => sheet[`${name}${index}`]?.v)
            .join(name_join_str);
          if (
            out_name.indexOf(name_join_str) &&
            !isNaN(Number(sheet[`${sheetInfoObj.out_number}${index}`]?.v))
          ) {
            if (storage[out_name]) {
              storage[out_name] -= Number(
                sheet[`${sheetInfoObj.out_number}${index}`]?.v
              );
            } else {
              storage[out_name] = Number(
                sheet[`${sheetInfoObj.out_number}${index}`]?.v
              );
            }
          }

          index++;
        }
      }
    }
    let array = [];
    Object.entries(storage).forEach(([name, value]) => {
      let names = name.split(name_join_str);
      let item = [];

      names.forEach((name) => {
        item.push(name);
      });
      item.push(value);
      array.push(item);
    });
    if (hasTotalSheet.current) {
      utils.sheet_add_aoa(hasTotalSheet.current, array);
    } else {
      const newSheet = utils.aoa_to_sheet(array);
      utils.book_append_sheet(workbook, newSheet, "结余");
    }

    writeFile(workbook, filename);
  }, [workbook, hasTotalSheet]);

  return (
    <Wrapper>
      {Object.keys(infoObj).map((name) => (
        <InputComponent infoRef={infoRef} name={name} key={name} />
      ))}

      <ButtonWrapper>
        <Button onClick={handleBackClick}>返回上一步</Button>
        <Button
          style={{ marginLeft: 20 }}
          type="primary"
          onClick={handleClickConfirm}
        >
          确定
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};
