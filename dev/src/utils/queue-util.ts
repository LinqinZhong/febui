/**
 * 创建任务队列队列
 * @author linqin.zhong
 * @date 2025/01/24 17:43
 * @example
 * const current = Date.now()
 * createTaskQueue().enqueue((pre,next) => {
 *      setTimeout(() => {
 *          console.log('a', Date.now() - current)
 *          next('hello')
 *      },1000)
 *  }).enqueue((pre,next) => {
 *      setTimeout(() => {
 *          console.log('b', Date.now() - current)
 *          console.log(pre)
 *          next(pre)
 *      },1000)
 *  })
 *  // > a 1000
 *  // > b 2000
 *  // > hello
 */
export const createTaskQueue = () => {
    // 生成队列
    const queue: {
        // 排队期约
        p: Promise<any> | null,
        // 队中任务个数
        n: number
    } = {
        p: null,
        n: 0
    }
    return {
        /**
         * 入队
         * @param handler - 排队函数
         */
        enqueue(
            handler: (
                // 增量信息
                preInfo: any,
                // 放行函数
                next: (preInfo: any) => void
            ) => void
        ) {
            if (!queue.p) {
                queue.p = new Promise((next) => {
                    handler(null, next)
                })

            } else {
                queue.n++
                queue.p = queue.p.then((preInfo) => {
                    queue.n--
                    // 队列无任务时清除记录的最后一个期约
                    if (queue.n === 0) queue.p = null
                    return new Promise((next) => {
                        handler(preInfo, next)
                    })
                })
            }
            return queue
        }
    }
}