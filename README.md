# TechInterview

<img width="300"  src="./front/public/logoCenterBlue.jpg"/>

| Require                              | Description                                                               |
| ------------------------------------ | ------------------------------------------------------------------------- |
| [Node.js](nodejs.org)                | 10.16 LTS                                                 |
| [npm]() | Recommend 6.9.0 |


## Motivation

개발자 면접 준비는 테크인터뷰!  

본인이 직접 면접 준비를 위해 좋은 포스트 글들을 구글에서 찾아 헤매 다니던 중...


1. 즐겨찾기가 점점 많아져서 다시 그 포스팅을 찾을 때 힘든 현상 발생
2. 구글에 "클로저" 라 검색하면 최소 수십 개의 글이 나오지만, 공부하는 시간보다 좋은 글을 찾는 시간이 더 오래 걸리는 현상 발생


"좋은 포스트들이 한 번에 모여있어서 찾아다닐 필요 없고, 즐겨찾기도 쉬운 서비스가 있으면 개발 면접 준비에 시간 절약이 되겠다."로 시작해서 개인 프로젝트 시작!



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



## surport Broswer

* Chrome



## surport Device

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

* React : 16.13.0,
* webpack: 4.42.0,
* next: 8.1.0,
* immer: 6.0.3,
* antd: 3.26.13,
* redux: 4.0.5,
* redux-saga: 1.1.3
* styled-components: 4.4.1



## Features

* 즐겨찾기(좋아요) 기능
* 검색 기능
* 유명 블로그 팔로우 기능
* 댓글 기능



## Screenshots

<img src="https://user-images.githubusercontent.com/42205606/81340408-c03a1380-90ea-11ea-927a-be3ad573828b.jpeg" width="375" height="500">





## Code Example

* immer.js

  * immer 적용 전

    ```
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

    ```
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
