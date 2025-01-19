declare type ActionFn = (...args: any[]) => any
declare type DeboundceFn = (callback: (...args: any[]) => any, wait: number) => any
declare type ThrottleFn = (callback: (...args: any[]) => any, wait: number) => any