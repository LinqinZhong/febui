// 提示消息类型
declare type FToastType = 'info'    // 信息
    | 'success' // 成功
    | 'fail' // 失败
    | 'error' // 错误
    | 'warn' // 警告

// 提示消息信息
declare type ToastInfo = {
    // 消息ID
    id?: number,
    // 消息类型
    type?: FToastType = 'default',
    // 消息是否死亡
    died?: boolean,
    // 消息内容
    message: string
}

// 提示消息API配置
declare type ToastApiConfig = {
    // 消息类型
    type?: FToastType = 'info',
    // 消息时长
    duration?: number = 1500
}