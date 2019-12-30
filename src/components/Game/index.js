import React, { memo, useEffect } from 'react'; 

import MuiGrid from '@material-ui/core/Grid';
import { spacing } from '@material-ui/system';
import { styled } from '@material-ui/styles';
import { compose } from 'redux';
import makeStyles from '@material-ui/styles/makeStyles';
import styles from './styles';
import controller from './controller';

const Grid = styled(MuiGrid)(spacing);
const useStyles = makeStyles(styles);

function Game(props){
    const classes = useStyles();

    function setupGame(){
        const container = document.getElementById('gameCanvasContainer');
        controller.init(container);
    }

    useEffect (() => {
        setupGame();
    },[]);

    return (
        <div id="gameCanvasContainer" className={classes.canvasContainer}>
        
        </div>
    )
};

Game.propTypes = {};  
Game.defaultProps = {};

const enhancers = [
    memo,
];

export default compose(...enhancers)(Game);