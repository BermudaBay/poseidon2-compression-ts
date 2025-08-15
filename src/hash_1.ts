import { permuteBn254T2 } from "./permutations/permute_t2"

export function hash_1(a: bigint): bigint {
  return permuteBn254T2([a, 1n])[0]
}
