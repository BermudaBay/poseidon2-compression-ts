// src/utils/arith.ts
var BN254_PRIME = 21888242871839275222246405745257275088548364400416034343698204186575808495617n;
function mod(a) {
  return a % BN254_PRIME;
}
function add(a, b) {
  return mod(a + b);
}
function mul(a, b) {
  return mod(a * b);
}
function pow5(a) {
  const a2 = mul(a, a);
  const a4 = mul(a2, a2);
  return mul(a4, a);
}
function sbox(state) {
  return state.map(pow5);
}
function sbox_e(x) {
  return pow5(x);
}

// src/utils/mix.ts
function external_2([a, b]) {
  const sum = add(a, b);
  return [add(a, sum), add(b, sum)];
}
function internal_2([x, y]) {
  const sum = add(x, y);
  return [add(x, sum), add(mul(2n, y), sum)];
}
function external_3([a, b, c]) {
  const sum = add(add(a, b), c);
  return [add(a, sum), add(b, sum), add(c, sum)];
}
function internal_3([a, b, c]) {
  const sum = add(add(a, b), c);
  return [add(a, sum), add(b, sum), add(mul(2n, c), sum)];
}

// src/constants/t2.ts
var cfg2 = {
  first_full_rc: [
    [
      0x09c46e9ec68e9bd4fe1faaba294cba38a71aa177534cdd1b6c7dc0dbd0abd7a7n,
      0x0c0356530896eec42a97ed937f3135cfc5142b3ae405b8343c1d83ffa604cb81n
    ],
    [
      0x1e28a1d935698ad1142e51182bb54cf4a00ea5aabd6268bd317ea977cc154a30n,
      0x27af2d831a9d2748080965db30e298e40e5757c3e008db964cf9e2b12b91251fn
    ],
    [
      0x1e6f11ce60fc8f513a6a3cfe16ae175a41291462f214cd0879aaf43545b74e03n,
      0x2a67384d3bbd5e438541819cb681f0be04462ed14c3613d8f719206268d142d3n
    ],
    [
      0x0b66fdf356093a611609f8e12fbfecf0b985e381f025188936408f5d5c9f45d0n,
      0x012ee3ec1e78d470830c61093c2ade370b26c83cc5cebeeddaa6852dbdb09e21n
    ]
  ],
  partial_rc: [
    0x0252ba5f6760bfbdfd88f67f8175e3fd6cd1c431b099b6bb2d108e7b445bb1b9n,
    0x179474cceca5ff676c6bec3cef54296354391a8935ff71d6ef5aeaad7ca932f1n,
    0x2c24261379a51bfa9228ff4a503fd4ed9c1f974a264969b37e1a2589bbed2b91n,
    0x1cc1d7b62692e63eac2f288bd0695b43c2f63f5001fc0fc553e66c0551801b05n,
    0x255059301aada98bb2ed55f852979e9600784dbf17fbacd05d9eff5fd9c91b56n,
    0x28437be3ac1cb2e479e1f5c0eccd32b3aea24234970a8193b11c29ce7e59efd9n,
    0x28216a442f2e1f711ca4fa6b53766eb118548da8fb4f78d4338762c37f5f2043n,
    0x2c1f47cd17fa5adf1f39f4e7056dd03feee1efce03094581131f2377323482c9n,
    0x07abad02b7a5ebc48632bcc9356ceb7dd9dafca276638a63646b8566a621afc9n,
    0x0230264601ffdf29275b33ffaab51dfe9429f90880a69cd137da0c4d15f96c3cn,
    0x1bc973054e51d905a0f168656497ca40a864414557ee289e717e5d66899aa0a9n,
    0x2e1c22f964435008206c3157e86341edd249aff5c2d8421f2a6b22288f0a67fcn,
    0x1224f38df67c5378121c1d5f461bbc509e8ea1598e46c9f7a70452bc2bba86b8n,
    0x02e4e69d8ba59e519280b4bd9ed0068fd7bfe8cd9dfeda1969d2989186cde20en,
    0x1f1eccc34aaba0137f5df81fc04ff3ee4f19ee364e653f076d47e9735d98018en,
    0x1672ad3d709a353974266c3039a9a7311424448032cd1819eacb8a4d4284f582n,
    0x283e3fdc2c6e420c56f44af5192b4ae9cda6961f284d24991d2ed602df8c8fc7n,
    0x1c2a3d120c550ecfd0db0957170fa013683751f8fdff59d6614fbd69ff394bccn,
    0x216f84877aac6172f7897a7323456efe143a9a43773ea6f296cb6b8177653fbdn,
    0x2c0d272becf2a75764ba7e8e3e28d12bceaa47ea61ca59a411a1f51552f94788n,
    0x016e34299865c0e28484ee7a74c454e9f170a5480abe0508fcb4a6c3d89546f43n,
    0x175ceba599e96f5b375a232a6fb9cc71772047765802290f48cd939755488fc5n,
    0x0c7594440dc48c16fead9e1758b028066aa410bfbc354f54d8c5ffbb44a1ee32n,
    0x1a3c29bc39f21bb5c466db7d7eb6fd8f760e20013ccf912c92479882d919fd8dn,
    0x0ccfdd906f3426e5c0986ea049b253400855d349074f5a6695c8eeabcd22e68fn,
    0x14f6bc81d9f186f62bdb475ce6c9411866a7a8a3fd065b3ce0e699b67dd9e796n,
    0x0962b82789fb3d129702ca70b2f6c5aacc099810c9c495c888edeb7386b97052n,
    0x1a880af7074d18b3bf20c79de25127bc13284ab01ef02575afef0c8f6a31a86dn,
    0x10cba18419a6a332cd5e77f0211c154b20af2924fc20ff3f4c3012bb7ae9311bn,
    0x057e62a9a8f89b3ebdc76ba63a9eaca8fa27b7319cae3406756a2849f302f10dn,
    0x287c971de91dc0abd44adf5384b4988cb961303bbf65cff5afa0413b44280ceen,
    0x21df3388af1687bbb3bca9da0cca908f1e562bc46d4aba4e6f7f7960e306891dn,
    0x1be5c887d25bce703e25cc974d0934cd789df8f70b498fd83eff8b560e1682b3n,
    0x268da36f76e568fb68117175cea2cd0dd2cb5d42fda5acea48d59c2706a0d5c1n,
    0x0e17ab091f6eae50c609beaf5510ececc5d8bb74135ebd05bd06460cc26a5ed6n,
    0x04d727e728ffa0a67aee535ab074a43091ef62d8cf83d270040f5caa1f62af40n,
    0x0ddbd7bf9c29341581b549762bc022ed33702ac10f1bfd862b15417d7e39ca6en,
    0x2790eb3351621752768162e82989c6c234f5b0d1d3af9b588a29c49c8789654bn,
    0x1e457c601a63b73e4471950193d8a570395f3d9ab8b2fd0984b764206142f9e9n,
    0x21ae64301dca9625638d6ab2bbe7135ffa90ecd0c43ff91fc4c686fc46e091b0n,
    0x0379f63c8ce3468d4da293166f494928854be9e3432e09555858534eed8d350bn,
    0x002d56420359d0266a744a080809e054ca0e4921a46686ac8c9f58a324c35049n,
    0x123158e5965b5d9b1d68b3cd32e10bbeda8d62459e21f4090fc2c5af963515a6n,
    0x0be29fc40847a941661d14bbf6cbe0420fbb2b6f52836d4e60c80eb49cad9ec1n,
    0x1ac96991dec2bb0557716142015a453c36db9d859cad5f9a233802f24fdf4c1an,
    0x1596443f763dbcc25f4964fc61d23b3e5e12c9fa97f18a9251ca3355bcb0627en,
    0x12e0bcd3654bdfa76b2861d4ec3aeae0f1857d9f17e715aed6d049eae3ba3212n,
    0x0fc92b4f1bbea82b9ea73d4af9af2a50ceabac7f37154b1904e6c76c7cf964ban,
    0x1f9c0b1610446442d6f2e592a8013f40b14f7c7722236f4f9c7e965233872762n,
    0x0ebd74244ae72675f8cde06157a782f4050d914da38b4c058d159f643dbbf4d3n,
    0x2cb7f0ed39e16e9f69a9fafd4ab951c03b0671e97346ee397a839839dccfc6d1n,
    0x1a9d6e2ecff022cc5605443ee41bab20ce761d0514ce526690c72bca7352d9bfn,
    0x2a115439607f335a5ea83c3bc44a9331d0c13326a9a7ba3087da182d648ec72fn,
    0x23f9b6529b5d040d15b8fa7aee3e3410e738b56305cd44f29535c115c5a4c060n,
    0x05872c16db0f72a2249ac6ba484bb9c3a3ce97c16d58b68b260eb939f0e6e8a7n,
    0x1300bdee08bb7824ca20fb80118075f40219b6151d55b5c52b624a7cdeddf6a7n
  ],
  second_full_rc: [
    [
      0x19b9b63d2f108e17e63817863a8f6c288d7ad29916d98cb1072e4e7b7d52b376n,
      0x015bee1357e3c015b5bda237668522f613d1c88726b5ec4224a20128481b4f7fn
    ],
    [
      0x2953736e94bb6b9f1b9707a4f1615e4efe1e1ce4bab218cbea92c785b128ffd1n,
      0x0b069353ba091618862f806180c0385f851b98d372b45f544ce7266ed6608dfcn
    ],
    [
      0x304f74d461ccc13115e4e0bcfb93817e55aeb7eb9306b64e4f588ac97d81f429n,
      0x15bbf146ce9bca09e8a33f5e77dfe4f5aad2a164a4617a4cb8ee5415cde913fcn
    ],
    [
      0x0ab4dfe0c2742cde44901031487964ed9b8f4b850405c10ca9ff23859572c8c6n,
      0x0e32db320a044e3197f45f7649a19675ef5eedfea546dea9251de39f9639779an
    ]
  ]
};

