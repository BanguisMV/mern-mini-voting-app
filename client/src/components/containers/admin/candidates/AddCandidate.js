import React,{ useState } from 'react'
import { Modal, Form, Input, Select, Button } from 'antd';
const { Option } = Select;

const AddCandidate = ({visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();



    return (
      <Modal
      centered
      visible={visible}
      title="Add Candidate"
      okText="Add"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form  form={form} layout="vertical" name="form_in_modal" >
        <Form.Item
          name="firstName"
          rules={[{ required: true, message: 'First Name is required'}]}>
          <Input placeholder="First Name" size="large" />
        </Form.Item>
        
        <Form.Item
          name="lastName"
          rules={[{ required: true, message: 'Last Name is required'}]}>
          <Input placeholder="Last Name" size="large" />
        </Form.Item>

        <Form.Item
        name="yearLevel"
        hasFeedback
        rules={[{ required: true, message: 'Please provide the year level' }]}
      >
        <Select placeholder="Year Level" size="large">
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
          <Option value="4">4</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="position"
        hasFeedback
        rules={[{ required: true, message: 'Please provide the position' }]}>
        <Select placeholder="Position" size="large">
          <Option value="President">President</Option>
          <Option value="Vice">Vice</Option>
          <Option value="Treasurer">Treasurer</Option>
          <Option value="Peace Officer">Peace Officer</Option>
          <Option value="Muse">Muse</Option>
          <Option value="Escort">Escort</Option>
        </Select>
      </Form.Item>

        <Form.Item
        name="partyList"
        hasFeedback
        rules={[{ required: true, message: 'Please provide the year level' }]}>
        <Select placeholder="Party List" size="large">
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
          <Option value="4">4</Option>
        </Select>
      </Form.Item>

        <Form.Item name="photo">
          <Input placeholder="Photo" size="large"/>
       </Form.Item>
        
        </Form>

    </Modal>
    )
}

export default AddCandidate
