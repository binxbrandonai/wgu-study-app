// FNP Study App 3.0 - ADHD-Optimized Study System
// Built for Brandon Coleman - Visual, Interactive, Gamified

// ===== TOPIC-TO-QUESTION MAPPING =====
// Maps lesson topic IDs to keyword arrays for filtering questions
// A question is included if its 'topic' field contains ANY keyword (case-insensitive)
const TOPIC_QUESTION_MAP = {
  // --- D118: Adult Primary Care ---
  'd118-cv-htn': ['Hypertension', 'Cardiovascular'],
  'd118-cv-chf': ['Heart Failure', 'Cardiovascular'],
  'd118-resp-asthma': ['Asthma', 'Respiratory'],
  'd118-resp-copd': ['COPD', 'Respiratory', 'Chronic Obstructive Pulmonary Disease'],
  'd118-endo-dm2': ['Diabetes', 'Type 2 Diabetes', 'Endocrine'],
  'd118-endo-thyroid': ['Thyroid', 'Hypothyroidism', 'Hyperthyroidism', 'Endocrine', 'Subclinical Hypothyroidism', 'Thyroid Cancer', 'Thyroid Nodule'],
  'd118-msk-oa': ['Osteoarthritis', 'Musculoskeletal'],
  'd118-neuro-stroke': ['Stroke', 'TIA', 'Transient Ischemic Attack', 'Neurology'],
  'd118-gi-gerd': ['GERD', 'Gastrointestinal', 'PUD', 'Dyspepsia', 'H. pylori', 'IBS', 'Irritable Bowel', 'IBD', 'Celiac', 'Gastritis', 'Lactose Intolerance', 'Diverticulitis', 'Cholecystitis', 'Cholelithiasis', 'Appendicitis', 'Gastroenteritis', 'C. difficile', 'Hepatitis', 'Cirrhosis', 'GI'],
  'd118-infx-uti': ['UTI', 'Urinary', 'Pyelonephritis', 'Infectious Disease'],

  // --- D118: MSK / Rheumatology ---
  'd118-msk': ['Musculoskeletal', 'MSK', 'Gout', 'Rheumatoid Arthritis', 'Osteoarthritis', 'Fibromyalgia', 'SLE', 'Rheumatology', 'Ankylosing Spondylitis', 'Back Pain', 'Fracture', 'Osteoporosis', 'Carpal Tunnel', 'Pseudogout', 'CPPD', 'Polymyalgia Rheumatica', 'Giant Cell Arteritis', 'Vasculitis'],
  'd118-rheum-gout': ['Gout', 'Musculoskeletal', 'MSK'],
  'd118-rheum-ra': ['Rheumatoid Arthritis', 'Rheumatology'],
  'd118-rheum-sle': ['SLE', 'Systemic Lupus', 'Rheumatology'],
  'd118-rheum-fibro': ['Fibromyalgia', 'Musculoskeletal'],

  // --- D118: Neurology ---
  'd118-neuro': ['Neurology', 'Neuro', 'Migraine', 'Seizure', 'Parkinson Disease', 'Parkinson', 'Multiple Sclerosis', 'Headache', 'Dementia', 'Neuropathy', 'TIA', 'Stroke', 'Alzheimer', 'Epilepsy', 'GBS', 'Guillain-Barré', 'Myasthenia Gravis'],
  'd118-neuro-migraine': ['Migraine', 'Headache', 'Neurology'],
  'd118-neuro-seizure': ['Seizure', 'Epilepsy', 'Neurology'],
  'd118-neuro-pd': ['Parkinson Disease', 'Parkinson', 'Neurology'],
  'd118-neuro-ms': ['Multiple Sclerosis', 'Neurology'],

  // --- D118: Endocrine (expanded) ---
  'd118-endo': ['Endocrine', 'Adrenal', 'PCOS', 'Polycystic Ovary Syndrome', 'Cushing', 'Pheochromocytoma', 'Hyperaldosteronism', 'Adrenal Insufficiency', 'Metabolic', 'Thyroid', 'Diabetes'],
  'd118-endo-adrenal': ['Adrenal', 'Adrenal Insufficiency', 'Addison', 'Cushing', 'Pheochromocytoma', 'Hyperaldosteronism', 'Endocrine'],
  'd118-endo-pcos': ['PCOS', 'Polycystic Ovary Syndrome', 'Endocrine'],

  // --- D118: Mental Health ---
  'd118-mh': ['Mental Health', 'Depression', 'Anxiety', 'Bipolar Disorder', 'Bipolar', 'PTSD', 'Schizophrenia', 'OCD', 'Panic', 'Substance', 'Psychiatric'],
  'd118-mh-depression': ['Depression', 'Major Depressive Disorder', 'Mental Health'],
  'd118-mh-anxiety': ['Anxiety', 'GAD', 'Panic', 'Mental Health'],
  'd118-mh-bipolar': ['Bipolar Disorder', 'Bipolar', 'Mental Health'],
  'd118-mh-ptsd': ['PTSD', 'Post-Traumatic Stress Disorder', 'Mental Health'],
  'd118-mh-schiz': ['Schizophrenia', 'Psychosis', 'Mental Health'],

  // --- D118: EENT ---
  'd118-eent': ['EENT', 'ENT', 'Eyes', 'Ears', 'Nose', 'Throat', 'Sinusitis', 'Otitis', 'Pharyngitis', 'Rhinitis', 'Epistaxis', 'Tonsillitis', 'Allergic Rhinitis', 'Acute Sinusitis', 'Acute Otitis Media'],

  // --- D118: Respiratory (expanded) ---
  'd118-resp': ['Respiratory', 'Pulmonary', 'Asthma', 'COPD', 'Pneumonia', 'Bronchitis', 'Sleep Apnea', 'Lung', 'Pulmonary Embolism', 'PE', 'DVT', 'Interstitial Lung', 'IPF', 'Fibrosis', 'Lung Cancer'],

  // --- D119: Pediatric Primary Care ---
  'dev-milestones-infant': ['Development', 'Milestones'],
  'dev-milestones-toddler': ['Development', 'Milestones'],
  'immunizations': ['Immunizations', 'Vaccines'],
  'well-child-visits': ['Well Child', 'Sports Physical', 'Lead Screening', 'Vision', 'Growth', 'Scoliosis', 'Feeding', 'Toilet Training', 'Oral Health'],
  'fever-management': ['Fever'],
  'respiratory-infections': ['Respiratory', 'Asthma', 'Allergies', 'Acute Bronchitis', 'Pneumonia', 'Community-Acquired Pneumonia', 'Otitis Media', 'Acute Otitis Media', 'Acute Sinusitis', 'Pharyngitis', 'Epiglottitis', 'Peritonsillar Abscess', 'Infectious Disease', 'Bronchitis', 'Anemia', 'Dermatology', 'Eczema', 'Ears', 'Eyes', 'Cardiovascular'],
  'newborn-assessment': ['Newborn', 'Infant Feeding', 'Feeding', 'Jaundice', 'APGAR'],
  'adhd': ['ADHD', 'Autism', 'Behavioral'],
  'd119-cardiac': ['Cardiac', 'Heart Murmur', 'Congenital Heart Disease', 'VSD', 'ASD', 'Tetralogy'],
  'd119-gi': ['Pediatric GI', 'Pyloric Stenosis', 'Intussusception', 'Hirschsprung', 'Constipation', 'Celiac'],
  'd119-msk': ['Musculoskeletal', 'SCFE', 'Slipped Capital', 'Osgood-Schlatter', 'Developmental Dysplasia', 'Clubfoot', 'Perthes'],
  'd119-neuro': ['Neurology', 'Febrile Seizure', 'Epilepsy', 'Cerebral Palsy', 'Head Circumference'],
  'd119-endocrine': ['Endocrine', 'Type 1 Diabetes', 'Growth Hormone', 'Precocious Puberty', 'Congenital Hypothyroidism'],
  'd119-hematology': ['Hematology', 'Iron Deficiency Anemia', 'Sickle Cell', 'Thalassemia', 'ITP'],
  'd119-child-abuse': ['Child Abuse', 'Shaken Baby', 'Non-Accidental Trauma', 'Mandated Reporter', 'Bruising'],
  'd119-allergies': ['Allergies', 'Atopic Dermatitis', 'Food Allergy', 'Anaphylaxis', 'Eczema'],
  'd119-adolescent': ['Adolescent Medicine', 'Adolescent Health', 'Teen Health'],

  // --- D120: Special Populations & Primary Care ---
  'd120-womens-health': ['Women\'s Health', 'Contraception', 'Menopause', 'Vaginitis', 'Pap Smear', 'Mammography', 'Breast', 'Hormone Therapy', 'Cervical Cancer Screening', 'Abnormal Uterine Bleeding', 'Endometriosis', 'PCOS', 'Polycystic Ovary Syndrome', 'Infertility', 'STI', 'STIs', 'Osteoporosis', 'Osteoporosis Treatment', 'PID', 'Pelvic Inflammatory', 'Fibroids', 'Dysmenorrhea', 'AUB', 'Galactorrhea', 'Mastitis'],
  'd120-geriatrics': ['Geriatrics', 'Falls', 'Polypharmacy', 'Beers Criteria', 'Pressure Ulcers', 'Urinary Incontinence', 'Dementia', 'Delirium', 'Cognitive Assessment', 'Medication Safety', 'Elder Abuse', 'End of Life', 'Advance Directives', 'Cancer Screening', 'Pain Management', 'Insomnia', 'Constipation', 'Shingles Vaccine', 'Pneumonia Vaccine', 'Depression Screening', 'Prostate', 'Osteoporosis', 'STOPP', 'START'],
  'd120-prenatal': ['Prenatal', 'Pregnancy', 'Preeclampsia', 'Gestational Diabetes', 'Hypertension in Pregnancy', 'Breastfeeding', 'Postpartum', 'Prenatal Labs', 'UTI in Pregnancy', 'Placenta Previa', 'Abruptio', 'HELLP', 'Naegele', 'Rhogam', 'Hyperemesis'],
  'd120-adolescent': ['Adolescent', 'Sports Physical', 'Adolescent Health'],
  'd120-mental-health': ['Mental Health', 'Depression', 'Anxiety', 'Bipolar', 'PTSD', 'Post-Traumatic Stress Disorder', 'Schizophrenia', 'Panic', 'Panic Disorder', 'OCD', 'Social Anxiety', 'Social Anxiety Disorder', 'Eating Disorders', 'Anorexia', 'Suicide', 'Suicide Risk', 'Major Depressive Disorder', 'Generalized Anxiety', 'Depression Screening', 'Alcohol Use', 'Alcohol Use Disorder', 'Smoking Cessation', 'Insomnia', 'PHQ-9', 'GAD-7'],
  'd120-mens-health': ['Men\'s Health', 'BPH', 'Prostate Cancer', 'PSA', 'Testicular Torsion', 'Testicular Cancer', 'Erectile Dysfunction', 'Hypogonadism', 'AUA Score'],
  'd120-lgbtq': ['LGBTQ', 'LGBTQIAP', 'PrEP', 'HIV Prevention', 'Transgender', 'MSM', 'Hormone Therapy'],
  'd120-substance-use': ['Substance Abuse', 'Alcohol Use Disorder', 'Naltrexone', 'Opioid Use Disorder', 'MOUD', 'Buprenorphine', 'CAGE', 'AUDIT', 'OUD'],
  'd120-travel-health': ['Travel Health', 'Malaria', 'CDC Travel', 'Travel Vaccines'],
  'd120-ipv': ['IPV', 'Intimate Partner Violence', 'RADAR', 'HITS', 'Domestic Violence'],
  'd120-scope-practice': ['Scope of Practice', 'LACE', 'APRN Consensus Model', 'Full Practice Authority'],
  'd120-care-coordination': ['Care Coordination', 'PCMH', 'Transitional Care', 'Patient-Centered Medical Home', 'Transitions of Care'],
  'd120-cultural-competence': ['Cultural Competence', 'CLAS', 'Health Literacy', 'Culturally Competent']
};

