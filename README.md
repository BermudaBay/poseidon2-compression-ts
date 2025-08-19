# Poseidon2 Compression in TypeScript

A TypeScript implementation of Poseidon2 compression over the BN254 field supporting `hash_1`, `hash_2`, `hash_3`, and `hash_4`.

## Features

- Poseidon2 compression over BN254 prime field
- t = 2, 3, 4 input variants
- `hash_1`, `hash_2`, `hash_3`, `hash_4`

## Library API

- `hash_1(a: bigint) -> bigint`
- `hash_2(a: bigint, b: bigint) -> bigint`
- `hash_3(a: bigint, b: bigint, c: bigint) -> bigint`
- `hash_4(a: bigint, b: bigint, c: bigint, d: bigint) -> bigint`

## Compatibility

- Follows: This library follows [TaceoLabs/noir-poseidon Poseidon2](https://github.com/TaceoLabs/noir-poseidon/tree/main/poseidon2) parameters and outputs for drop‑in compatibility.
- Permutations: t=2 and t=3 are implemented locally; t=4 delegates to `@zkpassport/poseidon2@0.6.2`.
- Tests: Test vectors are taken from upstream to verify bit‑for‑bit equality.

## Development
```bash
# Install deps
bun install

# Run tests
bun x vitest run

# Build
bun run build
```

## Reference
- [Poseidon2: A Faster Version of the Poseidon Hash Function](https://eprint.iacr.org/2023/323)
- [TaceoLabs/noir-poseidon](https://github.com/TaceoLabs/noir-poseidon)
- [HorizenLabs/poseidon2](https://github.com/HorizenLabs/poseidon2)
- [zkpassport/poseidon2](https://github.com/zkpassport/poseidon2)