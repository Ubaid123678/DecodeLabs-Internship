const TRAINERS = [
  {
    name: 'Marcus Cole',
    specialty: 'Strength & Power',
    role: 'Co-Founder',
    exp: '8 yrs',
    clients: '240+',
    rating: '4.9*',
    grad: 'grad-1',
    bio: 'Marcus Cole has spent eight years engineering elite athletic performance at Iron Peak. Beginning as a competitive powerlifter, he channelled that experience into a coaching philosophy that fuses raw intensity with intelligent programming. His training blocks have produced measurable PRs for hundreds of members across every fitness level.',
    achievements: [
      'NSCA Certified Strength & Conditioning Specialist',
      '3x Regional Powerlifting Champion',
      'Iron Peak Co-Founder & Head Trainer since 2016',
      '240+ clients with documented body composition improvements'
    ],
    certs: ['NSCA-CSCS', 'USAW Level 2', 'FMS Level 2', 'Precision Nutrition'],
    availability: [1, 1, 0, 1, 1, 0, 0]
  },
  {
    name: 'Aria Sharma',
    specialty: 'Yoga & Mindfulness',
    role: 'Head Yoga Coach',
    exp: '10 yrs',
    clients: '180+',
    rating: '5.0*',
    grad: 'grad-2',
    bio: 'Aria weaves ancient yogic wisdom with contemporary wellness science across every session she leads. Her classes leave students stronger in body and quieter in mind. Over a decade of teaching has given her an unmatched ability to read a room and adapt the practice to wherever students are on a given day.',
    achievements: [
      'RYT-500 Registered Yoga Teacher',
      'Mindfulness-Based Stress Reduction Certified',
      'Yin & Restorative Yoga Advanced Training',
      'Featured in Wellness Quarterly Magazine'
    ],
    certs: ['RYT-500', 'MBSR', 'Yin Yoga', 'Ayurveda L1'],
    availability: [1, 1, 1, 0, 1, 1, 0]
  },
  {
    name: 'Zara Knox',
    specialty: 'CrossFit & HIIT',
    role: 'CrossFit Lead',
    exp: '5 yrs',
    clients: '210+',
    rating: '4.8*',
    grad: 'grad-3',
    bio: 'Zara turns ordinary workouts into extraordinary breakthroughs with a coaching style that is as precise as it is electric. Her CrossFit programming has redefined what members think is possible. She holds CF-L3 certification and has competed at the Sanctionals level, bringing that competitive edge into every class.',
    achievements: [
      'CrossFit Level 3 Trainer (CF-L3)',
      'Sanctionals Competitor 2022 & 2023',
      'HIIT & Metabolic Conditioning Specialist',
      'Iron Peak Athlete of the Year 2023'
    ],
    certs: ['CF-L3', 'HIIT Specialist', 'CPR/AED', 'Kettlebell L2'],
    availability: [1, 0, 1, 1, 0, 1, 1]
  },
  {
    name: 'Leon Voss',
    specialty: 'Nutrition',
    role: 'Co-Founder',
    exp: '7 yrs',
    clients: '155+',
    rating: '4.9*',
    grad: 'grad-4',
    bio: 'Leon decodes the science of eating to fuel peak performance across every body type and goal. His individualized nutrition plans are the secret weapon behind Iron Peak\'s best transformations. He holds an MSc in Sports Nutrition and is co-creator of the Iron Peak 12-Week Body Recomposition Protocol.',
    achievements: [
      'MSc Sports Nutrition - Loughborough University',
      'Precision Nutrition Level 2 Coach',
      'Iron Peak 12-Week Protocol Co-Creator',
      'Published in Journal of Strength & Conditioning Research'
    ],
    certs: ['MSc Sports Nutrition', 'PN Level 2', 'CISSN', 'NLP Practitioner'],
    availability: [0, 1, 1, 1, 0, 1, 0]
  },
  {
    name: 'Damon Pierce',
    specialty: 'Combat Sports',
    role: 'MMA & Boxing',
    exp: '6 yrs',
    clients: '130+',
    rating: '4.7*',
    grad: 'grad-5',
    bio: 'Damon brings pro-fighter discipline to every session, regardless of whether the client steps into a ring or not. From beginners to competitive athletes, his combat conditioning builds toughness inside and out. Damon fought professionally at middleweight before transitioning to coaching full-time in 2018.',
    achievements: [
      'Former Professional MMA Fighter (8-2 Record)',
      'NASM Certified Personal Trainer',
      'Boxing & Muay Thai Level 3 Coach',
      'Iron Peak Combat Academy Founder'
    ],
    certs: ['NASM-CPT', 'Boxing L3', 'Muay Thai L3', 'First Aid'],
    availability: [1, 1, 0, 0, 1, 1, 0]
  },
  {
    name: 'Selena Park',
    specialty: 'HIIT & Cardio',
    role: 'Cardio Specialist',
    exp: '4 yrs',
    clients: '175+',
    rating: '4.8*',
    grad: 'grad-6',
    bio: 'Selena\'s high-energy HIIT sessions are legendary at Iron Peak, drawing a consistent waitlist every week. Her cardio protocols maximise calorie burn while preserving lean muscle at every fitness level. She designed Iron Peak\'s signature 45-minute Cardio Ignite class, which has become the gym\'s most-attended offering.',
    achievements: [
      'ACE Certified Group Fitness Instructor',
      'Creator of Iron Peak\'s Cardio Ignite Program',
      'Spinning & Indoor Cycling Certified',
      '175+ clients with measured VO2 max improvements'
    ],
    certs: ['ACE-GFI', 'Spinning Certified', 'TRX Suspension', 'AFAA Group Ex'],
    availability: [1, 1, 1, 1, 0, 0, 1]
  },
  {
    name: 'Rhys Calloway',
    specialty: 'Strength',
    role: 'Powerlifting Coach',
    exp: '9 yrs',
    clients: '200+',
    rating: '4.9*',
    grad: 'grad-7',
    bio: 'Rhys has coached national-level powerlifters and weekend warriors alike with equal precision and care. His no-nonsense periodization builds the kind of strength that lasts a lifetime. Nine years on the platform as both competitor and coach give him a uniquely tactical perspective on progressive overload.',
    achievements: [
      'IPF Certified Powerlifting Coach',
      'NSCA-CSCS with Honours',
      'National Masters Powerlifting Bronze Medalist',
      'Iron Peak Strength Program Head Architect'
    ],
    certs: ['IPF Coach', 'NSCA-CSCS', 'StrongFirst SFG', 'Rehab & Prehab L2'],
    availability: [0, 1, 0, 1, 1, 0, 1]
  },
  {
    name: 'Nadia Osei',
    specialty: 'Yoga & Recovery',
    role: 'Wellness Expert',
    exp: '6 yrs',
    clients: '160+',
    rating: '5.0*',
    grad: 'grad-8',
    bio: 'Nadia specialises in restorative yoga and active recovery protocols that help athletes perform longer and recover faster between sessions. Her holistic approach draws from somatic movement, breathwork, and evidence-based recovery science. She is the architect of Iron Peak\'s weekly Recovery Lab programme.',
    achievements: [
      'RYT-500 with Restorative Specialisation',
      'Somatic Movement Educator (SME)',
      'Iron Peak Recovery Lab Founder',
      'Featured Speaker at Global Wellness Summit 2023'
    ],
    certs: ['RYT-500', 'Somatic Ed.', 'Breathwork L2', 'Sport Massage'],
    availability: [1, 0, 1, 0, 1, 1, 1]
  }
];

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function initModal() {
  const overlay = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close');
  const cards = document.querySelectorAll('.trainer-card');

  if (!overlay || !closeBtn || !cards.length) {
    return;
  }

  function openModal(idx) {
    const trainer = TRAINERS[idx];
    if (!trainer) return;

    document.getElementById('modal-trainer-name').textContent = trainer.name;
    document.getElementById('modal-specialty').textContent = trainer.specialty;
    document.getElementById('modal-bio').textContent = trainer.bio;

    const achievements = document.getElementById('modal-achievements');
    achievements.innerHTML = trainer.achievements.map((item) => `<li>${item}</li>`).join('');

    const certs = document.getElementById('modal-certs');
    certs.innerHTML = trainer.certs.map((item) => `<span class="cert-pill">${item}</span>`).join('');

    const schedule = document.getElementById('modal-schedule');
    schedule.innerHTML = DAYS.map((day, i) => `<div class="day-cell${trainer.availability[i] ? ' active' : ''}">${day}</div>`).join('');

    const stats = document.getElementById('modal-stats');
    stats.innerHTML = `
      <div class="modal-stat"><span class="val">${trainer.exp}</span><span class="lbl">Experience</span></div>
      <div class="modal-stat"><span class="val">${trainer.clients}</span><span class="lbl">Clients</span></div>
      <div class="modal-stat"><span class="val">${trainer.rating}</span><span class="lbl">Rating</span></div>
    `;

    const visual = document.querySelector('.modal-visual');
    visual.className = `modal-visual ${trainer.grad}`;

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  cards.forEach((card, index) => {
    card.addEventListener('click', () => openModal(Number(card.dataset.index || index)));
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View ${TRAINERS[index].name} profile`);
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openModal(Number(card.dataset.index || index));
      }
    });
  });

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && overlay.classList.contains('open')) {
      closeModal();
    }
  });

  overlay.addEventListener('keydown', (event) => {
    if (event.key !== 'Tab' || !overlay.classList.contains('open')) return;
    const focusable = Array.from(overlay.querySelectorAll('button,a,[tabindex]'));
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey) {
      if (document.activeElement === first) {
        event.preventDefault();
        last.focus();
      }
    } else if (document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
}

document.addEventListener('DOMContentLoaded', initModal);
