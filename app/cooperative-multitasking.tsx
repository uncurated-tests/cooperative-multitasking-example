function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let lastTime = Date.now();

export function shouldYieldCpu() {
  return Date.now() - lastTime > 50;
}

export async function yieldCpu() {
  await sleep(0);
  lastTime = Date.now();
}
