// <> : 제네릭 타입; 매개변수처럼 원하는 타입을 사용할 수 있게끔 해줌
export interface Result<R> {
    isError : false;
    value : R;
}

export interface Failure<E> {
    isError : true;
    value : E
}

// <> 안에 값이 두개 -> 매개변수가 2개인 셈
export type Failable<R,E> = Result<R> | Failure<E>;

// Failable<undefined, string>
// two possible options
// {isError : false, value : undefined}
// {isError : true, value : string}