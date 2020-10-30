import { useEffect, useState } from "react";
import { Table, Space } from "antd";
import axios from "axios";

export default function TableUser() {
  const [users, setUsers] = useState();
  const [dataSource, setDataSouce] = useState();

  const getUsers = async () => {
    const res = await axios.get(`http://localhost:3001/users`);
    setUsers(res.data);
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
          dataNascimento: user.dataNascimento,
          endereco: user.endereco,
          cep: user.cep,
          estado: user.estado,
          cidade: user.cidade,
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
      title: "Data de Nascimento",
      dataIndex: "dataNascimento",
      key: "dataNascimento",
    },
    {
      title: "Endereço",
      dataIndex: "endereco",
      key: "endereco",
    },
    {
      title: "CEP",
      dataIndex: "cep",
      key: "cep",
    },
    {
      title: "Estado",
      dataIndex: "estado",
      key: "estado",
    },
    {
      title: "Cidade",
      dataIndex: "cidade",
      key: "cidade",
    },
    {
      title: "Opções",
      dataIndex: "opcoes",
      key: "opcoes",
      render: (text, record) => (
        <Space size="middle">
          <a>View</a>
          <a>Edit</a>
          <a>Delete</a>
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
    </>
  );
}
