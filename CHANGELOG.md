# Changelog - ADHD-Optimized Study App Rebuild

## [2.0.0] - 2026-06-07

### 🎉 Complete Rebuild - ADHD-Optimized Features

#### ✨ Added
- **Working Streak Counter** - Now actually tracks daily study sessions (was broken before)
- **XP & Level System** - Earn XP for every answer, level up with confetti celebrations
- **Dopamine-Hit Animations**:
  - Correct answer: green flash + XP popup
  - Wrong answer: shake animation + still earn XP
  - Level up: full-screen celebration with 100 confetti particles
  - Streak fire icon pulses/animates
- **Multiple Study Modes**:
  - 📝 Quiz Mode (classic MC with spaced repetition)
  - 🎴 Flashcard Mode (active recall, flip to reveal)
  - ⏱️ Timer Challenge Mode (60s per question, adds urgency)
  - 🎯 Weak Areas Mode (targets lowest-scoring topics)
- **Spaced Repetition Algorithm (SM-2)**:
  - Questions adapt based on difficulty rating
  - Hard questions return sooner, easy questions later
  - Tracks interval, repetitions, ease factor per question
- **Enhanced Progress Tracking**:
  - Per-course stats (answered, accuracy, progress %)
  - Live session scoring
  - Detailed results screen with performance-based emojis
- **Timer Challenge Mode**:
  - 60-second countdown per question
  - Turns red when <10s remaining
  - Auto-submits if time expires
  - Creates urgency for focus

#### 🔧 Fixed
- Streak counter now properly updates daily
- LocalStorage state management completely rewritten
- Progress bars now accurately reflect completion
- Course stats calculate correctly

#### 🎨 Improved
- Modern dark theme with high contrast
- Smooth animations throughout
- Mobile-responsive design
- Visual feedback for every interaction
- Header bar with live stats (streak, XP, level)

#### 📊 Technical
- State persists in localStorage (`wgu_fnp_study_data_v2`)
- Spaced repetition metadata stored per question
- XP system: +25 correct, +5 wrong, +50 streak bonus
- Level up every 500 XP
- Questions randomized with SR priority

### 🎯 For Brandon
**Focus Areas:**
- D118 (189 questions) - 1 OA attempt left ⚠️
- Weak topics: MSK 18%, Endocrine/MH 20%, ENT 17%
- Deadline: Aug 1, 2026 (55 days)
- Goal: 30+ day streak, Level 10+, 80%+ D118 accuracy

---

## [1.0.0] - Previous Version
- Basic multiple choice quiz
- 266 questions across D118, D119, D120
- Visual aids (prenatal timeline, decision trees)
- Streak counter (non-functional)
- No gamification or progress tracking
