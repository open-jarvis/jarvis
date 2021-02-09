export const swup = new Swup({
    plugins: [new SwupPreloadPlugin(), new SwupProgressPlugin({
        delay: 0
    }), new SwupScrollPlugin({
        doScrollingRightAway: false,
        animateScroll: true,
        scrollFriction: 0.3,
        scrollAcceleration: 0.04,
    }), new SwupFadeTheme()]
});