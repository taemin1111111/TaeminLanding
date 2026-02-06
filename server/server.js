import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// 미들웨어
app.use(cors()); // CORS 허용
app.use(express.json()); // JSON 파싱
app.use(express.urlencoded({ extended: true })); // URL 인코딩된 데이터 파싱

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Contact Form 제출 API
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // 입력 검증
    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: '모든 필드를 입력해주세요.'
      });
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: '올바른 이메일 형식이 아닙니다.'
      });
    }

    // DB에 데이터 저장
    const [result] = await pool.execute(
      `INSERT INTO contact_messages (name, email, phone, message) 
       VALUES (?, ?, ?, ?)`,
      [name, email, phone, message]
    );

    console.log('✅ 데이터 저장 성공:', result.insertId);

    res.status(201).json({
      success: true,
      message: '문의가 성공적으로 전송되었습니다!',
      id: result.insertId
    });

  } catch (error) {
    console.error('❌ 데이터 저장 실패:', error);
    res.status(500).json({
      success: false,
      message: '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
      error: error.message
    });
  }
});

// 저장된 메시지 조회 API (선택사항)
app.get('/api/contact', async (req, res) => {
  try {
    const [rows] = await pool.execute(
      'SELECT * FROM contact_messages ORDER BY created_at DESC LIMIT 100'
    );

    res.json({
      success: true,
      data: rows
    });
  } catch (error) {
    console.error('❌ 데이터 조회 실패:', error);
    res.status(500).json({
      success: false,
      message: '데이터 조회 중 오류가 발생했습니다.',
      error: error.message
    });
  }
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📧 Contact API: http://localhost:${PORT}/api/contact`);
});
