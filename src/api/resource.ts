import Http from '../plugins/axios'

class renderResource {
    constructor(){}
    public getHomePageResource(){
        return Http.request<ScreenHomeSource>({
            url:'resouce/home',
            method:"get"
        })
    }
}
export default new renderResource();