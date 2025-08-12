'use client';
import { useRouter } from 'next/navigation';
export default function teenpatti({ product }: { product: any }) {
    const router = useRouter();
    return (
        <>
  <div className="container py-3">
      <div className="row">
        
        {/* Player A */}
        <div className="col-12 col-md-6">
          <div className="row g-2 text-center">

            {/* Row 1 */}
            <div className="col-3"><div className="bet-card">FLUSH<br/>(COLOR)<br/><strong>1.1</strong></div></div>
            <div className="col-3"><div className="bet-card">PUTLA<br/>(3 PICTURE)<br/><strong>2.4</strong></div></div>
            <div className="col-3"><div className="bet-card">PUTLA<br/>(2 PICTURE)<br/><strong>1.9</strong></div></div>
            <div className="col-3"><div className="bet-card">PAIR<br/>(DUBBLE)<br/><strong>1.5</strong></div></div>

            {/* Row 2 */}
            <div className="col-3"><div className="bet-card">LOVE MARRIAGE<br/>(Q & K SAME SUIT)<br/><strong>1.2</strong></div></div>
            <div className="col-6"><div className="player-card">PLAYER A<br/><strong>1.95</strong></div></div>
            <div className="col-3"><div className="bet-card">BF LOVE GF<br/>(J & Q SAME SUIT)<br/><strong>1.5</strong></div></div>

            {/* Row 3 */}
            <div className="col-3"><div className="bet-card">TRIO<br/>(TEEN)<br/><strong>1.4</strong></div></div>
            <div className="col-3"><div className="bet-card">STRAIGHT<br/>(ROWN)<br/><strong>1.8</strong></div></div>
            <div className="col-3"><div className="bet-card">STRAIGHT FLUSH<br/>(PAKKI ROWN)<br/><strong>3.4</strong></div></div>
            <div className="col-3"><div className="bet-card">PUTLA<br/>(1 PICTURE)<br/><strong>1.7</strong></div></div>

          </div>
        </div>

        {/* Player B */}
        <div className="col-12 col-md-6">
          <div className="row g-2 text-center">

            {/* Row 1 */}
            <div className="col-3"><div className="bet-card">FLUSH<br/>(COLOR)<br/><strong>1.1</strong></div></div>
            <div className="col-3"><div className="bet-card">PUTLA<br/>(3 PICTURE)<br/><strong>2.4</strong></div></div>
            <div className="col-3"><div className="bet-card">PUTLA<br/>(2 PICTURE)<br/><strong>1.9</strong></div></div>
            <div className="col-3"><div className="bet-card">PAIR<br/>(DUBBLE)<br/><strong>1.5</strong></div></div>

            {/* Row 2 */}
            <div className="col-3"><div className="bet-card">LOVE MARRIAGE<br/>(Q & K SAME SUIT)<br/><strong>1.2</strong></div></div>
            <div className="col-6"><div className="player-card">PLAYER B<br/><strong>1.95</strong></div></div>
            <div className="col-3"><div className="bet-card">BF LOVE GF<br/>(J & Q SAME SUIT)<br/><strong>1.5</strong></div></div>

            {/* Row 3 */}
            <div className="col-3"><div className="bet-card">TRIO<br/>(TEEN)<br/><strong>1.4</strong></div></div>
            <div className="col-3"><div className="bet-card">STRAIGHT<br/>(ROWN)<br/><strong>1.8</strong></div></div>
            <div className="col-3"><div className="bet-card">STRAIGHT FLUSH<br/>(PAKKI ROWN)<br/><strong>3.4</strong></div></div>
            <div className="col-3"><div className="bet-card">PUTLA<br/>(1 PICTURE)<br/><strong>1.7</strong></div></div>

          </div>
        </div>

      </div>

      <style jsx>{`
        .bet-card {
          border: 2px solid #6a1b9a;
          border-radius: 8px;
          padding: 8px;
          background: #111;
          color: #C3A005;
          font-size: 12px;
          height: 100%;
        }
        .player-card {
          border-radius: 8px;
          background: purple;
          color: white;
          font-size: 14px;
          padding: 16px;
          font-weight: bold;
          height: 100%;
        }
      `}</style>
    </div>
    {/*  */}
    
        </>
    );
}