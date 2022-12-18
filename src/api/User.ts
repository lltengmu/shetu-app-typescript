import Http from '../plugins/axios'

type data = Record<string,any>
class User {
    constructor(){}
    public login() {
        return Http.request<data>({
            url:"login",
            method:'post'
        })
    }
}

export default new User();