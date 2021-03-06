import { Directions, KeyActions , PlatformEdge } from '../../constants';

import { hasWallInFront } from './validations';
import { validateFall } from './fall';

export function moveRight(hero, platform, keyPress) {
    hero.x += hero.stepSize;
    const maxPlatformWidth =  platform.stageVisibility.width * platform.unitSize;

    const [hasWall, tile] = hasWallInFront(platform, hero, Directions.RIGHT);
    if (hasWall) {
        hero.x = tile.x - hero.width;
    }

    if( hero.x + hero.width >= maxPlatformWidth) hero.x = maxPlatformWidth - hero.width;
    let mapX = Math.floor( hero.x / platform.unitSize);
    let middleX = Math.floor(platform.stageVisibility.width / 2)

    hero.atMiddleX = false;
    validateFall(hero, platform, keyPress);
    if (hero.platformEdge === PlatformEdge.RIGHT_EDGE) return;
    if (mapX >= middleX) {
        hero.platformEdge = PlatformEdge.NO;
        hero.x = middleX * platform.unitSize;
        hero.atMiddleX = true;
    }   
}

export function moveLeft(hero, platform, keyPress) {
    hero.x -= hero.stepSize;

    const [hasWall, tile] = hasWallInFront(platform, hero, Directions.LEFT);
    if (hasWall) {
        hero.x = tile.x + hero.width;
    }
    if( hero.x <= 0) hero.x = 0;
    let mapX = Math.floor( hero.x / platform.unitSize);
    let middleX = Math.floor(platform.stageVisibility.width / 2);
    hero.atMiddleX = false;
    validateFall(hero, platform, keyPress);
    if (hero.platformEdge === PlatformEdge.LEFT_EDGE) return;
    if (mapX < middleX){
        hero.platformEdge = PlatformEdge.NO;
        hero.x = middleX * platform.unitSize;
        hero.atMiddleX = true;
    }
}

export function charMoveLeft(char, platform) {
    char.x -= char.stepSize;
    const [hasWall, tile] = hasWallInFront(platform, char, Directions.LEFT);
    if (hasWall) {
        char.x = tile.x + char.width;
    }
}

export function charMoveRight(char, platform) {
    char.x += char.stepSize;
    const [hasWall, tile] = hasWallInFront(platform, char, Directions.RIGHT);
    if (hasWall) {
        char.x = tile.x - char.width;
    }
}