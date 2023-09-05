import { UserParams } from "../interfaces/login.request";
import { AuthenticateOnResponse, Authenticator } from "./Authenticator";

// 로그인 검증 객체 구조 상속
// 이메일 로그인 클래스 정의
export class EmailAuthenticator implements Authenticator {
    async authenticate(credentials: UserParams): Promise<AuthenticateOnResponse> {
        // 이메일 로그인 로직
        console.log("email login success");
        return {success : true}
    }
};