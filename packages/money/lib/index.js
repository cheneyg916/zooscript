"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatInt = exports.yuanToFen = exports.fenToYuanAndThousands = exports.fenToYuan = exports.thousandsFormat = exports.cnyUnit = void 0;
/** 人民币符号 */
exports.cnyUnit = "¥";
/**
 * 千位分隔
 */
const thousandsFormat = (input) => {
    return Number(input || 0).toLocaleString();
};
exports.thousandsFormat = thousandsFormat;
/**
 * 尝试转数字
 */
const tryConvertToNumber = (value, defaultOnFailure) => {
    const number = Number(value);
    if (!Number.isNaN(number)) {
        return number;
    }
    if (defaultOnFailure !== undefined) {
        return defaultOnFailure;
    }
    return value;
};
/**
 * 格式化数字
 */
const formatNumber = (num, fixedDigits) => {
    if (fixedDigits === undefined) {
        return `${num}`;
    }
    return num.toFixed(fixedDigits);
};
/**
 * 分 转 元
 */
const fenToYuan = (money, fixedDigits) => {
    const yuanBased = Math.floor(tryConvertToNumber(money || 0, 0)) / 100;
    return formatNumber(yuanBased, fixedDigits);
};
exports.fenToYuan = fenToYuan;
/**
 * 分 转 元 千分位
 */
const fenToYuanAndThousands = (money, fixedDigits) => {
    return (0, exports.thousandsFormat)((0, exports.fenToYuan)(money, fixedDigits));
};
exports.fenToYuanAndThousands = fenToYuanAndThousands;
/** 元 转 分 */
const yuanToFen = (money) => {
    return (Number(money) || 0) * 100;
};
exports.yuanToFen = yuanToFen;
/** 格式化后千分位隔 */
const formatInt = (n) => {
    return n.replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
};
exports.formatInt = formatInt;
