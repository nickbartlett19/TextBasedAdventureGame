const obj1 = {key1: "val", key2: "val"};

class GameStage {
    constructor(value) {
        this.val = value;
    }
}

const gs1 = new GameStage("test1");
const gs2 = new GameStage("test2");

const arr = [gs1, gs2];

console.log(arr[0].val);