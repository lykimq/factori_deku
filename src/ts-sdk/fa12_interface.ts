
import {
    TezosToolkit,
    BigMapAbstraction,
    MichelsonMap,
    OriginationOperation,
    OpKind,
    createTransferOperation,
    TransferParams,
    RPCOperation,
    createRevealOperation
} from "@taquito/taquito"
import { MichelsonV1Expression } from "@taquito/rpc"
import { encodeOpHash } from '@taquito/utils';
import { Parser } from '@taquito/michel-codec';
import { stringify } from "querystring";

import * as functolib from "./functolib";

let fa12_code = require('./fa12_code.json')


export type update_metadata = { value: functolib.bytes, key: string }
export type initial_update_metadata = { value: functolib.bytes, key: string }
export function update_metadata_encode(arg: update_metadata): MichelsonV1Expression {
    return { prim: 'Pair', args: [(functolib.string_encode(arg.key)), (functolib.bytes_encode(arg.value))] }
}
export function update_metadata_decode(arg: MichelsonV1Expression): update_metadata {
    let before_projection = (functolib.tuple2_decode(functolib.string_decode, functolib.bytes_decode))(arg);
    return {
        key: (before_projection[0]),
        value: (before_projection[1])
    }

}

export async function call_update_metadata(tk: TezosToolkit,
    update_metadata_kt1: string,
    param: update_metadata): Promise<functolib.operation_result> {
    let res = update_metadata_encode(param);
    //console.log(`res: ${JSON.stringify(res,null,2)}`);
    return functolib.send(tk, update_metadata_kt1, 'update_metadata', res);
}

export type transfer = { value: functolib.nat, _to: functolib.address, from: functolib.address }
export type initial_transfer = { value: functolib.nat, _to: functolib.address, from: functolib.address }
export function transfer_encode(arg: transfer): MichelsonV1Expression {
    return { prim: 'Pair', args: [(functolib.address_encode(arg.from)), { prim: 'Pair', args: [(functolib.address_encode(arg._to)), (functolib.nat_encode(arg.value))] }] }
}
export function transfer_decode(arg: MichelsonV1Expression): transfer {
    let before_projection = (functolib.tuple2_decode(functolib.address_decode, (functolib.tuple2_decode(functolib.address_decode, functolib.nat_decode))))(arg);
    return {
        from: (before_projection[0]),
        _to: (before_projection[1][0]),
        value: (before_projection[1][1])
    }

}

export async function call_transfer(tk: TezosToolkit,
    transfer_kt1: string,
    param: transfer): Promise<functolib.operation_result> {
    let res = transfer_encode(param);
    //console.log(`res: ${JSON.stringify(res,null,2)}`);
    return functolib.send(tk, transfer_kt1, 'transfer', res);
}

export type setPause = functolib.bool
export type initial_setPause = functolib.bool
export function setPause_encode(arg: setPause): MichelsonV1Expression { return functolib.bool_encode(arg) }
let setPause_decode = function(m: MichelsonV1Expression): setPause { return (functolib.bool_decode(m)); }

export async function call_setPause(tk: TezosToolkit,
    setPause_kt1: string,
    param: setPause): Promise<functolib.operation_result> {
    let res = setPause_encode(param);
    //console.log(`res: ${JSON.stringify(res,null,2)}`);
    return functolib.send(tk, setPause_kt1, 'setPause', res);
}

export type setAdministrator = functolib.address
export type initial_setAdministrator = functolib.address
export function setAdministrator_encode(arg: setAdministrator): MichelsonV1Expression { return functolib.address_encode(arg) }
let setAdministrator_decode = function(m: MichelsonV1Expression): setAdministrator { return (functolib.address_decode(m)); }

export async function call_setAdministrator(tk: TezosToolkit,
    setAdministrator_kt1: string,
    param: setAdministrator): Promise<functolib.operation_result> {
    let res = setAdministrator_encode(param);
    //console.log(`res: ${JSON.stringify(res,null,2)}`);
    return functolib.send(tk, setAdministrator_kt1, 'setAdministrator', res);
}

