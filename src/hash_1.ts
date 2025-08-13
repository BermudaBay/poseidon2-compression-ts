import { permuteBn254T2 } from "./permutations/permute_t2"

export function hash_1(x: bigint): bigint {
  return permuteBn254T2([x, 1n])[0]
}
