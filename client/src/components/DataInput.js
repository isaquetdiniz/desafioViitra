import { Input, Button, Form, DatePicker, Select } from "antd";

export default function DataInput() {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
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
          <Select>
            <Select.Option value="Pernambuco">Pernambuco</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Cidade"
          name="cidade"
          rules={[{ required: true, message: "Por favor, insira sua cidade!" }]}
        >
          <Select>
            <Select.Option value="Camaragibe">Camaragibe</Select.Option>
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
