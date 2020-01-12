

import { Directions, KeyActions , PlatformEdge } from '../../constants';

import { moveLeft, moveRight} from './walk';
import { jump } from './jump';
import { fall } from './fall';

export function bossMove( boss, platform){

    /*
    if( keyPress.direction === Directions.LEFT ) {
        moveLeft(hero, platform, keyPress)
    } else if ( keyPress.direction === Directions.RIGHT) {
        moveRight(hero, platform, keyPress);
    }

    if (keyPress.actions['74'] !== undefined &&
        !keyPress.actions['74'].actionDone &&
        hero.jumping === false) {
        hero.verticalSpeed = -hero.jumpSpeedStart;
        hero.jumping = true;
    }

    if(hero.verticalSpeed < 0) {
        jump( hero, keyPress);
    }

    if (!hero.atGround && !hero.jumping) {
       fall(hero, platform, keyPress)
       if (hero.atGround) deleteAction(keyPress,'74');
    }
    */
}