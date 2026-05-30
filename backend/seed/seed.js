require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') });
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const User = require('../models/User');
const Trainer = require('../models/Trainer');
const Class = require('../models/Class');
const Membership = require('../models/Membership');
const Testimonial = require('../models/Testimonial');

const seed = async () => {
  await connectDB();

  await Promise.all([
    User.deleteMany({}),
    Trainer.deleteMany({}),
    Class.deleteMany({}),
    Membership.deleteMany({}),
    Testimonial.deleteMany({})
  ]);

  const trainers = await Trainer.insertMany([
    {
      name: 'Marcus Cole',
      role: 'Founder & Head Coach',
      specialty: 'Strength & Conditioning',
      bio: 'Former Division I athlete with 12+ years of coaching experience. Marcus founded Iron Peak to create a space where science meets sweat.',
      achievements: ['NSCA Certified', 'CrossFit Level 3', 'Published in Strength Journal'],
      experience: '12 yrs',
      clients: '500+',
      rating: '4.9',
      image: 'assets/images/trainers/marcus-cole.jpg',
      filterTags: ['strength', 'hiit'],
      featured: true,
      order: 1
    },
    {
      name: 'Aria Sharma',
      role: 'CrossFit & HIIT Lead',
      specialty: 'CrossFit & HIIT',
      bio: 'Regional CrossFit champion who turned her competitive edge into coaching excellence. Her classes are legendary and not for the faint of heart.',
      achievements: ['CrossFit Level 2', 'Regional Champion 2022', 'CF-L1 Trainer'],
      experience: '5 yrs',
      clients: '210+',
      rating: '4.8',
      image: 'assets/images/trainers/aria-sharma.jpg',
      filterTags: ['crossfit', 'hiit'],
      featured: true,
      order: 2
    },
    {
      name: 'Zara Knox',
      role: 'Head Yoga and Wellness Coach',
      specialty: 'Yoga & Mindfulness',
      bio: 'Trained in Rishikesh, India. Zara brings ancient wisdom and modern science together in sessions that transform both body and mind.',
      achievements: ['RYT-500', 'Yoga Alliance Certified', 'Meditation Instructor'],
      experience: '10 yrs',
      clients: '180+',
      rating: '5.0',
      image: 'assets/images/trainers/zara-knox.jpg',
      filterTags: ['yoga'],
      featured: true,
      order: 3
    },
    {
      name: 'Leon Voss',
      role: 'Strength and Performance Director',
      specialty: 'Powerlifting & Mobility',
      bio: 'German strength athlete turned coach. Leon programs with precision and coaches with intensity — every rep has a purpose.',
      achievements: ['IPF World Champion', 'German National Record Holder', 'DVS-Certified'],
      experience: '9 yrs',
      clients: '300+',
      rating: '4.9',
      image: 'assets/images/trainers/leon-voss.jpg',
      filterTags: ['strength'],
      featured: true,
      order: 4
    },
    {
      name: 'Damon Pierce',
      role: 'HIIT & Cardio Specialist',
      specialty: 'HIIT & Endurance',
      bio: 'Former track athlete who brings explosive energy to every session. Damon will push you past your limits.',
      achievements: ['ACSM Certified', 'Track & Field Coach', 'Nutrition Specialist'],
      experience: '7 yrs',
      clients: '250+',
      rating: '4.9',
      image: 'assets/images/trainers/damon-pierce.jpg',
      filterTags: ['hiit'],
      order: 5
    },
    {
      name: 'Selena Park',
      role: 'Yoga & Mobility Coach',
      specialty: 'Vinyasa & Recovery',
      bio: 'Selena blends traditional Korean healing practices with modern mobility science for a unique approach to wellness.',
      achievements: ['RYT-300', 'Thai Massage Certified', 'Fascial Stretch Specialist'],
      experience: '6 yrs',
      clients: '150+',
      rating: '4.8',
      image: 'assets/images/trainers/selena-park.jpg',
      filterTags: ['yoga'],
      order: 6
    },
    {
      name: 'Rhys Calloway',
      role: 'CrossFit Coach',
      specialty: 'Olympic Lifting & WOD',
      bio: 'Rhys brings competitive fire and technical precision to every WOD. Watch your numbers climb session after session.',
      achievements: ['CrossFit Level 2', 'USAW Certified', 'Games Quarterfinalist'],
      experience: '6 yrs',
      clients: '190+',
      rating: '4.9',
      image: 'assets/images/trainers/rhys-calloway.jpg',
      filterTags: ['crossfit', 'strength'],
      order: 7
    },
    {
      name: 'Nadia Osei',
      role: 'Strength & HIIT Coach',
      specialty: 'Strength & Conditioning',
      bio: 'Nadia brings energy, expertise, and an unbeatable smile to every class. She believes fitness should be challenging and fun.',
      achievements: ['NSCA-CPT', 'Precision Nutrition Coach', 'Spartan SGX Coach'],
      experience: '4 yrs',
      clients: '120+',
      rating: '4.7',
      image: 'assets/images/trainers/nadia-osei.jpg',
      filterTags: ['strength', 'hiit'],
      order: 8
    }
  ]);

  const classes = await Class.insertMany([
    {
      name: 'HIIT Ignite',
      description: 'High-intensity intervals designed to torch calories and spike your metabolism. Maximum effort, maximum results.',
      category: 'HIIT',
      duration: '45 min',
      calories: '500-700',
      level: 'All Levels',
      trainer: 'Damon Pierce',
      image: 'assets/images/classes/hiit.jpg',
      schedule: [
        { day: 'Monday', time: '6:00 AM' },
        { day: 'Monday', time: '7:00 AM' },
        { day: 'Wednesday', time: '6:00 AM' },
        { day: 'Wednesday', time: '7:00 AM' },
        { day: 'Friday', time: '6:00 AM' },
        { day: 'Friday', time: '7:00 AM' }
      ],
      order: 1
    },
    {
      name: 'Iron Forge',
      description: 'Heavy compound lifts and progressive overload. Build raw strength with expert guidance and peer intensity.',
      category: 'Strength',
      duration: '60 min',
      calories: '400-600',
      level: 'Intermediate',
      trainer: 'Marcus Cole',
      image: 'assets/images/classes/iron-forge.jpg',
      schedule: [
        { day: 'Monday', time: '8:00 AM' },
        { day: 'Tuesday', time: '6:00 AM' },
        { day: 'Wednesday', time: '8:00 AM' },
        { day: 'Thursday', time: '6:00 AM' },
        { day: 'Friday', time: '8:00 AM' }
      ],
      order: 2
    },
    {
      name: 'Zen Yoga',
      description: 'Slow flow and deep stretch. Find balance, improve flexibility, and quiet the mind.',
      category: 'Yoga',
      duration: '50 min',
      calories: '200-350',
      level: 'All Levels',
      trainer: 'Zara Knox',
      image: 'assets/images/classes/zen-yoga.jpg',
      schedule: [
        { day: 'Monday', time: '9:00 AM' },
        { day: 'Tuesday', time: '7:00 AM' },
        { day: 'Wednesday', time: '9:00 AM' },
        { day: 'Thursday', time: '7:00 AM' },
        { day: 'Saturday', time: '8:00 AM' }
      ],
      order: 3
    },
    {
      name: 'Velocity',
      description: 'Speed, agility, and quick-burst conditioning. Built for athletes who want to move faster and perform better.',
      category: 'HIIT',
      duration: '40 min',
      calories: '450-650',
      level: 'Advanced',
      trainer: 'Damon Pierce',
      image: 'assets/images/classes/velocity.jpg',
      schedule: [
        { day: 'Tuesday', time: '8:00 AM' },
        { day: 'Thursday', time: '8:00 AM' },
        { day: 'Saturday', time: '7:00 AM' }
      ],
      order: 4
    },
    {
      name: 'Apex WOD',
      description: 'CrossFit-style workout of the day. Constantly varied functional movements performed at high intensity.',
      category: 'CrossFit',
      duration: '55 min',
      calories: '500-800',
      level: 'All Levels',
      trainer: 'Aria Sharma',
      image: 'assets/images/classes/apex-wod.jpg',
      schedule: [
        { day: 'Monday', time: '5:00 PM' },
        { day: 'Wednesday', time: '5:00 PM' },
        { day: 'Friday', time: '5:00 PM' },
        { day: 'Saturday', time: '9:00 AM' }
      ],
      order: 5
    },
    {
      name: 'Peak Power',
      description: 'Olympic lifting technique and power development. For those who want to lift heavier, jump higher, and move stronger.',
      category: 'CrossFit',
      duration: '60 min',
      calories: '400-600',
      level: 'Advanced',
      trainer: 'Rhys Calloway',
      image: 'assets/images/classes/peak-power.jpg',
      schedule: [
        { day: 'Tuesday', time: '5:00 PM' },
        { day: 'Thursday', time: '5:00 PM' },
        { day: 'Saturday', time: '10:00 AM' }
      ],
      order: 6
    },
    {
      name: 'Power Lift',
      description: 'Focused strength training with squats, deadlifts, and bench press. Track your progress and break your personal records.',
      category: 'Strength',
      duration: '50 min',
      calories: '350-500',
      level: 'Beginner',
      trainer: 'Leon Voss',
      image: 'assets/images/classes/power-lift.jpg',
      schedule: [
        { day: 'Wednesday', time: '6:00 PM' },
        { day: 'Friday', time: '6:00 PM' },
        { day: 'Sunday', time: '9:00 AM' }
      ],
      order: 7
    }
  ]);

  const memberships = await Membership.insertMany([
    {
      name: 'Essential',
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        'Access to gym during staffed hours',
        'Locker room & shower access',
        'Free fitness assessment',
        'One group class per week',
        'Mobile app access',
        'Cancel anytime'
      ],
      order: 1
    },
    {
      name: 'Elite',
      monthlyPrice: 59,
      annualPrice: 590,
      features: [
        '24/7 gym access',
        'Unlimited group classes',
        'Two personal training sessions/month',
        'Nutrition planning guide',
        'Guest passes (2/month)',
        'Priority class booking',
        'Sauna & recovery area access',
        'Cancel anytime'
      ],
      featured: true,
      order: 2
    },
    {
      name: 'Legend',
      monthlyPrice: 99,
      annualPrice: 990,
      features: [
        'Everything in Elite',
        'Unlimited personal training',
        'Custom meal plans',
        'Monthly body composition analysis',
        'Recovery protocol access',
        'Exclusive Legend events',
        'Free merchandise pack',
        'Partner membership included',
        'Cancel anytime'
      ],
      order: 3
    }
  ]);

  const testimonials = await Testimonial.insertMany([
    {
      name: 'James Mitchell',
      role: 'Member since 2023',
      text: 'Iron Peak completely changed my relationship with fitness. The coaches truly care about your progress and the community is unreal.',
      rating: 5,
      featured: true,
      order: 1
    },
    {
      name: 'Priya Nair',
      role: 'Elite Member',
      text: 'The variety of classes keeps me coming back. One day I am lifting heavy in Iron Forge, the next I am finding center in Zen Yoga. Never bored.',
      rating: 5,
      featured: true,
      order: 2
    },
    {
      name: 'Elena Rossi',
      role: 'Legend Member',
      text: 'The personal training and nutrition coaching took my results to another level. I have never felt stronger or more confident.',
      rating: 5,
      featured: true,
      order: 3
    },
    {
      name: 'Derek Wu',
      role: 'Member since 2024',
      text: 'Best decision I made this year. Dropped 20 lbs in 3 months with the HIIT program. Damon is an incredible coach.',
      rating: 5,
      featured: true,
      order: 4
    }
  ]);

  console.log('Seed complete:');
  console.log(`  ${trainers.length} trainers`);
  console.log(`  ${classes.length} classes`);
  console.log(`  ${memberships.length} memberships`);
  console.log(`  ${testimonials.length} testimonials`);

  process.exit(0);
};

seed().catch(err => {
  console.error('Seed error:', err);
  process.exit(1);
});
