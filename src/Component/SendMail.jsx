import React from 'react';
import './SendMail.css';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import {useForm} from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../features/mailSlice';
import { db } from '../firebase';
import firebase from 'firebase';

function SendMail() {
    const {register, handleSubmit, errors} = useForm();
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        console.log(formData)

        db.collection('eamils').add({
            to:formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        dispatch(closeSendMessage());
    };

    return (
        <div className='sendMail'>
            <div className='sendMail__header'>
                <h3>New Message</h3>
                <CloseIcon 
                    onClick={()=> dispatch(closeSendMessage())}
                    className='sendMail__close' 
                />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    name='to'
                    type="email" placeholder='to' 
                    ref={register({required: true})}
                />
                    {errors.to && <p className='sendMail__error'>To is Required!</p>}

                <input 
                    name='subject'
                    type="text" placeholder='subject'
                    ref={register({required: true})}
                />
                {errors.subject && <p className='sendMail__error'>Subject is Required!</p>}

                <input type="text" 
                    name='message'
                    placeholder='message'
                    className='sendMail__message'
                    ref={register({required: true})}
                />
                {errors.message && <p className='sendMail__error'>Message is Required!</p>}

                <div className="sendMail__options">
                    <Button 
                    variant='contained'
                    color='primary'
                    type='submit'
                    className='sendMail__send'>
                        Send
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail;
