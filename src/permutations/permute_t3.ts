import { external_3, internal_3 } from "../utils/mix"
import { cfg3 } from "../constants/t3"
import { Poseidon2Bn254Permuter } from "./poseidon2_permutation"

const permuter3 = new Poseidon2Bn254Permuter<[bigint, bigint, bigint]>(cfg3, external_3, internal_3)

export function permuteBn254T3(input: [bigint, bigint, bigint]): [bigint, bigint, bigint] {
  return permuter3.permute(input)
}
