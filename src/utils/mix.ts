import { add, mul } from "./arith"

// t=2 external mix
export function external_2([a, b]: [bigint, bigint]): [bigint, bigint] {
  const sum = add(a, b)
  return [add(a, sum), add(b, sum)]
}

// t=2 internal mix
export function internal_2([x, y]: [bigint, bigint]): [bigint, bigint] {
  const sum = add(x, y)
  return [add(x, sum), add(mul(2n, y), sum)]
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
