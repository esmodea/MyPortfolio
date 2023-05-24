import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input, Select, setFieldValue } from "antd";
import { useAuth0 } from "@auth0/auth0-react";
import { alterInput, updateUser } from "../../state/dashboardState/userFormSlice";
import { getUserById } from "../../state/dashboardState/userFormAsync";
import { deleteUserById } from "../../state/dashboardState/userFormDeleteAsync";
import CustomSelect from "./CustomSelect";
import axios from "axios";

const { TextArea } = Input;

const IntakeForm = ({user}) => {
    const { logout } = useAuth0();
    const [ isRecruiter, setIsRecruiter ] = useState(false);
    const [ userId, setUserId ] = useState()
    const state = useSelector((state) => state.userForm);
    const userData = useSelector((state) => state.userFormAsync);
    const dispatch = useDispatch();
    const handleInputChange = (key, value) => {
        dispatch(alterInput({key: key, info: value}))
    }

    const onClickSave = (e) => {
        e.preventDefault()
        axios.post()
    } 

    const onClickDelete = (e) => {
        e.preventDefault()
        dispatch(deleteUserById(userId))
        logout()
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/users-email?email='${user.email}'`)
                .then(res => {
                    console.log(res.data)
                    setUserId(res.data.id);
                    return res.data.id;
                })
                .catch(err => {
                    console.log(err)
                })
        if(userData.firstLoad && userId )dispatch(getUserById(userId))
        console.log(userData)
    })

    useEffect(() => {
        if(userData.data[0])dispatch(updateUser(userData.data[0]))
    }, [userData])

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
                    <li className="form-title">
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
                    {+state.isRecruiter ? <li className="form-item recruiting-for">
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
                    <button className="menu-button delete-button" onClick={onClickDelete} style={{justifySelf: 'flex-start', marginRight: 'auto', fontWeight: 'bolder'}}>DELETE</button>
                    <button className="logout-button" style={{justifySelf: 'flex-end', marginLeft: 'auto'}}>Save</button>
                </div>
            </form>
        <p className="explanation-para">Your info will only be used for the purposes of my networking and job search, if you wish to remove your info including your Auth0 login please do so by hitting the delete key in the bottom left corner. <br></br> <br/> If you wish to learn more about how I've built this site then please click the information icon in the top right beside the logout button.</p>
        </div>
    )
}

export default IntakeForm;