import { Directions } from '../../constants';
import { TileType } from '../platform/models/tiles';


export function isWall(tile) {
    if ( tile && tile.type === TileType.WALL) return true;
    return false;
}

export function hasGroundBelow (platform, hero, keyPress) {
    const bounds = charTileBounds( platform, hero, keyPress);

    const { direction } = keyPress;

    if (hero.atExactTile && isWall(bounds.bottomLeft)) {
        console.log("at exact Tile..., ", bounds.bottomLeft);
        return [ true , bounds.bottomLeft];
    }

    if (direction === -1) {
        //console.log("DIrection is -1 straight...", bounds.bottomLeft);
        if( isWall(bounds.bottomLeft) || isWall(bounds.bottomRight)) {
            return [true, bounds.bottomLeft];
        }
    } 

    if (direction === Directions.LEFT) {
        if( isWall(bounds.bottomLeft) || isWall(bounds.bottomRight)) {
            return [true, bounds.bottomLeft];
        }
    }

    if (direction === Directions.RIGHT) {
        if( isWall(bounds.bottomRight) || isWall(bounds.bottomLeft)) {
            return [true, bounds.bottomRight];
        }
    }

    return [];  
}

function tile(stage, mapY, mapX){
    if( stage[mapY] && stage[mapY][mapX]) {
        return stage[mapY][mapX];
    }
    return undefined;
} 

export function charTileBounds (platform,hero, { direction, oldDirection}) {
    const stage = platform.stage;
    let xLeft = hero.x  / platform.unitSize;
    let xRight = (hero.x + hero.width) /  platform.unitSize;
    

    const mapY = Math.floor((hero.y + hero.height) / platform.unitSize);
    let mapXLeft = Math.floor(xLeft) + platform.stageVisibility.startX;
    let mapXRight = Math.floor(xRight) + platform.stageVisibility.startX;


    if(hero.atMiddleX && direction === -1 && oldDirection === Directions.LEFT) {
        mapXLeft -= 1;
        mapXRight -= 1;
    }

    const bottomLeft = tile(stage, mapY, mapXLeft);
    
    if (hero.x === bottomLeft.x) {
        hero.atExactTile = true;
    } else {
        hero.atExactTile = false;
    }

    return {
        topLeft: tile(stage, mapY - 3, mapXLeft),  
        midLowerLeft: tile(stage, mapY - 1, mapXLeft),
        midUpperLeft: tile(stage, mapY - 2, mapXLeft),
        bottomLeft: bottomLeft,

        topRight: tile(stage, mapY - 3, mapXRight),  
        midLowerRight: tile(stage, mapY - 1, mapXRight),
        midUpperRight: tile(stage, mapY - 2, mapXRight),
        bottomRight: tile(stage, mapY, mapXRight),
    };
}

export function hasWallInFront(platform, hero, direction) {
    const bounds = charTileBounds( platform, hero, direction);

    if (direction === Directions.LEFT) {
        if( isWall(bounds.midLowerLeft)  || isWall(bounds.midUpperLeft) ){
            return [ true , bounds.midLowerLeft];
        }
    }

    if (direction === Directions.RIGHT) {
        if( isWall(bounds.midLowerRight)  || isWall(bounds.midUpperRight) ){
            return [ true , bounds.midUpperRight];
        }
    }
    return [false, null];
}


