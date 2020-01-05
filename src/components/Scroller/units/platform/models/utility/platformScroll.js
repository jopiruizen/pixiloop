import { Directions } from '../../../../constants';


export function isVisibleArea(x, visibility, renderedOffset) {
    if( x < visibility.startX - renderedOffset ||
        x > visibility.startX + visibility.width + renderedOffset ) {
        //out of visible area
       return false;
    }
    return true;
} 

function moveTile(state, tile, direction) {
    let stepSize = state.stepSize;
    if (direction === Directions.LEFT) {
        tile.x += stepSize;
    } else if (direction === Directions.RIGHT) {
        tile.x -= stepSize;
    }
}

export function hadReachedEdge(state, direction) {
    const {
        stage,
        stageVisibility: visibility,
    } = state;
    const maxVisibleX = visibility.startX + visibility.width;
    if (direction === Directions.RIGHT &&  maxVisibleX  >=  stage[0].length - 1) {  
        return true;
    } else if(direction === Directions.LEFT && visibility.startX <= 0) {
       
        return true;
    }
    return false;
}
/*
 * Scroll The Tiles 
 */

export function scrollTiles (state, direction){
    const  {
        stage,
        stageVisibility: visibility,
        renderedOffset,
    } = state;

    let maxVisibleX = visibility.startX + visibility.width + renderedOffset;
    if (maxVisibleX >= stage[0].length-1) maxVisibleX = stage[0].length - 1;
    let minVisibleX = visibility.startX - renderedOffset; 
    if (minVisibleX <= 0) minVisibleX = 0;
    if( direction === Directions.LEFT) {
        state.stepChange += state.stepSize;
    } else if ( direction === Directions.RIGHT) {
        state.stepChange -= state.stepSize;
    }
    for (let i = 0; i < stage.length; i++) {
        for (let j = minVisibleX;  j <= maxVisibleX; j++) {
            moveTile(state, stage[i][j], direction);
        }
    }
}

export function updateVisibleArea (state, direction) {
    let stage = state.stage;

    if (direction === Directions.LEFT) {
        state.stageVisibility.startX -= 1;
    } else if (direction ===  Directions.RIGHT) {
        state.stageVisibility.startX += 1;
    }

    let visibility = state.stageVisibility;
    let renderedOffset = state.renderedOffset;

    for( let i = 0 ; i < stage.length; i++ ){
        let scrollAdjY = i - visibility.startY;
        for ( let j = 0; j < stage[i].length; j++) {
            let tile = stage[i][j];
            let scrollAdjX = j - visibility.startX;
            tile.visible = isVisibleArea(j, visibility, renderedOffset);
            tile.mapX = scrollAdjX;
            tile.mapY =  scrollAdjY;
            tile.x = tile.mapX * state.unitSize;
            tile.y = tile.mapY * state.unitSize;
            stage[i][j] = tile;
        }
    }

    state.stepChange = 0;
}