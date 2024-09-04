import {compressSync, decompressSync, strFromU8, strToU8} from "fflate";

function uint8ArrayToBase64(uint8Array) {
    let binaryString = '';
    const len = uint8Array.byteLength;
    for (let i = 0; i < len; i++) {
        binaryString += String.fromCharCode(uint8Array[i]);
    }
    return btoa(binaryString);
}

function base64ToUint8Array(base64) {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const uint8Array = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        uint8Array[i] = binaryString.charCodeAt(i);
    }
    return uint8Array;
}

function compressAndEncodeObject(obj) {
    const jsonString = JSON.stringify(obj);
    const uint8Array = strToU8(jsonString);
    const compressed = compressSync(uint8Array);
    const base64String = uint8ArrayToBase64(compressed);
    return base64String;
}

function decodeAndDecompressString(base64String) {
    const compressed = base64ToUint8Array(base64String);
    const decompressed = decompressSync(compressed);
    const jsonString = strFromU8(decompressed);
    const obj = JSON.parse(jsonString);
    return obj;
}

export default {
    compressAndEncodeObject,
    decodeAndDecompressString
}

