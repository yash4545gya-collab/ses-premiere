// Compile scripts/verifier-contenu.ts avec esbuild (fourni par Vite) puis l'exécute.
import { build } from 'esbuild';
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';

// dans node_modules/.cache pour que react soit résolu
const out = join('node_modules', '.cache', 'ses-verif', 'verif.mjs');
await build({
  entryPoints: ['scripts/verifier-contenu.ts'],
  bundle: true,
  platform: 'node',
  format: 'esm',
  jsx: 'automatic',
  outfile: out,
  logLevel: 'error',
  external: ['react', 'react/jsx-runtime', 'katex'],
});
try {
  execFileSync(process.execPath, [out], { stdio: 'inherit' });
} catch {
  process.exit(1);
}
