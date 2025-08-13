import { hash_4 } from "../src/hash_4"
import { hash_2 } from "../src/hash_2"

const input_2: [bigint, bigint] = [1n, 2n]
const hash_2_result = hash_2(input_2[0]!, input_2[1]!)
console.log("hash_2_result:", hash_2_result)

const input_4: [bigint, bigint, bigint, bigint] = [1n, 2n, 3n, 4n]
const hash_4_result = hash_4(input_4)
console.log("hash_4_result:", hash_4_result)