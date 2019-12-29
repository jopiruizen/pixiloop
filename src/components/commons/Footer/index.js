import React from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import styles from './styles';
const useStyles = makeStyles(styles);

function Footer(props) {
    const {
        children,
        className,
    } = props;
    const classes = useStyles();

    function getClass(){
        return className? className : classes.footer;
    }

    return (
        <Grid container className={getClass()} justify="center">
            {children}
        </Grid>
    )
}

export default Footer;