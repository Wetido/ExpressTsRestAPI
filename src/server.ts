import app from './app';

const server = app.listen(app.get("port"), () => {

    console.log("Aplikacja dziala");
})

export default server;