// Lesson ID to class mapping
const LESSON_CLASS_MAP = {};
// Build from topic map keys
Object.keys(TOPIC_QUESTION_MAP).forEach(id => {
  if (id.startsWith('d118')) LESSON_CLASS_MAP[id] = 'd118';
  else if (id.startsWith('d120') || id.startsWith('dev-') || id === 'immunizations' ||
           id === 'well-child-visits' || id === 'fever-management' || id === 'respiratory-infections' ||
           id === 'newborn-assessment' || id === 'adhd' || id.startsWith('d119-')) {
    // D119 lessons - detect by starting prefix or specific IDs
    if (id.startsWith('d120')) LESSON_CLASS_MAP[id] = 'd120';
    else if (id.startsWith('d119-')) LESSON_CLASS_MAP[id] = 'd119';
    else LESSON_CLASS_MAP[id] = 'd119';
  }
});

class StudyApp {
  constructor() {
    this.questions = null;
    this.currentClass = null;
    this.currentQuestionIndex = 0;
    this.selectedAnswer = null;
    this.sessionStats = { answered: 0, correct: 0, incorrect: 0, startTime: Date.now() };
    this.progress = this.loadProgress();
    this.xpData = this.loadXP();
    this.streak = this.loadStreak();
    this.currentTopicFilter = null;   // topic keywords array, or null for all
    this.currentTopicName = null;     // display name for the topic filter
    this.currentLessonId = null;      // lesson ID that triggered the quiz
    this.init();
  }
  