export type mint = { value: functolib.nat, address: functolib.address }
export type initial_mint = { value: functolib.nat, address: functolib.address }
export function mint_encode(arg: mint): MichelsonV1Expression {
    return { prim: 'Pair', args: [(functolib.address_encode(arg.address)), (functolib.nat_encode(arg.value))] }
}
export function mint_decode(arg: MichelsonV1Expression): mint {
    let before_projection = (functolib.tuple2_decode(functolib.address_decode, functolib.nat_decode))(arg);
    return {
        address: (before_projection[0]),
        value: (before_projection[1])
    }

}

export async function call_mint(tk: TezosToolkit,
    mint_kt1: string,
    param: mint): Promise<functolib.operation_result> {
    let res = mint_encode(param);
    //console.log(`res: ${JSON.stringify(res,null,2)}`);
    return functolib.send(tk, mint_kt1, 'mint', res);
}

export type getTotalSupply = [functolib.unit, functolib.contract]
export type initial_getTotalSupply = [functolib.unit, functolib.contract]
let getTotalSupply_encode = functolib.tuple2_encode(functolib.unit_encode, functolib.contract_encode(new Parser().parseJSON({ "prim": "nat" })))
export { getTotalSupply_encode }
let getTotalSupply_decode = functolib.tuple2_decode(functolib.unit_decode, functolib.contract_decode(new Parser().parseJSON({ "prim": "nat" })))

export async function call_getTotalSupply(tk: TezosToolkit,
    getTotalSupply_kt1: string,
    param: getTotalSupply): Promise<functolib.operation_result> {
    let res = getTotalSupply_encode(param);
    //console.log(`res: ${JSON.stringify(res,null,2)}`);
    return functolib.send(tk, getTotalSupply_kt1, 'getTotalSupply', res);
}

export type getBalance = [functolib.address, functolib.contract]
export type initial_getBalance = [functolib.address, functolib.contract]
let getBalance_encode = functolib.tuple2_encode(functolib.address_encode, functolib.contract_encode(new Parser().parseJSON({ "prim": "nat" })))
export { getBalance_encode }
let getBalance_decode = functolib.tuple2_decode(functolib.address_decode, functolib.contract_decode(new Parser().parseJSON({ "prim": "nat" })))

export async function call_getBalance(tk: TezosToolkit,
    getBalance_kt1: string,
    param: getBalance): Promise<functolib.operation_result> {
    let res = getBalance_encode(param);
    //console.log(`res: ${JSON.stringify(res,null,2)}`);
    return functolib.send(tk, getBalance_kt1, 'getBalance', res);
}

export type type0 = { spender: functolib.address, owner: functolib.address }
export type initial_type0 = { spender: functolib.address, owner: functolib.address }
export function type0_encode(arg: type0): MichelsonV1Expression {
    return { prim: 'Pair', args: [(functolib.address_encode(arg.owner)), (functolib.address_encode(arg.spender))] }
}
export function type0_decode(arg: MichelsonV1Expression): type0 {
    let before_projection = (functolib.tuple2_decode(functolib.address_decode, functolib.address_decode))(arg);
    return {
        owner: (before_projection[0]),
        spender: (before_projection[1])
    }

}

export type getAllowance = [type0, functolib.contract]
export type initial_getAllowance = [type0, functolib.contract]
let getAllowance_encode = functolib.tuple2_encode(type0_encode, functolib.contract_encode(new Parser().parseJSON({ "prim": "nat" })))
export { getAllowance_encode }
let getAllowance_decode = functolib.tuple2_decode(type0_decode, functolib.contract_decode(new Parser().parseJSON({ "prim": "nat" })))

export async function call_getAllowance(tk: TezosToolkit,
    getAllowance_kt1: string,
    param: getAllowance): Promise<functolib.operation_result> {
    let res = getAllowance_encode(param);
    //console.log(`res: ${JSON.stringify(res,null,2)}`);
    return functolib.send(tk, getAllowance_kt1, 'getAllowance', res);
}

