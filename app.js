// Data Slide Fallback (jika gagal memuat slides.json)
let slides = [
  {
    "id": 1,
    "time": 0,
    "title": "Tadabbur Al-Qur'an",
    "subtitle": "Kajian QS. Al-Baqarah Ayat 26-27",
    "type": "cover",
    "speaker": "Ustaz Imamul Arifin, L.C., M.HI.",
    "content": "Menelusuri Makna di Balik Perumpamaan Allah dan Karakteristik Orang-orang yang Merugi"
  },
  {
    "id": 2,
    "time": 180,
    "title": "QS. Al-Baqarah Ayat 26",
    "type": "verse",
    "arabic": "إِنَّ اللَّهَ لَا يَسْتَحْيِي أَنْ يَضْرِبَ مَثَلًا مَا بَعُوضَةً فَمَا فَوْقَهَا ۚ فَأَمَّا الَّذِينَ آمَنُوا فَيَعْلَمُونَ أَنَّهُ الْحَقُّ مِنْ رَبِّهِمْ ۖ وَأَمَّا الَّذِينَ كَفَرُوا فَيَقُولُونَ مَاذَا أَرَادَ اللَّهُ بِهَٰذَا مَثَلًا ۘ يُضِلُّ بِهِ كَثِيرًا وَيَهْدِي بِهِ كَثِيرًا ۚ وَمَا يُضِلُّ بِهِ إِلَّا الْفَاسِقِينَ",
    "transliteration": "Innallāha lā yastaḥyī ay yaḍriba maṡalam mā ba'ūḍatan famā fauqahā, fa ammallażīna āmanū faya'lamūna annahul-ḥaqqu mir rabbihim, wa ammallażīna kafarū fayaqūlūna māżā arādallāhu bihāżā maṡalā, yuḍillu bihī kaṡīraw wa yahdī bihī kaṡīrā, wa mā yuḍillu bihī illal-fāsiqīn.",
    "translation": "Sesungguhnya Allah tidak segan membuat perumpamaan seekor nyamuk atau yang lebih kecil dari itu. Adapun orang-orang yang beriman, mereka tahu bahwa itu kebenaran dari Tuhan mereka. Tetapi mereka yang kafir berkata, 'Apakah maksud Allah dengan perumpamaan ini?' Dengan perumpamaan itu banyak orang yang dibiarkan-Nya sesat, dan dengan itu banyak (pula) orang yang diberi-Nya petunjuk. Dan tidak ada yang disesatkan-Nya dengan perumpamaan itu kecuali orang-orang fasik."
  },
  {
    "id": 3,
    "time": 480,
    "title": "Asbabun Nuzul & Konteks",
    "type": "explanation",
    "points": [
      "Ayat ini diturunkan untuk membantah kaum munafik dan Yahudi yang meremehkan perumpamaan di dalam Al-Qur'an (seperti laba-laba dan lalat).",
      "Kaum skeptis mempertanyakan mengapa Tuhan semesta alam menyebut hewan-hewan kecil dan remeh dalam wahyu-Nya.",
      "Allah menegaskan bahwa nilai perumpamaan tidak terletak pada ukuran fisiknya, melainkan pada kebenaran ilmiah dan pesan moral yang terkandung di dalamnya."
    ]
  },
  {
    "id": 4,
    "time": 840,
    "title": "Hikmah Perumpamaan Nyamuk",
    "type": "explanation",
    "points": [
      "**Keajaiban Penciptaan:** Nyamuk, meskipun sangat kecil, memiliki sistem organ yang sangat kompleks (sayap berfrekuensi tinggi, jarum hisap canggih, sensor panas) yang tidak mampu dibuat oleh berhala mana pun.",
      "**Ujian Hati Manusia:** Kebenaran yang sama dapat menjadi petunjuk bagi orang yang beriman (karena mereka merenung), atau menjadi kesesatan bagi orang sombong yang hanya mencari celah untuk membantah."
    ]
  },
  {
    "id": 5,
    "time": 1200,
    "title": "QS. Al-Baqarah Ayat 27",
    "type": "verse",
    "arabic": "الَّذِينَ يَنْقُضُونَ عَهْدَ اللَّهِ مِنْ بَعْدِ مِيثَاقِهِ وَيَقْطَعُونَ مَا أَمَرَ اللَّهُ بِهِ أَنْ يُوصَلَ وَيُفْسِدُونَ فِي الْأَرْضِ ۚ أُولَٰئِكَ هُمُ الْخَاسِرُونَ",
    "transliteration": "Allażīna yanquḍūna 'ahdallāhi mim ba'di mīṡāqihī wa yaqṭa'ūna mā amarallāhu bihī ay yūṣala wa yufsidūna fil-arḍ, ulā'ika humul-khāsirūn.",
    "translation": "(Yaitu) orang-orang yang melanggar perjanjian Allah setelah perjanjian itu diteguhkan, dan memutuskan apa yang diperintahkan Allah untuk disambungkan, dan berbuat kerusakan di bumi. Mereka itulah orang-orang yang merugi."
  },
  {
    "id": 6,
    "time": 1600,
    "title": "Tiga Karakter Orang Fasiq",
    "type": "explanation",
    "points": [
      "**1. Melanggar Perjanjian Allah:** Mengingkari komitmen tauhid dan ketaatan yang telah diikrarkan, baik perjanjian fitrah manusia maupun perjanjian syariat.",
      "**2. Memutuskan Silaturahmi:** Memutus hubungan persaudaraan, kekeluargaan, serta hubungan ketaatan kepada utusan Allah yang seharusnya dijaga erat.",
      "**3. Berbuat Kerusakan di Bumi:** Melakukan kemaksiatan, menyebarkan fitnah, merusak tatanan sosial, dan merusak lingkungan hidup."
    ]
  },
  {
    "id": 7,
    "time": 2000,
    "title": "Siapakah Orang yang Merugi?",
    "type": "explanation",
    "points": [
      "**Kerugian di Dunia:** Kehilangan keberkahan hidup, tidak mendapatkan ketenangan batin, serta dijauhkan dari rahmat dan petunjuk Allah.",
      "**Kerugian di Akhirat:** Mendapatkan murka Allah dan ditempatkan di dalam siksaan yang pedih akibat pilihan hidup yang fasik."
    ]
  },
  {
    "id": 8,
    "time": 2400,
    "title": "Kesimpulan & Refleksi Diri",
    "type": "explanation",
    "points": [
      "**Ketundukan Hati:** Jangan meremehkan nasihat atau kebenaran apa pun bentuk dan medianya (sekalipun terlihat sederhana).",
      "**Menjaga Komitmen:** Selalu memenuhi janji kepada Allah dan sesama manusia.",
      "**Menjaga Hubungan:** Pererat tali silaturahmi dan hindari segala bentuk perusakan (sosial maupun lingkungan) di muka bumi."
    ]
  }
];

