use poseidon2::bn254::{hash_1, hash_2, hash_3, hash_4};

fn main() -> pub [Field; 4] {
    // Fixed input values (4 Field elements)
    let input1: Field = 1;
    let input2: Field = 2;
    let input3: Field = 3;
    let input4: Field = 4;
    
    // Calculate hashes for different input sizes
    let hash1_result = hash_1([input1]);
    let hash2_result = hash_2([input1, input2]);
    let hash3_result = hash_3([input1, input2, input3]);
    let hash4_result = hash_4([input1, input2, input3, input4]);
    
    // Return array of all hash results
    [hash1_result, hash2_result, hash3_result, hash4_result]
} 