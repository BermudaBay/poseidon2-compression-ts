import { hash_1 } from "../src/hash_1"
import { hash_2 } from "../src/hash_2"
import { hash_4 } from "../src/hash_4"

const input_1: bigint = 1n
const hash_1_result = hash_1(input_1)
console.log("hash_1_result:", hash_1_result)

const input_2: [bigint, bigint] = [1n, 2n]
const hash_2_result = hash_2(input_2[0]!, input_2[1]!)
console.log("hash_2_result:", hash_2_result)

const input_4: [bigint, bigint, bigint, bigint] = [1n, 2n, 3n, 4n]
const hash_4_result = hash_4(input_4)
console.log("hash_4_result:", hash_4_result)