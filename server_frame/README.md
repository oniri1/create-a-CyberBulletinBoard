# 기존기능

| Path   | Method | Request         | Response                        |
| ------ | ------ | --------------- | ------------------------------- |
| /      | GET    | Null            | 게시판 목록 웹페이지            |
| /write | GET    | Null            | 게시판 글쓰기 웹페이지          |
| /board | GET    | Null            | 게시글 웹페이지                 |
| /      | POST   | { page, count } | [ { id, title, createdAt }, … ] |
| /write | POST   | { title, text } | redirect /                      |
| /board | POST   | { id }          | { id, title, text }             |

# 추가기능

| Path        | Method | Request | Response                               |
| ----------- | ------ | ------- | -------------------------------------- |
| /number     | GET    | Null    | 포스트 리스트(users)의 (.length/4)     |
| /obj/?value | GET    | Null    | value 값에 해당하는 Id를 가진 오브젝트 |
| /list       | GET    | Null    | 포스트 리스트(users)의 오브젝트        |
