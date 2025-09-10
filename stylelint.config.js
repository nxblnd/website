export default {
    extends: [
        "stylelint-config-standard",
        "stylelint-config-html",
        "stylelint-config-idiomatic-order",
    ],
    plugins: ["stylelint-order"],
    rules: {
        "selector-pseudo-class-no-unknown": [true, { ignorePseudoClasses: ["global"] }],
    },
};
