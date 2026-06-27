# SynthV-script-workflow

🇰🇷 한국어 | [🇺🇸 English](README.en.md)

---

Dreamtonics **Synthesizer V Studio Pro 2**에서 사용할 수 있는 작업 자동화 스크립트 모음입니다.

음악 작업 시 타 DAW에서 편하게 사용하던 기능 중 SynthV에는 없거나 방식이 달랐던 기능들을 직접 만들었습니다. 같은 작업 흐름을 원하는 다른 사용자들도 자유롭게 활용할 수 있도록 오픈소스로 공개합니다.

---

## Scripts

### 노트 편집

| 파일명 | 기능 |
|---|---|
| `removeOverlaps.js` | 선택된 노트의 겹침 제거 |
| `splitNote.js` | playhead 위치 기준으로 노트 분할 |
| `expandShortNotes.js` | 선택된 노트를 반박자 크기로 확장 |
| `autoFillNoteGaps.js` | 선택된 노트 간 묵음 자동 채우기 |

### 피치 이동

| 파일명 | 기능 |
|---|---|
| `shiftPitchUp.js` | 선택된 노트 반음 위로 이동 |
| `shiftPitchDown.js` | 선택된 노트 반음 아래로 이동 |

### Playhead 이동

| 파일명 | 기능 |
|---|---|
| `movePlayheadForward1Beat.js` | playhead를 한 박 앞으로 이동 |
| `movePlayheadBackward1Beat.js` | playhead를 한 박 뒤로 이동 |

### 노트 선택

| 파일명 | 기능 |
|---|---|
| `selectNextNote.js` | 다음 노트 선택 + 화면 자동 스크롤 |
| `selectPrevNote.js` | 이전 노트 선택 + 화면 자동 스크롤 |

---

## 설치 방법

스크립트 파일은 `scripts/` 폴더 안에 있습니다.

1. 이 저장소를 다운로드하거나 클론합니다. 
2. Synthesizer V Studio Pro 2를 실행합니다.
3. 상단 메뉴 **스크립트** → **스크립트 폴더 열기**로 스크립트 폴더를 엽니다.
4. `scripts/` 폴더 안의 `.js` 파일들을 해당 폴더에 복사합니다.
5. **Scripts** → **Rescan Scripts**로 새로고침하면 스크립트 목록에 표시됩니다.

> **참고:** 스크립트를 처음 추가하거나 업데이트한 경우 Synthesizer V를 재시작해야 정상적으로 동작합니다. 스크립트 실행 중 오류가 발생하는 경우에도 재시작 후 다시 시도해보세요.

---

## 사용 방법

각 스크립트는 **스크립트** 메뉴에서 직접 실행하거나, 단축키를 등록하여 사용할 수 있습니다.

단축키는 개인 작업 환경에 맞게 직접 설정하는 것을 권장합니다.

---

## 라이선스

[MIT License](LICENSE)

---

## 크레딧

**저자:** [sowinblue](https://github.com/sowinblue)

기능 기획과 설계는 저자가 직접 수행했으며, 코드 작성 과정에서 AI 도구(Claude, Anthropic)를 보조적으로 활용했습니다.
작성된 코드는 직접 실행·검증하며 테스트와 디버깅을 진행했습니다.