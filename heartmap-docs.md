# HeartMap — Mental Health & Relationship Tracking Platform

## Overview

HeartMap is a comprehensive mental health and relationship tracking application designed to help users monitor their emotional well-being, track relationship patterns, and gain insights into their personal growth over time.

---

## Core Features

### 🧠 Emotion Tracking
- Daily mood logging with visual calendar views
- Emotion intensity tracking and pattern recognition
- Trigger and thought association analysis
- Weekly and monthly emotional trend reports

### 💕 Relationship Management
- Contact-based relationship tracking
- Last interaction timestamp monitoring
- Relationship quality assessments
- Support network mapping
- Communication frequency analytics

### 🌱 Self-Reflection Tools
- Journaling with mood correlation
- Personal insight generation
- Growth pattern visualization
- Reflection prompt system

### 📱 Platform Support
- Web application (React + Node.js)
- Mobile-responsive design
- Offline-first architecture
- Local-first data storage (IndexedDB)

---

## Technology Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **React Query** for data fetching
- **Lucide React** for iconography
- **framer-motion** for animations

### Backend
- **Node.js** with Express
- **TypeScript** for type safety
- **Prisma ORM** (configured for SQLite with Postgres adapter)
- **bcrypt** for password hashing
- **express-session** for authentication

### Data
- **SQLite** for local storage
- **IndexedDB** for offline-first support
- **JSON** file exports for data portability

---

## Architecture

### Directory Structure

```
src/
├── components/          # React components
├── hooks/               # Custom React hooks
├── lib/                 # Utilities and configurations
├── server/              # API endpoints and logic
├── store/               # State management
└── types/               # TypeScript definitions
```

### Data Models

#### User
```typescript
{
  id: string
  email: string
  password: string
  firstName: string
  lastName: string
  createdAt: Date
}
```

#### Relationship
```typescript
{
  id: string
  userId: string
  contactName: string
  contactEmail?: string
  contactPhone?: string
  contactType: string
  lastInteraction: string
  relationshipQuality: number
  createdAt: Date
  updatedAt: Date
}
```

#### LogEntry (Emotion/Activity Log)
```typescript
{
  id: string
  userId: string
  timestamp: string
  mood: {
    value: number
    text: string
  }
  emotions?: string[]
  intensity?: {
    positive: number
    negative: number
  }
  thoughts?: string[]
  triggers?: string[]
  gratitudeItems?: string[]
  createdAt: Date
}
```

---

## Setup Guide

### Prerequisites
- Node.js 18+
- npm or pnpm
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd heartmap
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment:**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Access the app at:** `http://localhost:3000`

### Environment Variables

```env
# Server
NODE_ENV=development
PORT=3000
API_URL=http://localhost:3000

# Database
DB_URI=file:./data/db.sqlite
DB_ADAPTER=sqlite

# Authentication
JWT_SECRET=your-secret-key-here
JWT_EXPIRES_IN=7d

# Features (comma-separated)
FEATURES=emotion_tracking,relationship_tracking,self_reflection
```

---

## API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/login` | User login |
| POST | `/auth/register` | User registration |
| GET | `/auth/me` | Get current user info |

### Emotions
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/emotions` | Get all emotion entries |
| GET | `/emotions/summary` | Get summary statistics |
| POST | `/emotions` | Create new entry |
| PATCH | `/emotions/:id` | Update entry |
| DELETE | `/emotions/:id` | Delete entry |

### Relationships
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/relationships` | Get all relationships |
| GET | `/relationships/summary` | Get relationship summaries |
| POST | `/relationships` | Create new relationship |
| PATCH | `/relationships/:id` | Update relationship |
| DELETE | `/relationships/:id` | Delete relationship |

### User
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/user/profile` | Get profile |
| PATCH | `/user/profile` | Update profile |
| DELETE | `/user` | Delete account |

### Data Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/export/data` | Export all data as JSON |
| POST | `/import/data` | Import JSON data |
| GET | `/settings` | Get application settings |
| PATCH | `/settings` | Update settings |

---

## Usage Guide

### For Users

**Getting Started**
1. Create an account with your email
2. Complete your profile information
3. Explore the dashboard

**Tracking Your Day**
1. Click "Log Today" to record your current mood
2. Select your dominant emotion(s)
3. Add thoughts or triggers if applicable
4. Record gratitudes

**Relationship Check-in**
1. Navigate to the Relationships section
2. Select a contact to check in on
3. Update the last interaction timestamp
4. Rate relationship quality

**Viewing Insights**
1. Check weekly reports for trends
2. Review relationship summaries
3. Export your data anytime

### For Developers

**Adding New Features**
1. Review existing component patterns
2. Check TypeScript types in `src/types/`
3. Follow the server-client data flow
4. Update documentation

**Customizing**
- Modify Tailwind config in `tailwind.config.js`
- Adjust theme colors in `lib/theme.ts`
- Extend components in `src/components/`

**Performance**
- Use React Query cache for data
- Implement lazy loading for heavy components
- Optimize IndexedDB queries

---

## Security

- Passwords are hashed with **bcrypt**
- JWT tokens expire after **7 days**
- Session-based authentication
- Input validation on all forms
- No sensitive data in client code

---

## Data Privacy

- All data stored locally first
- Optional server sync
- Easy data export
- No third-party analytics
- GDPR-friendly architecture

---

## Troubleshooting

### Cannot connect to database
- Check `.env` — `DB_URI` must be set
- Verify directory permissions
- Re-run migration: `npm run db:migrate`

### Build errors
- Clear `node_modules` and reinstall
- Run `npm run lint` to check for issues
- Ensure all TypeScript types are installed

### Login not working
- Check `JWT_SECRET` is set in `.env`
- Verify user exists in database
- Clear browser cookies/cache

---

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests
5. Submit a pull request

---

## License

MIT License — see `LICENSE` file for details.

---

*Last updated: January 2026 · Project version: 1.0.0*
