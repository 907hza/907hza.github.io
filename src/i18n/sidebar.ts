import { type LanguageKeys } from '@/i18n/ui'

// 사이드바 구조
// - 키 이름 = src/pages/ko/ 아래의 파일(폴더) 이름 (kebab-case)
// - 값 = 사이드바에 보이는 제목
// - 섹션(접히는 메뉴)은 { sectionName, sectionItems } 형태
//
// 예) 3단계에 'airflow-backfill' 글을 추가하려면
//   1. 파일: src/pages/ko/pipeline/airflow-backfill.mdx
//   2. 아래 타입의 pipeline.sectionItems 에  'airflow-backfill': string  추가
//   3. 아래 값의 pipeline.sectionItems 에    'airflow-backfill': 'Airflow backfill 정리'  추가

type StageSection<Items extends string> = {
  sectionName: string
  sectionItems: { [K in Items]: string }
}

type SidebarSchema = {
  [Lang in LanguageKeys]: {
    introduction: string
    roadmap: string
    'cs-basics': StageSection<'overview'>
    'programming-sql': StageSection<'overview'>
    'db-modeling': StageSection<'overview'>
    pipeline: StageSection<'overview'>
    'distributed-streaming': StageSection<'overview'>
    'cloud-dataops': StageSection<'overview'>
    'lakehouse-governance': StageSection<'overview'>
    'ai-data': StageSection<'overview'>
  }
}

export const SIDEBAR: SidebarSchema = {
  ko: {
    introduction: '블로그 소개',
    roadmap: '데이터 엔지니어 로드맵 (2026)',
    'cs-basics': {
      sectionName: '0. CS 기초',
      sectionItems: { overview: '개요 · 체크리스트' },
    },
    'programming-sql': {
      sectionName: '1. 프로그래밍 · SQL · Linux · Git',
      sectionItems: { overview: '개요 · 체크리스트' },
    },
    'db-modeling': {
      sectionName: '2. DB와 데이터 모델링',
      sectionItems: { overview: '개요 · 체크리스트' },
    },
    pipeline: {
      sectionName: '3. 파이프라인 · 오케스트레이션',
      sectionItems: { overview: '개요 · 체크리스트' },
    },
    'distributed-streaming': {
      sectionName: '4. 분산처리 · 스트리밍',
      sectionItems: { overview: '개요 · 체크리스트' },
    },
    'cloud-dataops': {
      sectionName: '5. 클라우드 · 컨테이너 · DataOps',
      sectionItems: { overview: '개요 · 체크리스트' },
    },
    'lakehouse-governance': {
      sectionName: '6. 레이크하우스 · 품질 · 거버넌스',
      sectionItems: { overview: '개요 · 체크리스트' },
    },
    'ai-data': {
      sectionName: '7. AI 데이터 엔지니어링',
      sectionItems: { overview: '개요 · 체크리스트' },
    },
  },
}
