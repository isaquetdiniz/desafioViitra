import { useEffect, useState } from "react";
import { Table, Space, Modal, Button } from "antd";
import DataInput from "./DataInput";
import axios from "axios";

export default function TableUser() {
  const [users, setUsers] = useState();
  const [dataSource, setDataSouce] = useState();
  const [visible, setVisible] = useState(false);
  const [details, setDetails] = useState(false);
  const [visibleEdit, setVisibleEdit] = useState();

  const getUsers = async () => {
    const res = await axios.get(`http://localhost:3001/users`);
    setUsers(res.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3001/user/${id}`);
    getUsers();
  };

  const getInformation = async (id) => {
    const res = await axios.get(`http://localhost:3001/user/${id}`);
    setDetails(res.data);
  };

  const formatUsers = () => {
    if (users) {
      const arrayDataSource = [];
      users.forEach((user) => {
        arrayDataSource.push({
          key: user.id,
          id: user.id,
          nome: user.nome,
          email: user.email,
          cpf: user.cpf,
        });
      });
      setDataSouce(arrayDataSource);
    }
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Nome",
      dataIndex: "nome",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "CPF",
      dataIndex: "cpf",
      key: "cpf",
    },
    {
      title: "Opções",
      dataIndex: "opcoes",
      key: "opcoes",
      render: (text, record) => (
        <Space size="middle">
          <Button
            type="primary"
            onClick={() => {
              setVisible(true);
              getInformation(record.id);
            }}
          >
            Informações
          </Button>
          <Button
            onClick={() => {
              setVisibleEdit(true);
              getInformation(record.id);
            }}
          >
            Editar
          </Button>
          <Button type="danger" onClick={() => deleteUser(record.id)}>
            Deletar
          </Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    formatUsers();
  }, [users]);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Table dataSource={dataSource && dataSource} columns={columns} />
      <Modal
        title="Informações Detalhadas"
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        {details && (
          <>
            <p>ID: {details.id}</p>
            <p>NOME: {details.nome}</p>
            <p>CPF: {details.cpf}</p>{" "}
            <p>Data de Nascimento: {details.dataNascimento}</p>{" "}
            <p>Email: {details.email}</p>
            <p>Endereço: {details.endereco}</p>
            <p>CEP: {details.cep}</p>
            <p>Estado: {details.estado}</p>
            <p>Cidade: {details.cidade}</p>
          </>
        )}
      </Modal>
      <Modal
        title="Editar Informações"
        visible={visibleEdit}
        onOk={() => setVisibleEdit(false)}
        onCancel={() => setVisibleEdit(false)}
      >
        <DataInput data={details} />
      </Modal>
    </>
  );
}
