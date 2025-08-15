import { describe, it, expect } from "vitest"
import { hash_1 } from "../src/hash_1"
import { hash_2 } from "../src/hash_2"
import { hash_3 } from "../src/hash_3"
import { hash_4 } from "../src/hash_4"

describe("Poseidon2 test vectors", () => {
  it("T2 vectors", () => {
    const expected01 = 0x1d01e56f49579cec72319e145f06f6177f6c5253206e78c2689781452a31878bn
    expect(hash_1(0n)).toEqual(expected01)
    expect(hash_2(0n, 1n)).toEqual(expected01)

    expect(
      hash_2(
        0x0ae097f5ad29d8a8329dc964d961c9933a57667122baa88351719021510aadccn,
        0x1db0afb64a7847b404e509b8076ea6f113e0dc33c8d8923850288b297b366a96n,
      ),
    ).toEqual(0x234411a64c9117a670dcbb2e32887c05695108becb3746a4b63a5e0c64abf213n)

    expect(
      hash_2(
        0x190e9f8d74c3ee7e6f9a5fc4f3e9aea43e4c636652d64732663ce4d4e9a82dfcn,
        0x116d4666591fd484d3f63b2143851ecf51790d344f076703aff0ea2ae73d84c0n,
      ),
    ).toEqual(0x184f08154e7c0ae8d1dd611de726a33b46e83c881e7dcc83969ab5225bb1ffd2n)

    expect(
      hash_2(
        0x0765449fba54a8f027fdfc4bba2251e13867d2999658961503e1c552eb8d30f0n,
        0x2458fc60fe06af665be546da89f792db27ba8122735483b028f7945b79a0121dn,
      ),
    ).toEqual(0x00b99fef7542031ec0fc94e798c29b8d270ae80b0496316c722f149ddbd24c10n)

    expect(
      hash_2(
        0x05df817f34e9cc11af435dd58951c0dc120a9637f1625dae110c900fd64fac01n,
        0x165798534b555615e2d3a7c0371d7c6b37814e4816dfcbcce9a7f5134166bf95n,
      ),
    ).toEqual(0x2383496930a272a7d99e2db4dcfbe427ac7ece01dbb2c74e0393f44807131987n)

    expect(
      hash_2(
        0x278ab5ceb7ccf50051df09e958a60cdc29304d5a8bc5f512e8c05e4e8344b494n,
        0x0691450210975cfd5ad15ad9b7b8d2c0b0e15bc964511530830691b9bdb1deabn,
      ),
    ).toEqual(0x267529bf7c33acceb53850eba2b713f4449a04d168f90b211c9cbfc2977955e8n)

    expect(
      hash_2(
        0x0c19d1ab43ce3d913418687b4a60b758e2be814434c5310c7f0a6f5813befa40n,
        0x0cff2930faece292fb8ef0447faa51eca7538b91999d308c914ffe166deae4b2n,
      ),
    ).toEqual(0x1ac275a60d969f95feead488e81955aa70680121066220a8e313309e76ce8c59n)

    expect(
      hash_2(
        0x23b96a10b3a6b5cb32a4a48ba9e2c7fd95a0381977051d377aba654ce3f46d3fn,
        0x12c4411263a01236387f3ad010243a44ac532a834589d6d7a38a0149748bf187n,
      ),
    ).toEqual(0x26603ba36cd41bdbde16e06c6f1ec040743059b6ce45fe6f34e00bcb6e535b04n)

    expect(
      hash_2(
        0x2f1df4234732c49ac7567c29d2e066308f807e1bbf0951136b7fccba2602ea9en,
        0x04a23083267080ae4ee1a3cb4173dbce507c86edcfdd02853b0399cdab611517n,
      ),
    ).toEqual(0x0d6e20ac92800c7b08438805fe94a871c5f756ec07a919923c4e007cf01fa87en)

    expect(
      hash_2(
        0x106babe89343a47ce296eed78129b6f7af056b46ad808b2cabb66f371180dd17n,
        0x2f01d999b6e58284d87640c08c49e96d538ba3ffba0c544090fe858dbb5bc28en,
      ),
    ).toEqual(0x08d523548b9f396c877536b5f96fdfd1826ecdc0c806e24ae328586e8a405d8fn)

    expect(
      hash_2(
        0x299c0a40411ed9d7de7792fa299b262937b21fabfa386fa761e3f079c1d9045fn,
        0x2ace2e81e39d97a8e6d83c9e50a8643f4bf01a1465177518558305e7ab254c62n,
      ),
    ).toEqual(0x2c62b5c08ee75aa967809de58131cb38e953fdbdccb9140ed92ea89adebcda85n)
  })

  it("T3 vectors", () => {
    expect(hash_3(0n, 1n, 2n)).toEqual(0x0bb61d24daca55eebcb1929a82650f328134334da98ea4f847f760054f4a3033n)

    expect(
      hash_3(
        0x2c6422c33190d036a17bd4281738ad60a6b4544c1020da1c0c84880a0ddc71c4n,
        0x245cd98e5af9a6ebb35945b092c7e877ab9549c8919940250956a0bfedb457abn,
        0x0b43c424171231016dfe2072518b825a18c759383dba4e09a47bcd8b1a55da21n,
      ),
    ).toEqual(0x0b6f503d74ca8c80934b48d8d9e41c239ea6bcee17f658d416a0b72fd7daf1b8n)

    expect(
      hash_3(
        0x124ce2326b4a95fe09743697c1e5c9ac9f6940cab7221decfd0162a8873c63ean,
        0x167148c1014f9f1ae03bb93892ec0164c6f65f779b526c3499d7ac374e84af86n,
        0x18c0badc1c5aa472c434c254786f8e1aa8b519a7ec017dfd20bc1e5dfb820caan,
      ),
    ).toEqual(0x2791fa7cca97f87cc3de6ce004bccf28e3cb631e4fd31d50b38fc79b7e43dbbfn)

    expect(
      hash_3(
        0x034f5155557b5e85db4fba5c254882f8658baa03376a38d37ff03fef1f850cfdn,
        0x23975b943c4070c2bc98ec66b4a9e1f0ca1c812b38317bdbfac98aa748b5b059n,
        0x03f9ef0d827a433a679060b654b556daa963c9658f628a3522dee7e839ab3615n,
      ),
    ).toEqual(0x0014a5e7728d210b90ef439df76561371be410051332852cea084ef73271ccbdn)

    expect(
      hash_3(
        0x184561698ba999c39dcd5effd2f073e95345fb74f023ba25e162995a206ba79en,
        0x294e74e9b2f87eb7f5e00a350a22ff02e22397c278d48cecae04a4a83085a9cen,
        0x2840b008f9dd0379037622060b97bbe9fb5ffcf3e765c0a7feb5be13405ad2d8n,
      ),
    ).toEqual(0x13b47f0963b7751e01c8ff9775b02df2b185d8a968edfded67d518fe00a13104n)

    expect(
      hash_3(
        0x1c3c047ca883688ca6b6ddec715eef99a40282a4dc1d1b33910f59f30074e8f4n,
        0x0a3aed04e3acb73a0f74d42f0d304f1afeefc00859a77d956120638d9007fbc5n,
        0x07d9e5a9a2ac225871d7616f13a7a0185731fa679d931762ce1ef7767a3e63dfn,
      ),
    ).toEqual(0x0df5bd217aa8e906435455b0151adae8dccb5f1fef23c0bd36a15f78f7b90ea7n)

    expect(
      hash_3(
        0x1e7cb866b31dc33c91585591e7c82530ef2a25c3feef3273b1c4fc382790ab2bn,
        0x2781a330739b20aff560c61207ac9a3dd0f74b78dd9d4ec97a3db650c4d05ae6n,
        0x275dc90993858ee8bcee5a94d1010f30c9731a49eb799e3aa0dfe94c73d1d28an,
      ),
    ).toEqual(0x1c8317bbb73ba936b89bb337d1a91a48639602b721e0400e0b9d5799f64c3dd7n)

    expect(
      hash_3(
        0x276d519f50629d7ab7b0362da8e532da858c989c37765d77e56d570ef67037d1n,
        0x2b7cd64f3fdb10e2006a924c051cd3ea53dfa82e75993bad8d0eb4ca8f3756b4n,
        0x07dc1f509cb68ec98ce1c9d18a89fa75a28a300ea58769a5fdc5ae19b4459c24n,
      ),
    ).toEqual(0x2ad18eae7534d3d0efe05e897a4daebc441027e39256c1b647350f4a1969ed22n)

    expect(
      hash_3(
        0x0c6c15f4368f09bdaa7e7f4bc63d65d597eafe75764d82cb4d774e1982fce517n,
        0x2e250d17689425c849b6d94bf822783c14086e5b5a145f6bd67d61d227e5dfa5n,
        0x18693f449496390c0d6daa3f03170629b987b27c832c9e2aa586e3e36c6eac8en,
      ),
    ).toEqual(0x0d35a94d34a9fe5527a72ddb2a6654bfde040cb5ed436944146971939790429bn)

    expect(
      hash_3(
        0x2fb3cd143630e3dd1a1eda75a9e8e698ee7a3a877ec6ecd7a77de97a1e0b6657n,
        0x0c525ee6e5674c991dd70bd04a00bc62119d0ae97a1f1ec89cbdd34ac139edb4n,
        0x2b6d256970b78cda94586db4eb7db119b10ee087b9ba107afe8c64e7b34625b1n,
      ),
    ).toEqual(0x131f70df273c7fe22667903a3aaeecfd8a873067c836159ffeb6b7e9f9ff347cn)
  })

  it("T4 vectors", () => {
    expect(hash_4([0n, 1n, 2n, 3n])).toEqual(0x01bd538c2ee014ed5141b29e9ae240bf8db3fe5b9a38629a9647cf8d76c01737n)

    expect(
      hash_4([
        0x0c8c9889597488008e2e96985b843092fa78004ac3406c9df51ed2b6cf1165cdn,
        0x20519dc2e54103607f781cb4c3e0728db3c0183b0d8e32b7a18b3ee7226d1866n,
        0x17f6e0269a9439e0cbafb92fb6a33448460becc662da31786bf22935ca8734edn,
        0x18bd21d391158c54dd641afa11a9020a2bc49948f16864fbaf161d746d49b3a8n,
      ]),
    ).toEqual(0x17853a421466990a70c8df0ca883fc9580968a8ff381c573ccdb2a17b4717f1an)

    expect(
      hash_4([
        0x1854b7992ec5a1349e9ed40970bbae67373bf98cac98055c7baf28d664384085n,
        0x12d3bf93b4c656e57eb1f4e1fe74f4dc5dacd2b95f27a12f0cc51c8aad9b4cebn,
        0x26c5ff636e75996c5d4953e2f44fc31403710c59e017cc0c68d7f7b547e5e12dn,
        0x1c29859e1768d3def45f2a97f7f96fd13149e50bd809fe6f49ee960e9d625f3en,
      ]),
    ).toEqual(0x17d01a086c63a77d6315cd7a1cdbac3ca89534c1a1da4e778f5ce60bdc77b28fn)

    expect(
      hash_4([
        0x24ad6b688e5398429ffb1e3ba8ab3cd798f9909155b45812325cba5a16d2d220n,
        0x300687b9652aa54e7cae4137d9408e3ddf88a869428998d30b86f788ce92e1d1n,
        0x2aaff3037bd20cd938462fbf41dac988afe9104d7794016c017a29aa411912d0n,
        0x195cf02bd9aeebd4482b3f72dc509221de8c2ebf37361f8766f600bc748de617n,
      ]),
    ).toEqual(0x143d9fb2ffcec25c75977edf8ffa3d3007cdd38e1bd4d64b0a6603b7e38380a7n)

    expect(
      hash_4([
        0x16e6e596105e785a3e0bc02bb15398a4b08c55b9cba3536877ff40b7de1f2a38n,
        0x2530d6ae25e495a3ccf8d51121e0d7134825264c630c9aacb0f78c380498e5ebn,
        0x1586aaed4606463b8d7ebd287062d9128df99c8cebb06d8ddaac95e258e5a804n,
        0x02082849eead984e1db4f4bf307e310a1fa562b14e446cc62f8a7232673b868an,
      ]),
    ).toEqual(0x1b9c747e2cec9adeb3d6e37f0f2eb39d3e5055afee568d4feee3396618c86670n)

    expect(
      hash_4([
        0x1e0efaac6c6acea57222f9161313ec9579cda0c85e22f180345af12abc70b5a1n,
        0x0d0f3071f2e4fc48d9dd9f37367de2ec12260ab9a8729269fa1510e9d093a5b3n,
        0x26b2e5123ade4de33a0185d7ee08bb10ab217d8cf44227673904ed9ba7d6d0bfn,
        0x192aa37419458e66c367d86966f9c3f12e1a4ea89883bf21f98989ac5404c163n,
      ]),
    ).toEqual(0x1882d48c13b9d810e8a260a6097864328e80253b650c95178bc23cf9784a6221n)

    expect(
      hash_4([
        0x1420cb6e80553413972d39a0e2aa1b0fce8e1759e8955b9d0b4183bfe7cd2577n,
        0x0e0bed978ef7b27a34d0fc3f4db4dd6a62eb2a89deacde38ab43d23b5001d9ecn,
        0x1f52d011ec77d06560315f14de37b7e6af34fa77c8689f82b5cec53a6f731a8fn,
        0x2b6f87516d48fd88765f571998ff308eedbfecb4de3eab9f541845fd5a079a10n,
      ]),
    ).toEqual(0x1cc0885e44b1e34b49d5a222b7c61d4423b1cb2ef5c7ddfdf79ccfc09d7969fan)

    expect(
      hash_4([
        0x02ed7335766c6990f8c4c07e406dbe441efe9fe3f8a3b3c36efcf8d5b2466a78n,
        0x2e1b45eb605cde0d22d13f244108dc47d45c395a1854afee35822424b6cc022dn,
        0x2f26a4bd4c1472f8fb3d475c64647acb9371432589214dba81a90cef7e84c3f3n,
        0x018dad8abf0ebbc641d59f342ef89b61a0645dbfb601e4220595050d4927efe6n,
      ]),
    ).toEqual(0x07ea9ac7ee426db731f066f680e808598fa2a2e2a2a0184343332cac349192ccn)

    expect(
      hash_4([
        0x2668dc5c24a61ba1ea716788ca323027411c67114fcf8d3037ec85cf04f9ab49n,
        0x2ff5ef931ab5091bbc32352e20b9971475f2096cdec6a2540897bf383b3f491en,
        0x269edac091156e2f0b78bf1bda18b4bc0fa57c5da2d9223c0af89e7e32360079n,
        0x0a26433da1fc61b268edb2be549944559ae70c4b90cffb6d3b37f16f1ac7626bn,
      ]),
    ).toEqual(0x0d1ebc93de138f542afad67b1b7ed5a0a91b6386417a61ef775c4498f324c339n)

    expect(
      hash_4([
        0x0b714049d73a453d12fd8d29b6d3827fca2e9bdb2b81700f91a99af577c7fe7bn,
        0x2f0f7fed2d8dfcd4abb28e3622eae01279c61d4256a6be4cb3b1fd51b8d723bbn,
        0x305e7764e1a84dee8dc9a1f80d850ad02302840f301590f274789f97c8c1f2d1n,
        0x207557596ad35e035c50acafdc27a0073889426cfbe4ba1832d6ef7cef5302ecn,
      ]),
    ).toEqual(0x021fa88b38fd0749af48dc29fa661c3c4741ea05f359384caa04000481e1d1efn)

    expect(
      hash_4([
        0x044d9089d0d731e323eb08218c16222676b1b170bd13d06ce96759a21ebe3279n,
        0x120b8825613c5d3d12545a5806743e5234cc1586f1d1bae59bbde22eb973178dn,
        0x2b5a57fce5f044b2e8b26f6f669b88eb1880183e7bfa2903a16ef0236f2f3faan,
        0x07f4a9b793b47b8781ede417ad119323d1ae6743d5c3dc990183eec04ae03e0dn,
      ]),
    ).toEqual(0x2519d1f27af8da43d481547ab075f18bf96be7f94c81439e9a666e9724cc01b2n)
  })

  it("test_merkle_root_fixture", () => {
    const index = 2n
    const leaf = 0x193c4e41dd965c707d738672626157d4c951ed12a85a36da6d954e9ab605c037n
    const hash_path: [bigint, bigint, bigint] = [
      0x0d490ea58a8e26fc75656b77400b7ceeae89640963767b70cf82b729248a312dn,
      0x169577083ea6a7f1259fb1824112239a40fe69fb35b4de31d41961b086d0049bn,
      0x2c0145c2842afdcbdf891c245d4ebd0ba0c1123e790f8514cd377e11b099bcc9n,
    ]
    const expectedRoot = 0x0ad9565ee58cedc7bf6ab1c1fd2d7c1ea499301dd68c78801d0eedb720997134n

    let current = leaf
    for (let i = 0n; i < BigInt(hash_path.length); i++) {
      const pathBit = ((index >> i) & 1n) !== 0n
      const left = pathBit ? hash_path[Number(i)]! : current
      const right = pathBit ? current : hash_path[Number(i)]!
      current = hash_3(left, right, 0n)
    }

    expect(current).toEqual(expectedRoot)
  })
})

