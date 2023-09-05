const merkle = require("merkle");

// merkle tree : 데이터의 암호화 구조가 트리 형태

// 머클트리
const data = ["A","B","C","D","E"];
// 데이터의 무결성 검증에 사용되는 트리 구조
// 블록의 필수 요소이고 데이터들을 해시화해서 더한 후 해시화 반복
// 트리처럼 뻗어서 마지막 루트 해시갑을 구해서 사용한다.
// 데이터의 갯수가 홀수 일때에는, 마지막 값을 하나 더 추가해서 해시한다.
// 머클루트를 처리할 때 홀수일 경우, 마지막 데이터를 한번더 해시해서 사용한다.

const merkleTree = merkle("sha256").sync(data);
// root 메소드 : 머클루트를 뽑아주는 메소드
const Root = merkleTree.root();
console.log(Root);

// 확인방법
// A 해시화 B 해시화 AB
// C 해시화 D 해시화 CD
// E 해시화 E 해시화 EE

// AB 해시화 CD 해시화 ABCD
// EE 해시화 EE 해시화 EEEE

// ABCD 해시화 EEEE 해시화 ABCDEEEE