module.exports = {
    name:'ready',
    once: true,
    async execute(client)
    {
        console.log("client is ready [tag: " + client.user.tag + "]");
    }
}