  async init() {
    await this.loadQuestions();
    this.setupEventListeners();
    this.updateXPDisplay();
    this.updateStreakDisplay();
    
    // Check URL parameters for topic filter
    this.checkURLParams();
  }

  async loadQuestions() {
    try {
      const response = await fetch('/questions.json');
      const data = await response.json();
      this.questions = {
        d118: data.D118 || [],
        d119: data.D119 || [],
        d120: data.D120 || []
      };
      console.log('✓ Loaded questions:', {
        d118: this.questions.d118.length,
        d119: this.questions.d119.length,
        d120: this.questions.d120.length
      });
      this.renderClassSelector();
    } catch (error) {
      console.error('Failed to load questions:', error);
    }
  }

  checkURLParams() {
    const params = new URLSearchParams(window.location.search);
    const classParam = params.get('class');
    const topicParam = params.get('topic');
    const lessonParam = params.get('lesson');

    if (topicParam && classParam && CLASS_CONFIG_FOR_QUIZ[classParam]) {
      const classCode = classParam;
      const topicKey = topicParam.toLowerCase().replace(/\s+/g, '-');
      
      // First, try to find the lesson ID directly from the topic parameter
      let lessonId = null;
      let topicName = topicParam;
      
      // Check if topic param matches a lesson ID
      if (TOPIC_QUESTION_MAP[topicParam]) {
        lessonId = topicParam;
      } else if (TOPIC_QUESTION_MAP[topicKey]) {
        lessonId = topicKey;
      } else {
        // Search by partial match on keys
        for (const key of Object.keys(TOPIC_QUESTION_MAP)) {
          if (key.toLowerCase().includes(topicKey) || topicKey.includes(key.toLowerCase())) {
            lessonId = key;
            break;
          }
        }
      }
      
      if (lessonParam && TOPIC_QUESTION_MAP[lessonParam]) {
        lessonId = lessonParam;
      }

      this.currentLessonId = lessonId;
      this.currentTopicFilter = TOPIC_QUESTION_MAP[lessonId] || [topicParam];
      this.currentTopicName = topicName || (lessonId ? lessonId : topicParam);
      
      // Auto-select the class and start quiz
      this.selectClass(classCode);
    }
  }

