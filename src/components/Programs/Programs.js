import Link from 'next/link';
import {
  FaHospital,
  FaTint,
  FaHandshake,
  FaSeedling,
  FaPrayingHands,
  FaPills,
  FaBrain,
  FaHome,
  FaBook,
  FaHandsHelping,
  FaUniversity,
  FaGift
} from 'react-icons/fa';

import { GiCorn, GiFoodChain } from 'react-icons/gi';

const programs = [
  {
    category: 'Healthcare',
    title: 'Medical & Psychosocial Support',
    desc: 'Ensuring medication adherence, affordability, and access for elderly. Providing psychosocial health support and mental wellbeing interventions.',
    icon: <FaHospital />,
    iconBg: '#E8F5E9',
    img: '/images/program1.jpeg',
  },
 {
  category: 'Food Security',
  title: 'Food & Nutrition Programs',
  desc: 'Regular distribution of foodstuffs and relief food to three target communities in partnership with DCC office and county government.',
  icon: <GiCorn />,
  iconBg: '#FFF3E0',
  img: '/images/program2.jpeg',
},
  {
    category: 'Water & Sanitation',
    title: 'Water Access & WASH',
    desc: 'Distributing water boosters and working with Samburu County Government to ensure safe water availability for the elderly in all target areas.',
    icon: <FaTint />,
    iconBg: '#E3F2FD',
    img: '/images/program3.jpeg',
  },
  {
    category: 'Social Care',
    title: 'Community & Social Inclusion',
    desc: 'Involving elderly in cultural festivals, birthday celebrations, and community activities to fight isolation and promote dignity.',
    icon: <FaHandshake />,
    iconBg: '#FCE4EC',
    img: '/images/program4.jpeg',
  },
  {
    category: 'Livelihoods',
    title: 'Income Generating Activities',
    desc: 'Initiating sustainable IGA projects for elderly persons and their families to ensure long-term economic resilience and independence.',
    icon: <FaSeedling />,
    iconBg: '#F3E5F5',
    img: '/images/program5.jpeg',
  },
  {
    category: 'Spiritual Care',
    title: 'Spiritual & Faith Support',
    desc: 'Addressing spiritual poverty through ordained pastors and laypeople providing comfort, evangelization, and faith-based counselling.',
    icon: <FaPrayingHands />,
    iconBg: '#FFF8E1',
    img: '/images/program6.jpeg',
  },
];

const goals = [
  { icon: <FaPills />, text: 'Medication Access & Adherence' },
  { icon: <FaBrain />, text: 'Psychosocial Wellbeing' },
  { icon: <FaHome />, text: 'Basic Needs Provision' },
  { icon: <FaTint />, text: 'Water & Sanitation' },
  { icon: <FaBook />, text: 'Capacity Building' },
  { icon: <FaHandsHelping />, text: 'Social Care' },
  { icon: <FaGift />, text: 'Food Security' },
  { icon: <FaUniversity />, text: 'Institutional Strengthening' },
];

export default function Programs() {
  return (
    <section className="programs section-padding" id="programs">
      <div className="container">
        <div className="programs-header">
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Our Programs & Activities</h2>
          <p className="section-subtitle programs-subtitle">
            Comprehensive, community-centered programs designed to address every dimension of an elderly person's wellbeing — from nutrition to spirituality.
          </p>
        </div>

        <div className="programs-grid">
          {programs.map((p, i) => (
            <div key={i} className="program-card">
              <div className="program-card-image">
                <img src={p.img} alt={p.title} />
                <div className="program-card-icon-overlay" style={{ background: p.iconBg }}>
                  {p.icon}
                </div>
              </div>
              <div className="program-card-body">
                <div className="program-card-category">{p.category}</div>
                <h3 className="program-card-title">{p.title}</h3>
                <p className="program-card-desc">{p.desc}</p>
                <Link href="/programs" className="program-card-link">
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Goals */}
        <div className="programs-goals">
          <div className="programs-goals-header">
            <h3>Our Specific Objectives</h3>
            <p>Every goal we set is measured by the dignity and comfort of the elders we serve</p>
          </div>
          <div className="programs-goals-grid">
            {goals.map((g, i) => (
              <div key={i} className="programs-goal-item">
                <span className="programs-goal-icon">{g.icon}</span>
                <p className="programs-goal-text">{g.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}