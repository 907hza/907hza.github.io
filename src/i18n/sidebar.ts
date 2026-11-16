import { type LanguageKeys } from '@/i18n/ui'

// 사이드바 구조
// - 키 이름 = src/pages/ko/ 아래의 파일(폴더) 이름 (kebab-case)
// - 값 = 사이드바에 보이는 제목
// - 섹션(접히는 메뉴)은 { sectionName, sectionItems } 형태로 추가
//
// 예) Spring 섹션에 'spring-mvc' 글을 추가하려면
//   타입:  'spring': { sectionName: string; sectionItems: { 'spring-mvc': string } }
//   값:    'spring': { sectionName: 'Spring', sectionItems: { 'spring-mvc': 'Spring MVC 정리' } }
//   파일:  src/pages/ko/spring/spring-mvc.mdx

type SidebarSchema = {
  [Lang in LanguageKeys]: {
    introduction: string
  }
}

export const SIDEBAR: SidebarSchema = {
  ko: {
    introduction: '블로그 소개',
  },
}
