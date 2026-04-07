import { useState } from "react";
import { Button, Modal, Form, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useCreateTodo } from "../hooks/create-todo";
import { useTranslation } from "react-i18next";

const AddModal = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const { mutate, isPending, error } = useCreateTodo();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (data) => {
    mutate(data, {
      onSuccess: () => {
        form.resetFields();
        setIsModalOpen(false);
      },
    });
  };

  return (
    <div className="tasks">
      <Button type="primary" onClick={showModal}>
        <PlusOutlined /> Yangi
      </Button>

      <Modal
        title="Yangi Amal"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label={t("title")}
            name="title"
            rules={[{ required: true, message: "Sarlavha kiriting!" }]}
          >
            <Input placeholder="Masalan: Kitob o'qish" />
          </Form.Item>

          <Form.Item label={t("description")} name="description">
            <Input.TextArea placeholder="Qo'shimcha ma'lumot..." rows={3} />
          </Form.Item>

          {error && (
            <p style={{ color: "red", marginBottom: 10 }}>{error.message}</p>
          )}

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={isPending} block>
              Qo'shish
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AddModal;
