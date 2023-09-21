import styled from "styled-components";
import { Input } from "antd";
import { useCallback } from "react";

<<<<<<< HEAD
const Wrapper = styled.div``;
const Item = styled.div``;

export const InputComponent = ({ name, infoRef }) => {
  const handleInput = useCallback((e, key) => {
    console.log(e);
=======
const Wrapper = styled.div`
  margin: 10px;
  border-bottom: 1px solid rgba(5, 5, 5, 0.06);
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Item = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-right: 20px;
  width: 400px;

  & > span {
    width: 100px;
  }

  & > input {
    flex: 1;
  }
`;
const SheetName = styled.div`
  margin-bottom: 16px;
`;

export const InputComponent = ({ name, infoRef }) => {
  const handleInput = useCallback((e, key) => {
    infoRef.current[name][key] = e.target.value.trim().toUpperCase();
>>>>>>> 5fa98031565d58c7b20cde812e14acb37bee1553
  }, []);

  return (
    <Wrapper>
<<<<<<< HEAD
      <Item>
        <span>入库商品名：</span>
        <Input onChange={(e) => handleInput(e, "in_arr")} />
      </Item>
      <Item>
        <span>入库数量：</span>
        <Input onChange={(e) => handleInput(e, "in_number")} />
      </Item>
      <Item>
        <span>出库商品名：</span>
        <Input onChange={(e) => handleInput(e, "out_arr")} />
      </Item>
      <Item>
        <span>出库数量：</span>
        <Input onChange={(e) => handleInput(e, "out_number")} />
      </Item>
      <Item>
        <span>出库起始行数：</span>
        <Input onChange={(e) => handleInput(e, "start_row")} />
      </Item>
=======
      <SheetName>{name}</SheetName>
      <ItemWrapper>
        <Item>
          <span>入库商品名：</span>
          <Input onChange={(e) => handleInput(e, "in_arr")} />
        </Item>
        <Item>
          <span>入库数量：</span>
          <Input onChange={(e) => handleInput(e, "in_number")} />
        </Item>
        <Item>
          <span>出库商品名：</span>
          <Input onChange={(e) => handleInput(e, "out_arr")} />
        </Item>
        <Item>
          <span>出库数量：</span>
          <Input onChange={(e) => handleInput(e, "out_number")} />
        </Item>
        <Item>
          <span>起始行数：</span>
          <Input onChange={(e) => handleInput(e, "start_row")} />
        </Item>
      </ItemWrapper>
>>>>>>> 5fa98031565d58c7b20cde812e14acb37bee1553
    </Wrapper>
  );
};
