import { UserParams } from "../interfaces/login.request";
import { AuthenticateOnResponse, Authenticator } from "./Authenticator";

// 검증 객체 구조 상속
// 카카오 로그인 검증 클래스 정의
export class KakaoAuthenticator implements Authenticator {
    async authenticate(credentials: UserParams): Promise<AuthenticateOnResponse> {
        // 카카오 로그인 로직
        console.log("kakao login success");
        return {success : true};
    }
};