export const JOB_CATEGORIES = {
  507: '비즈니스',
  508: '투자, 분석, 부동산',
  509: '건설, 시설',
  510: '고객서비스, 리테일',
  511: '디자인',
  513: '엔지니어링, 설계',
  514: '정부, 비영리',
  515: '의료, 제약, 바이오',
  517: '인사, 교육',
  518: '개발',
  521: '법률, 법집행기관',
  522: '제조, 생산',
  523: '마케팅',
  524: '미디어',
  530: '영업',
  532: '물류, 무역',
  959: '게임 제작',
  10057: 'F&B',
  all: 'All'
}

export const CATEGORY_IDS = [
  '518',
  '511',
  '523',
  '507',
  '530',
  '517',
  '510',
  'all'
]

export const DROPDOWN_ITEMS = CATEGORY_IDS.map(id => ({
  id,
  label: JOB_CATEGORIES[id]
}))

export const HEADERS = [
  ['id', '아이디'],
  ['name', '회사명'],
  ['image', '이미지'],
  ['link', '링크'],
  ['position', '포지션']
]
