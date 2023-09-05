import { UserParams } from "../interfaces/login.request";
import { AuthenticateOnResponse, Authenticator } from "./Authenticator";

// 로그인 검증 객체 구조 상속
// 구글 로그인 클래스 정의
export class GoogleAuthenticator implements Authenticator {
    async authenticate(credentials: UserParams): Promise<AuthenticateOnResponse> {
        // 구글 로그인 로직 작성 부분
        console.log(credentials);
        console.log("google login success");
        // 반환값의 객체는 AuthenticateOnResponse 인터페이스로 정의 해놓은것
        return {success : true};
    }
};