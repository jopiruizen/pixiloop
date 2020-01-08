export function jump( hero, keyPress) {
    hero.verticalSpeed += hero.gravity;
    hero.y = hero.y + hero.verticalSpeed;
    if( hero.verticalSpeed >= 0) {
        hero.verticalSpeed = 0;
        hero.jumping = false;
        hero.atGround = false;
        if (keyPress && keyPress.actions) keyPress.actions['74'].actionDone = true;
       //deleteAction(keyPress,'74');
    }
};