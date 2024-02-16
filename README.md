# tailwind-css-study
tailwind를 공부하고 기록한 레포입니다

Lesson 2 study 내용 
1. pycham에서 설치하고 운영했을시 live-server가 제대로 작동하지 않음 
2. ("`<script src="https://cdn.tailwindcss.com">`") 해당 내용을 넣어야 정상작동
3. vscode plugin live-server 설치
4. 초기 설정은 npm install tailwind-css 
5. npm init 실시
6. package.json ->  형태로 작성
<pre>
{
  "name": "프로젝트 이름",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build-css": "tailwindcss build src/styles.css -o public/styles.css"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
    "dependencies": {
    "tailwindcss": "^3.4.1"
  }
}
</pre>
7. 문서는 꼭 해당 링크 참조
> https://v2.tailwindcss.com/docs/font-size

<hr>


