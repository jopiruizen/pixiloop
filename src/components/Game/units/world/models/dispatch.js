function peletteIsShown(state, {peletteShown = true}) {
    state.world.peletteShown = peletteShown;
}

function peletteIsEaten(state, { hasPelette = false}) {
    state.world.hasPelette = hasPelette;
}

export default {
    peletteIsShown,
    peletteIsEaten,
}