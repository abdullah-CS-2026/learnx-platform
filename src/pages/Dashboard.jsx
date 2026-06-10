import { useState } from 'react';
import {
  FaAward,
  FaBook,
  FaBolt,
  FaClock,
  FaFire,
} from 'react-icons/fa';
import CertificateCard from '../components/dashboard/CertificateCard';
import EnrolledCourses from '../components/dashboard/EnrolledCourses';
import ProgressBar from '../components/dashboard/ProgressBar';
import Sidebar from '../components/dashboard/Sidebar';

// ─── Static data ──────────────────────────────────────────────────────────────

const stats = [
  {
    label: 'Courses Enrolled',
    value: '4',
    icon: FaBook,
    color: 'from-sky-500 to-blue-600',
    shadow: 'shadow-sky-500/25',
  },
  {
    label: 'Hours Learned',
    value: '42h',
    icon: FaClock,
    color: 'from-violet-500 to-purple-600',
    shadow: 'shadow-violet-500/25',
  },
  {
    label: 'Certificates',
    value: '1',
    icon: FaAward,
    color: 'from-emerald-500 to-teal-600',
    shadow: 'shadow-emerald-500/25',
  },
  {
    label: 'Day Streak',
    value: '7',
    icon: FaFire,
    color: 'from-orange-400 to-rose-500',
    shadow: 'shadow-orange-400/25',
  },
];

const recentLessons = [
  {
    id: 1,
    title: 'React Hooks Deep Dive',
    course: 'Complete React Developer Bootcamp',
    duration: '28 min',
    timeAgo: '2 hours ago',
    color: 'from-sky-500 to-blue-600',
  },
  {
    id: 2,
    title: 'Linear Regression Basics',
    course: 'Machine Learning with Python',
    duration: '34 min',
    timeAgo: 'Yesterday',
    color: 'from-violet-500 to-purple-600',
  },
  {
    id: 3,
    title: 'Color Theory in UI Design',
    course: 'UI/UX Design Masterclass',
    duration: '19 min',
    timeAgo: '2 days ago',
    color: 'from-emerald-500 to-teal-600',
  },
];

const courseProgressList = [
  { title: 'Complete React Developer Bootcamp', progress: 72, color: 'from-sky-500 to-blue-600' },
  { title: 'Machine Learning with Python', progress: 38, color: 'from-violet-500 to-purple-600' },
  { title: 'UI/UX Design Masterclass', progress: 100, color: 'from-emerald-500 to-teal-600' },
  { title: 'Advanced JavaScript Patterns', progress: 15, color: 'from-orange-400 to-rose-500' },
];

// ─── Section components ────────────────────────────────────────────────────────

