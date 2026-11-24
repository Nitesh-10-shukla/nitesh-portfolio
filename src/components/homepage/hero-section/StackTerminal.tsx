import type { ReactNode } from "react";

/* Token helpers — small enough to keep the markup readable. */
const Key = ({ children }: { children: ReactNode }) => <span className="text-sky-300">{children}</span>;
const Str = ({ children }: { children: ReactNode }) => <span className="text-amber-300">{children}</span>;
const Punc = ({ children }: { children: ReactNode }) => <span className="text-slate-500">{children}</span>;

function Line({ n, indent = 0, children }: { n: number; indent?: number; children: ReactNode }) {
  return (
    <div className="group/line flex gap-3 rounded px-1 sm:gap-4 sm:px-2 transition-colors duration-200 hover:bg-white/[0.03]">
      <span
        aria-hidden
        className="w-4 shrink-0 select-none sm:w-5 text-right text-slate-600 transition-colors duration-200 group-hover/line:text-slate-400"
      >
        {n}
      </span>
      <span className="min-w-0" style={{ paddingLeft: `${indent * 0.9}rem` }}>
        {children}
      </span>
    </div>
  );
}

/** A `string[]` literal: ['a', 'b', 'c']. */
function List({ items }: { items: string[] }) {
  return (
    <>
      <Punc>[</Punc>
      {items.map((item, index) => (
        <span key={item}>
          <Punc>&apos;</Punc>
          <Str>{item}</Str>
          <Punc>&apos;</Punc>
          {index < items.length - 1 ? <Punc>, </Punc> : null}
        </span>
      ))}
      <Punc>],</Punc>
    </>
  );
}

/**
 * The hero's code card. It carries the same identity as the original site's
 * terminal block, rebuilt as a proper editor window: line numbers, a filename
 * tab and a status bar.
 */
export default function StackTerminal() {
  return (
    <div className="relative">
      {/* Ambient glow behind the window */}
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(60%_60%_at_50%_30%,rgba(139,92,246,0.22),transparent_70%)] blur-xl"
      />

      <div className="surface surface-raised edge-glow overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-3 border-b border-[var(--color-line-soft)] bg-[rgba(255,255,255,0.02)] px-4 py-3">
          <div className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <p className="ml-1 flex items-center gap-2 rounded-md bg-white/[0.04] px-2.5 py-1 font-mono text-[0.7rem] text-[var(--color-fg-muted)]">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            engineer.ts
          </p>
        </div>

        {/* Code */}
        <div className="overflow-x-auto px-3 py-4 sm:px-4">
          <pre className="font-mono text-[0.65rem] leading-[1.75] min-[420px]:text-[0.72rem] sm:text-[0.8rem] md:text-[0.85rem]">
            <code>
              <Line n={1}>
                <span className="text-pink-400">const</span> <span className="text-[var(--color-fg)]">engineer</span>{" "}
                <span className="text-pink-400">=</span> <Punc>{"{"}</Punc>
              </Line>
              <Line n={2} indent={1}>
                <Key>name</Key>
                <Punc>: &apos;</Punc>
                <Str>Nitesh Shukla</Str>
                <Punc>&apos;,</Punc>
              </Line>
              <Line n={3} indent={1}>
                <Key>role</Key>
                <Punc>: &apos;</Punc>
                <Str>Full Stack AI Engineer</Str>
                <Punc>&apos;,</Punc>
              </Line>
              <Line n={4} indent={1}>
                <Key>core</Key>
                <Punc>: </Punc>
                <List items={["React", "Next.js", "TypeScript"]} />
              </Line>
              <Line n={5} indent={1}>
                <Key>state</Key>
                <Punc>: </Punc>
                <List items={["Redux", "Zustand", "TanStack"]} />
              </Line>
              <Line n={6} indent={1}>
                <Key>apis</Key>
                <Punc>: </Punc>
                <List items={["GraphQL", "REST", "Node.js"]} />
              </Line>
              <Line n={7} indent={1}>
                <Key>data</Key>
                <Punc>: </Punc>
                <List items={["PostgreSQL", "Redis", "Prisma"]} />
              </Line>
              <Line n={8} indent={1}>
                <Key>ai</Key>
                <Punc>: </Punc>
                <List items={["OpenAI", "RAG", "pgvector"]} />
              </Line>
              <Line n={9} indent={1}>
                <span className="text-emerald-400">ships</span>
                <Punc>: </Punc>
                <span className="text-orange-400">() =&gt;</span>
                <Punc> {"{"}</Punc>
              </Line>
              <Line n={10} indent={2}>
                <span className="text-pink-400">return</span>{" "}
                <Punc>&apos;</Punc>
                <Str>production SaaS, on time</Str>
                <Punc>&apos;;</Punc>
              </Line>
              <Line n={11} indent={1}>
                <Punc>{"},"}</Punc>
              </Line>
              <Line n={12}>
                <Punc>{"};"}</Punc>
                <span className="caret align-middle" aria-hidden />
              </Line>
            </code>
          </pre>
        </div>

        {/* Status bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[var(--color-line-soft)] bg-[rgba(255,255,255,0.02)] px-4 py-2.5 font-mono text-[0.68rem] text-[var(--color-fg-faint)]">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            TypeScript
          </span>
          <span>UTF-8 · LF · Ln 12, Col 3</span>
        </div>
      </div>
    </div>
  );
}
