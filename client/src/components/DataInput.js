import { useEffect, useState } from "react";
import { Input, Button, Form, DatePicker, Select, Modal } from "antd";
import axios from "axios";

export default function DataInput({ details }) {
  const [states, setStates] = useState();
  const [districts, setDistricsts] = useState();
  const [idUf, setIdUf] = useState();
  const [form] = Form.useForm();

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = async (values) => {
    let nameState = states.filter((obj) => {
      return obj.id === values.estado;
    });

    const res = await axios.post("http://localhost:3001/user", {
      nome: values.nome,
      dataNascimento: values.dataNascimento,
      cep: values.cep,
      cpf: values.cpf,
      endereco: values.endereco,
      estado: nameState[0].nome,
      cidade: values.cidade,
      email: values.email,
    });

    if (!res) {
      Modal.error({ content: "Um erro ocorreu" });
    } else if (res.status === 200) {
      Modal.success({ content: "Usuário Salvo com sucesso!" });
      form.resetFields();
    }
  };

  const onFinishEdit = async (values) => {
    let nameState = [{ nome: "" }];

    if (typeof values.estado === "string") {
      nameState[0].nome = values.estado;
    } else {
      nameState = states.filter((obj) => {
        return obj.id === values.estado;
      });
    }

    const res = await axios.put(`http://localhost:3001/user/${details.id}`, {
      nome: values.nome,
      dataNascimento: values.dataNascimento,
      cep: values.cep,
      cpf: values.cpf,
      endereco: values.endereco,
      estado: nameState[0].nome,
      cidade: values.cidade,
      email: values.email,
    });

    if (!res) {
      Modal.error({ content: "Um erro ocorreu" });
    } else if (res.status === 200) {
      Modal.success({ content: "Usuário Atualizado!" });
      form.resetFields();
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const getStates = async () => {
    const res = await axios.get(
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
    );
    setStates(res.data);
  };

  const getDistricts = async () => {
    const res = await axios.get(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${idUf}/municipios`
    );
    setDistricsts(res.data);
  };

  useEffect(() => {
    getDistricts();
  }, [idUf]);

  useEffect(() => {
    getStates();
  }, []);

  useEffect(() => {
    if (details !== false && details !== undefined) {
      form.setFieldsValue({
        nome: details.nome,
        endereco: details.endereco,
        email: details.email,
        cep: details.cep,
        cpf: details.cpf,
        estado: details.estado,
        cidade: details.cidade,
      });
    }
  }, [details]);

  return (
    <>
      <Form
        {...layout}
        name="basic"
        form={form}
        onFinish={details ? onFinishEdit : onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Nome"
          name="nome"
          rules={[{ required: true, message: "Por favor, insira seu nome!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Data de Nascimento"
          name="dataNascimento"
          rules={[
            {
              required: true,
              message: "Por favor, insira sua data de nascimento!",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Por favor, insira seu email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="CPF"
          name="cpf"
          rules={[{ required: true, message: "Por favor, insira seu cpf!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Endereco"
          name="endereco"
          rules={[
            { required: true, message: "Por favor, insira seu endereço!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="CEP"
          name="cep"
          rules={[{ required: true, message: "Por favor, insira seu cep!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Estado"
          name="estado"
          rules={[{ required: true, message: "Por favor, insira seu estado!" }]}
        >
          <Select onChange={(value) => setIdUf(value)}>
            {states &&
              states.map((state) => {
                return (
                  <Select.Option value={state.id}>{state.nome}</Select.Option>
                );
              })}
          </Select>
        </Form.Item>
        <Form.Item
          label="Cidade"
          name="cidade"
          rules={[{ required: true, message: "Por favor, insira sua cidade!" }]}
        >
          <Select>
            {districts &&
              districts.map((district) => {
                return (
                  <Select.Option value={district.nome}>
                    {district.nome}
                  </Select.Option>
                );
              })}
          </Select>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Salvar Usuário
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
