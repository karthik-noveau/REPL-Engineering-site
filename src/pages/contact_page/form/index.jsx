import { Button, Form, Input } from "antd";

import { AOS_ANIMATION } from "../../../constant";

import "./style.override.css";

export const FormValidation = ({ className }) => {
  const onFinish = (values) => {};
  const onFinishFailed = (errorInfo) => {};

  return (
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="formValidation"
    >
      <Form.Item
        name="First name"
        rules={[
          {
            required: true,
            message: "Please input your name!",
          },
        ]}
        data-aos={AOS_ANIMATION.FADE_UP.TYPE}
        data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
      >
        <Input placeholder="First name" />
      </Form.Item>

      <Form.Item
        name="Email Id"
        rules={[
          {
            required: true,
            message: "Please enter your Email Id!",
            type: "email",
          },
        ]}
        data-aos={AOS_ANIMATION.FADE_UP.TYPE}
        data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
      >
        <Input placeholder="Email Id" />
      </Form.Item>

      <Form.Item
        name="Phone number"
        rules={[
          {
            required: true,
            message: "Please enter your Phone number!",
          },
        ]}
        data-aos={AOS_ANIMATION.FADE_UP.TYPE}
        data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
      >
        <Input placeholder="Phone number" />
      </Form.Item>

      <Form.Item
        name="Subject"
        rules={[
          {
            required: true,
            message: "Please enter your Subject!",
          },
        ]}
        data-aos={AOS_ANIMATION.FADE_UP.TYPE}
        data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
      >
        <Input placeholder="Subject" />
      </Form.Item>

      <Form.Item
        name="Message"
        rules={[
          {
            required: true,
            message: "Please enter your Message!",
          },
        ]}
        data-aos={AOS_ANIMATION.FADE_UP.TYPE}
        data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
      >
        <Input.TextArea placeholder="Tell us about yourself..." />
      </Form.Item>

      <Form.Item className="btn">
        <Button
          type="primary"
          htmlType="submit"
          data-aos={AOS_ANIMATION.FADE_UP.TYPE}
          data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
