import { existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const isWindows = process.platform === 'win32';

if (!isWindows) {
  console.log('[repair:windows] Non-Windows OS detected. Skipping Windows native dependency repair.');
  process.exit(0);
}

const rollupNativePath = 'node_modules/@rollup/rollup-win32-x64-msvc';
const esbuildNativePath = 'node_modules/@esbuild/win32-x64';

const missing = [];
if (!existsSync(rollupNativePath)) missing.push('@rollup/rollup-win32-x64-msvc');
if (!existsSync(esbuildNativePath)) missing.push('@esbuild/win32-x64');

if (missing.length === 0) {
  console.log('[repair:windows] Windows native packages are present. No action needed.');
  process.exit(0);
}

console.log(`[repair:windows] Missing native packages: ${missing.join(', ')}`);
console.log('[repair:windows] Installing missing packages with --no-save...');

const npmCmd = process.env.npm_execpath ? process.execPath : 'npm.cmd';
const npmArgs = process.env.npm_execpath
  ? [process.env.npm_execpath, 'install', '--no-save', ...missing]
  : ['install', '--no-save', ...missing];

const result = spawnSync(npmCmd, npmArgs, {
  stdio: 'inherit',
  shell: false
});

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

console.log('[repair:windows] Repair complete. Re-run your previous npm command.');
