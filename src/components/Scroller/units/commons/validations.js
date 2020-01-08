import { TileType } from '../platform/models/tiles';

export function isWall(tile) {
    if ( tile && tile.type === TileType.WALL) return true;
    return false;
}

export function hasGroundBelow(stage, mapX1, mapX2, mapY ) {
    let tileLeft = stage[mapY][mapX1];
    let tileRight = stage[mapY][mapX2];
    if ( isWall(tileLeft) ||  isWall(tileRight) ) {
        return true;
    }
    return false;
} 