  setupEventListeners() {
    // Class selection
    document.getElementById('class-tabs').addEventListener('click', (e) => {
      const tab = e.target.closest('.class-tab');
      if (tab) {
        this.selectClass(tab.dataset.class);
      }
    });
    
    // Back to classes
    document.getElementById('back-to-classes-btn').addEventListener('click', () => {
      this.backToClassSelector();
    });
    
    // Back to all questions (clear topic filter)
    const backToAllBtn = document.getElementById('back-to-all-questions-btn');
    if (backToAllBtn) {
      backToAllBtn.addEventListener('click', () => {
        this.clearTopicFilter();
      });
    }
    
    // Back to lesson (from topic quiz completion)
    const backToLessonBtn = document.getElementById('back-to-lesson-btn');
    if (backToLessonBtn) {
      backToLessonBtn.addEventListener('click', () => {
        this.backToLesson();
      });
    }
    
    // Submit answer
    document.getElementById('submit-btn').addEventListener('click', () => {
      this.submitAnswer();
    });
    
    // Next question
    document.getElementById('next-btn').addEventListener('click', () => {
      this.nextQuestion();
    });
    
    // Answer selection
    document.getElementById('answers').addEventListener('click', (e) => {
      const answer = e.target.closest('.answer');
      if (answer && !document.getElementById('next-btn').style.display.includes('block')) {
        this.selectAnswer(parseInt(answer.dataset.index));
      }
    });
  }
  
  // Get the current set of questions (filtered or all)
  currentQuestionSet() {
    const allQs = this.questions[this.currentClass] || [];
    if (!this.currentTopicFilter) return allQs;
    
    return allQs.filter(q => {
      const qTopic = (q.topic || '').toLowerCase();
      return this.currentTopicFilter.some(kw => qTopic.includes(kw.toLowerCase()));
    });
  }
  
