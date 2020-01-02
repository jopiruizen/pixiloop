function peletteIsShown(state, {peletteShown = true}) {
    state.world.peletteShown = peletteShown;
}

function peletteIsEaten(state, { isEaten = false}) {
    state.world.hasPelette = isEaten;
}

export default {
    peletteIsShown,
    peletteIsEaten,
}