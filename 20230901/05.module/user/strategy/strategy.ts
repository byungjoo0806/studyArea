import { UserParams } from "../interfaces/login.request";
import { AuthenticateOnResponse, Authenticator } from "./Authenticator";

// 전략 패턴 객체 구조 정의
interface IStrategy {
    // key 문자열로 지정
    // key가 동적으로 추가될 수 있고
    [key : string] : Authenticator
};

// 서비스 로직들을 가질 객체 구조 정의
class Strategy {
    private strategy : IStrategy = {}

    // 서비스 로직을 객체에 추가할 함수
    public set(key : string, authenticate : Authenticator){
        // key 값을 받고 서비스 로직 추가
        this.strategy[key] = authenticate;
    };

    public async login(type: string, credentials : UserParams) : Promise<AuthenticateOnResponse>{
        const result = await this.strategy[type].authenticate(credentials);
        return result;
    };
};

export default Strategy;