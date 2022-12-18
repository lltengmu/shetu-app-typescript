//用于定义所有页面需要用到的类型


interface HomeResourceData {
    path: string;
    title: string;
    content: string;
    downloads: number;
    isSquare: boolean;
    pages:string[];
    created_at: string;
    updated_at: string;
}
interface HomeState<T> {
    LeftQueueCards: T[]
    RightQueueCards: T[]
}