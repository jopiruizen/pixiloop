import React, { useEffect, useState }  from 'react';
import PropTypes from 'prop-types';

import { Grid as MuiGrid } from '@material-ui/core'; 
import { spacing } from '@material-ui/system';
import { styled } from '@material-ui/styles';
const Grid = styled(MuiGrid)(spacing);


function ListItem(props){
    const {
        data,
    } = props;
    return (
        <Grid  item xs={12} >
            {data.label}
        </Grid>
    )
}

ListItem.propTypes = {
    data: PropTypes.shape({}),
}

ListItem.defaultProps = {
    data: { label: 'Item Label'} ,
}

export default ListItem;


export const defaultItemRenderer = ( item ) => {
    return (
        <ListItem data={item} />
    )
}

export const defaultListData = [
    { label: 'List Item 1'},
    { label: 'Lite Item 2'},
    { label: 'Lite Item 3'},
    { label: 'Lite Item 4'},
    { label: 'Lite Item 5'},
];