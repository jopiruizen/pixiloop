function setupHero( { state, key} ) {

    const platform = state['platform'];
    let heroState = state[key];
    heroState.x = heroState.mapX * platform.unitSize;
    heroState.y = heroState.mapY * platform.unitSize;
    console.log("");
    console.log("");
    console.log("Setup  Hero ");
    console.log(heroState);
    return {
        ...state,
        hero: heroState,
    }
}


export default {
    setupHero,
}