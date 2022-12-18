//定义项目的类型声明文件

/**
 * 接口返回的数据类型
 */
interface ResponseResolut<T>{
    code:number
    message:string
    type:"success" | "error"
    data:T[]
}
/**
 * 首页返回的数据类型
 */
interface ScreenHomeSource {
    path:string;
    title:string;
    content:string;
    downloads:number;
    isSquare:boolean;
    pages:string[];
    created_at:string;
    updated_at:string;
    [Key:string]:any
}