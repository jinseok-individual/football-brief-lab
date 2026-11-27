| 입력 | 기대 처리 | 이유 |
|---|---|---|
| "서울 블루 FC, 홈 개막전 역전승"과 같은 제목 뒤에 공백이 한 칸 더 붙은 것 (synthetic/1, 2) | 중복 (한 건만 남김) | 비교 전에 앞뒤 공백을 제거하므로 같은 제목이 된다 |
| "Spain test will reveal if Blue Lions have learned their lessons"와 "spain test will reveal if blue lions have learned their lessons" (synthetic/3, 4) | 중복 (한 건만 남김) | 비교 전에 영문을 소문자로 바꾸므로 같은 제목이 된다 |
| "부산 마린스, 3경기 연속 무실점 수비 호평" 날짜 2026-11-18과 2026-11-20 (synthetic/5, 6) | 11-20 것만 표시, 11-18 것은 중복 | 같은 제목은 같은 기사이고, 날짜가 더 최근인 것을 남긴다 |
| 제목이 빈칸, 날짜 2026-11-19 (synthetic/7) | 제외 | 제목은 필수 칸인데 비어 있다 |
| "대전 그린 유나이티드, 신인 공격수 영입 발표" 날짜 2026/11/3 (synthetic/8) | 제외 | 날짜 형식이 YYYY-MM-DD가 아니다 |
| "Estrella SC announce new stadium plan" 날짜 2027-01-01 (synthetic/9) | 제외 | 기준일(2026-11-22)보다 미래라서 범위 밖이다 |
| 2026-11-22, 해외인 "AC Milan monitoring Man Utd's Fernandes - Sunday's gossip"와 "Argentina midfielder Paredes collapses during TV interview" | "AC Milan..."이 먼저, "Argentina..."가 나중에 표시 | 날짜와 구분이 같으면 3차 기준인 제목 알파벳순으로 정한다 |
| 합성 기사, 날짜 2026-11-15 (딱 7일 전) | 표시 | 규칙은 "7일을 넘어 지남"을 제외하는데, 딱 7일은 넘은 게 아니다 |
| "Why Arsenal are behind in race for Champions League spots" 날짜 2026-11-22 (기준일 당일) | 표시 | 기준일보다 미래도 아니고 7일 넘게 지나지도 않았다 |
| (예시) 제목과 날짜가 모두 빈칸인 줄 | 제외 (제외 1건으로 한 번만 셈) | 필수 칸이 빠졌고, 이유가 둘이어도 제외는 한 번으로만 센다 |
