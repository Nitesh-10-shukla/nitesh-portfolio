"use client";

import { useState } from "react";
import { AlertIcon, RefreshIcon } from "../ui/icons";

export default function FallbackComponent() {
  const [retrying, setRetrying] = useState(false);

  return (
    <div className="shell flex min-h-[60vh] items-center justify-center py-20">
      <div className="surface surface-raised w-full max-w-md p-8 text-center">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-red-500/10 text-2xl text-red-400">
          <AlertIcon />
        </span>
        <h2 className="mt-5 text-xl font-semibold tracking-tight text-[var(--color-fg)]">Something went wrong</h2>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-fg-muted)]">
          This section failed to load. Refreshing usually sorts it out.
        </p>
        <button
          type="button"
          onClick={() => {
            setRetrying(true);
            window.location.reload();
          }}
          disabled={retrying}
          className="btn btn-primary mx-auto mt-6 disabled:opacity-60"
        >
          {retrying ? "Reloading…" : "Reload page"}
          <RefreshIcon className={`text-base ${retrying ? "animate-spin" : ""}`} />
        </button>
      </div>
    </div>
  );
}
