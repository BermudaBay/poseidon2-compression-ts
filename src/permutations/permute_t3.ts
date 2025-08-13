import { add, sbox, sbox_e, mod } from "../utils/arith"
import { external_3, internal_3 } from "../utils/mix"
import { cfg3 } from "../constants/t3"

export function permuteBn254T3(
  input: [bigint, bigint, bigint],
): [bigint, bigint, bigint] {
  let state: [bigint, bigint, bigint] = external_3([mod(input[0]), mod(input[1]), mod(input[2])])

  // First full rounds (4)
  for (let r = 0; r < 4; r++) {
    state = [
      add(state[0], cfg3.first_full_rc[r]![0]!),
      add(state[1], cfg3.first_full_rc[r]![1]!),
      add(state[2], cfg3.first_full_rc[r]![2]!),
    ]
    state = sbox(state) as [bigint, bigint, bigint]
    state = external_3(state)
  }

  // Partial rounds
  for (let r = 0; r < cfg3.partial_rc.length; r++) {
    state = [add(state[0], cfg3.partial_rc[r]!), state[1], state[2]]
    state = [sbox_e(state[0]), state[1], state[2]]
    state = internal_3(state)
  }

  // Final full rounds (4)
  for (let r = 0; r < 4; r++) {
    state = [
      add(state[0], cfg3.second_full_rc[r]![0]!),
      add(state[1], cfg3.second_full_rc[r]![1]!),
      add(state[2], cfg3.second_full_rc[r]![2]!),
    ]
    state = sbox(state) as [bigint, bigint, bigint]
    state = external_3(state)
  }

  return state
}
