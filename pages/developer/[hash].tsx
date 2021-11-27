import React from 'react';
import ResetPassword from '../../component/ResetPassword/ResetPassword';
import { useRouter } from 'next/router';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const { developerResetPasswordEndpoint } = publicRuntimeConfig;

const ResetDeveloperPassword = () => {
    const router = useRouter();

    const { query: { hash } } = router;

    return (
        <ResetPassword
            resetPasswordUrl={developerResetPasswordEndpoint}
            reRoutePage='/developer'
            hash={String(hash)}
        />
    )
};

export default ResetDeveloperPassword;