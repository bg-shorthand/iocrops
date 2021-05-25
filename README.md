# IOCROPS CHART TASK

- 아이오크롭스 프론트엔드 과제
- 필수 차트 기능 구현
  1. 시계열 라인 차트 구현
  2. 차트 아래에, 항목명들이 나열되어 있는 테이블 구현
  - 항목별로 차트에 표시할 지 여부를 선택하는 체크박스가 있어야 함
  - 항목별로 색상, 항목명, 평균값, 최소값, 최대값, 편차 (최대-최소) 이 표시되어야 함
  - 항목별로 오른쪽 또는 왼쪽 y축 기준으로 볼 것인지 선택할 수 있어야 함
  - 항목별로 색상을 수정할 수 있어야 함 (팔레트 색상은 임의로 선택하시면 됩니다)
  3. 차트의 데이터를 csv 형식으로 다운로드 받을 수 있어야 함

---

## 스택

- Front-end: HTML5, CSS3, SASS, JAVASCRIPT, REACT.
- Build Tool: CRA.
- State Management: REDUX.
- Library: HIGHCHARTS, COLOR-PICKER.
- Version Management: GIT, GITHUB

---

## 디렉토리 구조

```
src
  - App
  - assets
  - constant
  - modules
  - redux
  - Components
  - Containers
  - Pages
```

---

## 주요 기능 구현

1. 시계열 라인 차트 구현


    - highcharts 라이브러리를 사용하여 구현하였습니다.
    - data-1.json의 더미 데이터를 활용하여 options 객체를 만들었습니다.
    - options 객체를 토대로 라인 차트를 구현하였습니다.
    - options 객체는 리덕스로 상태 관리하여 전역에서 사용, 조작할 수 있도록 하였습니다.
      - options 상태 객체의 series 프로퍼티를 사용하여 테이블을 구현했기 때문에, 리덕스로 관리해야 겠다고 판단했습니다.
      - 테이블 구현에는 options 상태 전체가 아니라 series만 사용되기 때문에 다른 상태를 가져야 겠다고도 생각했으나,
      - 라인 차트와 테이블이 각각 다른 상태를 가지게 되면 관리가 더 어려워 질 것으로 판단했습니다.
      - 이에 따라 series 프로퍼티에는 highcharts의 옵션으로 필요한 name, data, color 외에,
      - yAxis, checked 등의 값을 함께 두었습니다.
    - 라이브러리의 기본적인 기능만 사용하고, 적극적으로 다루지 못한 점이 아쉽습니다.

2. 항목 명이 나열 되어 있는 테이블 구현


    - options 상태 객체의 series 프로퍼티를 활용하여 테이블을 구현하였습니다.
    - 시멘틱 마크업을 고려하여 table, thead, tbody 등의 태그를 사용하였습니다.
    - options.series의 checked 프로퍼티로 라인 차트에 표시 여부를 관리하였습니다.
    - 항목 별 색상의 초기값은 랜덤으로 만들어 차트와 연결하였습니다.(src/modules/createRandomColor.js)
    - 평균값, 최소값, 최대값, 편차값을 생성하는 함수는 모듈화하였습니다.
    - options.series의 yAxis 프로퍼티로 왼쪽 혹은 오른쪽 y축을 사용하도록 관리하였습니다.
    - 항목별 색상 관리로는 color-picker 라이브러리를 사용하였습니다.(해당 값은 options.series의 color로 관리하였습니다.)

3. 차트의 데이터를 csv형식으로 다운받을 수 있도록 하였습니다.

---

## 경험

1. 항목 표시 변경시 options 상태가 변하는 오류


    - 마지막까지 해결하지 못한 오류입니다. 리덕스로 관리하는 상태의 불변성을 유지하는데 놓친 부분이 있나 찾았는데, 대부분의 시간을 이 문제에 썼는데도 찾지 못 했습니다. options.series에서 checked인 요소만 라인 차트에 표시하기 위해 filter 메서드를 사용하여 전달하는 사이 문제가 생긴 것 같습니다.

2. 라이브러리 사용


    - highcharts, color-picker 둘 모두 처음 접해보는 라이브러리로 사용하는 데 시간이 많이 걸렸습니다. 라이브러리가 가진 더 많은 기능을 적극적으로 활용하지 못한 점이 아쉽습니다.

3. csv 형식의 자료


    - csv 형식의 자료 역시 처음 다루는 형태였습니다. 익히기 어렵지는 않았으나, 처음 다뤄본다는 점에서 재밌었습니다.

---
