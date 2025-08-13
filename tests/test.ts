import { hash_4 } from "../src/hash4"

const input: [bigint, bigint, bigint, bigint] = [1n, 2n, 3n, 4n]

const hash_4_result = hash_4(input)

console.log("hash_4_result:", hash_4_result)
