// 로그인 가입 관련된 작업
// 카카오,네이버,구글

import { Strategy } from './auth';

// 로그인 정보
export interface AuthProps {
    email : string
    password : string
};

// 인증 결과값 보여주는 메소드
interface AuthenticateOnResponse {
    success : boolean
    message? : string
};

// 검증에 대한 메소드
// credentials - AuthProps 인터페이스를 가져오고
// authenticate() - AuthenticateOnResponse 메소드 인터페이스를 가져오고
interface Authenticator {
    authenticate(credentials : AuthProps) : Promise<AuthenticateOnResponse>
};

// 이메일 로그인 로직 클래스
export class EmailAuthenticator implements Authenticator {
    async authenticate(credentials: AuthProps): Promise<AuthenticateOnResponse> {
        // 요청과 응답에 대한 코드가 들어가는 부분 - 아직 로직이 없음
        console.log("email login");
        return {success : true};
    };
};

// 카카오 로그인 로직 클래스
export class KakaoAuthenticator implements Authenticator {
    async authenticate(credentials: AuthProps): Promise<AuthenticateOnResponse> {
        // 카카오 로직 들어가는 부분
        console.log("kakao login");
        return {success : true};
    };
};

// 로그인에 대한 서비스를 처리할 클래스 구조
export interface LoginService {
    // 로그인 로직에 대한 함수 구조
    // type : 어떤 로그인 서비스를 이용하는지
    login(type : string, credentials : AuthProps) : Promise<AuthenticateOnResponse>
};

// 로그인 클래스에 로그인 서비스 구조를 상속받고
export class Login implements LoginService{
    constructor(private readonly strategy : Strategy){

    }

    async login(type: "email" | "kakao", credentials: AuthProps): Promise<AuthenticateOnResponse> {
        // strategy : 로그인 로직이 들어있는 객체
        // 여기에서 어떤 로그인 로직으로 처리할지 type 으로 구분
        const result = await this.strategy[type].authenticate(credentials);
        return result;
    }
}