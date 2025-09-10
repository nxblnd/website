export default {
    "*": ["prettier --write --ignore-unknown"],
    "*.astro": ["eslint --fix", "stylelint --fix"],
    "*.{js,ts}": ["eslint --fix"],
    "*.css": ["stylelint --fix"],
};
