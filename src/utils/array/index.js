import { cloneDeep } from 'loadsh';

/**
 * lixy
 * 递归数组
 * @param arrs 数组
 * @param returnCb 每一项的cb
 * @param options
 * @returns {*}
 */
export function recursion(arrs, returnCb, options = {}) {
  options = { children: 'children', cloneDeep: true, ...options };

  if (options.cloneDeep) {
    arrs = cloneDeep(arrs);
  }
  iterationFun(arrs, arrs, null);

  function iterationFun(params = [], parentNode, index) {
    if (params instanceof Array) {
      params.forEach((item, itemIndex) => {
        iterationFun(item, params, itemIndex);
      });
    } else if (params[options.children] && params[options.children] instanceof Array) {
      iterationFun(params[options.children], params[options.children]);
      returnCb(params, parentNode, index);
    } else {
      returnCb(params, parentNode, index);
    }
  }

  return arrs;
}
