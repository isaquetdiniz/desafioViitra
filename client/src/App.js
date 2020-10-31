import { useState } from "react";
import { Button, Modal } from "antd";
import DataInput from "./components/DataInput";
import TableUser from "./components/TableUser";

function App() {
  const [visibleAdd, setVisibleAdd] = useState();
  return (
    <>
      <TableUser />
      <Button type="primary" onClick={() => setVisibleAdd(true)}>
        Adicionar Usuário
      </Button>
      <Modal
        title="Criar novo usuário"
        visible={visibleAdd}
        onCancel={() => setVisibleAdd(false)}
        footer={null}
      >
        <DataInput />
      </Modal>
    </>
  );
}

export default App;