// DOM Elements
const audio = document.getElementById('audio-element');
const playPauseBtn = document.getElementById('play-pause-btn');
const progressContainer = document.getElementById('progress-container');
const progressFilled = document.getElementById('progress-filled');
const timeDisplay = document.getElementById('time-display');
const canvas = document.getElementById('visualizer-canvas');
const slideDeck = document.getElementById('slide-deck');
const slideIndicatorsContainer = document.getElementById('slide-indicators');
const prevBtn = document.getElementById('prev-slide-btn');
const nextBtn = document.getElementById('next-slide-btn');
const studioToggleBtn = document.getElementById('studio-toggle-btn');
const studioPanel = document.getElementById('studio-panel');
const studioTableBody = document.getElementById('studio-table-body');
const currentSecondsBadge = document.getElementById('current-seconds-badge');
const saveStudioBtn = document.getElementById('save-studio-btn');
const fullscreenBtn = document.getElementById('fullscreen-btn');

// App State
let currentSlideIndex = 0;
let isAudioInitialized = false;
let audioCtx, analyser, source;
let animationFrameId;
let visualizerTheme = 'emerald-gold';
let autoSlideEnabled = true;

// Load Configuration from slides.json if exists
async function loadSlidesConfig() {
  try {
    const response = await fetch('slides.json');
    if (response.ok) {
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        slides = data;
        console.log('Slides configuration loaded successfully.');
      }
    }
  } catch (err) {
    console.warn('Failed to load slides.json. Using local fallback slide data.', err);
  }
  initSlides();
  initStudioTable();
}

