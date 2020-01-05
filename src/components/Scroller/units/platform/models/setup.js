import  { makeTile } from './tiles'
import { isVisibleArea } from './utility/platformScroll';
 
function  setupStage(state, tiles){
    let stage = [];
    let visibility = state.stageVisibility;
    let renderedOffset = state.renderedOffset;
    for( let i = 0 ; i < tiles.length; i++ ){
        let scrollAdjY = i - visibility.startY;
        stage[i] = [];
        for ( let j = 0; j < tiles[i].length; j++) {
            let tileValue = tiles[i][j];
            let scrollAdjX = j - visibility.startX;
            let willRender = isVisibleArea(j, visibility, renderedOffset);
            let tile = makeTile(tileValue, willRender);
            tile.mapX = scrollAdjX;
            tile.mapY =  scrollAdjY;
            tile.x = tile.mapX * state.unitSize;
            tile.y = tile.mapY * state.unitSize;
            stage[i][j] = tile;
        }
    }
    return stage;
}


function setupWolrd( { state, key} ) {
    let platform = state[key];
    platform.stage = setupStage(platform, platform.tiles);

    console.log("");
    console.log("");
    console.log("Setup platform");
    console.log(platform);
    return {
        ...state,
        platform: platform,
        keyPress: {
            direction: -1, /* left or  right only */
            actions:{},
        },
    }
}


export default {
    setupWolrd,
}