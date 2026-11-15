사이트: https://jinseok-individual.github.io/football-brief-lab/

# 국내외 축구 이슈 브리핑 — 주경야독 2026 개인 학습 프로젝트

사이트 주소는 맨 윗줄과 같습니다.
데이터: 공개 기사의 제목과 원문 링크만 사용(본문 복사 없음) · 출처: Google News 피드(검색어: 축구 K리그, 축구 대표팀, football premier league), BBC Sport 피드 · 이용 조건: 개인·비상업 학습 목적에 한해 사용, 출처 언론사 표시 필수, 기사 저작권은 각 언론사에 있음 · 기준일 2026-11-15(화면에 표시)

## 무엇을 하는가
사용자 역할 · 할 수 있는 일 하나 · 하지 않는 일

## 진행 — Sprint와 Release
- Sprint 계획·회고: Issues → 라벨 `sprint`
- 일정: Issues → Milestones (Sprint 1~8 · 달력 한 주씩)
- 판(버전): Releases (E2E 선언 Release = v1.0.0)

## 처음 보는 사람이 여는 법
(회차 4·8에서 실제로 해 본 뒤 고칩니다 — 작동하지 않는 순서를 완성된 안내처럼 남기지 않습니다)
1. 이 저장소를 fork 합니다
2. Settings → Pages → Source: GitHub Actions
3. Actions → check-deploy.yml → Run workflow (데이터 첫 갱신·배포)
4. 1~2분 뒤 https://<내 계정>.github.io/<저장소>/ 를 엽니다

## 자료 한 건 바꾸고 배포하기
변경 → PR → 검사 → 병합 → Actions → Pages 확인 (실행해 본 명령·경로만 적음)

## 문제가 생기면
빈 입력·잘못된 자료 / 자동 검사·배포 실패 / 이전 판으로 돌아가기 → RUNBOOK.md (회차 7)

## 자료와 한계
모의 AI 출력/실제 호출 구분 · 미완 기능 · 이후 관리: 소유자 본인 / 코치 지원 종료 2026-12-31
- 확인 필요: Google News 피드는 개인·비상업 이용만 허락하는 약관이 있어, 공개 사이트에 써도 되는지 코치에게 문의함(답변 전). 문제가 되면 국내 기사를 각 언론사 자체 RSS로 바꿈(Sprint 2 예정).
- 한계: 수집은 수동(기준일 2026-11-15), 국내 기사 링크는 Google 주소를 거쳐 원문으로 이동, 일부 제목에 실제 선수·감독 이름이 나옴(언론 제목 그대로 인용).

## 증거 길잡이
요구 이슈(회차 1) / 대표 PR / 검사(Actions) / Sprint 이슈와 LEARNING-LOG / Release / 인계 기록(HANDOVER)

---
### 이 시작 틀을 받은 뒤 처음 5분 (다 하면 이 절은 지워도 됩니다)
먼저: 공개 화면(프로필 이름 칸 · 저장소 이름·설명 · README · 사이트 · 이슈 · 커밋)에는 실명과 회사명을 쓰지 않습니다. 프로필 Name 칸은 비우거나 별칭으로 두고, Settings → Emails에서 'Keep my email addresses private'를 켜 두면 커밋에 메일이 남지 않습니다.
1. Issues → Labels → New label: `sprint`, `customer` 두 개를 만듭니다(나머지 `enhancement`·`bug`는 기본 라벨입니다).
2. Issues → Milestones → New milestone: `Sprint 1`~`Sprint 8`(마감일 11/15 · 11/22 · 11/29 · 12/6 · 12/13 · 12/20 · 12/27 · 12/31).
3. Settings → Collaborators → Add people: 코치 2인을 초대합니다(공지에 적힌 메일 또는 GitHub 사용자 이름).
4. Issues → New issue → 「Sprint 계획·회고」로 Sprint 1 이슈를 엽니다.
이슈 양식(Issue forms)이 보이지 않으면 GitHub 화면이 바뀐 것일 수 있습니다. 빈 이슈에 양식의 칸 이름을 그대로 적어도 됩니다.
