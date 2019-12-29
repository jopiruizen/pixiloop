import React, { useEffect, useState }  from 'react';
import PropTypes from 'prop-types';

import { Grid as MuiGrid } from '@material-ui/core'; 
import { spacing } from '@material-ui/system';
import { styled } from '@material-ui/styles';

import { defaultItemRenderer, defaultListData } from './ListItem';

const Grid = styled(MuiGrid)(spacing);

function List(props){
    const {
        data,
        itemRenderer,
        className,
    } = props;
    
    function renderListItems(){
        const items = data.map((item) => itemRenderer(item));
        return items;
    }

    return (
        <Grid container item xs={12}  className={className} alignContent={"flex-start"}>
            {renderListItems()}
        </Grid>
    )
}

List.propTypes = {
    data: PropTypes.arrayOf,
    itemRenderer: PropTypes.func,
    className: PropTypes.shape({}),
}

List.defaultProps = {
    data:  defaultListData,
    itemRenderer: defaultItemRenderer,
    className: {},
}

export default List;