// src/permutations/poseidon2_permutation.ts
var Poseidon2Bn254Permuter = class {
  external;
  internal;
  cfg;
  constructor(cfg, external, internal) {
    this.cfg = cfg;
    this.external = external;
    this.internal = internal;
  }
  permute(input) {
    let state = this.external(input);
    for (let r = 0; r < 4; r++) {
      state = this.addRoundConstants(state, this.cfg.first_full_rc[r]);
      state = sbox(state);
      state = this.external(state);
    }
    for (let r = 0; r < this.cfg.partial_rc.length; r++) {
      state[0] = add(state[0], this.cfg.partial_rc[r]);
      state[0] = sbox_e(state[0]);
      state = this.internal(state);
    }
    for (let r = 0; r < 4; r++) {
      state = this.addRoundConstants(state, this.cfg.second_full_rc[r]);
      state = sbox(state);
      state = this.external(state);
    }
    return state;
  }
  addRoundConstants(state, rc) {
    const out = new Array(state.length);
    for (let i = 0; i < state.length; i++) {
      out[i] = add(state[i], rc[i]);
    }
    return out;
  }
};

// src/permutations/permute_t2.ts
var permuter2 = new Poseidon2Bn254Permuter(cfg2, external_2, internal_2);
function permuteBn254T2(input) {
  return permuter2.permute(input);
}

