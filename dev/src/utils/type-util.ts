/**
 * 类型工具类
 * @file type-utils.ts
 * @author linqi.zhong
 */

/**
 * 判断值是不是函数
 * @param v {any} - 任意值
 * @returns {boolean} 判断结果的布尔值表示
 * @date 2025/01/19 15:15:20
 * @example
 * isFunction(function(){}) // -> true
 * isFunction(1) // -> false
 */
export const isFunction = (v: any): boolean => {
  return v && (typeof v === 'function' || Object.prototype.toString.call(v) === '[object Function]')
}

/**
 * 判断值是不是数字
 * @param v {any} - 任意值
 * @returns {boolean} 判断结果的布尔值表示
 * @date 2025/01/19 15:16:31
 * @example
 * isNumber(function(){})) // -> false
 * isNumber(1)// -> true
 * isNumber(1) // -> false
 */
export const isNumber = (v: any): boolean => {
  return typeof v === 'number' && !isNaN(v);
}


/**
 * 判断值是否为未定义
 * @param v {any} - 任意值
 * @returns {boolean} 判断结果的布尔值表示
 * @date 2025/01/19 15:17:01
 */
export const isUndefined = (v: any): boolean => {
  return v === void 0
}