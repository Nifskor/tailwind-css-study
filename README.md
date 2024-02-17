# tailwind-css-study
tailwind를 공부하고 기록한 레포입니다

Lesson 14 Icons 
1. 아이콘은 heroicons.dev 사이트가 좋음 (SVG 형태)
2. 해당 아이콘을 그냥 복사해서 붙여넣으면 너무 크기때문에
3. 원하는 위치에 넣은다음
4. class 를 넣어주고 w-4등을 통해 크기를 조정함
5. 그리고 inline-block을 통하면 아이콘 아래 엔터를 쳐서 
구분되게 되여짐 

아래는 예제 코드
```
<div class="badge">

<svg class="w-5 inline-block" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">

<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>

</svg>

<span>25mins </span>

 </div>
                ```
