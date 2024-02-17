# tailwind-css-study
tailwind를 공부하고 기록한 레포입니다

Lesson 8 Responsive Classes

1.사이즈에 (크기) 에 따라 자동으로 색상 및 상태가 변경되게 할수있음 
<pre>
 <a href="/" class='text-green-500 sm:text-red-500 lg:text-blue-500'>Food Ninja</a>
 </pre>
 2. 위 내용을 이용하면 처음엔 작은 사이즈이지만 화면이 커지면 글자 크기가 변경되게 만들수도있음 
 <pre>
   <a href="/" class="text-sm md:text-xl">Food Ninja</a>
   </pre>

>위와 같은 형태로도 만들수있음 

3. 아래와 같이 설정하면 가로 767px 이하가 되면 가운데로 이동하고 이상이되면 끝쪽으로 이동하는식으로 변경되어짐 
<pre>
 <div class="flex justify-center md:justify-end">
 </pre>