function OverviewSection() {
  return (
    <div className="space-y-8">
      {/* Greeting */}
      <div>
        <h1 className="text-3xl font-semibold text-[color:var(--text-primary)]">
          Welcome back, Abdullah 👋
        </h1>
        <p className="mt-1.5 text-[color:var(--text-muted)]">
          You're on a 7-day streak. Keep it going!
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map(({ label, value, icon: Icon, color, shadow }) => (
          <div
            key={label}
            className="rounded-[1.5rem] border border-[color:var(--border-soft)] bg-[color:var(--surface-card)] p-5 shadow-[var(--shadow-soft)] backdrop-blur-xl transition duration-200 hover:-translate-y-1"
          >
            <div
              className={`mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br ${color} text-white shadow-lg ${shadow}`}
            >
              <Icon />
            </div>
            <p className="text-2xl font-bold text-[color:var(--text-primary)]">{value}</p>
            <p className="mt-0.5 text-xs text-[color:var(--text-muted)]">{label}</p>
          </div>
        ))}
      </div>

      {/* Recent + quick progress */}
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Recently viewed */}
        <div className="rounded-[1.75rem] border border-[color:var(--border-soft)] bg-[color:var(--surface-card)] p-6 shadow-[var(--shadow-soft)] backdrop-blur-xl">
          <div className="mb-5 flex items-center gap-2">
            <FaBolt className="text-[color:var(--accent-primary)]" />
            <h2 className="font-semibold text-[color:var(--text-primary)]">Recently Viewed</h2>
          </div>
          <div className="space-y-3">
            {recentLessons.map((lesson) => (
              <div
                key={lesson.id}
                className="flex items-center gap-4 rounded-2xl border border-[color:var(--border-soft)] bg-[color:var(--surface-soft)] p-4 transition duration-200 hover:-translate-y-0.5 hover:border-[color:var(--border-strong)]"
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br ${lesson.color} text-white shadow-md`}
                >
                  <FaClock className="text-xs" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-[color:var(--text-primary)]">
                    {lesson.title}
                  </p>
                  <p className="truncate text-xs text-[color:var(--text-muted)]">{lesson.course}</p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-xs font-medium text-[color:var(--accent-primary)]">{lesson.duration}</p>
                  <p className="text-[0.65rem] text-[color:var(--text-muted)]">{lesson.timeAgo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Course progress snapshot */}
        <div className="rounded-[1.75rem] border border-[color:var(--border-soft)] bg-[color:var(--surface-card)] p-6 shadow-[var(--shadow-soft)] backdrop-blur-xl">
          <h2 className="mb-5 font-semibold text-[color:var(--text-primary)]">Course Progress</h2>
          <div className="space-y-5">
            {courseProgressList.map((c) => (
              <div key={c.title} className="space-y-1.5">
                <p className="truncate text-sm font-medium text-[color:var(--text-primary)]">{c.title}</p>
                <ProgressBar value={c.progress} color={c.color} size="sm" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgressSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-[color:var(--text-primary)]">My Progress</h2>
        <p className="mt-1 text-sm text-[color:var(--text-muted)]">
          Detailed breakdown of your learning journey.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {courseProgressList.map((c) => (
          <div
            key={c.title}
            className="rounded-[1.75rem] border border-[color:var(--border-soft)] bg-[color:var(--surface-card)] p-6 shadow-[var(--shadow-soft)] backdrop-blur-xl transition duration-200 hover:-translate-y-1"
          >
            {/* Color strip */}
            <div className={`mb-4 h-1.5 w-full rounded-full bg-linear-to-r ${c.color}`} />
            <p className="mb-4 font-semibold leading-snug text-[color:var(--text-primary)]">{c.title}</p>
            <ProgressBar value={c.progress} color={c.color} size="lg" showLabel />
            <div className="mt-4 flex items-center justify-between text-xs text-[color:var(--text-muted)]">
              <span>{c.progress === 100 ? '🎉 Completed!' : `${100 - c.progress}% remaining`}</span>
              {c.progress === 100 && (
                <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[0.68rem] font-bold text-emerald-600 [html[data-theme='dark']_&]:text-emerald-300">
                  Certificate Earned
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RecentSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-[color:var(--text-primary)]">Recently Viewed</h2>
        <p className="mt-1 text-sm text-[color:var(--text-muted)]">
          Pick up right where you left off.
        </p>
      </div>
      <div className="space-y-4">
        {recentLessons.map((lesson) => (
          <div
            key={lesson.id}
            className="flex items-center gap-5 rounded-[1.5rem] border border-[color:var(--border-soft)] bg-[color:var(--surface-card)] p-5 shadow-[var(--shadow-soft)] transition duration-200 hover:-translate-y-0.5 hover:border-[color:var(--border-strong)]"
          >
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br ${lesson.color} text-white shadow-lg`}
            >
              <FaClock />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-[color:var(--text-primary)]">{lesson.title}</p>
              <p className="mt-0.5 truncate text-sm text-[color:var(--text-muted)]">{lesson.course}</p>
            </div>
            <div className="shrink-0 text-right">
              <p className="text-sm font-semibold text-[color:var(--accent-primary)]">{lesson.duration}</p>
              <p className="mt-0.5 text-xs text-[color:var(--text-muted)]">{lesson.timeAgo}</p>
            </div>
            <button
              type="button"
              className={`shrink-0 rounded-full bg-linear-to-r ${lesson.color} px-4 py-2 text-xs font-semibold text-white shadow-md transition hover:-translate-y-0.5`}
            >
              Resume
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Dashboard ────────────────────────────────────────────────────────────

const sectionMap = {
  overview: <OverviewSection />,
  courses: <EnrolledCourses />,
  progress: <ProgressSection />,
  recent: <RecentSection />,
  certificates: <CertificateCard />,
};

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[color:var(--bg-base)]">
      <Sidebar
        activeSection={activeSection}
        onNavigate={setActiveSection}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen((p) => !p)}
      />

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          {/* Decorative glow */}
          <div className="pointer-events-none fixed right-0 top-0 -z-10 h-72 w-72 rounded-full bg-[color:var(--hero-glow)] blur-3xl opacity-60" />

          {sectionMap[activeSection] ?? <OverviewSection />}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;