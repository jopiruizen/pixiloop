function setupBoss( { state, key} ) {

    const platform = state['platform'];
    
    let boss = state[key];
    boss.x = boss.mapX * platform.unitSize;
    boss.y = boss.mapY * platform.unitSize;
    boss.gravity = 1;
    boss.jumpSpeedStart = 20;

    return {
        ...state,
        boss: boss,
    }
}


export default {
    setupBoss,
}