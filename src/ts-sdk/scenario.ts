/** Header in TypeScript */

import {
    TezosToolkit,
    MichelsonMap,
} from "@taquito/taquito";

import { MichelsonV1Expression } from "@taquito/rpc"
import * as fa2 from "./fa2_interface";
import { big_map, setSigner, config, alice_flextesa, bob_flextesa, wait_inclusion, map } from "./functolib";

const tezosKit = new TezosToolkit(config.node_addr)

/** Make storage easier to write, build this helper function for building
 * empty big_maps
*/

function empty_big_map<K, V>() {
    let res: big_map<K, V> = { kind: 'literal', value: [] }
    return(res)
}

/**
 * Main function, we start by fill out the initial storage by looking at the
 * `storage` type in `fa2_interface.ts`
 * type storage = { 
 *  metadata: functolib.big_map<string, functolib.bytes>, 
 *  assets: assets6, 
 *  admin: admin7 }
 * Type of asserts6
 * export type assets6 = { 
 * total_supply: functolib.nat, 
 * token_metadata: functolib.big_map<functolib.nat, type5>, 
 * permissions: permissions, 
 * operators: functolib.big_map<[functolib.address, [functolib.address, functolib.nat]], functolib.unit>, 
 * ledger: functolib.big_map<functolib.address, functolib.nat> }

 */
async function main_fa2(tezosKit: TezosToolkit) {
    // Our deployer will be Alice, a pre-filled account on Flextesa
    setSigner(tezosKit, alice_flextesa.sk);
    // Our initial storage
    let init_st : fa2.storage = {
      metadata : empty_big_map(),
      assets : [
                [
                  [ empty_big_map(), empty_big_map()],
                  [ {kind: "Owner_or_operator_transfer_constructor"},
                    {kind: "Optional_owner_hook_constructor"},
                    {kind: "Optional_owner_hook_constructor"},
                    {config_api : alice_flextesa.pkh,tag : "TODO"}],
                  empty_big_map()
                ],
                BigInt(0)
              ],
       admin: [[alice_flextesa.pkh, false], null] };
    // All that remains to do is deploy the contract and get its KT1 back
    let kt1 = await fa2.deploy_fa2(tezosKit,init_st)
    console.log(`KT1 : ${kt1}`)
    }

    main_fa2(tezosKit)