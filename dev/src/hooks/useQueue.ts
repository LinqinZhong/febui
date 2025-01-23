
const QUEUE_INFO_MAP = new Map<string, {
    // 排队期约
    p: Promise<any>,
    // 队中项目个数
    n: number
}>()

/**
 * 事件入队
 * @param name - 队列名称
 * @param handler - 出队事件处理器
 * @author linqin.zhong
 * @date 2025/01/23 18:35
 */
export const enqueue = (
    name: string,
    handler: (
        // 增量信息
        preInfo: any,
        // 放行函数
        next: (preInfo: any) => void
    ) => void
) => {
    const pre = QUEUE_INFO_MAP.get(name)
    if (!pre) {

        const promise = new Promise((next) => {
            handler(null, next)
        })
        QUEUE_INFO_MAP.set(name, {
            p: promise,
            n: 1
        })
    } else {
        pre.n++
        pre.p = pre.p.then((preInfo) => {
            pre.n--
            // 队列只剩下一个项时清空队列
            if (pre.n === 1) QUEUE_INFO_MAP.delete(name)
            return new Promise((next) => {
                handler(preInfo, next)
            })
        })
    }
}