  clearTopicFilter() {
    this.currentTopicFilter = null;
    this.currentTopicName = null;
    this.currentLessonId = null;
    
    // Navigate back to class selector with a clean URL
    const url = new URL(window.location);
    url.searchParams.delete('topic');
    url.searchParams.delete('lesson');
    window.history.replaceState({}, '', url);
    
    this.backToClassSelector();
  }
  
  backToLesson() {
    if (this.currentLessonId) {
      const classCode = LESSON_CLASS_MAP[this.currentLessonId] || 'd118';
      window.location.href = `/learn.html?class=${classCode}&id=${this.currentLessonId}`;
    } else {
      window.location.href = '/learn.html';
    }
  }
  
  selectClass(classCode) {
    this.currentClass = classCode;
    this.currentQuestionIndex = 0;
    this.selectedAnswer = null;
    this.sessionStats = { answered: 0, correct: 0, incorrect: 0, startTime: Date.now() };
    
    // Update UI
    document.querySelectorAll('.class-tab').forEach(tab => tab.classList.remove('active'));
    const activeTab = document.querySelector(`[data-class="${classCode}"]`);
    if (activeTab) activeTab.classList.add('active');
    
    // Show study container
    document.getElementById('class-selector').classList.add('hidden');
    document.getElementById('study-container').classList.add('active');
    
    // Update header with topic info if filtering
    if (this.currentTopicFilter) {
      const filteredQs = this.currentQuestionSet();
      const displayName = this.currentTopicName
        .replace(/-/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase());
      document.getElementById('study-title').textContent = `🧪 Quizzing: ${displayName}`;
      document.getElementById('question-counter').textContent = `${filteredQs.length} questions`;
    }
    
    // Handle back-to-all / back-to-lesson button visibility
    const backToAllBtn = document.getElementById('back-to-all-questions-btn');
    const backToLessonBtn = document.getElementById('back-to-lesson-btn');
    const backToClassesBtn = document.getElementById('back-to-classes-btn');
    
    if (backToAllBtn) {
      backToAllBtn.style.display = this.currentTopicFilter ? 'inline-flex' : 'none';
    }
    if (backToLessonBtn) {
      backToLessonBtn.style.display = 'none';
    }
    if (backToClassesBtn) {
      backToClassesBtn.style.display = this.currentTopicFilter ? 'none' : 'inline-flex';
    }
    
    // Load first question
    this.loadQuestion();
  }
  
  backToClassSelector() {
    document.getElementById('class-selector').classList.remove('hidden');
    document.getElementById('study-container').classList.remove('active');
    this.currentClass = null;
    this.currentTopicFilter = null;
    this.currentTopicName = null;
    this.currentLessonId = null;
    this.renderClassSelector(); // Update progress
  }
  
  loadQuestion() {
    const questions = this.currentQuestionSet();
    if (!questions || this.currentQuestionIndex >= questions.length) {
      this.showCompletionScreen();
      return;
    }
    
    const q = questions[this.currentQuestionIndex];
    const totalQuestions = questions.length;
    
    // Update header
    const classNames = {
      d118: 'D118 — Adult Primary Care',
      d119: 'D119 — Pediatric Primary Care',
      d120: 'D120 — Special Populations & Primary Care'
    };
    
    if (this.currentTopicFilter) {
      const displayName = this.currentTopicName
        .replace(/-/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase());
      document.getElementById('study-title').textContent = `🧪 Quizzing: ${displayName}`;
      document.getElementById('question-counter').textContent = `Question ${this.currentQuestionIndex + 1} of ${totalQuestions}`;
    } else {
      document.getElementById('study-title').textContent = classNames[this.currentClass];
      document.getElementById('question-counter').textContent = `Question ${this.currentQuestionIndex + 1} of ${totalQuestions}`;
    }
    document.getElementById('topic-badge').textContent = q.topic;
    
    // Update question
    document.getElementById('question-text').textContent = q.q;
    
    // Update answers
    const answersHTML = q.a.map((answer, index) => `
      <div class="answer" data-index="${index}">
        <div class="answer-letter">${String.fromCharCode(65 + index)}</div>
        <div class="answer-text">${answer}</div>
      </div>
    `).join('');
    document.getElementById('answers').innerHTML = answersHTML;
    
    // Hide explanation
    document.getElementById('explanation').classList.remove('show');
    
    // Show submit button
    document.getElementById('submit-btn').style.display = 'inline-flex';
    document.getElementById('next-btn').style.display = 'none';
    
    this.selectedAnswer = null;
  }
  
