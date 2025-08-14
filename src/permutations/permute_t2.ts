import { internal_2, external_2 } from "../utils/mix"
import { cfg2 } from "../constants/t2"
import { Poseidon2Bn254Permuter } from "./poseidon2_permutation"

const permuter2 = new Poseidon2Bn254Permuter<[bigint, bigint]>(cfg2, external_2, internal_2)

export function permuteBn254T2(input: [bigint, bigint]): [bigint, bigint] {
  return permuter2.permute(input)
}
