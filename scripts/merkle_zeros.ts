import { hash_2 } from "../src/hash_2"

main()

function main () {
    if (!process.env.ZERO) throw new Error("missing env var ZERO")
    if (!process.env.LEVELS) throw new Error("missing env var LEVELS")

    const zeros = [BigInt(process.env.ZERO)]

    for (let i = 1; i <= Number(process.env.LEVELS); i++)
        zeros[i] = hash_2(zeros[i - 1]!, zeros[i - 1]!)

    for (const zero of zeros)
        console.log(`0x${zero.toString(16).padStart(64, "0")}`)
}