// Format Time (seconds -> mm:ss or hh:mm:ss)
function formatTime(seconds) {
  if (isNaN(seconds)) return '00:00';
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  const pad = (num) => String(num).padStart(2, '0');

  if (hrs > 0) {
    return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
  }
  return `${pad(mins)}:${pad(secs)}`;
}

// Inisialisasi Tampilan Slide
function initSlides() {
  // Render Indicators
  slideIndicatorsContainer.innerHTML = '';
  slides.forEach((slide, index) => {
    const indicator = document.createElement('div');
    indicator.className = `indicator ${index === currentSlideIndex ? 'active' : ''}`;
    indicator.title = slide.title;
    indicator.addEventListener('click', () => {
      autoSlideEnabled = false; // Disable temporarily to allow manual jump
      goToSlide(index);
      audio.currentTime = slide.time; // Jump audio to that slide's time
      setTimeout(() => { autoSlideEnabled = true; }, 1000);
    });
    slideIndicatorsContainer.appendChild(indicator);
  });

  renderActiveSlide();
}

// Render the Active Slide content
function renderActiveSlide() {
  const slideData = slides[currentSlideIndex];
  if (!slideData) return;

  let slideHTML = '';

  switch (slideData.type) {
    case 'cover':
      slideHTML = `
        <div class="slide active">
          <div class="slide-cover">
            <span class="badge">Tugas Kuliah Agama Islam</span>
            <h2>${slideData.title}</h2>
            <div class="subtitle">${slideData.subtitle}</div>
            <p class="content-text" style="font-size: 1.15rem; margin-bottom: 2rem; max-width: 600px; line-height: 1.6; color: var(--text-muted);">${slideData.content}</p>
            <div class="speaker-card">
              <p>Dosen / Pembicara</p>
              <h4>${slideData.speaker}</h4>
            </div>
          </div>
        </div>
      `;
      break;

    case 'verse':
      slideHTML = `
        <div class="slide active">
          <div class="slide-verse">
            <div class="verse-header">
              <h2>${slideData.title}</h2>
              <span class="duration-badge">Ayat Al-Qur'an</span>
            </div>
            <div class="arabic-container">
              <p class="arabic-text">${slideData.arabic}</p>
            </div>
            <p class="transliteration-text"><strong>Transliterasi:</strong> ${slideData.transliteration}</p>
            <p class="translation-text"><strong>Terjemahan:</strong> "${slideData.translation}"</p>
          </div>
        </div>
      `;
      break;

    case 'explanation':
      const listItems = slideData.points.map((pt, idx) => `
        <div class="point-item">
          <div class="point-bullet">${idx + 1}</div>
          <div class="point-text">${parseMarkdownStyles(pt)}</div>
        </div>
      `).join('');

      slideHTML = `
        <div class="slide active">
          <div class="slide-explanation">
            <h2>${slideData.title}</h2>
            <div class="points-list">
              ${listItems}
            </div>
          </div>
        </div>
      `;
      break;
  }

  slideDeck.innerHTML = slideHTML;

  // Update Indicators active class
  const indicators = slideIndicatorsContainer.querySelectorAll('.indicator');
  indicators.forEach((ind, index) => {
    if (index === currentSlideIndex) {
      ind.classList.add('active');
    } else {
      ind.classList.remove('active');
    }
  });
}

