export type LanguageKeys = keyof typeof LANGUAGES

type LanguageObject<T> = {
  [Lang in LanguageKeys]: T
}

export const LANGUAGES = {
  ko: '한국어',
} as const

export type LandingPageObj = {
  description: string
  getStartedBtnText: string
  githubBtnText: string
}

export const LANDING_PAGE: LanguageObject<LandingPageObj> = {
  ko: {
    description: '공부한 내용을 기록하는 블로그',
    getStartedBtnText: '글 보러 가기',
    githubBtnText: 'GitHub',
  },
} as const

export const NAV: LanguageObject<{
  documentation: string
}> = {
  ko: {
    documentation: '글 목록',
  },
} as const

export const ON_THIS_PAGE: LanguageObject<{
  onThisPage: string
  scrollToTop: string
}> = {
  ko: {
    onThisPage: '목차',
    scrollToTop: '맨 위로',
  },
}

export const MISC: LanguageObject<{
  editThisPage: string
  previous: string
  next: string
}> = {
  ko: {
    editThisPage: '이 페이지 수정하기',
    next: '다음 글',
    previous: '이전 글',
  },
}

export const SEARCH: LanguageObject<{
  search: string
  keepTyping: string
  noResults: string
  results: string
}> = {
  ko: {
    search: '검색',
    keepTyping: '계속 입력해 주세요...',
    noResults: '검색 결과가 없어요',
    results: '개의 결과',
  },
}
