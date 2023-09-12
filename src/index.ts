import { add } from "./module";

function main(test: string) {
    console.log("hello world");
    const a = add(1);
    console.log(a);
    const b = add(2);
    console.log(b)
}

main('abc');