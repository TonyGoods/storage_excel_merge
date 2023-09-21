import { InboxOutlined } from "@ant-design/icons";
import { Upload } from "antd";
const { Dragger } = Upload;

export const SelectFile = ({ setFile }) => {
  const props = {
    name: "file",
    accept:
      "application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    customRequest: (file) => {
      setFile(file.file); 
      file.onSuccess();
    },
  };
  return (
    <Dragger {...props} style={{ height: "100vh" }}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">点击或拖拽文件到此区域</p>
    </Dragger>
  );
};
