import React, { Component } from "react";
import {
  Form,
  Avatar,
  Button,
  Input,
  Row,
  Col,
  message,
  Upload,
  Modal,
  Space,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import Flex from "components/shared-components/Flex";
import { updateClientRequest } from "./../../../../../redux/actions/Users";
import { connect } from "react-redux";
export class EditClient extends Component {
  constructor(props) {
    super(props);
    const { data } = this.props;
    this.state = {
      ...data,
      street: data.address.street,
      city: data.address.city,
      zipcode: data.address.zipcode,
      avatarUrl: "/img/avatars/thumb-6.jpg",
    };
  }

  avatarEndpoint = "https://www.mocky.io/v2/5cc8019d300000980a055e76";

  getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  handleCancel = () => {
    const { onCancel } = this.props;
    console.log(onCancel);
    onCancel();
  };

  render() {
    const { close, open } = this.props;
    const onFinish = (values) => {
      const key = "updatable";

      const clientData = {
        ...this.state,
        name: values.name,
        email: values.email,
        username: values.username,
        website: values.website,
        address: {
          street: values.street,
          city: values.city,
          zipcode: values.zipcode,
        },
      };
      message.loading({ content: "Updating...", key, duration: 2 });
      setTimeout(() => {
        this.props.updateClientRequest(clientData);
        message.success({ content: "Done!", key, duration: 1000 });
        close();
      }, 1000);
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

    const onUploadAvatar = (info) => {
      const key = "updatable";
      if (info.file.status === "uploading") {
        message.loading({ content: "Uploading...", key, duration: 1000 });
        return;
      }
      if (info.file.status === "done") {
        this.getBase64(info.file.originFileObj, (imageUrl) =>
          this.setState({
            avatarUrl: imageUrl,
          })
        );
        message.success({ content: "Uploaded!", key, duration: 1.5 });
      }
    };

    const onRemoveAvatar = () => {
      this.setState({
        avatarUrl: "",
      });
    };

    const { name, email, username, website, street, city, zipcode, avatarUrl } =
      this.state;

    return (
      <Modal
        open={open}
        onCancel={() => {
          close();
        }}
        footer={null}
        closable={true}
        top={50}
        width={800}
        destroyOnClose
      >
        <Space direction="vertical" style={{ width: "100%" }}>
          <Flex
            alignItems="center"
            mobileFlex={false}
            className="text-center text-md-left"
          >
            <Avatar size={90} src={avatarUrl} icon={<UserOutlined />} />
            <div className="ml-md-3 mt-md-0 mt-3">
              <Upload
                onChange={onUploadAvatar}
                showUploadList={false}
                action={this.avatarEndpoint}
              >
                <Button type="primary">Change Avatar</Button>
              </Upload>
              <Button className="ml-2" type="danger" onClick={onRemoveAvatar}>
                Remove
              </Button>
            </div>
          </Flex>
        </Space>
        <Form
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{
            name: name,
            email: email,
            username: username,
            website: website,
            street: street,
            city: city,
            zipcode: zipcode,
          }}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please enter name" }]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: "Please enter username" }]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Website"
                name="website"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please enter email" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Space direction="vertical" style={{ width: "100%" }}>
            <h3>Address</h3>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Street"
                  name="street"
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="City"
                  name="city"
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Zipcode"
                  name="zipcode"
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </Space>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form>
      </Modal>
    );
  }
}
const mapDispatchToProps = {
  updateClientRequest,
};

export default connect(null, mapDispatchToProps)(EditClient);
