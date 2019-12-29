import React, { useEffect, useState }  from 'react';
import PropTypes from 'prop-types';

import { Grid as MuiGrid } from '@material-ui/core'; 
import { spacing } from '@material-ui/system';
import { styled, makeStyles } from '@material-ui/styles';
import  styles from './styles';

const Grid = styled(MuiGrid)(spacing);
const useStyles = makeStyles(styles);

function UserItem(props){
    const {
        data,
    } = props;
    const classes = useStyles();
    return (
        <Grid  container item xs={12} p={2} mt={1} mb={1} className={classes.item} >

            <Grid item xs={6}>
                <Grid pb={1} className={classes.label}> First Name</Grid>
                <Grid className={classes.value}>{ data.name }</Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid pb={1} className={classes.label}> Last Name</Grid>
                <Grid className={classes.value}>{ data.last }</Grid>
            </Grid>
        </Grid>
    )
}

UserItem.propTypes = {
    data: PropTypes.shape({}),
}

UserItem.defaultProps = {
    data: { name: 'Firstname' , last: 'Lastname'} ,
}

export default UserItem;