window.discord = {
    connect: function () {
        let tries = 0;
        const port = 6463 + (tries % 10);
        const discord = window.discord;
        discord.ws = new WebSocket(`ws://127.0.0.1:${port}/?v=1`);
        discord.ws.onopen = () => (discord.answer = true);
        discord.ws.onerror = () => (discord.answer = false);
    },
};
