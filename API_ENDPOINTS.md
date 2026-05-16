# heartmap — FastAPI Endpoint Reference

This document lists all API endpoint calls used by the heartmap frontend, including request inputs and required headers.

---

## Base URL

```
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
```

Set this environment variable to point to your FastAPI backend.

---

## Authentication

### POST `/auth/login`
Sign in an existing user and receive a JWT access token.

**Headers:**
```
Content-Type: application/json
```

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```

**Expected Response:**
```json
{
  "access_token": "<jwt_token>",
  "token_type": "bearer",
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "name": "User Name",
    "created_at": "2024-01-01T00:00:00Z"
  }
}
```

**Error Response (401):**
```json
{
  "detail": "Invalid credentials"
}
```

---

### POST `/auth/register`
Register a new user account.

**Headers:**
```
Content-Type: application/json
```

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "yourpassword",
  "name": "User Name"
}
```

**Expected Response:**
```json
{
  "access_token": "<jwt_token>",
  "token_type": "bearer",
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "name": "User Name",
    "created_at": "2024-01-01T00:00:00Z"
  }
}
```

**Error Response (400):**
```json
{
  "detail": "Email already registered"
}
```

---

## User Dashboard

### GET `/users/me/quiz-results`
Fetch all quiz results for the authenticated user.

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Expected Response:**
```json
{
  "results": [
    {
      "id": "uuid",
      "quiz_id": "attachment-style",
      "quiz_title": "Attachment Style",
      "completed_at": "2024-05-10T14:30:00Z",
      "result_summary": "You have a secure attachment style...",
      "persona": "The Steady Anchor",
      "score": 87,
      "tags": ["Secure", "Empathetic", "Consistent"]
    }
  ]
}
```

> **Note:** The frontend also accepts a flat array `[]` directly (without the `results` wrapper).

---

### GET `/users/me/stats`
Fetch summary statistics for the authenticated user's quiz activity.

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Expected Response:**
```json
{
  "total_completed": 5,
  "last_active": "2024-05-15T10:00:00Z",
  "favorite_category": "Self-awareness"
}
```

---

## Quiz Submission (Suggested Endpoints)

These endpoints are not yet wired in the frontend but are recommended for saving quiz results after completion.

### POST `/quizzes/{quiz_id}/submit`
Submit answers for a completed quiz and receive results.

**Headers:**
```
Authorization: Bearer <jwt_token>
Content-Type: application/json
```

**Request Body:**
```json
{
  "answers": [
    { "question_id": "q-001", "selected_option": "q001-a" },
    { "question_id": "q-002", "selected_option": "q002-c" }
  ]
}
```

**Expected Response:**
```json
{
  "result_id": "uuid",
  "quiz_id": "who-are-you-in-love",
  "quiz_title": "Who are you in love?",
  "persona": "The Steady Anchor",
  "result_summary": "You are grounded, consistent, and deeply empathetic...",
  "score": 87,
  "tags": ["Secure", "Empathetic"],
  "completed_at": "2024-05-16T04:25:00Z"
}
```

---

## Token Storage

The frontend stores the JWT token in `localStorage` under the key `heartmap_token` and the user object under `heartmap_user`.

All protected API calls include the token in the `Authorization` header:
```
Authorization: Bearer <heartmap_token>
```

---

## Navigation Flow

```
/ (root)
  └── Redirects to → /sign-up-login-screen

/sign-up-login-screen
  └── On successful auth → /home

/home (protected)
  ├── Results Dashboard (fetches /users/me/quiz-results + /users/me/stats)
  ├── Quick Quiz CTA → /quiz-screen
  └── All quiz section links → /quiz/[slug], /partner-compatibility-screen
```
