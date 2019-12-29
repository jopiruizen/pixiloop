import React from 'react';
import PropTypes from 'prop-types';
import { Grid as MuiGrid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { spacing } from '@material-ui/system';
import { styled } from '@material-ui/styles';

import styles from './styles';

const Grid = styled(MuiGrid)(spacing);
const useStyles = makeStyles(styles);

function Menu (props) {
    const {
        onUsersClick,
        onCompanyClick,
    } = props;
    const classes = useStyles();
    
    return (
        <Grid container item xs={12}  justifyContent="center" alignContent="flex-start">
            <Grid item xs={12} pb={2}>
                <Button className={classes.menuButton}
                    variant="outlined"
                    color="primary"
                    onClick={onUsersClick}
                >
                    Registered Users
                </Button>
            </Grid>
            <Grid item xs={12} >
                <Button xs={12}
                    className={classes.menuButton}
                    variant="outlined"
                    color="primary"
                    onClick={onCompanyClick}
                >
                    Companies
                </Button>
            </Grid>
        </Grid>
    )
}

Menu.propTypes = {
    onUsersClick: PropTypes.func,
    onCompanyClick: PropTypes.func,
};
  
Menu.defaultProps = {
    onUsersClick: () => {},
    onCompanyClick: () => {},
};

export default Menu;