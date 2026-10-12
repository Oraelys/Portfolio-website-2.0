import type { CSSProperties, ReactNode } from 'react';
import type { MockupVariant } from '../data/projects';

interface AppMockupProps {
  variant: MockupVariant;
  accent: string;
}

/* ---------- Frames ---------- */

const PhoneFrame = ({ children, bg }: { children: ReactNode; bg: string }) => (
  <div
    className="relative mx-auto rounded-[2rem] p-2 shadow-2xl"
    style={{ width: 168, height: 330, background: '#0b0b0f' }}
    aria-hidden="true"
  >
    <div className="absolute left-1/2 top-2 z-10 h-4 w-14 -translate-x-1/2 rounded-full bg-black" />
    <div
      className="h-full w-full overflow-hidden rounded-[1.5rem]"
      style={{ background: bg }}
    >
      {children}
    </div>
  </div>
);

const DesktopFrame = ({ children }: { children: ReactNode }) => (
  <div
    className="mx-auto overflow-hidden rounded-xl border shadow-2xl"
    style={{ width: '100%', maxWidth: 340, height: 230, background: '#0f0f14', borderColor: '#2a2a35' }}
    aria-hidden="true"
  >
    <div className="flex items-center gap-1.5 px-3 py-2" style={{ background: '#17171f' }}>
      <span className="h-2 w-2 rounded-full bg-red-400" />
      <span className="h-2 w-2 rounded-full bg-yellow-400" />
      <span className="h-2 w-2 rounded-full bg-green-400" />
    </div>
    {children}
  </div>
);

const bar = (w: string, color: string, h = 6): CSSProperties =>
  ({ width: w, height: h, borderRadius: 999, background: color });

/* ---------- Screens ---------- */

const RiderScreen = ({ accent }: { accent: string }) => (
  <div className="flex h-full flex-col text-white" style={{ background: '#fff7f0' }}>
    <div className="px-3 pb-2 pt-7" style={{ background: accent }}>
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold">Ovena Rider</span>
        <span className="rounded-full bg-white/25 px-2 py-0.5 text-[8px] font-semibold">● Online</span>
      </div>
      <div className="mt-1 text-[8px] opacity-90">Today · 6 deliveries</div>
    </div>
    {/* route map */}
    <div className="relative mx-3 mt-3 h-24 overflow-hidden rounded-xl" style={{ background: '#ffe4cf' }}>
      <svg viewBox="0 0 140 96" className="h-full w-full">
        <path d="M10 80 C 40 70, 40 30, 70 40 S 110 20, 130 12" fill="none" stroke={accent} strokeWidth="3" strokeDasharray="5 4" strokeLinecap="round" />
        <circle cx="10" cy="80" r="5" fill="#1f2937" />
        <circle cx="130" cy="12" r="6" fill={accent} />
      </svg>
    </div>
    {/* order card */}
    <div className="mx-3 mt-3 rounded-xl bg-white p-2 shadow" style={{ color: '#1f2937' }}>
      <div className="flex justify-between text-[8px] font-bold">
        <span>Order #2041</span>
        <span style={{ color: accent }}>Picked up</span>
      </div>
      <div className="mt-1.5 space-y-1">
        <div style={bar('80%', '#e5e7eb')} />
        <div style={bar('55%', '#e5e7eb')} />
      </div>
    </div>
    {/* slide to complete */}
    <div className="mx-3 mt-auto mb-3 flex items-center rounded-full p-1" style={{ background: '#1f2937' }}>
      <span className="flex h-6 w-6 items-center justify-center rounded-full text-[10px]" style={{ background: accent }}>›</span>
      <span className="flex-1 text-center text-[8px] font-semibold text-white/80">Slide to complete</span>
    </div>
  </div>
);

