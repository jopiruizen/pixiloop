import { TileType } from '../platform/models/tiles';

import { isWall, hasGroundBelow } from './validations';

function shouldFall(hero, platform, direction ) {
    if (hero.isJumping || hero.atGround === false) return;
    let  mapY = Math.floor((hero.y + hero.height) / platform.unitSize);
    let mapX = Math.floor( hero.x / platform.unitSize) + platform.stageVisibility.startX;
    
    const tileLeft = platform.stage[mapY][mapX];
    const tileRight = platform.stage[mapY][mapX +1 ];
    if ( isWall(tileLeft) ||  isWall(tileRight) ) {
        console.log("SHOULD FALL NOW>>>");
        hero.verticalSpeed = 0;
        hero.atGround = false;
    }
 
}

export function fall (hero, platform, keyPress) {
    hero.verticalSpeed += hero.gravity;
    hero.y += hero.verticalSpeed;
    
    if( hero.y < platform.computedSize.height) {
        const [hasGround, tile] = hasGroundBelow(platform, hero, keyPress);
        if (hasGround) {
            console.log("has Ground...");
            hero.atGround = true;
            hero.jumping = false;
            hero.y = tile.y - hero.height;
            hero.verticalSpeed = 0;
        }
    } 
}

