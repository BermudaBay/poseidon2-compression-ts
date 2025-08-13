import { permuteBn254T3 } from "./permutations/permute_t3"

export function hash_3(a: bigint, b: bigint, c: bigint): bigint {
  return permuteBn254T3([a, b, c])[0]
}
