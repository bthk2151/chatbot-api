import express from 'express';
const app = express();

app.get('/', (_: express.Request, res: express.Response) => {
    const name = process.env.NAME || 'World';
    res.send(`Hello ${name}!`);
});

const port = parseInt(process.env.PORT!) || 8080;
app.listen(port, () => {
    console.log(`chatbot-api: listening on port ${port}`);
});