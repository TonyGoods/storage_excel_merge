import { InboxOutlined } from "@ant-design/icons";
import { Upload } from "antd";
const { Dragger } = Upload;

export const SelectFile = ({ setFile }) => {
  const props = {
    name: "file",
    accept:
      "application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    customRequest: (file) => {
<<<<<<< HEAD
      setFile(file.file);
=======
      setFile(file.file); 
>>>>>>> 5fa98031565d58c7b20cde812e14acb37bee1553
      file.onSuccess();
    },
  };
  return (
<<<<<<< HEAD
    <Dragger {...props}>
=======
    <Dragger {...props} style={{ height: "100vh" }}>
>>>>>>> 5fa98031565d58c7b20cde812e14acb37bee1553
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">点击或拖拽文件到此区域</p>
    </Dragger>
  );
};
