import { add, sbox, sbox_e } from "../utils/arith"

export type Poseidon2Cfg<T extends bigint[]> = {
  first_full_rc: T[]
  partial_rc: bigint[]
  second_full_rc: T[]
}

export class Poseidon2Bn254Permuter<T extends bigint[]> {
  private readonly external: (state: T) => T
  private readonly internal: (state: T) => T
  private readonly cfg: Poseidon2Cfg<T>

  constructor(cfg: Poseidon2Cfg<T>, external: (state: T) => T, internal: (state: T) => T) {
    this.cfg = cfg
    this.external = external
    this.internal = internal
  }

  permute(input: T): T {
    // Initial external mix
    let state = this.external(input)

    // First full rounds (4)
    for (let r = 0; r < 4; r++) {
      state = this.addRoundConstants(state, this.cfg.first_full_rc[r]!)
      state = sbox(state) as T
      state = this.external(state)
    }

    // Partial rounds
    for (let r = 0; r < this.cfg.partial_rc.length; r++) {
      // add RC only to first element
      state[0] = add(state[0]!, this.cfg.partial_rc[r]!)
      // S-box only on first element
      state[0] = sbox_e(state[0]!)
      state = this.internal(state)
    }

    // Final full rounds (4)
    for (let r = 0; r < 4; r++) {
      state = this.addRoundConstants(state, this.cfg.second_full_rc[r]!)
      state = sbox(state) as T
      state = this.external(state)
    }

    return state
  }

  private addRoundConstants(state: T, rc: T): T {
    const out = new Array(state.length) as T
    for (let i = 0; i < state.length; i++) {
      out[i] = add(state[i]!, rc[i]!)
    }
    return out
  }
}
