import {
  BriefcaseBusiness,
  Compass,
  Heart,
  Moon,
  NotebookPen,
  Sparkles,
  Star,
} from 'lucide-react';

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Zodiac', href: '#zodiac' },
  { label: 'Booking', href: '#booking' },
];

export const heroHighlights = [
  {
    title: 'Intuitive Tarot Guidance',
    copy: 'Insightful readings that translate symbolism into grounded next steps.',
  },
  {
    title: 'Private Spiritual Space',
    copy: 'A calm, elegant session designed for emotional clarity and trust.',
  },
  {
    title: 'Cosmic Pattern Reading',
    copy: 'Tarot and zodiac wisdom woven together for layered perspective.',
  },
];

export const aboutPillars = [
  {
    title: 'Intuitive Presence',
    copy: 'Every session is guided with sensitivity to the energy behind the words.',
  },
  {
    title: 'Symbolic Depth',
    copy: 'Tarot, lunar timing, and zodiac patterns are translated into meaningful insight.',
  },
  {
    title: 'Gentle Honesty',
    copy: 'Messages are delivered with warmth, but never at the expense of truth.',
  },
];

export const services = [
  {
    id: 'love-reading',
    title: 'Love Reading',
    icon: Heart,
    accent: 'from-rose-300/20 via-cosmic-800/40 to-cosmic-gold/15',
    summary:
      'Reveal emotional patterns, relationship energy, and the next chapter your heart is moving toward.',
    duration: '45 minute private session',
    includes: [
      'Relationship dynamics and emotional compatibility insight.',
      'Guidance for healing old loops, mixed signals, or unspoken fears.',
      'Clarity on what the connection is teaching you right now.',
    ],
    idealFor:
      'Those navigating attraction, reconnection, uncertainty, or a desire to understand love with more depth.',
    ritual:
      'A heart-centered spread that uncovers what is felt beneath the surface and where tenderness needs to lead.',
  },
  {
    id: 'career-guidance',
    title: 'Career Guidance',
    icon: BriefcaseBusiness,
    accent: 'from-cyan-300/18 via-cosmic-800/40 to-cosmic-gold/15',
    summary:
      'Understand where your work energy is flowing, what is blocked, and which opportunities deserve your focus.',
    duration: '45 minute strategy and energy session',
    includes: [
      'Insight into current momentum, delays, and hidden opportunities.',
      'Clarity around job shifts, leadership choices, and decision timing.',
      'A grounded reading for ambition, confidence, and aligned action.',
    ],
    idealFor:
      'Professionals, founders, creatives, and seekers standing at a crossroads or craving sharper direction.',
    ritual:
      'A forward-looking spread designed to balance intuition with practical next steps and timing awareness.',
  },
  {
    id: 'general-reading',
    title: 'General Reading',
    icon: Compass,
    accent: 'from-violet-300/18 via-cosmic-800/40 to-cosmic-gold/15',
    summary:
      'A spacious reading for the season of life you are in, uncovering themes, lessons, and energetic movement.',
    duration: '60 minute intuitive guidance session',
    includes: [
      'A broad energetic overview of your current chapter.',
      'Messages on relationships, career, emotional wellbeing, and inner growth.',
      'A closing oracle-style reflection to anchor the reading.',
    ],
    idealFor:
      'Anyone wanting a deeper understanding of what life is asking from them right now.',
    ritual:
      'An expansive spread that allows the cards to highlight the lesson, invitation, and path of alignment.',
  },
];

export const readingPacks = [
  {
    id: 'single-question',
    title: 'One Question Pack',
    questions: '1 Question',
    price: '₹222',
    note: 'A precise reading for one clear concern, decision, or emotional knot.',
    bookingPrompt: 'Bring one focused question and let the cards answer it with precision.',
  },
  {
    id: 'three-question',
    title: 'Three Question Pack',
    questions: '3 Questions',
    price: '₹555',
    note: 'A fuller spread for layered guidance across three connected questions.',
    bookingPrompt:
      'Ideal when your situation has multiple layers and you want a more spacious reading.',
  },
];

