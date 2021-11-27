import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import Spinner from '../Spinner/Spinner';
import styles from './ResetPassword.module.scss';

interface UserPassword {
    password: string;
    confirmPassword: string;
}

export interface IResetPasswordProps {
    resetPasswordUrl: string;
    reRoutePage: string;
    hash: string;
}

const ResetPassword = ({ resetPasswordUrl, reRoutePage, hash }: IResetPasswordProps) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [userPassword, setUserPassword] = useState<UserPassword>({
        password: '',
        confirmPassword: '',
    });

    const router = useRouter();

    const {password, confirmPassword} = userPassword;

    const onChange = (e: any): void =>
        setUserPassword({...userPassword, [e.target.name]: e.target.value});

    const onSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        if (password !== confirmPassword) {
            toast.error('Password does not match');
            setLoading(false)
        } else {
            // send request
            try {
                const res = await axios.post(`${resetPasswordUrl}/${hash}`, {password});
                if (res.status === 200) {
                    toast.success('Password has been reset');
                    router.replace(reRoutePage)
                }
            } catch (err: any | AxiosError) {
                if (axios.isAxiosError(err)) {
                    toast.error(err.response?.data.error);
                    setLoading(false)
                } else {
                    toast.error(err.message);
                    setLoading(false);
                }
            }

        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Reset Password</h1>
            <div className={styles.form}>
                <form onSubmit={onSubmit}>
                    <input
                        type='password'
                        name='password'
                        placeholder='password'
                        onChange={onChange}
                    />
                    <input
                        type='password'
                        name='confirmPassword'
                        placeholder='confirm password'
                        onChange={onChange}
                    />
                    {loading ?
                        (
                            <div className={styles.spinner}>
                                <Spinner/>
                            </div>
                        ) :
                        (
                            <button type="submit" className={styles.btn}>Reset Password</button>
                        )
                    }
                </form>
            </div>
        </div>
    )
};

export default ResetPassword;