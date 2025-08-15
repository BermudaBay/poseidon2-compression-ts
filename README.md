# Poseidon2 Compression in TypeScript

A TypeScript implementation of Poseidon2 compression over the BN254 field supporting `hash_1`, `hash_2`, `hash_3`, and `hash_4`.

## Features

- Poseidon2 compression over BN254 prime field
- t = 2, 3, 4 input variants
- `hash_1`, `hash_2`, `hash_3`, `hash_4`

## Library API

- `hash_1(x: bigint) -> bigint`
- `hash_2(x: bigint, y: bigint) -> bigint`
- `hash_3(a: bigint, b: bigint, c: bigint) -> bigint`
- `hash_4([a, b, c, d]: [bigint, bigint, bigint, bigint]) -> bigint`

## Development
```bash
# Install deps
bun install

# Run tests
bun x vitest run

# Build
bun run build
```

Notes:
- t=2 and t=3 permutations are implemented locally; t=4 uses `@zkpassport/poseidon2`.

## Reference
- [Poseidon2: A Faster Version of the Poseidon Hash Function](https://eprint.iacr.org/2023/323)
- [TaceoLabs noir-poseidon](https://github.com/TaceoLabs/noir-poseidon)
- [HorizonLabs poseidon2](https://github.com/HorizenLabs/poseidon2)