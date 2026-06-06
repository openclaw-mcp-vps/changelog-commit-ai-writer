export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Developer Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          AI writes your changelogs<br />from Git commits
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect GitHub or GitLab, pick a repo, and get polished, user-friendly changelog entries generated automatically — no more manual release notes.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $19/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for trial &middot; Cancel anytime</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 text-sm">
          {["GitHub & GitLab", "AI-powered summaries", "Markdown export", "Custom templates", "Team sharing"].map((f) => (
            <span key={f} className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#8b949e]">{f}</span>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-3 gap-6 text-center">
          {[
            { step: "1", title: "Connect your repo", desc: "Authenticate with GitHub or GitLab and select a repository." },
            { step: "2", title: "Pick a date range", desc: "Choose commits by date, tag, or branch to scope your changelog." },
            { step: "3", title: "Export & publish", desc: "Edit the AI draft, then export as Markdown, HTML, or JSON." }
          ].map(({ step, title, desc }) => (
            <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="w-8 h-8 rounded-full bg-[#58a6ff] text-[#0d1117] font-bold flex items-center justify-center mx-auto mb-3 text-sm">{step}</div>
              <h3 className="font-semibold text-white mb-2">{title}</h3>
              <p className="text-sm text-[#8b949e]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$19<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-sm text-[#6e7681] mb-6">per workspace</p>
          <ul className="text-sm text-[#8b949e] space-y-3 mb-8 text-left">
            {["Unlimited repositories", "Unlimited changelog generations", "GitHub & GitLab support", "Markdown, HTML & JSON export", "Custom changelog templates", "Team collaboration", "Priority support"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">&#10003;</span>{item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which Git providers are supported?",
              a: "GitHub and GitLab are fully supported. Bitbucket support is on the roadmap."
            },
            {
              q: "How does the AI generate changelogs?",
              a: "We analyze your commit messages, diffs, and PR titles using a large language model to produce clear, user-facing release notes grouped by feature, fix, and improvement."
            },
            {
              q: "Can I edit the generated changelog?",
              a: "Yes. Every generated entry is fully editable before you export or publish. You stay in control of the final output."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} ChangelogAI. All rights reserved.
      </footer>
    </main>
  );
}
