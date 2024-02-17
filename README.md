# tailwind-css-study
tailwind를 공부하고 기록한 레포입니다

Lesson 13 buttons<br>
1. btn은 사용성이 많기 때문에 @apply를 이용해 버튼css 사용성을 높임 

 <pre>
.btn{
    @apply rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider;
}
</pre>
3. 위와 같이 만든다음 
<pre>
 a href="#" class="btn text-primary border-primary md:border-2" > Login
a href="#" class='ml-3 btn text-primary border-primary md:border-2'> Sign up
</pre>
위 형태로 추가하여줌 