# tailwind-css-study
tailwind를 공부하고 기록한 레포입니다

Lesson 5  외부 폰트 추가 
1. googlefont 에서 내가 원하는 폰트 선택
2. 폰트를 선택한 다음 embed에서 @import형태로 해당 포트 추출 
3. src/styles.css에 추가 
<pre>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@900&family=Protest+Strike&display=swap')
</pre>
4. 추가할 폰트를 
<pre>
fontFamily: {
        body: ['Protest Strike']
      }
      </pre>

      위 형태로 tailwind.config.js에 추가해주면 변경되어짐


