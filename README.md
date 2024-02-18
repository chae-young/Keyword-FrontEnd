# KeyWord

<img src="https://github.com/ZB-Keyword/Keyword-FrontEnd/assets/28029685/2a9e3055-a649-47fc-ab9c-1dac19190e95">
약속의 시작부터 끝까지,

모든 서비스를 하나로 합쳐 편리하게 일정을 관리할 수 있게 도와줄,

저희는 **Project_Keyword** 입니다.

- [팀 노션](https://proud-thief-ae8.notion.site/KeyWord-1adab0d7097643e2b58e62032a1a629c?pvs=4)
- [API 명세서](https://proud-thief-ae8.notion.site/API-b3ba853e06f24fb69470efa80b5a228e?pvs=4)
- [FE 컨벤션](https://proud-thief-ae8.notion.site/Convention-7134c159bbf44a75a9e54b7c35065071?pvs=4)
- [FE 스크럼](https://proud-thief-ae8.notion.site/Daily-Scrum-fccb65980123402dbbe67a1817a987d0?pvs=4)
- [FE KanbanBoard](https://proud-thief-ae8.notion.site/f1b46ec7633b46cb805250d4fda52c4d?v=dfce6d04d32a46988df3580bb2c513f3&pvs=4)
- [FE 트러블슈팅](https://proud-thief-ae8.notion.site/33a4aa7907e740efbbbaf6c158fe53bf?v=0e02e3125c7045afa995f3243f941643&pvs=4)

</br>

## 목차

## [1.프로젝트 기간](#프로젝트-기간)

## [2.주요 기능](#주요-기능)

## [3.FE 구현 과정](#fe-구현-과정)

## [4.트러블 슈팅](#트러블-슈팅)

## [5.아키텍처](#아키텍처)

</br>
</br>

## 프로젝트 기간

🚩2023.12.15 ~ 2024.01.25
</br>
</br>

- 1주차: 프로젝트 기획, 와이어프레임 제작
- 2주차: front-end init setting, 공통 컴포넌트 UI 생성, 회원 서비스 mock API 연동
- 3주차: UI 구현, 일정/친구 mock API 연동
- 4주차: 채팅 기능 구현, 일정/친구 mock API 연동
- 5주차: 백&프론트 연동 및 리팩토링 오류 버그 수정
- 6주차: 백&프론트 연동 및 리팩토링 오류 버그 수정

</br>
</br>

## 주요 기능

|                                                  이메일 로그인                                                  |                                               소셜 로그인(네이버)                                               |                                                일정등록/일정조회                                                |
| :-------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/ZB-Keyword/Keyword-FrontEnd/assets/28029685/6673644b-c203-473e-90d0-d476eac39437"> | <img src="https://github.com/ZB-Keyword/Keyword-FrontEnd/assets/28029685/ffd23726-07de-400e-b399-a2dac8ca948d"> | <img src="https://github.com/ZB-Keyword/Keyword-FrontEnd/assets/28029685/3ef99a74-df0f-4f80-8076-4f3ecafb67a5"> |
|                                        이메일 계정으로 로그인이 가능해요                                        |                                        네이버 아이디로 로그인이 가능해요                                        |                         일정(제목,내용,내 친구,시간,장소)을 등록하고 조회 할 수 있어요                          |

|                                                일정수정/일정취소                                                |                                                일정목록/일정상세                                                |                                                      채팅                                                       |
| :-------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/ZB-Keyword/Keyword-FrontEnd/assets/28029685/385f11e0-f54f-4dba-9bd8-49e017267d5d"> | <img src="https://github.com/ZB-Keyword/Keyword-FrontEnd/assets/28029685/3ef99a74-df0f-4f80-8076-4f3ecafb67a5"> | <img src="https://github.com/ZB-Keyword/Keyword-FrontEnd/assets/28029685/cc40cf1a-e74a-48bd-8f53-f5cd053cd70d"> |
|                          일정(부분 수정)을 수정하고 주최자만 일정을 취소 할 수 있어요                           |                                      홈 화면에서 일정을 조회 할 수 있어요                                       |                                    일정에 등록된 친구들 끼리 채팅이 가능해요                                    |

|                                                친구검색/친구요청                                                |                                                친구수락/친구삭제                                                |                                                   프로필 변경                                                   |
| :-------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/ZB-Keyword/Keyword-FrontEnd/assets/28029685/61499050-b590-43d1-a129-812218022eb0"> | <img src="https://github.com/ZB-Keyword/Keyword-FrontEnd/assets/28029685/11905f84-5674-44ba-b33a-4af500574859"> | <img src="https://github.com/ZB-Keyword/Keyword-FrontEnd/assets/28029685/d625b4c1-ace3-4729-abd4-826bde289106"> |
|                                    친구를 검색하고 친구 요청을 할 수 있어요                                     |       내 친구 목록/내 친구 요청 에서 </br>내 친구들, 친구 요청 수락/거절, 요청한 친구를 확인 할 수 있어요       |                                         프로필 사진을 변경할 수 있어요                                          |

|                                                로그아웃/회원탈퇴                                                |                                                    회원가입                                                     |                                                          알림                                                           |
| :-------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/ZB-Keyword/Keyword-FrontEnd/assets/28029685/d7c8daba-3804-48b8-b307-b8f248c3fc23"> | <img src="https://github.com/ZB-Keyword/Keyword-FrontEnd/assets/28029685/a7b12583-265b-47b1-958c-bdb4548d5c74"> | <img src="https://github.com/chae-young/weather_zip/assets/28029685/0fafea16-0b8b-4191-bc91-ad87f3e6c759" width="400"/> |
|                                        로그아웃/회원탈퇴를 할 수 있어요                                         |                                             회원가입을 할 수 있어요                                             |                                            실시간으로 알림을 받을 수 있어요                                             |

</br>
</br>

## FE 구현 과정

### 1. axios interceptors를 활용한 JWT 로그인 유지 구현

1. 로그인 구현
   - jwt 토큰기반으로 로그인 구현
   - 로그인시 access token은 localStorage에 refresh token은 cookie에 저장
   - localStorage는 XSS 공격에 취약. cookie는 CSRF 공격에 취약하지만 httponly와 secure 옵션으로 보안 강화 가능
   - 이러한 점을 이용해 토큰 저장 분리
2. axios interceptors를 활용해 로그인 유지  
   인터셉터는 "then" 또는 "catch"로 처리되기 전에 요청이나 응답을 가로챌 수 있다.  
   서버에 요청시 HTTP Authorization 요청 헤더에 토큰을 넣어줘야함. 토큰 만료시 다시 재발급을 해야한다. 이러한 로직을 전역적으로 사용하기위해 인터셉터 사용.  
   [자세한 설명은 블로그에..☺️ ](https://chaeyoung2.tistory.com/134)

### 2. UX향상을 위해 낙관적 업데이트 적용

<img src="https://github.com/chae-young/weather_zip/assets/28029685/ba3ae8f4-6676-4885-9651-08e110d5c2db" width="200">

우리 프로젝트에 낙관적 업데이트를 적용할 만한 곳이 있을까? 생각했다. 대표적인 예로 좋아요 처럼 유저들이 액션을 취하면 바로 반응을 해줘야 할만한 UI가 딱 하나 있었다.  
_친구요청_ 이다.  
친구요청 버튼을 클릭하면 버튼이 disabled 처리 되면서 요청됨으로 바뀌어야 한다.  
이때 react-query에서 제공하는 **Optimistic Updates**를 사용했다.

```js
const {
  data: IsFriendAdd,
  mutate: friendAddIsMutate,
  isError: friendAddIsError,
  isSuccess: friendAddIsSuccess
} = useMutation({
  mutationKey: ['friendAdd', memberId],
  mutationFn: () => responsAPI(memberId),
  onMutate: async reqMemberId => {
    // 발신 취소
    await queryClient.cancelQueries({ queryKey: ['friendAdd', reqMemberId] });
    // 현재 정보 저장
    const prevMemberId = queryClient.getQueriesData({
      queryKey: ['friendAdd', reqMemberId]
    });
    // 비동기전 예상 결과를 클라이언트에 반영
    queryClient.setQueryData(['friendAdd', reqMemberId], true);
    // 롤백
    return { prevMemberId };
  },
  onError: (_, reqMemberId, context) => {
    toastError('에러가 발생했습니다. 잠시후에 다시 시도해주세요');
    queryClient.setQueryData(['friendAdd', reqMemberId], context?.prevMemberId);
  },
  onSettled: () => {
    queryClient.invalidateQueries({ queryKey: ['friendList'] });
  }
});
```

- onMutate는 mutate함수 시작되기 직전 실행된다.
- mutate 발신을 취소하고 롤백은 대비해 현재 쿼리 정보를 저장한다.
- 비동기가 실행되기전에 예상 결과를 클라이언트에 반영 한다.
- 에러가 발생하면 저장해놨던 정보로 다시 롤백해준다.

### 3. 캐싱 전략

Tanstack-query에서는 query key를 기반으로 쿼리 캐싱을 관리.

```js
useQuery({
  queryKey: ['myProfile', userState.email],
  queryFn: () => fetchAPI(),
  staleTime: Infinity
});
```

- 쿼리키는 쿼리함수의 의존성 역할. 의존성이 변경되면 쿼리가 재실행된다.
- 쿼리키는 배열 형태로 표현된다.
- 쿼리키에 해당하는 쿼리들이 독립적으로 데이터를 캐시한다.

> 현재 프로젝트에서 유저의 액션이 있을경우 data가 변경되는 경우가 대부분이다. 그렇다면 어떻게 효율적으로 data를 관리할수 있을까?

- staletime을 infinity로 설정.
- 유저의 어떠한 액션이 있을 경우 해당 data의 쿼리키를 무효화(invalidQueries) 한다.
- data가 stale한 상태로 변경
- 서버에서 data를 다시 받아온다.

**---> 불필요한 API 호출을 최소화!!**

### 4. 중복 컴포넌트는 재사용 하자

친구 목록이 들어가는 페이지가 여럿 페이지 되는데 친구 목록 UI가 버튼 컬러, 텍스트만 다를뿐 똑같다. 같은 컴포넌트내 로직을 짜서 중복 컴포넌트를 최소화 시키려고 했다.  
FriendsItem 에는 버튼 액션에 대한 props를 받아 조건문에 따라 버튼을 다르게 보여주고자 했다.

```js
const FriendsList = ({
  lists,
  FetchNextPage,
  del,
  reqCheck,
  hasNextPage
}: FriendsListProps) => {
  const { lastElement } = useInfinite(FetchNextPage, hasNextPage);
  return (
    <ul className="pt-5">
      {lists.pages.map(page =>
        lists.pages[0].length ? (
          page.map(list => (
            <FiendsItem
              key={list.memberId}
              memberId={list.memberId}
              name={list.name}
              email={list.email}
              status={list.status}
              imageUrl={list.imageUrl}
              del={del}
              reqCheck={reqCheck}
            />
          ))
        ) : (
          <NoResultText text="친구가 없습니다." key="noText" />
        )
      )}

      {lastElement()}
    </ul>
  );
};

```

```js
const FriendsItem = ({
  memberId,
  name,
  email,
  imageUrl,
  status,
  del,
  reqCheck
}: FriendsItemProps) => {
  const friendStatus = status !== NOT_FRIEND;

... 로직 생략

  return (
    <li className="flex items-start mb-4">
     ... 로직 생략

      {status && status !== ME && (
        <button
          type="button"
          disabled={friendStatus || IsFriendAdd}
          onClick={handleFriendAdd}
          className={`${
            friendStatus || IsFriendAdd
              ? 'bg-gray3 text-gray1'
              : 'bg-primary text-white flex-shrink-0'
          }  rounded-xl  pt-2 py-1 px-3`}
        >
          {status === NOT_FRIEND && '친구추가'}
          {status === FRIEND && '우린친구😆'}
          {status === FRIEND_REQUEST && '요청중'}
          {status === FRIEND_REQUESTED && '요청됨'}
        </button>
      )}
      {del && (
        <RightButton
          handleClick={() => handleFriendDel(memberId)}
          text="삭제"
        />
      )}
      {reqCheck && (
        <RightButton
          handleClick={() => handleRequestCheck(name)}
          text="확인하기"
        />
      )}
    </li>
  );
};
```

**아쉬운점**  
친구 목록이 팝업창에도 들어가는 경우가 있어서 UI만 따로 공통 컴포넌트로 빼고 이벤트 처리는 따로 컴포넌트를 만들었으면 좋지 않았을까 라는 생각이 들었다.  
이러한 점은 생각을 못해서 팝업창에 들어가는 친구목록은 따로 구현을 했다.  
친구 목록에 체크박스 까지 들어가다 보니 코드가 방대해지는 걸 경험한뒤 애초에 컴포넌트 설계를 잘 했더라면 쉽게 로직을 구현하지 않았을까 라는 아쉬운점이 남았다.

<img src="https://github.com/chae-young/weather_zip/assets/28029685/1755bca1-4a65-4f98-a0c1-bfe9f5c6bf32" width="200">  
<img src="https://github.com/chae-young/weather_zip/assets/28029685/9935b51d-5f52-41b1-9e06-1185ab97b5df" width="200">

</br>
</br>

## 트러블 슈팅

- [React-query + MSW 같이 사용하기](https://proud-thief-ae8.notion.site/React-query-MSW-3237b78e158644b68d0f8079fd78dedc?pvs=4)
- [React Query는 Custom Hook으로 사용하자](https://proud-thief-ae8.notion.site/React-Query-Custom-Hook-7736a912ff654abeb1013e398a9cd165?pvs=4)
- [refreshToken이 전역으로 쿠키가 저장되지 않는 이슈](https://proud-thief-ae8.notion.site/refreshToken-67ed9013a0db4f7ea8f60564b61308ea?pvs=4)
- [Toast 컴포넌트를 직접 만들어서 사용했더니 생기는 이슈 → react-toastify 라이브러리로 전환](https://proud-thief-ae8.notion.site/Toast-react-toastify-8f27f01dc6ab41b8bbc59770d442b78e?pvs=4)
- [pakage.json 종속성 오류!!](https://proud-thief-ae8.notion.site/pakage-json-81b2896cc9464e778a4828a991986766?pvs=4)
- [github에 올라간 폴더와 로컬 폴더가 일치하지 않아 Build Error](https://proud-thief-ae8.notion.site/github-Build-Error-e34108825f4a42ac8ab7f70a60c48517?pvs=4)
- [Mixed-content(HTTP/HTTPS 호환)](https://proud-thief-ae8.notion.site/Mixed-content-HTTP-HTTPS-d56c3cba83374440a4bc5c68e74c61a4?pvs=4)
- [Code-splitting으로 JS 번들 축소하기](https://proud-thief-ae8.notion.site/Code-splitting-JS-fd27bc4c36d7407199fe545dcf536719?pvs=4)

</br>
</br>

## 아키텍처

<img src="https://github.com/ZB-Keyword/Keyword-FrontEnd/assets/28029685/7c1dd22f-4fd0-4585-99fd-551f8e838cd4">

\* FE 주요 기술 스택 선정 이유

- `MSW`: 백엔드 API 개발 전 효율적인 프론트&백엔드와의 연동을 위해 mocking 처리
- `React`: 컴포넌트 단위로 개발이 가능하여 관리가 용이. 재사용성을 높여 효율적으로 화면 구성
- `Recoil`: 간편한 보일러 플레이트.
- `Typescript`: 에러 디버깅이 쉽다. 자동완성 기능으로 빠른 개발
- `Tanstack-query`: 데이터 캐싱 처리에 용이. 인피니트 스크롤을 구현하는데 편리한 훅 제공.(현 프로젝트에 인피니트 스크롤이 여러 페이지에서 쓰이고 있음.)
- `TailwindCss`: 별도의 css 파일 필요 없음. 빠른 개발 가능
- `vite`: 빠른 빌드 속도. HMR을 제공하여 개발 시간 단축
