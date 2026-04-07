import { useState, useEffect } from "react";
import { Modal, Form, Input, Button } from "antd";
import { useUpdateTodo } from "../hooks/update-todo";
import { useTranslation } from "react-i18next";

const UpdateModal = ({ todo }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const { mutate, isPending } = useUpdateTodo();

  useEffect(() => {
    if (todo) {
      form.setFieldsValue({
        title: todo.title,
        description: todo.description,
      });
    }
  }, [todo]);

  const handleSubmit = (values) => {
    mutate(
      { id: todo.id, data: values },
      {
        onSuccess: () => {
          setOpen(false);
        },
      },
    );
  };

  return (
    <>
      <Button variant="outlined" color="green" onClick={() => setOpen(true)}>
        {t("edit")}
      </Button>

      <Modal
        title="Edit Todo"
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            name="title"
            label={t("title")}
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item name="description" label={t("description")}>
            <Input.TextArea rows={3} />
          </Form.Item>

          <Button type="primary" htmlType="submit" loading={isPending} block>
            Yangilash
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default UpdateModal;
