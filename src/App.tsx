// Minimal hello-world venue site for the sacrificial delivery website venue
// (AI6P-894). Its sole job is to render a greppable marker token so a UI E2E
// (AI6P-887) can prove a specific commit's artifact is present (or absent) at a
// given environment URL.
//
// The marker has two parts:
//   - a STABLE venue token (`AI6P-894-VENUE`) proving "the venue site is live"
//   - a per-deploy MARKER read from `VITE_VENUE_MARKER` (Amplify env var or
//     build env) so a run can stamp a unique token (e.g. `AI6P-887-<runid>`)
//     and assert presence in low but absence in a higher env until promoted.
const VENUE_TOKEN = 'AI6P-894-VENUE';
const RUN_MARKER = import.meta.env.VITE_VENUE_MARKER ?? 'AI6P-887-LIVE-20260611a';

export default function App() {
  return (
    <main>
      <h1>Sacrificial Delivery Venue</h1>
      <p>
        Coherent standing delivery website venue (AI6P-894). This page exists so
        the add&rarr;deploy&rarr;promote UI E2E (AI6P-887) can observe a real
        artifact across environment URLs.
      </p>
      <p data-venue-token={VENUE_TOKEN} data-run-marker={RUN_MARKER}>
        marker: {VENUE_TOKEN}-{RUN_MARKER}
      </p>
    </main>
  );
}
