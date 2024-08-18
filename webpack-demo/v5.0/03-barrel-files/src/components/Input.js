
// src/components/Input.js
class SingleTon { // 这里是重点
    constructor(type) {
        console.log("SingleTon" + type);
    }
}

export const instanceToKeep = new SingleTon('keep');

export const instance = /*#__PURE__*/ new SingleTon(); 

export const Input = () => {
    console.log("input");
};
