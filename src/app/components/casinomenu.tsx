export default function CasinoMenu() {
  return (
    <div className="casino-menu">
      <h2>Casino Games</h2>
    <div style={{
      background: '#383b6d',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      padding: '24px',
      maxWidth: '400px',
      margin: '0 auto'
    }}>
      <ul className="list-unstyled" style={{ padding: 0, margin: 0 }}>
        <li style={{ marginBottom: '16px' }}>
          <a href="/casino/slots" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#222', fontWeight: 500 }}>
            <img src="/assets/casino-banner.jpg" alt="Slots" style={{ marginRight: 12, width: 40, height: 40, borderRadius: 8, objectFit: 'cover' }} />
            Slots
          </a>
        </li>
        <li style={{ marginBottom: '16px' }}>
          <a href="/casino/table-games" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#222', fontWeight: 500 }}>
            <img src="/assets/casino-banner.jpg" alt="Table Games" style={{ marginRight: 12, width: 40, height: 40, borderRadius: 8, objectFit: 'cover' }} />
            Table Games
          </a>
        </li>
        <li style={{ marginBottom: '16px' }}>
          <a href="/casino/live-dealer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#222', fontWeight: 500 }}>
            <img src="/assets/casino-banner.jpg" alt="Live Dealer" style={{ marginRight: 12, width: 40, height: 40, borderRadius: 8, objectFit: 'cover' }} />
            Live Dealer
          </a>
        </li>
        <li>
          <a href="/casino/poker" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#222', fontWeight: 500 }}>
            <img src="/assets/casino-banner.jpg" alt="Poker" style={{ marginRight: 12, width: 40, height: 40, borderRadius: 8, objectFit: 'cover' }} />
            Poker
          </a>
        </li>
      </ul>
    </div>
    </div>
  );
}