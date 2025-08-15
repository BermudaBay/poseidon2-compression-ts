import { permuteBn254T2 } from "./permutations/permute_t2"

export function hash_2(a: bigint, b: bigint): bigint {
  return permuteBn254T2([a, b])[0]
}

export function permute_2(a: bigint, b: bigint): [bigint, bigint] {
  return permuteBn254T2([a, b])
}
