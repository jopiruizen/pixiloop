import { TileType } from '../platform/models/tiles';
import { Directions } from '../../constants';

import { hasGroundBelow, charTileBounds, isWall  } from './validations';
import { hadReachedEdge } from '../platform/models/utility/platformScroll';


export function shouldFallOnWalking (platform, hero, keyPress) {
    const bounds = charTileBounds( platform, hero, keyPress);

    const { direction } = keyPress;

    if (hero.atExactTile && !isWall(bounds.bottomLeft)) {
        return [ true , bounds.bottomLeft];
    }

    if (direction === Directions.LEFT) {
        if( !isWall(bounds.bottomRight)) {
            return [true, bounds.bottomRight];
        }
    }

    if (direction === Directions.RIGHT) {
        if( !isWall(bounds.bottomLeft)) {
            return [true, bounds.bottomLeft];
        }
    }

    return [];  
}

export function validateFall(hero, platform, keyPress) {
    const [shouldFall, groundTile] = shouldFallOnWalking(platform, hero, keyPress);
    if (shouldFall && hero.jumping !== true && !hero.falling) {
        hero.verticalSpeed = 0;
        hero.jumping = false;
        hero.atGround = false;
        hero.falling = true;
        hero.fallFromWalk = true;
    }
}

export function fall (hero, platform, keyPress) {
    hero.verticalSpeed += hero.gravity;
    hero.y += hero.verticalSpeed;
    hero.falling = true;
    stopFalling(hero,platform,keyPress);
}

export function stopFalling(hero, platform, keyPress){
    if( hero.y < platform.computedSize.height) {
        const [hasGround, tile] = hasGroundBelow(platform, hero, keyPress);
        if (hasGround) {
            hero.atGround = true;
            hero.falling = false;
            hero.jumping = false;
            hero.y = tile.y - hero.height;
            hero.verticalSpeed = 0;
        }
    }
}
 