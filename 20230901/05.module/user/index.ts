import UserService from "./service/user.service";
import Strategy from "./strategy/strategy";
import { GoogleAuthenticator } from "./strategy/google.strategy";
import { KakaoAuthenticator } from "./strategy/kakao.strategy";
import { EmailAuthenticator } from "./strategy/email.strategy";
import UserController from "./user.controller";

// 전략 패턴 객체 생성
const strategy = new Strategy();
// { strategy : {}, set(), login() }

strategy.set("email", new EmailAuthenticator());
// { strategy : {EmailAuthenticator{ authenticate } }, set(), login() }

strategy.set("kakao", new KakaoAuthenticator());
// { strategy : {EmailAuthenticator{ authenticate }, KakaoAuthenticator{ authenticate } }, set(), login() }

strategy.set("google", new GoogleAuthenticator());
// { strategy : {EmailAuthenticator{ authenticate }, KakaoAuthenticator{ authenticate }, GoogleAuthenticator{ authenticate } }, set(), login() }

// 완성된 객체를 유저 서비스 클래스 생성자의 매개변수로 넣는다
const userService = new UserService(strategy);

// 유저 로그인 로직 클래스 생성 및 매개변수로 유저 서비스 로직 객체 생성자 함수에 전달
const userController = new UserController(userService);

userController.signin("kakao");