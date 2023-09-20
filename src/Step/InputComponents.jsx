import styled from "styled-components";
import { Input } from "antd";
import { useCallback } from "react";

const Wrapper = styled.div``;
const Item = styled.div``;

export const InputComponent = ({ name, infoRef }) => {
  const handleInput = useCallback((e, key) => {
    console.log(e);
  }, []);

  return (
    <Wrapper>
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
    </Wrapper>
  );
};
