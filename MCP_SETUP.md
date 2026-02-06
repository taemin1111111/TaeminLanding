# Figma MCP 설정 가이드

## Cursor에서 Figma MCP 설정하기

### 방법 1: Cursor 설정에서 직접 추가

1. **Cursor 설정 열기**
   - `Ctrl + ,` 또는 `File` → `Preferences` → `Settings`

2. **MCP 서버 추가**
   - 설정에서 "MCP" 또는 "Model Context Protocol" 검색
   - MCP 서버 목록에 Figma 추가

3. **Figma API 키 설정**
   - Figma 개발자 대시보드에서 API 토큰 생성: https://www.figma.com/developers/api#access-tokens
   - 환경 변수로 설정하거나 Cursor 설정에 직접 입력

### 방법 2: 환경 변수 설정

Windows PowerShell에서:
```powershell
[System.Environment]::SetEnvironmentVariable("FIGMA_API_KEY", "your-api-key-here", "User")
```

### 방법 3: 프로젝트별 설정

프로젝트 루트에 `.env` 파일 생성:
```
FIGMA_API_KEY=your-api-key-here
```

## Figma API 토큰 생성 방법

1. Figma 웹사이트 로그인
2. Settings → Personal Access Tokens
3. "Generate new token" 클릭
4. 토큰 이름 입력 후 생성
5. 생성된 토큰 복사 (한 번만 표시됨)

## 참고 자료

- Figma API 문서: https://www.figma.com/developers/api
- MCP 공식 문서: https://modelcontextprotocol.io
