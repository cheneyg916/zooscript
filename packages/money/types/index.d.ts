/** 人民币符号 */
export declare const cnyUnit = "\u00A5";
/**
 * 千位分隔
 */
export declare const thousandsFormat: (input: number | string) => string;
/**
 * 分 转 元
 */
export declare const fenToYuan: (money: number | undefined, fixedDigits?: number) => string;
/**
 * 分 转 元 千分位
 */
export declare const fenToYuanAndThousands: (money: number | undefined, fixedDigits?: number) => string;
/** 元 转 分 */
export declare const yuanToFen: (money: number | undefined) => number;
/** 格式化后千分位隔 */
export declare const formatInt: (n: string) => string;