export const zodiacSigns = [
  {
    id: 'aries',
    name: 'Aries',
    glyph: '♈',
    element: 'Fire',
    modality: 'Cardinal',
    focus: 'Initiation, courage, and clean first moves.',
    ritual: 'Light the candle, choose the daring path, and move before doubt speaks.',
    message:
      'Bold beginnings are favored. Initiate the conversation, launch the idea, and trust your fire to lead with purpose.',
  },
  {
    id: 'taurus',
    name: 'Taurus',
    glyph: '♉',
    element: 'Earth',
    modality: 'Fixed',
    focus: 'Devotion, stability, and embodied abundance.',
    ritual: 'Anchor into one nourishing choice and let consistency do the enchanting.',
    message:
      'Steady devotion creates abundance. Choose the path that feels nourishing, not just the one that feels safe.',
  },
  {
    id: 'gemini',
    name: 'Gemini',
    glyph: '♊',
    element: 'Air',
    modality: 'Mutable',
    focus: 'Messages, ideas, and mental movement.',
    ritual: 'Write the repeated thought down before it slips back into the wind.',
    message:
      'A message is trying to reach you twice. Listen for the repeated sign, the echoed phrase, the unfinished thought.',
  },
  {
    id: 'cancer',
    name: 'Cancer',
    glyph: '♋',
    element: 'Water',
    modality: 'Cardinal',
    focus: 'Emotional truth, intuition, and care.',
    ritual: 'Name what you feel before you try to make it prettier or smaller.',
    message:
      'Your sensitivity is strategy, not weakness. The truth reveals itself when you stop apologizing for what you feel.',
  },
  {
    id: 'leo',
    name: 'Leo',
    glyph: '♌',
    element: 'Fire',
    modality: 'Fixed',
    focus: 'Visibility, confidence, and heart-led expression.',
    ritual: 'Stand where your gifts can actually be seen, then let warmth do the rest.',
    message:
      'Take up more space in your own story. Confidence returns when you remember how radiant your presence already is.',
  },
  {
    id: 'virgo',
    name: 'Virgo',
    glyph: '♍',
    element: 'Earth',
    modality: 'Mutable',
    focus: 'Refinement, healing, and practical grace.',
    ritual: 'Edit the smallest detail and trust the ripple it creates.',
    message:
      'Refinement is sacred now. What looks like a small adjustment may become the shift that changes everything.',
  },
  {
    id: 'libra',
    name: 'Libra',
    glyph: '♎',
    element: 'Air',
    modality: 'Cardinal',
    focus: 'Reciprocity, beauty, and honest balance.',
    ritual: 'Protect the peace you want by telling the truth that keeps being delayed.',
    message:
      'Harmony begins with honesty. The balance you want asks for a boundary, not another compromise.',
  },
  {
    id: 'scorpio',
    name: 'Scorpio',
    glyph: '♏',
    element: 'Water',
    modality: 'Fixed',
    focus: 'Transformation, desire, and sacred depth.',
    ritual: 'Release the version of the story that only survives by staying hidden.',
    message:
      'Transformation is already underway. Release the version of the story that no longer protects your growth.',
  },
  {
    id: 'sagittarius',
    name: 'Sagittarius',
    glyph: '♐',
    element: 'Fire',
    modality: 'Mutable',
    focus: 'Expansion, meaning, and adventurous faith.',
    ritual: 'Choose the route that widens your spirit, not merely your schedule.',
    message:
      'Your spirit wants expansion. Say yes to movement, study, travel, or the perspective that widens your inner world.',
  },
  {
    id: 'capricorn',
    name: 'Capricorn',
    glyph: '♑',
    element: 'Earth',
    modality: 'Cardinal',
    focus: 'Legacy, structure, and long-view discipline.',
    ritual: 'Build the next step with devotion, not urgency, and let time become your ally.',
    message:
      'Long-term vision is your strength. Build slowly, but build toward the life that actually honors your standards.',
  },
  {
    id: 'aquarius',
    name: 'Aquarius',
    glyph: '♒',
    element: 'Air',
    modality: 'Fixed',
    focus: 'Innovation, freedom, and future-facing truth.',
    ritual: 'Say the unusual thing out loud and make space for the room to catch up.',
    message:
      'Innovation arrives through authenticity. Share the idea that feels unusual; it may be the one that changes the room.',
  },
  {
    id: 'pisces',
    name: 'Pisces',
    glyph: '♓',
    element: 'Water',
    modality: 'Mutable',
    focus: 'Dreams, softness, and intuitive surrender.',
    ritual: 'Rest long enough to hear the message beneath the noise.',
    message:
      'Your intuition is speaking through subtle feeling. Rest, dream, and notice what keeps returning in quiet moments.',
  },
];

export const readingTouchpoints = [
  {
    title: 'Moon-led clarity',
    icon: Moon,
    copy: 'Every reading honors timing, emotional rhythm, and what your spirit is ready to receive.',
  },
  {
    title: 'Sacred note-taking',
    icon: NotebookPen,
    copy: 'Key messages are held with care so insights feel memorable and actionable.',
  },
  {
    title: 'Star-guided tone',
    icon: Star,
    copy: 'The experience stays luminous, elegant, and deeply personal from start to finish.',
  },
];
