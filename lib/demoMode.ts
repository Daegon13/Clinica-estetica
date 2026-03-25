const truthyValues = new Set(["1", "true"]);
const falsyValues = new Set(["0", "false"]);

function readEnvFlag(): boolean | null {
  const envValue = process.env.NEXT_PUBLIC_DEMO_TOOLS?.toLowerCase() ?? "";
  if (truthyValues.has(envValue)) return true;
  if (falsyValues.has(envValue)) return false;
  return null;
}

export function getDemoToolsState(searchParams?: URLSearchParams | null) {
  void searchParams;
  const envEnabled = readEnvFlag();
  return {
    enabled: envEnabled === true,
    source: "env" as const,
    queryEnabled: null,
    storedEnabled: false
  };
}

export function persistDemoToolsFlag(enabled: boolean) {
  void enabled;
}

export function syncDemoToolsFlagFromQuery(searchParams?: URLSearchParams | null) {
  void searchParams;
}

export function persistDemoToolsFlagIfEnabled(searchParams?: URLSearchParams | null) {
  void searchParams;
}

/**
 * Demo tools are meant for internal testing.
 *
 * Public builds only honor the env var and ignore query/local storage toggles.
 */
export function isDemoToolsEnabled(searchParams?: URLSearchParams | null): boolean {
  void searchParams;
  return getDemoToolsState().enabled;
}
