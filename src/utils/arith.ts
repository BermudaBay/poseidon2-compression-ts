export const BN254_PRIME =
  21888242871839275222246405745257275088548364400416034343698204186575808495617n

export function mod(a: bigint): bigint {
  const r = a % BN254_PRIME
  return r >= 0n ? r : r + BN254_PRIME
}

export function add(a: bigint, b: bigint): bigint {
  return mod(a + b)
}

export function mul(a: bigint, b: bigint): bigint {
  return mod(a * b)
}

export function pow5(a: bigint): bigint {
  const a2 = mul(a, a)
  const a4 = mul(a2, a2)
  return mul(a4, a)
}

export function sbox(state: bigint[]): bigint[] {
  return state.map(pow5)
}

export function sbox_e(x: bigint): bigint {
  return pow5(x)
}
