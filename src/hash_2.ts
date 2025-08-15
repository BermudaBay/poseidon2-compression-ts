import { permuteBn254T2 } from "./permutations/permute_t2"

export function hash_2(x: bigint, y: bigint): bigint {
  return permuteBn254T2([x, y])[0]
}

export function permute_2(x: bigint, y: bigint): [bigint, bigint] {
  return permuteBn254T2([x, y])
}