  selectAnswer(index) {
    this.selectedAnswer = index;
    
    // Update UI
    document.querySelectorAll('.answer').forEach((el, i) => {
      el.classList.remove('selected');
      if (i === index) el.classList.add('selected');
    });
  }
  
  submitAnswer() {
    if (this.selectedAnswer === null) return;
    
    const questions = this.currentQuestionSet();
    const q = questions[this.currentQuestionIndex];
    const isCorrect = this.selectedAnswer === q.correct;
    
    // Update session stats
    this.sessionStats.answered++;
    if (isCorrect) {
      this.sessionStats.correct++;
      
      // Correct answer rewards
      this.addXP(10, 'Correct Answer!');
      this.incrementStreak();
      
      // Mini confetti for correct answer
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#00e5cc', '#4ade80', '#38bdf8']
      });
    } else {
      this.sessionStats.incorrect++;
      // Small XP for trying
      this.addXP(2, 'Keep Learning!');
    }
    
    // Update progress
    const questionId = `${this.currentClass}_${this.currentQuestionIndex}_${q.topic}`;
    if (!this.progress[this.currentClass].seen.includes(questionId)) {
      this.progress[this.currentClass].seen.push(questionId);
    }
    if (isCorrect && !this.progress[this.currentClass].correct.includes(questionId)) {
      this.progress[this.currentClass].correct.push(questionId);
    } else if (!isCorrect && !this.progress[this.currentClass].incorrect.includes(questionId)) {
      this.progress[this.currentClass].incorrect.push(questionId);
    }
    
    this.saveProgress();
    this.updateStats();
    
    // Show correct/incorrect with animations
    document.querySelectorAll('.answer').forEach((el, i) => {
      if (i === q.correct) {
        el.classList.add('correct');
      } else if (i === this.selectedAnswer) {
        el.classList.add('incorrect');
      }
    });
    
    // Show explanation
    document.getElementById('explanation-text').textContent = q.rationale;
    document.getElementById('explanation').classList.add('show');
    
    // Show next button
    document.getElementById('submit-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'inline-flex';
  }
  
  nextQuestion() {
    this.currentQuestionIndex++;
    this.selectedAnswer = null;
    
    // Reset answer states
    document.querySelectorAll('.answer').forEach(el => {
      el.classList.remove('selected', 'correct', 'incorrect');
    });
    
    this.loadQuestion();
  }
  
  updateStats() {
    const elements = {
      answered: document.getElementById('stat-answered'),
      correct: document.getElementById('stat-correct'),
      incorrect: document.getElementById('stat-incorrect'),
      accuracy: document.getElementById('stat-accuracy')
    };
    
    // Animate number changes
    elements.answered.classList.add('animate');
    elements.answered.textContent = this.sessionStats.answered;
    setTimeout(() => elements.answered.classList.remove('animate'), 800);
    
    elements.correct.textContent = this.sessionStats.correct;
    elements.incorrect.textContent = this.sessionStats.incorrect;
    
    if (this.sessionStats.answered > 0) {
      const accuracy = Math.round((this.sessionStats.correct / this.sessionStats.answered) * 100);
      elements.accuracy.textContent = accuracy + '%';
    }
  }
  
  showCompletionScreen() {
    const questions = this.currentQuestionSet();
    const totalQuestions = questions.length;
    const elapsed = Math.round((Date.now() - this.sessionStats.startTime) / 1000 / 60);
    const accuracy = this.sessionStats.answered > 0 
      ? Math.round((this.sessionStats.correct / this.sessionStats.answered) * 100) 
      : 0;
    
    // Big confetti celebration
    this.fireConfetti();
    
    // Completion bonus XP
    const bonusXP = this.sessionStats.correct * 5;
    this.addXP(bonusXP, 'Session Complete!');
    
    // Build appropriate back button based on context
    let backButtonHTML = '';
    if (this.currentTopicFilter && this.currentLessonId) {
      backButtonHTML = `
        <button class="btn btn-secondary" id="completion-back-lesson-btn" onclick="app.backToLesson()" style="margin-top:24px">
          ← Back to Lesson
        </button>`;
    } else if (this.currentTopicFilter) {
      backButtonHTML = `
        <button class="btn btn-secondary" id="completion-back-all-btn" onclick="app.clearTopicFilter()" style="margin-top:24px">
          ← Back to All Questions
        </button>`;
    }
    
    document.getElementById('question-text').innerHTML = `
      <div style="text-align: center; padding: 40px 20px;">
        <div style="font-size: 72px; margin-bottom: 24px; animation: bounce 1s ease infinite;">🎉</div>
        <div style="font-size: 28px; font-weight: 900; margin-bottom: 16px; background: linear-gradient(135deg, var(--teal), var(--purple)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
          Session Complete!
        </div>
        <div style="font-size: 16px; color: var(--text-mid); margin-bottom: 32px;">
          You answered <strong style="color: var(--teal);">${this.sessionStats.answered}</strong> questions in <strong style="color: var(--teal);">${elapsed}</strong> minutes
        </div>
        <div style="display: flex; gap: 24px; justify-content: center; margin-bottom: 32px; flex-wrap: wrap;">
          <div style="padding: 20px; background: var(--bg3); border-radius: 12px; border: 2px solid var(--border); min-width: 120px;">
            <div style="font-size: 12px; color: var(--text-dim); margin-bottom: 8px;">ACCURACY</div>
            <div style="font-size: 40px; font-weight: 900; color: var(--teal); font-family: 'JetBrains Mono', monospace;">${accuracy}%</div>
          </div>
          <div style="padding: 20px; background: var(--bg3); border-radius: 12px; border: 2px solid var(--border); min-width: 120px;">
            <div style="font-size: 12px; color: var(--text-dim); margin-bottom: 8px;">CORRECT</div>
            <div style="font-size: 40px; font-weight: 900; color: var(--green); font-family: 'JetBrains Mono', monospace;">${this.sessionStats.correct}</div>
          </div>
          <div style="padding: 20px; background: var(--bg3); border-radius: 12px; border: 2px solid var(--border); min-width: 120px;">
            <div style="font-size: 12px; color: var(--text-dim); margin-bottom: 8px;">XP GAINED</div>
            <div style="font-size: 40px; font-weight: 900; color: var(--gold); font-family: 'JetBrains Mono', monospace;">+${bonusXP + (this.sessionStats.correct * 10)}</div>
          </div>
        </div>
        ${backButtonHTML}
      </div>
    `;
    document.getElementById('topic-badge').textContent = this.currentTopicFilter ? 'TOPIC COMPLETE' : 'COMPLETE';
    document.getElementById('answers').innerHTML = '';
    document.getElementById('submit-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';
  }
  
  // Override getClassProgress to account for filtered questions
  getClassProgress(classCode) {
    const prog = this.progress[classCode];
    const allQs = this.questions[classCode];
    // Use total from this class
    const total = allQs ? allQs.length : 0;
    const seen = prog.seen.length;
    const correct = prog.correct.length;
    const accuracy = seen > 0 ? Math.round((correct / seen) * 100) : 0;
    return { total, seen, correct, accuracy };
  }
  
  renderClassSelector() {
    const classData = {
      d118: { name: 'Adult Primary Care', status: 'AT RISK', statusClass: 'at-risk', attempts: '1 attempt left' },
      d119: { name: 'Pediatric Primary Care', status: 'IN PROGRESS', statusClass: 'in-progress', attempts: 'Not attempted' },
      d120: { name: 'Special Populations & Primary Care', status: 'IN PROGRESS', statusClass: 'in-progress', attempts: 'Not attempted' }
    };
    
    const container = document.getElementById('class-tabs');
    container.innerHTML = Object.keys(classData).map(code => {
      const data = classData[code];
      const prog = this.getClassProgress(code);
      const progressPercent = (prog.seen / prog.total * 100).toFixed(0);
      
      return `
        <div class="class-tab" data-class="${code}">
          <div class="class-tab-header">
            <div class="class-code">${code.toUpperCase()}</div>
            <div class="class-status ${data.statusClass}">${data.status}</div>
          </div>
          <div class="class-name">${data.name}</div>
          <div class="progress-bar-container">
            <div class="progress-bar">
              <div class="progress-fill" style="width: ${progressPercent}%"></div>
            </div>
            <div class="progress-text">${prog.seen}/${prog.total} completed · ${prog.accuracy}% accuracy</div>
          </div>
          <div class="class-stats">
            <div class="class-stat"><strong>${prog.total}</strong> questions</div>
            <div class="class-stat">${data.attempts}</div>
          </div>
          <div style="margin-top: 16px; display: flex; gap: 8px;">
            <button class="btn-mini btn-primary" onclick="window.location.href='/learn.html?class=${code}'; event.stopPropagation();">📚 Learn</button>
            <button class="btn-mini btn-secondary" onclick="app.selectClass('${code}'); event.stopPropagation();">✏️ Quiz</button>
          </div>
        </div>
      `;
    }).join('');
  }
  
  loadProgress() {
    const saved = localStorage.getItem('fnp_progress');
    if (saved) {
      return JSON.parse(saved);
    }
    return {
      d118: { seen: [], correct: [], incorrect: [] },
      d119: { seen: [], correct: [], incorrect: [] },
      d120: { seen: [], correct: [], incorrect: [] }
    };
  }
  
  saveProgress() {
    localStorage.setItem('fnp_progress', JSON.stringify(this.progress));
  }
  
  loadXP() {
    const saved = localStorage.getItem('fnp_xp');
    if (saved) {
      return JSON.parse(saved);
    }
    return { total: 0, level: 1 };
  }
  
  saveXP() {
    localStorage.setItem('fnp_xp', JSON.stringify(this.xpData));
  }
  
  loadStreak() {
    const saved = localStorage.getItem('fnp_streak');
    if (saved) {
      const data = JSON.parse(saved);
      // Check if streak is still valid (within last 48 hours)
      const lastDate = new Date(data.lastDate);
      const now = new Date();
      const hoursDiff = (now - lastDate) / (1000 * 60 * 60);
      if (hoursDiff > 48) {
        return { count: 0, lastDate: now.toISOString() };
      }
      return data;
    }
    return { count: 0, lastDate: new Date().toISOString() };
  }
  
  saveStreak() {
    localStorage.setItem('fnp_streak', JSON.stringify(this.streak));
  }
  
  addXP(amount, reason) {
    this.xpData.total += amount;
    const xpForNextLevel = this.xpData.level * 100;
    
    if (this.xpData.total >= xpForNextLevel) {
      this.xpData.level++;
      this.xpData.total = this.xpData.total - xpForNextLevel;
      this.saveXP();
      this.showLevelUpModal();
    } else {
      this.saveXP();
    }
    
    this.updateXPDisplay();
    this.showXPGain(amount, reason);
  }
  
  updateXPDisplay() {
    const xpNeeded = this.xpData.level * 100;
    const percentage = (this.xpData.total / xpNeeded) * 100;
    
    document.getElementById('level').textContent = this.xpData.level;
    document.getElementById('xp-current').textContent = this.xpData.total;
    document.getElementById('xp-needed').textContent = xpNeeded;
    document.getElementById('xp-fill').style.width = percentage + '%';
  }
  
  updateStreakDisplay() {
    document.getElementById('streak-count').textContent = this.streak.count;
  }
  
  incrementStreak() {
    this.streak.count++;
    this.streak.lastDate = new Date().toISOString();
    this.saveStreak();
    this.updateStreakDisplay();
  }
  
  showXPGain(amount, reason) {
    // Show floating +XP animation
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 80px;
      right: 20px;
      background: linear-gradient(135deg, #00e5cc, #38bdf8);
      color: white;
      padding: 12px 20px;
      border-radius: 12px;
      font-weight: 800;
      font-size: 16px;
      z-index: 10001;
      animation: slideInRight 0.4s ease, slideOutRight 0.4s ease 2s;
      box-shadow: 0 8px 24px rgba(0,229,204,0.4);
    `;
    notification.textContent = `+${amount} XP${reason ? ' · ' + reason : ''}`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.remove();
    }, 2400);
  }
  
  showLevelUpModal() {
    const modal = document.getElementById('level-up-modal');
    document.getElementById('new-level').textContent = this.xpData.level;
    modal.classList.add('show');
    
    // Confetti explosion
    this.fireConfetti();
    
    setTimeout(() => {
      modal.classList.remove('show');
    }, 3000);
  }
  
  fireConfetti() {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 10002 };
    
    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }
    
    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();
      
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
      
      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  }
}

// Minimal class config for topic quiz URL detection
const CLASS_CONFIG_FOR_QUIZ = {
  d118: { title: 'D118', name: 'Adult Primary Care' },
  d119: { title: 'D119', name: 'Pediatric Primary Care' },
  d120: { title: 'D120', name: 'Special Populations & Primary Care' }
};

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.app = new StudyApp();
  });
} else {
  window.app = new StudyApp();
}
