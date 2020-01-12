function setupHero( { state, key} ) {

    const platform = state['platform'];
    let heroState = state[key];
    heroState.x = heroState.mapX * platform.unitSize;
    heroState.y = heroState.mapY * platform.unitSize;
    heroState.gravity = 1;
    heroState.jumpSpeedStart = 20;

    return {
        ...state,
        hero: heroState,
    }
}


export default {
    setupHero,
}