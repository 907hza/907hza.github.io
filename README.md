# Hae jeong's Blog

공부한 내용을 기록하는 블로그 — https://907hza.github.io

[Stellar](https://github.com/ekmas/stellar) (Astro) 테마 기반

## 로컬 실행

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 배포 전 빌드 확인
```

## 글 추가하는 법

1. `src/pages/ko/` 아래에 `.mdx` 파일을 만든다 (예: `src/pages/ko/spring/spring-mvc.mdx`)

   ```mdx
   ---
   layout: '@/layouts/Markdown.astro'
   title: Spring MVC 정리
   description: 요청이 처리되는 흐름
   ---

   ## 본문 제목

   내용...
   ```

2. `src/i18n/sidebar.ts`에 같은 경로로 사이드바 항목을 추가한다 (파일 안 주석 참고)
