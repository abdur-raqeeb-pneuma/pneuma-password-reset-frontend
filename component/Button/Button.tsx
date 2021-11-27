import React from 'react';
import styles from './Button.module.scss';

export interface IButtonProps {
    text: string;
    href: string;
}

const Button = ({text, href}: IButtonProps) => (
    <a className={styles.button} href={href}>
        {text}
    </a>
);

export default Button;