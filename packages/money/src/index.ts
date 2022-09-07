/** 人民币符号 */
export const cnyUnit = "¥";

/**
 * 千位分隔
 */
export const thousandsFormat = (input: number | string): string => {
  return Number(input || 0).toLocaleString();
};

/**
 * 尝试转数字
 */
const tryConvertToNumber = <T>(value: T, defaultOnFailure?: number): number | T => {
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
const formatNumber = (num: number, fixedDigits?: number): string => {
  if (fixedDigits === undefined) {
    return `${num}`;
  }
  return num.toFixed(fixedDigits);
};

/**
 * 分 转 元
 */
export const fenToYuan = (money: number | undefined, fixedDigits?: number) => {
  const yuanBased = Math.floor(tryConvertToNumber(money || 0, 0)) / 100;
  return formatNumber(yuanBased, fixedDigits);
};

/**
 * 分 转 元 千分位
 */
export const fenToYuanAndThousands = (money: number | undefined, fixedDigits?: number) => {
  return thousandsFormat(fenToYuan(money, fixedDigits));
};

/** 元 转 分 */
export const yuanToFen = (money: number | undefined): number => {
  return (Number(money) || 0) * 100;
};

/** 格式化后千分位隔 */
export const formatInt = (n: string) => {
  return n.replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
};
