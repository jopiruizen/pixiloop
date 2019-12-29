import React, { memo, useEffect, useState } from 'react'; 

import MuiGrid from '@material-ui/core/Grid';
import { spacing } from '@material-ui/system';
import { styled } from '@material-ui/styles';

import PropTypes from 'prop-types';
import { useSelector, useDispatch  } from 'react-redux';
import { compose } from 'redux';

import makeStyles from '@material-ui/styles/makeStyles';
import styles from './styles';
import Menu from './Menu';
import Footer from '../commons/Footer';
import List from '../commons/List';

import UserItem from './lists/UserItem';
import CompanyItem from './lists/CompanyItem';
import useExampleList from './useExampleList';

const Grid = styled(MuiGrid)(spacing);
const useStyles = makeStyles(styles);



function Examples(props){

    const classes = useStyles();
    const userItemRenderer = (item) => (<UserItem data={item} />);
    const companyItemRenderer = (item) => (<CompanyItem data={item} />);

    const {
        itemRenderer,
        dataSource,
        title,
        getCompanies,
        getUsers,
    } = useExampleList(userItemRenderer, companyItemRenderer);
    
    const handleUsersClick = (event) => {
        getUsers();
    };

    const handleCompaniesClick = (event) => {
        getCompanies();
    }

    return (
        <div className={classes.fullView}>
            <Grid container xs={12} className={classes.fullContent}>
                <Grid container item xs={3} 
                    className={classes.sideContent}
                    alignContent='flex-start' 
                    p={2}
                    >
                    <Grid container item xs={12} className={classes.menu}>
                        <Grid item xs={12} className={classes.menuTitle}> Select A List! </Grid>
                        <Menu 
                            onUsersClick={handleUsersClick}
                            onCompanyClick={handleCompaniesClick}
                        />
                    </Grid>
                </Grid>

                <Grid container item xs={9} p={5} alignContent="flex-start" className={classes.listContent}>
                    <Grid container item xs={12} className={classes.listTitle} 
                        pl={2} mb={2}
                        alignContent="center" justifyContent="center">
                        <Grid item>  {title} </Grid>
                    </Grid>
                    <List
                        data={dataSource}
                        itemRenderer={itemRenderer.renderer}
                    />
                </Grid>
            </Grid>
            
            <Footer />
        </div>
    )
};

Examples.propTypes = {};  
Examples.defaultProps = {};

const enhancers = [
    memo,
];

export default compose(...enhancers)(Examples);