// Simple parser for **bold** text to HTML strong
function parseMarkdownStyles(text) {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

// Navigate to specific slide index
function goToSlide(index) {
  if (index < 0 || index >= slides.length) return;
  currentSlideIndex = index;
  renderActiveSlide();
}

// Audio Playback & Progress logic
function togglePlay() {
  if (!isAudioInitialized) {
    initAudioContext();
  }

  if (audio.paused) {
    audio.play()
      .then(() => {
        playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
      })
      .catch(err => console.error("Audio playback error:", err));
  } else {
    audio.pause();
    playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
}

// Initialize Web Audio API
function initAudioContext() {
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    source = audioCtx.createMediaElementSource(audio);
    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 256;

    source.connect(analyser);
    analyser.connect(audioCtx.destination);

    isAudioInitialized = true;
    startVisualizer();
    console.log("AudioContext and Analyser initialized.");
  } catch (err) {
    console.error("Web Audio API not supported or blocked:", err);
  }
}

// Audio events
audio.addEventListener('timeupdate', () => {
  const currentTime = audio.currentTime;
  const duration = audio.duration || 0;

  // Update Progress Bar
  const pct = (currentTime / duration) * 100;
  progressFilled.style.width = `${pct}%`;

  // Update Time Display
  timeDisplay.textContent = `${formatTime(currentTime)} / ${formatTime(duration)}`;

  // Update Studio Badge
  currentSecondsBadge.textContent = `Detik saat ini: ${Math.floor(currentTime)}s`;

  // Auto transition slides based on time
  if (autoSlideEnabled) {
    let activeIndex = 0;
    for (let i = 0; i < slides.length; i++) {
      if (currentTime >= slides[i].time) {
        activeIndex = i;
      } else {
        break;
      }
    }

    if (activeIndex !== currentSlideIndex) {
      goToSlide(activeIndex);
      // Highlight matching row in studio mode
      highlightStudioRow(activeIndex);
    }
  }
});

// Click on progress bar to seek
progressContainer.addEventListener('click', (e) => {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  if (duration) {
    audio.currentTime = (clickX / width) * duration;
  }
});

playPauseBtn.addEventListener('click', togglePlay);

// Prev and Next buttons logic
prevBtn.addEventListener('click', () => {
  autoSlideEnabled = false;
  let nextIdx = currentSlideIndex - 1;
  if (nextIdx < 0) nextIdx = slides.length - 1;
  goToSlide(nextIdx);
  audio.currentTime = slides[nextIdx].time;
  setTimeout(() => { autoSlideEnabled = true; }, 1000);
});

nextBtn.addEventListener('click', () => {
  autoSlideEnabled = false;
  let nextIdx = currentSlideIndex + 1;
  if (nextIdx >= slides.length) nextIdx = 0;
  goToSlide(nextIdx);
  audio.currentTime = slides[nextIdx].time;
  setTimeout(() => { autoSlideEnabled = true; }, 1000);
});

// Keypress navigation
document.addEventListener('keydown', (e) => {
  // Ignore keys if typing in input fields
  if (document.activeElement.tagName === 'INPUT') return;

  if (e.key === 'ArrowRight' || e.key === 'Space') {
    e.preventDefault();
    nextBtn.click();
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault();
    prevBtn.click();
  }
});

// Fullscreen toggle (CSS-based + Browser API fallback)
fullscreenBtn.addEventListener('click', () => {
  const isFullscreen = document.body.classList.toggle('presentation-mode');
  if (isFullscreen) {
    fullscreenBtn.innerHTML = '<i class="fa-solid fa-compress"></i> Exit Fullscreen';
  } else {
    fullscreenBtn.innerHTML = '<i class="fa-solid fa-expand"></i> Fullscreen';
  }
});

// CANVAS VISUALIZER RENDERER
let particles = [];
function initParticles() {
  particles = [];
  for (let i = 0; i < 60; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.2
    });
  }
}

function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * window.devicePixelRatio;
  canvas.height = rect.height * window.devicePixelRatio;
  initParticles();
}

// Run canvas resize on load and resize
window.addEventListener('resize', resizeCanvas);
setTimeout(resizeCanvas, 500);

