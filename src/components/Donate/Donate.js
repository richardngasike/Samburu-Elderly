import { useState } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

const PRESET_AMOUNTS = [500, 1000, 2500, 5000, 10000, 25000];

const IMPACT = [
  { amount: 'KES 500', desc: 'Provides a warm blanket for one elder' },
  { amount: 'KES 1,000', desc: 'Supplies food for an elderly person for a week' },
  { amount: 'KES 2,500', desc: 'Covers water distribution for one household' },
  { amount: 'KES 5,000', desc: 'Funds medical/psychosocial support for one elder' },
  { amount: 'KES 10,000', desc: 'Supports a community awareness forum' },
];

export default function DonateForm() {
  const [tab, setTab] = useState('mpesa');
  const [amount, setAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cardNum, setCardNum] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const finalAmount = customAmount ? parseInt(customAmount) : amount;

  const handleDonate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const payload = {
        amount: finalAmount,
        method: tab,
        name,
        email,
        phone: tab === 'mpesa' ? phone : undefined,
        card_last4: tab === 'card' ? cardNum.slice(-4) : undefined,
      };
      const res = await fetch(`${API_URL}/api/donate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Donation failed');
      setSuccess(true);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="donate-card">
        <div className="donate-success">
          <div className="donate-success-icon">🙏</div>
          <h3>Thank You, {name || 'Dear Friend'}!</h3>
          <p>
            Your generous donation of <strong>KES {finalAmount.toLocaleString()}</strong> has been received.
            You will receive a confirmation email at <strong>{email}</strong>.
            Your support means the world to the elders of Samburu County.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="donate-card">
      <div className="donate-card-header">
        <h2>Make a Donation</h2>
        <p>100% of your donation goes directly to supporting elderly persons in Samburu</p>
      </div>
      <div className="donate-card-body">
        <form onSubmit={handleDonate}>
          {/* Amount */}
          <label className="amount-label">Select Amount (KES)</label>
          <div className="amount-presets">
            {PRESET_AMOUNTS.map((a) => (
              <button
                key={a}
                type="button"
                className={`amount-preset-btn ${amount === a && !customAmount ? 'selected' : ''}`}
                onClick={() => { setAmount(a); setCustomAmount(''); }}
              >
                {a.toLocaleString()}
              </button>
            ))}
          </div>
          <div className="amount-custom">
            <span className="amount-custom-prefix">KES</span>
            <input
              type="number"
              placeholder="Enter custom amount"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              min="100"
            />
          </div>

          {/* Donor Info */}
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              className="form-input"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              className="form-input"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Payment Methods */}
          <div className="payment-methods-tabs">
            <button
              type="button"
              className={`payment-tab ${tab === 'mpesa' ? 'active' : ''}`}
              onClick={() => setTab('mpesa')}
            >
              📱 M-PESA
            </button>
            <button
              type="button"
              className={`payment-tab ${tab === 'card' ? 'active' : ''}`}
              onClick={() => setTab('card')}
            >
              💳 Card
            </button>
            <button
              type="button"
              className={`payment-tab ${tab === 'bank' ? 'active' : ''}`}
              onClick={() => setTab('bank')}
            >
              🏦 Bank Transfer
            </button>
          </div>

          {/* M-PESA */}
          {tab === 'mpesa' && (
            <div>
              <div className="mpesa-logo">
                <span>📱</span> M-PESA
              </div>
              <div className="form-group">
                <label className="form-label">M-PESA Phone Number</label>
                <input
                  className="form-input"
                  type="tel"
                  placeholder="e.g. 0712345678"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required={tab === 'mpesa'}
                />
              </div>
              <div className="mpesa-steps">
                <div className="mpesa-step">
                  <span className="mpesa-step-num">1</span>
                  <span>Enter your Safaricom M-PESA number above</span>
                </div>
                <div className="mpesa-step">
                  <span className="mpesa-step-num">2</span>
                  <span>Click "Donate" — an STK push will be sent to your phone</span>
                </div>
                <div className="mpesa-step">
                  <span className="mpesa-step-num">3</span>
                  <span>Enter your M-PESA PIN to complete the payment</span>
                </div>
              </div>
            </div>
          )}

          {/* Card */}
          {tab === 'card' && (
            <div>
              <div className="form-group">
                <label className="form-label">Card Number</label>
                <input
                  className="form-input"
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                  value={cardNum}
                  onChange={(e) => setCardNum(e.target.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim())}
                  required={tab === 'card'}
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Expiry Date</label>
                  <input
                    className="form-input"
                    type="text"
                    placeholder="MM/YY"
                    maxLength={5}
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    required={tab === 'card'}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">CVV</label>
                  <input
                    className="form-input"
                    type="password"
                    placeholder="•••"
                    maxLength={4}
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    required={tab === 'card'}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Bank */}
          {tab === 'bank' && (
            <div className="bank-info">
              <div className="bank-info-row">
                <span className="bank-info-label">Bank Name</span>
                <span className="bank-info-value">Equity Bank</span>
              </div>
              <div className="bank-info-row">
                <span className="bank-info-label">Account Name</span>
                <span className="bank-info-value">Samburu Elderly Support Initiative</span>
              </div>
              <div className="bank-info-row">
                <span className="bank-info-label">Account Number</span>
                <span className="bank-info-value">0123456789</span>
              </div>
              <div className="bank-info-row">
                <span className="bank-info-label">Branch</span>
                <span className="bank-info-value">Maralal Branch</span>
              </div>
              <div className="bank-info-row">
                <span className="bank-info-label">Reference</span>
                <span className="bank-info-value">DONATION/{new Date().getFullYear()}</span>
              </div>
              <p style={{ marginTop: 12, fontSize: '0.82rem', color: 'var(--text-light)' }}>
                After making the transfer, email us at samburufortheelderly@gmail.com with your transaction details.
              </p>
            </div>
          )}

          {error && (
            <div style={{ background: '#FFF0F0', border: '1px solid #FFB3B3', borderRadius: 8, padding: '12px 16px', color: '#CC0000', fontSize: '0.875rem', marginTop: 16 }}>
              ⚠️ {error}
            </div>
          )}

          {tab !== 'bank' && (
            <button
              type="submit"
              className="donate-submit-btn"
              disabled={loading}
            >
              {loading ? '⏳ Processing...' : `❤️ Donate KES ${finalAmount.toLocaleString()}`}
            </button>
          )}

          <p className="donate-secure-note">
            🔒 Secure & encrypted. Your details are safe with us.
          </p>
        </form>
      </div>
    </div>
  );
}

export function DonateImpact() {
  return (
    <div className="donate-impact">
      <div className="donate-impact-card">
        <h3>Your Impact</h3>
        <div className="impact-items">
          {IMPACT.map((item, i) => (
            <div key={i} className="impact-item">
              <span className="impact-amount">{item.amount}</span>
              <span className="impact-desc">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="donate-contact-card">
        <h3>Need Help?</h3>
        <div className="donate-contact-items">
          <div className="donate-contact-item">
            <span>📞</span>
            <span>+254 719 775 166</span>
          </div>
          <div className="donate-contact-item">
            <span>✉️</span>
            <span>samburufortheelderly@gmail.com</span>
          </div>
          <div className="donate-contact-item">
            <span>📍</span>
            <span>P.O Box 60-20600, Maralal, Samburu County</span>
          </div>
        </div>
      </div>
    </div>
  );
}
