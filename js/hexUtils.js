module.exports = {
    toHex(v, format="0000", prefix="0x") {
        let hexValue = v.toString(16);
        hexValue = format.substr(0, format.length - hexValue.length) + hexValue;
        return `${prefix}${hexValue}`;
    },
    toHex2(v, prefix="0x") {
        return this.toHex(v, "00", prefix);
    },
    toHex4(v, prefix="0x") {
        return this.toHex(v, "0000", prefix);
    },
    tohex8(v, prefix="0x") {
        return this.toHex(v, "00000000", prefix);
    },
    byteArrayToHex(arr, prefix="") {
        return arr.map(b => this.toHex2(b, prefix)).join(" ");
    }
};