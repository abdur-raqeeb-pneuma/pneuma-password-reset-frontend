import React from 'react';
import ResetPassword from '../../component/ResetPassword/ResetPassword';
import { useRouter } from 'next/router';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const { labResetPasswordEndpoint } = publicRuntimeConfig;

const ResetLaboratoryPassword = () => {
    const router = useRouter();

    const { query: { hash } } = router;

    return (
        <ResetPassword
            resetPasswordUrl={labResetPasswordEndpoint}
            reRoutePage='/laboratory'
            hash={String(hash)}
        />
    )
};

export default ResetLaboratoryPassword;