// src/hash_1.ts
function hash_1(a) {
  return permuteBn254T2([a, 1n])[0];
}

// src/hash_2.ts
function hash_2(a, b) {
  return permuteBn254T2([a, b])[0];
}

// src/constants/t3.ts
var cfg3 = {
  first_full_rc: [
    [
      0x1d066a255517b7fd8bddd3a93f7804ef7f8fcde48bb4c37a59a09a1a97052816n,
      0x29daefb55f6f2dc6ac3f089cebcc6120b7c6fef31367b68eb7238547d32c1610n,
      0x1f2cb1624a78ee001ecbd88ad959d7012572d76f08ec5c4f9e8b7ad7b0b4e1d1n
    ],
    [
      0x0aad2e79f15735f2bd77c0ed3d14aa27b11f092a53bbc6e1db0672ded84f31e5n,
      0x2252624f8617738cd6f661dd4094375f37028a98f1dece66091ccf1595b43f28n,
      0x1a24913a928b38485a65a84a291da1ff91c20626524b2b87d49f4f2c9018d735n
    ],
    [
      0x22fc468f1759b74d7bfc427b5f11ebb10a41515ddff497b14fd6dae1508fc47an,
      0x1059ca787f1f89ed9cd026e9c9ca107ae61956ff0b4121d5efd65515617f6e4dn,
      0x02be9473358461d8f61f3536d877de982123011f0bf6f155a45cbbfae8b981cen
    ],
    [
      0x0ec96c8e32962d462778a749c82ed623aba9b669ac5b8736a1ff3a441a5084a4n,
      0x292f906e073677405442d9553c45fa3f5a47a7cdb8c99f9648fb2e4d814df57en,
      0x274982444157b86726c11b9a0f5e39a5cc611160a394ea460c63f0b2ffe5657en
    ]
  ],
  partial_rc: [
    0x1a1d063e54b1e764b63e1855bff015b8cedd192f47308731499573f23597d4b5n,
    0x26abc66f3fdf8e68839d10956259063708235dccc1aa3793b91b002c5b257c37n,
    0x0c7c64a9d887385381a578cfed5aed370754427aabca92a70b3c2b12ff4d7be8n,
    0x1cf5998769e9fab79e17f0b6d08b2d1eba2ebac30dc386b0edd383831354b495n,
    0x0f5e3a8566be31b7564ca60461e9e08b19828764a9669bc17aba0b97e66b0109n,
    0x18df6a9d19ea90d895e60e4db0794a01f359a53a180b7d4b42bf3d7a531c976en,
    0x04f7bf2c5c0538ac6e4b782c3c6e601ad0ea1d3a3b9d25ef4e324055fa3123dcn,
    0x29c76ce22255206e3c40058523748531e770c0584aa2328ce55d54628b89ebe6n,
    0x0198d425a45b78e85c053659ab4347f5d65b1b8e9c6108dbe00e0e945dbc5ff15n,
    0x25ee27ab6296cd5e6af3cc79c598a1daa7ff7f6878b3c49d49d3a9a90c3fdf74n,
    0x138ea8e0af41a1e024561001c0b6eb1505845d7d0c55b1b2c0f88687a96d1381n,
    0x306197fb3fab671ef6e7c2cba2eefd0e42851b5b9811f2ca4013370a01d95687n,
    0x1a0c7d52dc32a4432b66f0b4894d4f1a21db7565e5b4250486419eaf00e8f620n,
    0x2b46b418de80915f3ff86a8e5c8bdfccebfbe5f55163cd6caa52997da2c54a9fn,
    0x12d3e0dc0085873701f8b777b9673af9613a1af5db48e05bfb46e312b5829f64n,
    0x263390cf74dc3a8870f5002ed21d089ffb2bf768230f648dba338a5cb19b3a1fn,
    0x0a14f33a5fe668a60ac884b4ca607ad0f8abb5af40f96f1d7d543db52b003dcdn,
    0x28ead9c586513eab1a5e86509d68b2da27be3a4f01171a1dd847df829bc683b9n,
    0x1c6ab1c328c3c6430972031f1bdb2ac9888f0ea1abe71cffea16cda6e1a7416cn,
    0x1fc7e71bc0b819792b2500239f7f8de04f6decd608cb98a932346015c5b42c94n,
    0x03e107eb3a42b2ece380e0d860298f17c0c1e197c952650ee6dd85b93a0ddaa8n,
    0x2d354a251f381a4669c0d52bf88b772c46452ca57c08697f454505f6941d78cdn,
    0x094af88ab05d94baf687ef14bc566d1c522551d61606eda3d14b4606826f794bn,
    0x19705b783bf3d2dc19bcaeabf02f8ca5e1ab5b6f2e3195a9d52b2d249d1396f7n,
    0x09bf4acc3a8bce3f1fcc33fee54fc5b28723b16b7d740a3e60cef6852271200en,
    0x1803f8200db6013c50f83c0c8fab62843413732f301f7058543a073f3f3b5e4en,
    0x0f80afb5046244de30595b160b8d1f38bf6fb02d4454c0add41f7fef2faf3e5cn,
    0x126ee1f8504f15c3d77f0088c1cfc964abcfcf643f4a6fea7dc3f98219529d78n,
    0x23c203d10cfcc60f69bfb3d919552ca10ffb4ee63175ddf8ef86f991d7d0a591n,
    0x2a2ae15d8b143709ec0d09705fa3a6303dec1ee4eec2cf747c5a339f7744fb94n,
    0x07b60dee586ed6ef47e5c381ab6343ecc3d3b3006cb461bbb6b5d89081970b2bn,
    0x27316b559be3edfd885d95c494c1ae3d8a98a320baa7d152132cfe583c9311bdn,
    0x1d5c49ba157c32b8d8937cb2d3f84311ef834cc2a743ed662f5f9af0c0342e76n,
    0x2f8b124e78163b2f332774e0b850b5ec09c01bf6979938f67c24bd5940968488n,
    0x1e6843a5457416b6dc5b7aa09a9ce21b1d4cba6554e51d84665f75260113b3d5n,
    0x11cdf00a35f650c55fca25c9929c8ad9a68daf9ac6a189ab1f5bc79f21641d4bn,
    0x21632de3d3bbc5e42ef36e588158d6d4608b2815c77355b7e82b5b9b7eb560bcn,
    0x0de625758452efbd97b27025fbd245e0255ae48ef2a329e449d7b5c51c18498an,
    0x2ad253c053e75213e2febfd4d976cc01dd9e1e1c6f0fb6b09b09546ba0838098n,
    0x1d6b169ed63872dc6ec7681ec39b3be93dd49cdd13c813b7d35702e38d60b077n,
    0x1660b740a143664bb9127c4941b67fed0be3ea70a24d5568c3a54e706cfef7fen,
    0x0065a92d1de81f34114f4ca2deef76e0ceacdddb12cf879096a29f10376ccbfen,
    0x1f11f065202535987367f823da7d672c353ebe2ccbc4869bcf30d50a5871040dn,
    0x26596f5c5dd5a5d1b437ce7b14a2c3dd3bd1d1a39b6759ba110852d17df0693en,
    0x16f49bc727e45a2f7bf3056efcf8b6d38539c4163a5f1e706743db15af91860fn,
    0x1abe1deb45b3e3119954175efb331bf4568feaf7ea8b3dc5e1a4e7438dd39e5fn,
    0x0e426ccab66984d1d8993a74ca548b779f5db92aaec5f102020d34aea15fba59n,
    0x0e7c30c2e2e8957f4933bd1942053f1f0071684b902d534fa841924303f6a6c6n,
    0x0812a017ca92cf0a1622708fc7edff1d6166ded6e3528ead4c76e1f31d3fc69dn,
    0x21a5ade3df2bc1b5bba949d1db96040068afe5026edd7a9c2e276b47cf010d54n,
    0x01f3035463816c84ad711bf1a058c6c6bd101945f50e5afe72b1a5233f8749cen,
    0x0b115572f038c0e2028c2aafc2d06a5e8bf2f9398dbd0fdf4dcaa82b0f0c1c8bn,
    0x1c38ec0b99b62fd4f0ef255543f50d2e27fc24db42bc910a3460613b6ef59e2fn,
    0x1c89c6d9666272e8425c3ff1f4ac737b2f5d314606a297d4b1d0b254d880c53en,
    0x03326e643580356bf6d44008ae4c042a21ad4880097a5eb38b71e2311bb88f8fn,
    0x268076b0054fb73f67cee9ea0e51e3ad50f27a6434b5dceb5bdde2299910a4c9n
  ],
  second_full_rc: [
    [
      0x1acd63c67fbc9ab1626ed93491bda32e5da18ea9d8e4f10178d04aa6f8747ad0n,
      0x19f8a5d670e8ab66c4e3144be58ef6901bf93375e2323ec3ca8c86cd2a28b5a5n,
      0x1c0dc443519ad7a86efa40d2df10a011068193ea51f6c92ae1cfbb5f7b9b6893n
    ],
    [
      0x14b39e7aa4068dbe50fe7190e421dc19fbeab33cb4f6a2c4180e4c3224987d3dn,
      0x1d449b71bd826ec58f28c63ea6c561b7b820fc519f01f021afb1e35e28b0795en,
      0x1ea2c9a89baaddbb60fa97fe60fe9d8e89de141689d1252276524dc0a9e987fcn
    ],
    [
      0x0478d66d43535a8cb57e9c1c3d6a2bd7591f9a46a0e9c058134d5cefdb3c7ff1n,
      0x19272db71eece6a6f608f3b2717f9cd2662e26ad86c400b21cde5e4a7b00beben,
      0x14226537335cab33c749c746f09208abb2dd1bd66a87ef75039be846af134166n
    ],
    [
      0x01fd6af15956294f9dfe38c0d976a088b21c21e4a1c2e823f912f44961f9a9cen,
      0x18e5abedd626ec307bca190b8b2cab1aaee2e62ed229ba5a5ad8518d4e5f2a57n,
      0x0fc1bbceba0590f5abbdffa6d3b35e3297c021a3a409926d0e2d54dc1c84fda6n
    ]
  ]
};

// src/permutations/permute_t3.ts
var permuter3 = new Poseidon2Bn254Permuter(cfg3, external_3, internal_3);
function permuteBn254T3(input) {
  return permuter3.permute(input);
}

// src/hash_3.ts
function hash_3(a, b, c) {
  return permuteBn254T3([a, b, c])[0];
}

// src/hash_4.ts
import { permute as permuteBn254T4 } from "@zkpassport/poseidon2";
function hash_4(a, b, c, d) {
  return permute_4([a, b, c, d])[0];
}
function permute_4(input) {
  const out = permuteBn254T4(input);
  return [out[0], out[1], out[2], out[3]];
}
export {
  hash_1,
  hash_2,
  hash_3,
  hash_4
};
