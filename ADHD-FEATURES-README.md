# 🎯 WGU FNP Study App - ADHD-Optimized Features

**Live App:** https://binx-study-app.netlify.app

## 🎉 What's New - Complete ADHD-Optimized Rebuild

This is a **complete rebuild** of your study app with focus, engagement, and dopamine hits baked into every interaction. Built specifically for Brandon's ADHD brain and the high-stakes Aug 1 deadline.

---

## ✨ Core ADHD-Optimized Features

### 🔥 1. **Working Streak Counter**
- **FIXED!** Now actually tracks daily study sessions
- Resets if you miss a day (but builds back fast with streak bonus XP)
- Visual fire animation that flickers to draw your eye
- Motivating: "Don't break the chain!"

**How it works:**
- Study any mode to count for the day
- Streak increments when you study on consecutive days
- Displayed prominently in header bar: `🔥 7 day streak`

---

### ⭐ 2. **XP & Level System**
Complete gamification with instant feedback:

| Action | XP Earned |
|--------|-----------|
| Correct answer | +25 XP |
| Wrong answer | +5 XP (you still learn!) |
| 80%+ session score | +50 XP (streak bonus) |

**Levels:**
- Start at Level 1
- Every 500 XP = new level
- **Level-up modal** with confetti explosion 🎊
- Progress bar shows XP progress within current level

**Visual feedback:**
- XP gain popup floats on screen: `+25 XP`
- Header shows: `Lv 5 ⭐ 1,250 XP`
- Animated level progress bar

---

### 🎨 3. **Dopamine-Hit Feedback Animations**

Every action has **immediate visual + emotional reward**:

#### ✅ Correct Answer
- Green flash animation on choice
- Check mark appears
- `+25 XP` popup
- Positive explanation box slides in

#### ❌ Wrong Answer
- Red shake animation
- Shows correct answer in green
- Still get `+5 XP` (no punishment, only learning)
- Explanation helps you learn

#### 🎊 Level Up
- Full-screen celebration modal
- 100 confetti particles rain down
- Massive emoji (🎊)
- Pause + celebrate before continuing

#### 🔥 Streak Milestone
- Streak fire icon pulses/animates
- Bonus XP for maintaining streaks

---

### 📚 4. **Multiple Learning Modes**
Choose based on attention span and energy level:

#### 📝 **Quiz Mode** (Classic)
- Multiple choice questions
- Spaced repetition algorithm prioritizes due cards
- Perfect for systematic review

#### 🎴 **Flashcard Mode** (Active Recall)
- Click to flip cards
- Question → Answer + Explanation
- Rate difficulty: 😓 Hard | 👍 Good | 😎 Easy
- Adjusts future review timing based on your confidence

#### ⏱️ **Timer Challenge Mode** (Focus + Urgency)
- 60 seconds per question
- Timer turns RED when <10 seconds
- Creates urgency = bypasses ADHD paralysis
- Auto-submits if time runs out
- Perfect for D118 practice (you have 1 attempt left!)

#### 🎯 **Weak Areas Mode** (Targeted Practice)
- Analyzes your topic accuracy
- Automatically serves questions from lowest-scoring topics
- Focuses study time where you need it most
- **Critical for Brandon:** MSK 18%, Endocrine/MH 20%, ENT 17%

---

### 🧠 5. **Spaced Repetition Algorithm (SM-2 Inspired)**

Questions you struggle with come back **sooner**, questions you know well come back **later**.

**How it works:**
- First see a question → repeat in 1 day
- Mark "Easy" → interval increases by 2.5x
- Mark "Hard" → reset to 1 day
- System tracks:
  - `interval`: days until next review
  - `repetitions`: how many times you've seen it
  - `easeFactor`: how easy you find it (1.3-2.5)
  - `nextReview`: timestamp of when it's due

**Result:** You spend time on what you DON'T know, not what you already mastered.

---

### 📊 6. **Progress Tracking**

