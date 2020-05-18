# TechInterview

<img width="300"  src="./front/public/logoCenterBlue.jpg"/>




| Require               | Description     |
| --------------------- | --------------- |
| [Node.js](nodejs.org) | 10.16 LTS       |
| [npm]()               | Recommend 6.9.0 |



## Motivation

면접 준비를 위해 "클로저" 라는 주제로 좋은 포스트 글들을 구글에서 찾아 해매 다니던 중...

![image](https://user-images.githubusercontent.com/42205606/81608350-1a9be280-9411-11ea-8374-c01c852ea7c6.png)

...4,910,000개?......(심지어 클로저라는 영화도 검색결과에 함께 나온다.) :scream:

이렇게 수많은 결과 안에서 운 좋게 여러 번 선택 후  정리가 잘 된 글을 찾아서 나의 머리를 이해시켰다고 치자.

하지만..나는 한번 읽으면 잘 잊어버리기 때문에 분명 나중에 또 구글에 검색한다.:innocent:

그러면 이런 결과를 볼 수 있다.

![image](https://user-images.githubusercontent.com/42205606/81609185-64d19380-9412-11ea-9494-cbefb0795f2d.png)

...네?..지난번에 분명 나를 이해시켜준 좋은 글이 있었는데..뭐 였지..?..

다시 지난번 그 블로그를 찾으면, 이제는 잊지않기 위해 나도 머리를 쓴다. (즐겨찾기에 추가 해놓기!! ) :sparkles::thumbsup:

하지만, 이제는 즐겨찾기도 너무 많아져서 즐겨찾기 안에서도 숨박꼭질을 하며 또 찾아야 한다..이렇게 된 이상 즐겨찾기는 더 이상  즐겨 찾는 곳이 아니 되었다...:scream_cat:

그래서, 이를 해결하기 위해 취업 준비 중 개인 프로젝트를 시작하게 되었다.

목표는 아래와 같다.

1. 특정 주제를 검색하면 검증된 글만 제공하며 10개 이상의 글은 나오지 않는다.
2. 즐겨찾기 기능이 있어야한다.
3. 이동시간에 이용하는 경우가 많으니, 반응형이 되야한다.

프로젝트 시작! :computer:



## Usage

#### Install

```bash
$ npm install
```

#### Build project

```bash
$ npm build
```

#### Start project

```bash
$ npm start
```



## surport broswer

* Chrome



## surport device

* mobile
  * 320px
  * 375px
  * 425px
* tablet
  * 768px
* laptop
  * 1024px
  * 1440px
* Desktop
  * 1920px



## Tech/framework used

* React : 16.13.0
* webpack: 4.42.0
* next: 8.1.0
* immer: 6.0.3
* antd: 3.26.13
* redux: 4.0.5
* redux-saga: 1.1.3
* styled-components: 4.4.1



## Features

* 즐겨찾기(좋아요) 기능 :heartbeat:
* 검색 기능 :mag_right:
* 유명 블로거 팔로우 기능 (팔로우, 언팔로우) :eyes:
* 댓글 기능 (조회,수정,삭제) :speech_balloon:



## 랜더링 최적화

* 랜더링 최적화를 고민하면서 적용했습니다. 아직 구현하지 못한 부분이 더 많습니다 : ) 앞으로 더 노력해서 개선해나갈 예정입니다. 특히 불필요한 랜더링의 주요인으로 입력Form은 컴포넌트로 따로 분리해서 적용하고자 했습니다.

![screencast 2020-05-12 05-03-08](https://user-images.githubusercontent.com/42205606/81606451-17ebbe00-940e-11ea-8d94-5f1e90218efc.gif)



![screencast 2020-05-12 05-08-01](https://user-images.githubusercontent.com/42205606/81606824-af511100-940e-11ea-912c-f7b43d5ebffb.gif)







## Code Example

* immer.js

  * immer 적용 전

    ```js
    case LIKE_POST_SUCCESS: {
          const postIndex = state.mainPosts.findIndex(
            v => v.id === action.data.postId
          );
          const post = state.mainPosts[postIndex];
          const Likers = [...post.Likers, { id: action.data.userId }];
          const mainPosts = [...state.mainPosts];
          mainPosts[postIndex] = { ...post, Likers };
          return {
            ...state,
            isLikingPost: false,
            mainPosts
          };
        }
    ```

  * immer 적용 후 (가독성 향상)

    ```js
    case LIKE_POST_SUCCESS: {
            const postIndex = draft.mainPosts.findIndex(
              v => v.id === action.data.postId
            );
            draft.mainPosts[postIndex].Likers.push({ id: action.data.userId });
            draft.isLikingPost = false;
            break;
          }
    ```

* Rudux-saga

  * 리덕스 action의 동기적 특성을 비동기적으로 사용

    ```js
    function followUserAPI(userId) {
      return axios.post(`/user/${userId}/follow`, {}, { withCredentials: true });
    }
    function* followUser(action) {
      try {
        const result = yield call(followUserAPI, action.data);
        yield put({
          type: FOLLOW_USER_SUCCESS,
          data: result.data
        });
      } catch (e) {
        console.error(e);
        yield put({
          type: FOLLOW_USER_FAILURE,
          error: e
        });
      }
    }
    function* watchFollowUser() {
      yield takeLatest(FOLLOW_USER_REQUEST, followUser);
    }
    
    export default function* userSaga() {
      yield all([
        fork(watchFollowUser)
      ]);
    }
    ```

  



## References

http://techinterview.kr/



## License

```
MIT
```

