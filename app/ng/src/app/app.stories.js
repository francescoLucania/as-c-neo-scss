export default { title: 'My Button' }

export const withText = () => ({
    component: Button,
    props: {
        text: 'Hello Button',
    },
});

export const withEmoji = () => ({
    component: Button,
    props: {
        text: '😀 😎 👍 💯',
    },
});
