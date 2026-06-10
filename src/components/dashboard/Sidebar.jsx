import {
  FaAward,
  FaBars,
  FaBook,
  FaChartLine,
  FaClock,
  FaHome,
  FaTimes,
} from 'react-icons/fa';

const navItems = [
  { icon: FaHome,      label: 'Overview',      id: 'overview' },
  { icon: FaBook,      label: 'My Courses',    id: 'courses' },
  { icon: FaChartLine, label: 'Progress',      id: 'progress' },
  { icon: FaClock,     label: 'Recent',        id: 'recent' },
  { icon: FaAward,     label: 'Certificates',  id: 'certificates' },
];

const Sidebar = ({ activeSection, onNavigate, isOpen, onToggle }) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Mobile toggle button */}
      <button
        type="button"
        onClick={onToggle}
        className="fixed left-4 top-20 z-30 flex h-10 w-10 items-center justify-center rounded-2xl border border-[color:var(--border-soft)] bg-[color:var(--surface-card)] text-[color:var(--text-primary)] shadow-[var(--shadow-soft)] lg:hidden"
        aria-label="Toggle sidebar"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar panel */}
      <aside
        className={`
          fixed left-0 top-0 z-30 flex h-full w-64 flex-col border-r border-[color:var(--border-soft)]
          bg-[color:var(--surface-card)] backdrop-blur-xl transition-transform duration-300
          lg:static lg:z-auto lg:translate-x-0 lg:shadow-none
          ${isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}
        `}
      >
        {/* Logo area */}
        <div className="flex items-center gap-3 border-b border-[color:var(--border-soft)] px-6 py-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-sky-500 to-emerald-500 text-white shadow-lg shadow-sky-500/30">
            <FaBook className="text-sm" />
          </div>
          <span className="text-lg font-bold text-[color:var(--text-primary)]">LearnX</span>
        </div>

        {/* User card */}
        <div className="mx-4 mt-5 rounded-2xl border border-[color:var(--border-soft)] bg-[color:var(--surface-soft)] p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-sky-400 to-emerald-400 text-sm font-bold text-white">
              JK
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-[color:var(--text-primary)]">Muhammad Abdullah </p>
              <p className="truncate text-xs text-[color:var(--text-muted)]">Abdullah@learnx.io</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-5 flex-1 space-y-1 px-3">
          <p className="mb-2 px-3 text-[0.7rem] font-bold uppercase tracking-widest text-[color:var(--text-muted)]">
            Menu
          </p>
          {navItems.map(({ icon: Icon, label, id }) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => { onNavigate(id); if (isOpen) onToggle(); }}
                className={`
                  flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition duration-200
                  ${isActive
                    ? 'bg-linear-to-r from-sky-500/15 to-emerald-500/15 text-[color:var(--accent-primary)] shadow-sm'
                    : 'text-[color:var(--text-secondary)] hover:bg-[color:var(--surface-soft)] hover:text-[color:var(--text-primary)]'
                  }
                `}
              >
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-xl text-xs transition
                    ${isActive
                      ? 'bg-linear-to-br from-sky-500 to-emerald-500 text-white shadow-md shadow-sky-500/25'
                      : 'bg-[color:var(--surface-soft)] text-[color:var(--text-muted)]'
                    }`}
                >
                  <Icon />
                </span>
                {label}
                {isActive && (
                  <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[color:var(--accent-primary)]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Bottom: back to site */}
        <div className="border-t border-[color:var(--border-soft)] p-4">
          <a
            href="/"
            className="flex w-full items-center justify-center gap-2 rounded-2xl border border-[color:var(--border-soft)] bg-[color:var(--surface-soft)] py-3 text-sm font-medium text-[color:var(--text-secondary)] transition hover:text-[color:var(--text-primary)]"
          >
            ← Back to Site
          </a>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;