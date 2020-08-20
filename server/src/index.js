import { App } from './App.js';

const app = new App();

app.listen();

process.on('SIGINT', () => {
    console.log('Server received SIGINT event.\nClosing server...');
    process.exit(1);
});

process.on('SIGTERM', () => {
    console.log('Server received SIGTERM event.\nClosing server...');
    process.exit(1);
});

process.on('uncaughtException', (e) => {
    console.log('An error has occured. error is: %s and stack trace is: %s', e, e.stack);
    console.log('Process will restart now.');
    process.exit(1);
});
