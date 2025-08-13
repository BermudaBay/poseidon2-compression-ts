import { add, sbox, sbox_e, mod } from "../utils/arith"
import { internal_2, mds2_circ2_1 } from "../utils/mix"
import { cfg2 } from "../constants/t2"

export function permuteBn254T2(
  input: [bigint, bigint],
): [bigint, bigint] {
  const mds2 = mds2_circ2_1
  const cfg = cfg2
  let state: [bigint, bigint] = mds2([mod(input[0]), mod(input[1])])

  // First full rounds (4)
  for (let r = 0; r < 4; r++) {
    state = [add(state[0], cfg.first_full_rc[r]![0]!), add(state[1], cfg.first_full_rc[r]![1]!)]
    state = sbox(state) as [bigint, bigint]
    state = mds2(state)
  }

  // Partial rounds
  for (let r = 0; r < cfg.partial_rc.length; r++) {
    state = [add(state[0], cfg.partial_rc[r]!), state[1]]
    state = [sbox_e(state[0]), state[1]]
    state = internal_2(state)
  }

  // Final full rounds (4)
  for (let r = 0; r < 4; r++) {
    state = [add(state[0], cfg.second_full_rc[r]![0]!), add(state[1], cfg.second_full_rc[r]![1]!)]
    state = sbox(state) as [bigint, bigint]
    state = mds2(state)
  }
  return state
}
