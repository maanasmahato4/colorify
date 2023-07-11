export class Log {
    static success(msg: string) {
        console.log(`%c ${msg}`, `color:green`);
    }
    static danger(msg: string) {
        console.log(`%c ${msg}`, `color:red`);
    }
    static info(msg: string) {
        console.log(`%c ${msg}`, `color: blue`);
    }
    static warning(msg: string) {
        console.log(`%c ${msg}`, `color: orange`);
    }
    static light(msg: string) {
        console.log(`%c ${msg}`, `color: white; background: black`);
    }
    static dark(msg: string) {
        console.log(`%c ${msg}`, `color: black; background: white`);
    }
}