#### **Per Course Stats** (Home Screen)
- **D118:** 189 questions (Adult Primary Care) - ⚠️ HIGH PRIORITY
- **D119:** 40 questions (Pediatric)
- **D120:** 37 questions (Women's Health/Special Populations)

Each course card shows:
- Questions answered
- Accuracy percentage
- Progress bar (visual completion %)

#### **Live Session Stats**
During quiz:
- Question X of 20
- Progress bar
- Live score: ✓ 15 | ✗ 3

#### **Post-Session Results**
- Performance emoji: 🏆 (90%+), 🎉 (70-89%), 👍 (50-69%), 📚 (<50%)
- Percentage score with color coding
- Correct/Wrong breakdown
- XP earned this session
- Current streak

---

### 🎯 7. **Visual Learning Aids** (Preserved from Original)
- Prenatal timeline diagrams
- High-risk pregnancy decision trees
- All original visual aids still accessible
- (Note: main focus of rebuild was quiz engine, visuals intact)

---

## 🚀 How to Use (ADHD-Friendly Workflow)

### **Daily Study Routine** (15-30 min chunks)
1. **Open app** → See your streak → instant motivation
2. **Pick a course** (D118 if you have 1 attempt left!)
3. **Choose mode based on energy:**
   - High energy? → **Timer Challenge** (most intense)
   - Medium energy? → **Quiz Mode** (systematic)
   - Low energy? → **Flashcard Mode** (less pressure)
   - Targeted study? → **Weak Areas Mode** (efficient)
4. **Study 10-20 questions** (app defaults to 20)
5. **Review results** → See XP gain → dopamine hit ✅
6. **Come back tomorrow** → maintain streak 🔥

### **Exam Prep Strategy (D118 Priority)**
Since you have **1 OA attempt left** for D118:

1. **Week 1-2:** Weak Areas Mode daily (30 min)
   - Focus: MSK, Endocrine/MH, ENT (your weak topics)
   - Use Timer Mode to simulate exam pressure

2. **Week 3:** Full Quiz Mode (50 questions/day)
   - Build endurance
   - Track accuracy by topic

3. **Week 4:** Mixed:
   - Timer Challenge (builds speed + confidence)
   - Review all wrong answers
   - Flashcard Mode for memorization-heavy topics

---

## 📱 Mobile-Friendly
- Responsive design
- Touch-friendly buttons
- Works on phone/tablet/desktop
- Save progress via localStorage (persists across sessions)

---

## 🎮 Gamification Psychology

Why this works for ADHD:

1. **Instant Feedback:** No waiting for results
2. **Visual Rewards:** Animations trigger dopamine
3. **Progress Bars:** Completion = satisfaction
4. **Micro-Goals:** 20 questions at a time (not overwhelming)
5. **Variety:** 4 different modes prevent boredom
6. **Streaks:** External accountability structure
7. **Levels:** Long-term progression metric
8. **No Punishment:** Wrong answers still give +5 XP (reduces anxiety)

---

## 🐛 Technical Details

### **State Management**
- All data stored in `localStorage` (persists between sessions)
- State includes:
  - XP, Level, Streak
  - Per-course stats (answered, correct, question difficulty data)
  - Spaced repetition metadata per question

### **Data Structure** (`localStorage: wgu_fnp_study_data_v2`)
```javascript
{
  xp: 1250,
  level: 3,
  streak: 7,
  lastStudied: "2026-06-07",
  totalQuestions: 150,
  courses: {
    D118: {
      answered: 100,
      correct: 75,
      questions: {
        0: { interval: 4, repetitions: 2, easeFactor: 2.3, nextReview: 1717804800000 },
        1: { interval: 1, repetitions: 0, easeFactor: 1.5, nextReview: 1717632000000 }
        // ... per question SR data
      }
    },
    D119: { ... },
    D120: { ... }
  }
}
```

### **Deployment**
- Hosted on Netlify: https://binx-study-app.netlify.app
- Deploy command: `npx netlify deploy --prod`
- Instant updates (just push and deploy)

---

## 📈 Metrics to Track Your Progress

Watch these numbers go up (dopamine ⬆️):

1. **Streak:** How many days in a row you studied
2. **Level:** Increases every 500 XP
3. **XP:** Total points earned (never resets)
4. **Course Progress:** % of each course completed
5. **Accuracy:** Per-course correct answer %

---

## 🎯 Goals for Brandon

### **By Aug 1 Deadline:**
- [ ] D118: 80%+ accuracy on weak areas (MSK, Endocrine, ENT)
- [ ] Maintain 30+ day streak (study daily June 7 → Aug 1 = 55 days)
- [ ] Reach Level 10+ (shows consistent study volume)
- [ ] Complete all 189 D118 questions in spaced repetition system
- [ ] D119 & D120: 100% completion (lower priority but keep sharp)

---

## 🔧 Future Enhancements (if needed)

Potential additions if you want more:
- [ ] Weekly study goals with reminders
- [ ] Topic-specific deep dives (e.g., "MSK Marathon")
- [ ] Integration with Ninja Nerd videos (link to specific topics)
- [ ] Export progress to PDF for reviewing
- [ ] Social accountability (share streak with study partner)
- [ ] Audio explanations (listen while studying)
- [ ] Pomodoro timer integration (25 min study blocks)

---

## 💪 You Got This, Brandon!

Remember:
- **Consistency > Perfection:** Daily 20-min sessions beat 4-hour cram sessions
- **Celebrate Small Wins:** Every XP gain, every level up, every day of streak
- **Use Your Energy Wisely:** Timer Mode when sharp, Flashcards when tired
- **Trust the System:** Spaced repetition works—let it guide you
- **Aug 1 is Doable:** 55 days of daily practice = you'll be ready

🔥 **Keep that streak alive!**
⭐ **Watch those XP points climb!**
🎯 **Crush that D118 exam!**

---

**Questions or Issues?**
- App not saving progress? Check browser localStorage settings
- Want to reset progress? Clear browser data for the site
- Timer too fast/slow? Mode is intentionally intense—use Quiz Mode if too stressful

**Good luck! 🚀**
