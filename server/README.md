# Backend Server

Contact Form 데이터를 MySQL에 저장하는 Node.js Express 서버입니다.

## 설치 방법

1. 서버 폴더로 이동:
```bash
cd server
```

2. 패키지 설치:
```bash
npm install
```

3. 환경 변수 설정:
`.env` 파일을 생성하고 다음 내용을 입력하세요:

```env
# MySQL Database Configuration
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=sys

# Server Configuration
PORT=3001
```

**주의:** `DB_PASSWORD`와 `DB_NAME`을 실제 MySQL 설정에 맞게 수정하세요!

## 실행 방법

### 개발 모드 (자동 재시작):
```bash
npm run dev
```

### 프로덕션 모드:
```bash
npm start
```

서버가 실행되면 `http://localhost:3001`에서 접근할 수 있습니다.

## API 엔드포인트

### POST /api/contact
Contact Form 데이터를 MySQL에 저장합니다.

**Request Body:**
```json
{
  "name": "홍길동",
  "email": "test@example.com",
  "phone": "010-1234-5678",
  "message": "문의 내용입니다."
}
```

**Response (성공):**
```json
{
  "success": true,
  "message": "문의가 성공적으로 전송되었습니다!",
  "id": 1
}
```

**Response (실패):**
```json
{
  "success": false,
  "message": "에러 메시지"
}
```

### GET /api/contact
저장된 메시지 목록을 조회합니다 (최대 100개).

### GET /api/health
서버 상태 확인

## MySQL 테이블 구조

```sql
CREATE TABLE contact_messages (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