export type getAdministrator = [functolib.unit, functolib.contract]
export type initial_getAdministrator = [functolib.unit, functolib.contract]
let getAdministrator_encode = functolib.tuple2_encode(functolib.unit_encode, functolib.contract_encode(new Parser().parseJSON({ "prim": "address" })))
export { getAdministrator_encode }
let getAdministrator_decode = functolib.tuple2_decode(functolib.unit_decode, functolib.contract_decode(new Parser().parseJSON({ "prim": "address" })))

export async function call_getAdministrator(tk: TezosToolkit,
    getAdministrator_kt1: string,
    param: getAdministrator): Promise<functolib.operation_result> {
    let res = getAdministrator_encode(param);
    //console.log(`res: ${JSON.stringify(res,null,2)}`);
    return functolib.send(tk, getAdministrator_kt1, 'getAdministrator', res);
}

export type burn = mint
export type initial_burn = mint

export function burn_encode(arg: burn): MichelsonV1Expression { return mint_encode(arg) }

export function burn_decode(arg: MichelsonV1Expression): burn { return mint_decode(arg) }

export async function call_burn(tk: TezosToolkit,
    burn_kt1: string,
    param: burn): Promise<functolib.operation_result> {
    let res = burn_encode(param);
    //console.log(`res: ${JSON.stringify(res,null,2)}`);
    return functolib.send(tk, burn_kt1, 'burn', res);
}

export type approve = { value: functolib.nat, spender: functolib.address }
export type initial_approve = { value: functolib.nat, spender: functolib.address }
export function approve_encode(arg: approve): MichelsonV1Expression {
    return { prim: 'Pair', args: [(functolib.address_encode(arg.spender)), (functolib.nat_encode(arg.value))] }
}
export function approve_decode(arg: MichelsonV1Expression): approve {
    let before_projection = (functolib.tuple2_decode(functolib.address_decode, functolib.nat_decode))(arg);
    return {
        spender: (before_projection[0]),
        value: (before_projection[1])
    }

}

export async function call_approve(tk: TezosToolkit,
    approve_kt1: string,
    param: approve): Promise<functolib.operation_result> {
    let res = approve_encode(param);
    //console.log(`res: ${JSON.stringify(res,null,2)}`);
    return functolib.send(tk, approve_kt1, 'approve', res);
}

export type type1 = { token_info: functolib.map<string, functolib.bytes>, token_id: functolib.nat }
export type initial_type1 = { token_info: MichelsonMap<any, any>, token_id: functolib.nat }
export function type1_encode(arg: type1): MichelsonV1Expression {
    return { prim: 'Pair', args: [(functolib.nat_encode(arg.token_id)), (functolib.map_encode(functolib.string_encode, functolib.bytes_encode)(arg.token_info))] }
}
export function type1_decode(arg: MichelsonV1Expression): type1 {
    let before_projection = (functolib.tuple2_decode(functolib.nat_decode, functolib.map_decode(functolib.string_decode, functolib.bytes_decode)))(arg);
    return {
        token_id: (before_projection[0]),
        token_info: (before_projection[1])
    }

}

export type type2 = { balance: functolib.nat, approvals: functolib.map<functolib.address, functolib.nat> }
export type initial_type2 = { balance: functolib.nat, approvals: MichelsonMap<any, any> }
export function type2_encode(arg: type2): MichelsonV1Expression {
    return { prim: 'Pair', args: [(functolib.map_encode(functolib.address_encode, functolib.nat_encode)(arg.approvals)), (functolib.nat_encode(arg.balance))] }
}
export function type2_decode(arg: MichelsonV1Expression): type2 {
    let before_projection = (functolib.tuple2_decode(functolib.map_decode(functolib.address_decode, functolib.nat_decode), functolib.nat_decode))(arg);
    return {
        approvals: (before_projection[0]),
        balance: (before_projection[1])
    }

}

