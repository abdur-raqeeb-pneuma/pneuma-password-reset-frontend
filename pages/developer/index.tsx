import { NextPage } from 'next'
import React from 'react';
import Button from '../../component/Button/Button';
import styles from '../../styles/Home.module.scss';


const Developer: NextPage = () => (
    <div className={styles.center}>
        <h1>Password Reset Successful</h1>
        <Button text='Click here' href='https://dashboard.pneuma.care/'/>
        <p style={{ display: 'inline-block', fontSize: '20px' }}>to sign in to your account</p>
    </div>
);

export default Developer;