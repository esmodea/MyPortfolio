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
        <div className="user-form-container">
        <Form
            className="user-form" 
            name="intake-form"
            size="large"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 700 }}
            autoComplete="off"
        >
            <Form.Item 
                label="Please input your information!" 
                name="suggestion"
                labelCol={{ span: 24 }}
                style={{marginLeft: '14.5rem', marginTop: '1rem'}}
            >
            </Form.Item>
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
            <Form.Item
                label=' '
                className="winvisible"
            >
            <div style={{display: 'flex', width: '100%'}}>
            <button className="menu-button delete-button" style={{justifySelf: 'flex-start', marginRight: 'auto', fontWeight: 'bolder'}}>DELETE</button>
            <button className="logout-button" style={{justifySelf: 'flex-end', marginLeft: 'auto'}}>Save</button>

            </div>
            </Form.Item>
        </Form>
        <p className="explanation-para">Your info will only be used for the purposes of my job search, if you wish to remove your info including your Auth0 login please do so by hitting the delete key in the bottom left corner. <br></br> <br/> If you wish to learn more about how I've built this site then please click the information icon in the top right beside the logout button.</p>
        </div>
    )
}

export default IntakeForm;