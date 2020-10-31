import { useState } from "react";
import { Button, Modal } from "antd";
import DataInput from "./components/DataInput";
import TableUser from "./components/TableUser";

import { Typography, Space } from "antd";

function App() {
  const [visibleAdd, setVisibleAdd] = useState();
  const [attTable, setAttTable] = useState(true);

  const { Title } = Typography;

  return (
    <>
      <Space direction="vertical" size="large" align="center">
        <Title>Desafio Viitra</Title>
        <Button
          type="primary"
          onClick={() => {
            setVisibleAdd(true);
            setAttTable(false);
          }}
        >
          Adicionar Usuário
        </Button>
        <TableUser isAttTable={attTable} />
        <Modal
          title="Criar novo usuário"
          visible={visibleAdd}
          onCancel={() => {
            setVisibleAdd(false);
            setAttTable(true);
          }}
          footer={null}
        >
          <DataInput />
        </Modal>
      </Space>
    </>
  );
}

export default App;
