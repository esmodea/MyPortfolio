import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input, Select, setFieldValue } from "antd";
import { alterInput } from "../../state/dashboardState/userFormSlice";
import CustomSelect from "./CustomSelect";
import axios from "axios";

const { TextArea } = Input;

const IntakeForm = ({user}) => {
    const [ isRecruiter, setIsRecruiter ] = useState(false);
    const state = useSelector((state) => state.userForm);
    const dispatch = useDispatch();
    const handleInputChange = (key, value) => {
        dispatch(alterInput({key: key, info: value}))
    }
    useEffect(() => {
        (async ()=> {
            let userID = await axios.get(`http://localhost:8000/users-email?email='${user.email}'`)
                .then(res => {
                    console.log(res.data)
                    userID = res.data.id;
                    return res.data.id;
                })
                .catch(err => {
                    console.log(err)
                })
            if(userID){
                (async ()=> {
                    user = await axios.get(`http://localhost:8000/users?id=${userID.id}`)
                        .then(res => {
                           return res.data;
                        })
                        .catch(err => {
                            console.log(err)
                        })
                    console.log(user)
                })()
                console.log('user id', userID)
            }
        })()
    }, [user])

    const onSelectChange = (which, value) => {
        if(which === 'recruiterBool'){
            dispatch(alterInput({key: "isRecruiter", info: value.value}))
            setIsRecruiter(value.value)
        };
        if(which === 'recruitingFor'){
            dispatch(alterInput({key: "isInterestedIn", info: value.key}))
        };
    } 

    return(
        <div className="user-form-container">
            <form className="user-form">
                <ul className="form-items">
                    <li className="form-item">
                        <label>Please input your information!</label>
                    </li>
                    <li className="form-item username">
                        <label>Username </label><input onChange={(e) => handleInputChange("username", e.target.value)} value={state.username} type="text"/>
                    </li>
                    <li className="form-item email">
                        <label>E-mail </label><input onChange={(e) => handleInputChange("email", e.target.value)} value={state.email} type="text"/>
                    </li>
                    <li className="form-item company">
                        <label>Company Name </label><input onChange={(e) => handleInputChange("companyName", e.target.value)} value={state.companyName} type="text"/>
                    </li>
                    <li className="form-item is-recruiter">
                        <label>Are you a recruiter? </label>
                        <CustomSelect initialVal={state.isRecruiter ? 1 : 0} onChange={(value) => {
                            onSelectChange('recruiterBool', value)
                        }}
                        options={[
                            {
                                key: 0,
                                value: false,
                                text: "I am not a recruiter / refuse to answer"
                            },
                            {
                                key: 1,
                                value: true,
                                text: "I am a recruiter"
                            }
                        ]} />
                    </li>
                    {state.isRecruiter ? <li className="form-item recruiting-for">
                        <label>Hiring for...</label>
                        <CustomSelect initialVal={state.isInterestedIn} onChange={(value) => onSelectChange('recruitingFor', value)} options={[
                            {
                                key: 0,
                                value: "full",
                                text: "Full Stack Developer"
                            },
                            {
                                key: 1,
                                value: 'front',
                                text: "Front-end Developer"
                            },
                            {
                                key: 2,
                                value: 'back',
                                text: "Back-end Developer"
                            },
                            {
                                key: 3,
                                value: 'engineer',
                                text: "Software Engineer"
                            }
                        ]} />
                    </li> : ""}
                    <li className="form-item about">
                        <label>About Yourself</label>
                        <textarea onChange={(e) => handleInputChange("about", e.target.value)} value={state.about} style={{resize: "none"}} rows={4}></textarea>
                    </li>
                </ul>
                <div style={{display: 'flex', width: '100%'}}>
                    <button className="menu-button delete-button" style={{justifySelf: 'flex-start', marginRight: 'auto', fontWeight: 'bolder'}}>DELETE</button>
                    <button className="logout-button" style={{justifySelf: 'flex-end', marginLeft: 'auto'}}>Save</button>
                </div>
            </form>
        {/* <Form
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
                <Input defaultValue={state.username} setFieldValue={state.username} />
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
            
            </Form.Item>
        </Form> */}
        <p className="explanation-para">Your info will only be used for the purposes of my networking and job search, if you wish to remove your info including your Auth0 login please do so by hitting the delete key in the bottom left corner. <br></br> <br/> If you wish to learn more about how I've built this site then please click the information icon in the top right beside the logout button.</p>
        </div>
    )
}

export default IntakeForm;