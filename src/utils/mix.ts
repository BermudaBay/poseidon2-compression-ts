import { add, mul, mod } from "./arith"

export type Mds2Fn = (state: [bigint, bigint]) => [bigint, bigint]

// MDS2: circulant(2,1) => [[2,1],[1,2]]
export const mds2_circ2_1: Mds2Fn = ([a, b]) => {
  const s0 = mod(2n * a + 1n * b)
  const s1 = mod(1n * a + 2n * b)
  return [s0, s1]
}

// t=2 internal mix
export function internal_2([x, y]: [bigint, bigint]): [bigint, bigint] {
  const sum = add(x, y)
  return [add(sum, x), add(sum, mul(2n, y))]
}

// t=3 external mix
export function external_3([a, b, c]: [bigint, bigint, bigint]): [bigint, bigint, bigint] {
  const sum = add(add(a, b), c)
  return [add(a, sum), add(b, sum), add(c, sum)]
}

// t=3 internal mix
export function internal_3([a, b, c]: [bigint, bigint, bigint]): [bigint, bigint, bigint] {
  const sum = add(add(a, b), c)
  return [add(a, sum), add(b, sum), add(mul(2n, c), sum)]
}