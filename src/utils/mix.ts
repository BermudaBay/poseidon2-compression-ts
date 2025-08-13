import { add, mul, mod } from "./arith"

export type Mds2Fn = (state: [bigint, bigint]) => [bigint, bigint]

// MDS2: circulant(2,1) => [[2,1],[1,2]]
export const mds2_circ2_1: Mds2Fn = ([a, b]) => {
  const s0 = mod(2n * a + 1n * b)
  const s1 = mod(1n * a + 2n * b)
  return [s0, s1]
}

export function internal_2([x, y]: [bigint, bigint]): [bigint, bigint] {
  const sum = add(x, y)
  return [add(sum, x), add(sum, mul(2n, y))]
}

