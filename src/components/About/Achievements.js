import { 
  FaMicrophone,
  FaUtensils,
  FaBirthdayCake,
  FaMitten,
  FaGlobeAfrica,
  FaTint,
  FaChartBar
} from 'react-icons/fa';

const achievements = [
  { icon: <FaMicrophone />, title: '5+ Open Forums', desc: 'Community awareness campaigns reaching hundreds of families in Samburu County.' },
  { icon: <FaUtensils />, title: 'Food Distribution', desc: 'Regular foodstuff deliveries to all three target communities across Samburu.' },
  { icon: <FaBirthdayCake />, title: 'Birthday Celebrations', desc: 'Organized special birthday events for elderly persons, restoring joy and dignity.' },
  { icon: <FaMitten />, title: '20 Blankets Distributed', desc: 'Provided warm blankets to 20 vulnerable elderly members during cold seasons.' },
  { icon: <FaGlobeAfrica />, title: 'World Elder Abuse Day', desc: 'Celebrated World Elder Abuse Awareness Day with the elderly community.' },
  { icon: <FaTint />, title: '6 Water Boosters', desc: 'Delivered water to all three target areas using water booster distributions.' },
  { icon: <FaChartBar />, title: 'Weekly Monitoring', desc: 'Consistent weekly monitoring and follow-up of elderly persons in the program.' },
];

const partners = [
  'Samburu County Government',
  'DCC Office',
  'County Special Programme Office',
  'Community Coordinators',
  'Faith Communities',
];

const boardMembers = [
  { name: 'Virginia Wanjohi', position: 'Chairperson', isLeader: true },
  { name: 'Alice Lotabony', position: 'Secretary', isLeader: true },
  { name: 'Overseer Daniel Lelesit', position: 'Treasurer', isLeader: true },
  { name: 'James Lesuruapus', position: 'Member', isLeader: false },
  { name: 'Rev. Peter Lenaola', position: 'Member', isLeader: false },
  { name: 'Francis Lenyakopiro', position: 'Vice Chairperson', isLeader: false },
  { name: 'Agnes Karanja', position: 'Member', isLeader: false },
  { name: 'Jama Letipo', position: 'Member', isLeader: false },
  { name: 'Mohammed Musa', position: 'Member', isLeader: false },
  { name: 'Richard Ngasike', position: 'Developer/Technologist', isLeader: false },
];

export default function Achievements() {
  return (
    <section className="achievements section-padding" id="achievements">
      <div className="container">
        <div className="achievements-grid">
          {/* Left: Achievements */}
          <div>
            <span className="section-label">Impact So Far</span>
            <h2 className="section-title">Our Achievements</h2>
            <p className="section-subtitle" style={{ marginBottom: 32 }}>
              Since our founding in 2023, we have made meaningful strides in improving
              the lives of vulnerable elders across Samburu County.
            </p>

            <div className="achievements-list">
              {achievements.map((a, i) => (
                <div key={i} className="achievement-item">
                  <span className="achievement-icon">{a.icon}</span>
                  <div className="achievement-text">
                    <strong>{a.title}</strong>
                    {a.desc}
                  </div>
                </div>
              ))}
            </div>

            <div className="achievements-partners">
              <h4>Our Partners</h4>
              <div className="partner-tags">
                {partners.map((p, i) => (
                  <span key={i} className="partner-tag">{p}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Board */}
          <div className="achievements-board">
            <span className="section-label">Leadership</span>
            <h2 className="section-title">Board of Management</h2>
            <p className="section-subtitle" style={{ marginBottom: 32 }}>
              A strong, committed, and dedicated board guiding our mission to serve
              Samburu's most vulnerable elders.
            </p>

            <div className="board-table-wrap">
              <table className="board-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                  </tr>
                </thead>
                <tbody>
                  {boardMembers.map((m, i) => (
                    <tr key={i}>
                      <td>{m.name}</td>
                      <td>
                        <span className={`board-role-badge ${m.isLeader ? 'leader' : ''}`}>
                          {m.position}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}