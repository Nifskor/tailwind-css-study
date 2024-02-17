# tailwind-css-study
tailwind를 공부하고 기록한 레포입니다

Lesson 5 study tailwind config 
1. npx tailwindcss init --full  
> 위 명령어를 입력하면 tailwind.config.js 파일이 생성되어짐 
2. 생성된 tailwind.config.js 에서 font size에 ''' mammoth: '8rem',''' 을 추가함 
3. 위내용을 추가하게 되면 새로운 글자 폰트 사이즈 및 내용을 추가할때 구성함으로써 사전에 정의된 값이아닌 내가원하는 값으로 추가할수있다는 장점 
4. 이후 tailwind-dafault.config.js로 변경 (다른이름으로 파일을 변경하고), tailwind.config.js 를 <pre> npx tailwindcss init</pre>로 만들어서 하면 다시 tailwind.config.js파일이 생성되어짐

5. 따라서 tailwind-default.config.js 기본 정책을 따라가면서 - 여기서 tailwind.config.js에서 색상이라던지 우선시 할것이 있을경우 해당 파일에서 primary를 설정해줌 
<pre>
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors:{
        primary: '#FF6363',  <--- 추가한 내용
        secondary: {
          100: '#E2E2D5', <--- 추가한 내용
          200: '#888883',  <--- 추가한 내용
        }
      }
    },
  },
  plugins: [],
}
</pre>

6. 위 내용에서 tailwind-default.config.js 경우 기본구성이 포함되어있고 기본값 역할을 수행하고, tailwind.config.js의 경우는 사용자정의를 위한 별도파일을 구성한 형태로 만들기 위해 이렇게 해둔거같음 
   -> 정확한 내용은 실습을 해보면서 타당성이 필요해보임 