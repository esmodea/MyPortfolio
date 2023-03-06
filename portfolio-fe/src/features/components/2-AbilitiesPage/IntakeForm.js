import React, { useState } from "react";
import { Form, Input, Select } from "antd";
import { useAuth0 } from '@auth0/auth0-react';

const { TextArea } = Input;

const IntakeForm = () => {
    const [ reload, setReload ] = useState(false);
    const [form] = Form.useForm();
    const handleRecruiter = (value) => {
        setReload(!reload)
        form.setFieldValue({job: value})
    }
    return(
        <Form 
            name="intake-form"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 700 }}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'You must have a username.'}]}
                wrapperCol={{ span: 8 }}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Email"
                name='email'
                rules={[{ required: true, message: 'You must have an email.' }]}
                wrapperCol={{ span: 8 }}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Company Name"
                name="company"
                rules={[{ required: false, message: 'If you work for a company please input it here.'}]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Are you a recruiter?"
                name="recruiter"
                rules={[{ required: true, message: 'You must choose an option.'}]}
            >
                <Select onChange={handleRecruiter} defaultValue={'Select one please'} placeholder={'Select one please'}>
                    <Select.Option value={'true'}>I am a recruiter</Select.Option>
                    <Select.Option value={'false'}>I am not a recruiter</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
            >
            {({ getFieldValue }) => getFieldValue('recruiter') === 'true' ? <Form.Item
                label="Recruiting for"
                name="job"
                rules={[{ required: true, message: 'You must choose a job.'}]}
            >
                <Select defaultValue={''} placeholder={'Select a job'}>
                    <Select.Option value={'full'}>FullStack Developer</Select.Option>
                    <Select.Option value={'front'}>Front-end Developer</Select.Option>
                    <Select.Option value={'back'}>Back-end Developer</Select.Option>
                    <Select.Option value={'engineer'}>Software Engineer</Select.Option>
                </Select>
            </Form.Item> : null}
            </Form.Item>
            <Form.Item 
                label="About"
                name='about'
                rules={[{ required: false, message: `I don't know how you managed to see this.`}]}
            >
                <TextArea rows={4} />
            </Form.Item>
            
        </Form>
    )
}

export default IntakeForm;