function startVisualizer() {
  if (animationFrameId) cancelAnimationFrame(animationFrameId);

  const ctx = canvas.getContext('2d');
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  function draw() {
    animationFrameId = requestAnimationFrame(draw);
    analyser.getByteFrequencyData(dataArray);

    // Fade effect for trails
    ctx.fillStyle = 'rgba(5, 13, 10, 0.15)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw background particles
    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;

      // Wrap borders
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(245, 158, 11, ${p.opacity})`;
      ctx.shadowBlur = 4;
      ctx.shadowColor = '#f59e0b';
      ctx.fill();
    });
    ctx.shadowBlur = 0; // reset

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const baseRadius = Math.min(canvas.width, canvas.height) * 0.22;

    // Get average volume
    let sum = 0;
    for (let i = 0; i < bufferLength; i++) {
      sum += dataArray[i];
    }
    const averageVolume = sum / bufferLength;
    const volumeMultiplier = 1 + (averageVolume / 255) * 0.4;
    const dynamicRadius = baseRadius * volumeMultiplier;

    // Draw central glowing aura
    const glowGradient = ctx.createRadialGradient(centerX, centerY, baseRadius * 0.5, centerX, centerY, dynamicRadius * 1.5);
    glowGradient.addColorStop(0, 'rgba(16, 185, 129, 0.15)');
    glowGradient.addColorStop(0.5, 'rgba(16, 185, 129, 0.04)');
    glowGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = glowGradient;
    ctx.beginPath();
    ctx.arc(centerX, centerY, dynamicRadius * 1.5, 0, Math.PI * 2);
    ctx.fill();

    // Draw outer decorative Islamic Geometric-like outline (star representation)
    ctx.strokeStyle = 'rgba(245, 158, 11, 0.1)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    const starPoints = 8;
    for (let i = 0; i <= starPoints * 2; i++) {
      const angle = (i * Math.PI) / starPoints;
      const r = i % 2 === 0 ? dynamicRadius * 1.15 : dynamicRadius * 0.85;
      const x = centerX + Math.cos(angle) * r;
      const y = centerY + Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();

    // Draw frequency bars radiating out in circular fashion
    const numBars = 72;
    const barWidth = (2 * Math.PI * dynamicRadius) / numBars * 0.55;

    for (let i = 0; i < numBars; i++) {
      // Map bars index to frequency index
      const freqIdx = Math.floor((i / numBars) * (bufferLength * 0.7));
      const value = dataArray[freqIdx];
      // Normalised height
      const barHeight = (value / 255) * baseRadius * 0.75;

      const angle = (i * 2 * Math.PI) / numBars;
      const xStart = centerX + Math.cos(angle) * dynamicRadius;
      const yStart = centerY + Math.sin(angle) * dynamicRadius;
      const xEnd = centerX + Math.cos(angle) * (dynamicRadius + barHeight);
      const yEnd = centerY + Math.sin(angle) * (dynamicRadius + barHeight);

      // Create neon gradient for bars
      ctx.strokeStyle = i % 2 === 0 ? '#10b981' : '#f59e0b';
      ctx.lineWidth = barWidth;
      ctx.lineCap = 'round';

      ctx.beginPath();
      ctx.moveTo(xStart, yStart);
      ctx.lineTo(xEnd, yEnd);
      ctx.stroke();
    }

    // Inner glowing ring
    ctx.strokeStyle = 'rgba(16, 185, 129, 0.6)';
    ctx.lineWidth = 3;
    ctx.shadowBlur = 12;
    ctx.shadowColor = '#10b981';
    ctx.beginPath();
    ctx.arc(centerX, centerY, dynamicRadius, 0, Math.PI * 2);
    ctx.stroke();

    // Reset shadow for next loops
    ctx.shadowBlur = 0;

    // Draw a neat waveforms layer at the bottom
    ctx.strokeStyle = 'rgba(16, 185, 129, 0.12)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let i = 0; i < canvas.width; i++) {
      const freqIdx = Math.floor((i / canvas.width) * bufferLength);
      const value = dataArray[freqIdx];
      const y = canvas.height - 40 - (value / 255) * 80;
      if (i === 0) ctx.moveTo(i, y);
      else ctx.lineTo(i, y);
    }
    ctx.stroke();
  }

  draw();
}

// Fallback idle visualizer (before audio plays)
function startIdleVisualizer() {
  const ctx = canvas.getContext('2d');
  let angle = 0;

  function drawIdle() {
    if (isAudioInitialized) return; // Stop if Web Audio kicks in

    animationFrameId = requestAnimationFrame(drawIdle);

    ctx.fillStyle = 'rgba(5, 13, 10, 0.2)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const baseRadius = Math.min(canvas.width, canvas.height) * 0.22;

    // Pulse slightly based on timer
    angle += 0.02;
    const dynamicRadius = baseRadius + Math.sin(angle) * 8;

    // Circular glowing ring
    ctx.strokeStyle = 'rgba(16, 185, 129, 0.25)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(centerX, centerY, dynamicRadius, 0, Math.PI * 2);
    ctx.stroke();

    // Islamic star representation
    ctx.strokeStyle = 'rgba(245, 158, 11, 0.06)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    const starPoints = 8;
    for (let i = 0; i <= starPoints * 2; i++) {
      const a = (i * Math.PI) / starPoints + (angle * 0.05);
      const r = i % 2 === 0 ? dynamicRadius * 1.12 : dynamicRadius * 0.88;
      const x = centerX + Math.cos(a) * r;
      const y = centerY + Math.sin(a) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();

    // Simple instruction text in visualizer
    ctx.font = '14px Outfit';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.textAlign = 'center';
    ctx.fillText('Klik tombol Play untuk memulai', centerX, centerY + 5);
  }

  drawIdle();
}

// STUDIO SYNC TABLE & CONTROLS
studioToggleBtn.addEventListener('click', () => {
  studioPanel.classList.toggle('active');
  studioToggleBtn.classList.toggle('btn-primary');
});

function initStudioTable() {
  studioTableBody.innerHTML = '';
  slides.forEach((slide, idx) => {
    const row = document.createElement('tr');
    row.id = `studio-row-${idx}`;
    row.innerHTML = `
      <td><strong>${slide.id}</strong></td>
      <td>${slide.title}</td>
      <td>
        <input type="number" id="studio-time-${idx}" value="${slide.time}" min="0" step="1"> s
      </td>
      <td>
        <button class="btn btn-accent" style="padding: 0.25rem 0.5rem; font-size: 0.75rem;" onclick="setStudioTimeToNow(${idx})">
          <i class="fa-solid fa-clock"></i> Set ke Detik Ini
        </button>
      </td>
    `;
    studioTableBody.appendChild(row);
  });
}

// Exposed globally so the onclick in dynamic HTML row works
window.setStudioTimeToNow = function(idx) {
  const currentSeconds = Math.floor(audio.currentTime);
  const input = document.getElementById(`studio-time-${idx}`);
  if (input) {
    input.value = currentSeconds;
    slides[idx].time = currentSeconds;
  }
};

function highlightStudioRow(activeIdx) {
  for (let i = 0; i < slides.length; i++) {
    const row = document.getElementById(`studio-row-${i}`);
    if (row) {
      if (i === activeIdx) {
        row.style.background = 'rgba(16, 185, 129, 0.1)';
        row.style.borderLeft = '3px solid var(--color-primary)';
      } else {
        row.style.background = 'transparent';
        row.style.borderLeft = 'none';
      }
    }
  }
}

// Save Studio changes and generate downloadable slides.json
saveStudioBtn.addEventListener('click', () => {
  // Update times from inputs
  slides.forEach((slide, idx) => {
    const input = document.getElementById(`studio-time-${idx}`);
    if (input) {
      slide.time = parseInt(input.value) || 0;
    }
  });

  // Sort slides by time to keep order correct
  slides.sort((a, b) => a.time - b.time);

  // Re-init slides with new times
  initSlides();
  initStudioTable();

  // Create downloadable file
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(slides, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", "slides.json");
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();

  alert("Konfigurasi waktu slide telah diperbarui!\nFile 'slides.json' baru telah diunduh. Silakan ganti file 'slides.json' yang lama di folder 'Agama' dengan file ini agar perubahan tersimpan permanen.");
});

// App Startup
window.addEventListener('load', () => {
  loadSlidesConfig();
  startIdleVisualizer();
});
