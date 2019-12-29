import React, { useEffect, useState }  from 'react';
import PropTypes from 'prop-types';

import { Grid as MuiGrid } from '@material-ui/core'; 
import { spacing } from '@material-ui/system';
import { styled, makeStyles } from '@material-ui/styles';

import  styles from './styles';
const Grid = styled(MuiGrid)(spacing); 
const useStyles = makeStyles(styles);

function CompanyItem(props){
    const {
        data,
    } = props;
    const classes = useStyles();
    return (
        <Grid  container item xs={12} p={2} mt={1} mb={1} className={classes.item} >

            <Grid item xs={3}>
                <Grid pb={1} className={classes.label}> Business Name</Grid>
                <Grid className={classes.value}>{ data.name }</Grid>
            </Grid>
            <Grid item xs={8}>
                <Grid pb={1} className={classes.label}> Address</Grid>
                <Grid className={classes.address}>{ data.address }</Grid>
            </Grid>
        </Grid>
    )
}

CompanyItem.propTypes = {
    data: PropTypes.shape({}),
}

CompanyItem.defaultProps = {
    data: { name: 'Business Name' , address: 'Address'} ,
}

export default CompanyItem;