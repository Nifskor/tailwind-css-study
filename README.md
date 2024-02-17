# tailwind-css-study
tailwind를 공부하고 기록한 레포입니다

Lesson 11 apply directive
1.원래에는 
<pre>
div class="bg-white rounded overflow-hidden shadow-md relative"
</pre>
이러한 내용을 넣어야했지만 

2. 이걸 조금더 간결하게 
src/styles.css에다가 @apply를 이용하여

<pre> 

.card{
    @apply bg-white rounded overflow-hidden shadow-md relative;
}

.badge{
    @apply bg-emerald-50 text-gray-400 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2;
}
</pre>

이런식으로 간결화 시키면 재사용성이 올라감


