import { permute as permuteBn254T4 } from "@zkpassport/poseidon2"

export function permute_4(input: [bigint, bigint, bigint, bigint]): [bigint, bigint, bigint, bigint] {
  const out = permuteBn254T4(input)
  return [out[0]!, out[1]!, out[2]!, out[3]!]
}

export function hash_4(input: [bigint,bigint,bigint,bigint]): bigint {
  return permute_4(input)[0]
}