export type storage = { totalSupply: functolib.nat, token_metadata: functolib.big_map<functolib.nat, type1>, paused: functolib.bool, metadata: functolib.big_map<string, functolib.bytes>, balances: functolib.big_map<functolib.address, type2>, administrator: functolib.address }
export type initial_storage = { totalSupply: functolib.nat, token_metadata: MichelsonMap<any, any>, paused: functolib.bool, metadata: MichelsonMap<any, any>, balances: MichelsonMap<any, any>, administrator: functolib.address }
export function storage_encode(arg: storage): MichelsonV1Expression {
    return { prim: 'Pair', args: [{ prim: 'Pair', args: [(functolib.address_encode(arg.administrator)), { prim: 'Pair', args: [(functolib.big_map_encode(functolib.address_encode, type2_encode)(arg.balances)), (functolib.big_map_encode(functolib.string_encode, functolib.bytes_encode)(arg.metadata))] }] }, { prim: 'Pair', args: [(functolib.bool_encode(arg.paused)), { prim: 'Pair', args: [(functolib.big_map_encode(functolib.nat_encode, type1_encode)(arg.token_metadata)), (functolib.nat_encode(arg.totalSupply))] }] }] }
}
export function storage_decode(arg: MichelsonV1Expression): storage {
    let before_projection = (functolib.tuple2_decode((functolib.tuple2_decode(functolib.address_decode, (functolib.tuple2_decode(functolib.big_map_decode(functolib.address_decode, type2_decode), functolib.big_map_decode(functolib.string_decode, functolib.bytes_decode))))), (functolib.tuple2_decode(functolib.bool_decode, (functolib.tuple2_decode(functolib.big_map_decode(functolib.nat_decode, type1_decode), functolib.nat_decode))))))(arg);
    return {
        administrator: (before_projection[0][0]),
        balances: (before_projection[0][1][0]),
        metadata: (before_projection[0][1][1]),
        paused: (before_projection[1][0]),
        token_metadata: (before_projection[1][1][0]),
        totalSupply: (before_projection[1][1][1])
    }

}


async function deploy_fa12_raw(
    tezosKit: TezosToolkit,
    storage: MichelsonV1Expression,
    debug = false): Promise<string> {
    console.log("[deploy_fa12_raw] Deploying new fa12 smart contract");
    try {
        console.log(`fa12 initial storage ${JSON.stringify(storage)}`);
        var b = await functolib.client.getBlock();
        let origination_op = await tezosKit.contract
            .originate({
                code: fa12_code,
                init: storage
            })
        console.log(`Waiting for confirmation of origination for ${origination_op.contractAddress}...`);
        var contract = await origination_op.contract();
        console.log(`Origination completed.`);
        return contract.address

    } catch (error) {
        console.log(`ERROR in deploy storage: ${JSON.stringify(error)}`)
        throw error
    }
}

export async function deploy_fa12(
    tezosKit: TezosToolkit,
    storage: storage,
    debug = false): Promise<string> {
    let kt1_address = await deploy_fa12_raw(tezosKit, storage_encode(storage), debug);
    return kt1_address;
}

export type Storage_type = storage
export let Storage_type_encode = storage_encode
export let Storage_type_decode = storage_decode


const p = new Parser();
let initial_blockchain_storage: storage = {
    administrator: "tz1W18LSYogRApX5MBnsr7KupHEc9rC8vDvz",
    balances: { kind: 'abstract', value: BigInt("109015") },
    metadata: { kind: 'abstract', value: BigInt("109016") },
    paused: false,
    token_metadata: { kind: 'abstract', value: BigInt("109017") },
    totalSupply: BigInt("1000000")
}
/*
 {"prim":"Pair","args":[{"prim":"Pair","args":[{"string":"tz1W18LSYogRApX5MBnsr7KupHEc9rC8vDvz"},{"int":"109015"},{"int":"109016"}]},{"prim":"False"},{"int":"109017"},{"int":"1000000"}]}
*/