const AdminScreen = ({ accent }: { accent: string }) => (
  <div className="flex h-full flex-col text-white" style={{ background: '#14110f' }}>
    <div className="px-3 pt-7">
      <div className="text-[9px] opacity-60">Welcome back</div>
      <div className="text-[11px] font-bold">Operations</div>
    </div>
    <div className="mt-2 grid grid-cols-2 gap-1.5 px-3">
      {[
        ['Active', '128'],
        ['Users', '4.2k'],
        ['Tickets', '17'],
        ['Revenue', '₦2.1M'],
      ].map(([label, value]) => (
        <div key={label} className="rounded-lg p-1.5" style={{ background: '#211b17' }}>
          <div className="text-[7px] opacity-60">{label}</div>
          <div className="text-[11px] font-bold" style={{ color: label === 'Active' ? accent : '#fff' }}>
            {value}
          </div>
        </div>
      ))}
    </div>
    <div className="mx-3 mt-2 flex items-center gap-3 rounded-lg p-2" style={{ background: '#211b17' }}>
      <div
        className="h-14 w-14 shrink-0 rounded-full"
        style={{
          background: `conic-gradient(${accent} 0 55%, #ffb27a 55% 80%, #5a4a40 80% 100%)`,
          WebkitMask: 'radial-gradient(circle, transparent 38%, #000 40%)',
          mask: 'radial-gradient(circle, transparent 38%, #000 40%)',
        }}
      />
      <div className="flex-1 space-y-1.5">
        <div style={bar('90%', accent)} />
        <div style={bar('60%', '#ffb27a')} />
        <div style={bar('35%', '#5a4a40')} />
      </div>
    </div>
    <div className="mx-3 mt-2 space-y-1">
      <div className="rounded-md p-1.5" style={{ background: '#211b17' }}>
        <div style={bar('70%', '#3a302a')} />
      </div>
      <div className="rounded-md p-1.5" style={{ background: '#211b17' }}>
        <div style={bar('50%', '#3a302a')} />
      </div>
    </div>
    <div className="mt-auto flex justify-around px-2 py-2" style={{ background: '#1b1613' }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <span key={i} className="h-2 w-2 rounded-full" style={{ background: i === 0 ? accent : '#4a3d35' }} />
      ))}
    </div>
  </div>
);

const ReaderScreen = ({ accent }: { accent: string }) => {
  const covers = ['#7c3aed', '#db2777', '#0ea5e9', '#f59e0b', '#10b981', '#ef4444'];
  return (
    <div className="flex h-full flex-col" style={{ background: '#faf8ff', color: '#1f2937' }}>
      <div className="px-3 pb-1 pt-7 text-[11px] font-bold" style={{ color: accent }}>
        Inkwell
      </div>
      <div
        className="mx-3 h-16 rounded-xl p-2 text-white"
        style={{ background: `linear-gradient(135deg, ${accent}, #db2777)` }}
      >
        <div className="text-[8px] opacity-80">Featured</div>
        <div className="text-[10px] font-bold">New chapters today</div>
      </div>
      {['Romance', 'Fantasy'].map((tag, row) => (
        <div key={tag} className="mt-2 px-3">
          <div className="mb-1 text-[8px] font-bold">{tag}</div>
          <div className="flex gap-1.5">
            {covers.slice(row * 3, row * 3 + 3).map((c) => (
              <div key={c} className="h-14 flex-1 rounded-md shadow-sm" style={{ background: c }} />
            ))}
          </div>
        </div>
      ))}
      <div className="mt-auto flex justify-around bg-white py-2">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="h-2 w-2 rounded-full" style={{ background: i === 0 ? accent : '#d1d5db' }} />
        ))}
      </div>
    </div>
  );
};

const DesktopScreen = ({ accent }: { accent: string }) => (
  <div className="flex" style={{ height: 'calc(100% - 28px)' }}>
    <div className="w-14 space-y-2 p-2" style={{ background: '#13131a' }}>
      {[0, 1, 2, 3].map((i) => (
        <div key={i} style={bar('100%', i === 1 ? accent : '#2a2a35', 8)} />
      ))}
    </div>
    <div className="flex-1 p-3 text-white">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[10px] font-bold">Import manuscript</span>
        <span className="rounded px-2 py-0.5 text-[8px] font-semibold" style={{ background: accent }}>
          Upload
        </span>
      </div>
      <div
        className="mb-2 flex h-14 items-center justify-center rounded-lg border border-dashed text-[8px] opacity-70"
        style={{ borderColor: accent }}
      >
        Drop manuscript + cover
      </div>
      {[0, 1, 2].map((i) => (
        <div key={i} className="mb-1 flex items-center gap-2 rounded p-1.5" style={{ background: '#1a1a23' }}>
          <span className="h-3 w-3 rounded-sm" style={{ background: accent, opacity: 1 - i * 0.25 }} />
          <div style={bar(`${70 - i * 12}%`, '#2f2f3b')} />
        </div>
      ))}
    </div>
  </div>
);

/* ---------- Public component ---------- */

const AppMockup = ({ variant, accent }: AppMockupProps) => {
  switch (variant) {
    case 'rider':
      return (
        <PhoneFrame bg="#fff7f0">
          <RiderScreen accent={accent} />
        </PhoneFrame>
      );
    case 'admin':
      return (
        <PhoneFrame bg="#14110f">
          <AdminScreen accent={accent} />
        </PhoneFrame>
      );
    case 'reader':
      return (
        <PhoneFrame bg="#faf8ff">
          <ReaderScreen accent={accent} />
        </PhoneFrame>
      );
    case 'desktop':
      return (
        <DesktopFrame>
          <DesktopScreen accent={accent} />
        </DesktopFrame>
      );
  }
};

export default AppMockup;
