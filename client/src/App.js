import { useState } from "react";
import { Button, Modal } from "antd";
import DataInput from "./components/DataInput";
import TableUser from "./components/TableUser";

import { Typography, Space } from "antd";

function App() {
  const [visibleAdd, setVisibleAdd] = useState();

  const { Title } = Typography;

  return (
    <>
      <Space direction="vertical" size="large" align="center">
        <Title>Desafio Viitra</Title>
        <Button type="primary" onClick={() => setVisibleAdd(true)}>
          Adicionar Usuário
        </Button>
        <TableUser />
        <Modal
          title="Criar novo usuário"
          visible={visibleAdd}
          onCancel={() => setVisibleAdd(false)}
          footer={null}
        >
          <DataInput />
        </Modal>
      </Space>
    </>
  );
}

export default App;
