
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

let imported_KT1NtsnKQ1c3rYB12ZToP77XaJs8WDBvF221_code = require('./imported_KT1NtsnKQ1c3rYB12ZToP77XaJs8WDBvF221_code.json')


export type type0 = { token2Id: functolib.nat, token2Address: functolib.address, token1Id: functolib.nat, token1Address: functolib.address }
export type initial_type0 = { token2Id: functolib.nat, token2Address: functolib.address, token1Id: functolib.nat, token1Address: functolib.address }
export function type0_encode(arg: type0): MichelsonV1Expression {
    return { prim: 'Pair', args: [{ prim: 'Pair', args: [(functolib.address_encode(arg.token1Address)), (functolib.nat_encode(arg.token1Id))] }, { prim: 'Pair', args: [(functolib.address_encode(arg.token2Address)), (functolib.nat_encode(arg.token2Id))] }] }
}
export function type0_decode(arg: MichelsonV1Expression): type0 {
    let before_projection = (functolib.tuple2_decode((functolib.tuple2_decode(functolib.address_decode, functolib.nat_decode)), (functolib.tuple2_decode(functolib.address_decode, functolib.nat_decode))))(arg);
    return {
        token1Address: (before_projection[0][0]),
        token1Id: (before_projection[0][1]),
        token2Address: (before_projection[1][0]),
        token2Id: (before_projection[1][1])
    }

}

export type getReserveBalance = [type0, functolib.contract]
export type initial_getReserveBalance = [type0, functolib.contract]
let getReserveBalance_encode = functolib.tuple2_encode(type0_encode, functolib.contract_encode(new Parser().parseJSON({ "prim": "pair", "args": [{ "prim": "nat", "annots": ["%token1_pool"] }, { "prim": "nat", "annots": ["%token2_pool"] }] })))
export { getReserveBalance_encode }
let getReserveBalance_decode = functolib.tuple2_decode(type0_decode, functolib.contract_decode(new Parser().parseJSON({ "prim": "pair", "args": [{ "prim": "nat", "annots": ["%token1_pool"] }, { "prim": "nat", "annots": ["%token2_pool"] }] })))

export async function call_getReserveBalance(tk: TezosToolkit,
    getReserveBalance_kt1: string,
    param: getReserveBalance): Promise<functolib.operation_result> {
    let res = getReserveBalance_encode(param);
    //console.log(`res: ${JSON.stringify(res,null,2)}`);
    return functolib.send(tk, getReserveBalance_kt1, 'getReserveBalance', res);
}

export type getExchangeFee = [type0, functolib.contract]
export type initial_getExchangeFee = [type0, functolib.contract]
let getExchangeFee_encode = functolib.tuple2_encode(type0_encode, functolib.contract_encode(new Parser().parseJSON({ "prim": "pair", "args": [{ "prim": "nat", "annots": ["%lpFee"] }, { "prim": "nat", "annots": ["%systemFee"] }] })))
export { getExchangeFee_encode }
let getExchangeFee_decode = functolib.tuple2_decode(type0_decode, functolib.contract_decode(new Parser().parseJSON({ "prim": "pair", "args": [{ "prim": "nat", "annots": ["%lpFee"] }, { "prim": "nat", "annots": ["%systemFee"] }] })))

export async function call_getExchangeFee(tk: TezosToolkit,
    getExchangeFee_kt1: string,
    param: getExchangeFee): Promise<functolib.operation_result> {
    let res = getExchangeFee_encode(param);
    //console.log(`res: ${JSON.stringify(res,null,2)}`);
    return functolib.send(tk, getExchangeFee_kt1, 'getExchangeFee', res);
}

export type withdrawSystemFee = functolib.address
export type initial_withdrawSystemFee = functolib.address
export function withdrawSystemFee_encode(arg: withdrawSystemFee): MichelsonV1Expression { return functolib.address_encode(arg) }
let withdrawSystemFee_decode = function(m: MichelsonV1Expression): withdrawSystemFee { return (functolib.address_decode(m)); }

export async function call_withdrawSystemFee(tk: TezosToolkit,
    withdrawSystemFee_kt1: string,
    param: withdrawSystemFee): Promise<functolib.operation_result> {
    let res = withdrawSystemFee_encode(param);
    //console.log(`res: ${JSON.stringify(res,null,2)}`);
    return functolib.send(tk, withdrawSystemFee_kt1, 'withdrawSystemFee', res);
}

export type swap = { tokenAmountIn: functolib.nat, requiredTokenId: functolib.nat, requiredTokenAddress: functolib.address, recipient: functolib.address, minimumTokenOut: functolib.nat }
export type initial_swap = { tokenAmountIn: functolib.nat, requiredTokenId: functolib.nat, requiredTokenAddress: functolib.address, recipient: functolib.address, minimumTokenOut: functolib.nat }
export function swap_encode(arg: swap): MichelsonV1Expression {
    return { prim: 'Pair', args: [{ prim: 'Pair', args: [(functolib.nat_encode(arg.minimumTokenOut)), (functolib.address_encode(arg.recipient))] }, { prim: 'Pair', args: [(functolib.address_encode(arg.requiredTokenAddress)), { prim: 'Pair', args: [(functolib.nat_encode(arg.requiredTokenId)), (functolib.nat_encode(arg.tokenAmountIn))] }] }] }
}
export function swap_decode(arg: MichelsonV1Expression): swap {
    let before_projection = (functolib.tuple2_decode((functolib.tuple2_decode(functolib.nat_decode, functolib.address_decode)), (functolib.tuple2_decode(functolib.address_decode, (functolib.tuple2_decode(functolib.nat_decode, functolib.nat_decode))))))(arg);
    return {
        minimumTokenOut: (before_projection[0][0]),
        recipient: (before_projection[0][1]),
        requiredTokenAddress: (before_projection[1][0]),
        requiredTokenId: (before_projection[1][1][0]),
        tokenAmountIn: (before_projection[1][1][1])
    }

}

export async function call_swap(tk: TezosToolkit,
    swap_kt1: string,
    param: swap): Promise<functolib.operation_result> {
    let res = swap_encode(param);
    //console.log(`res: ${JSON.stringify(res,null,2)}`);
    return functolib.send(tk, swap_kt1, 'swap', res);
}

export type removeLiquidity = { token2_min: functolib.nat, token1_min: functolib.nat, recipient: functolib.address, lpAmount: functolib.nat }
export type initial_removeLiquidity = { token2_min: functolib.nat, token1_min: functolib.nat, recipient: functolib.address, lpAmount: functolib.nat }
export function removeLiquidity_encode(arg: removeLiquidity): MichelsonV1Expression {
    return { prim: 'Pair', args: [{ prim: 'Pair', args: [(functolib.nat_encode(arg.lpAmount)), (functolib.address_encode(arg.recipient))] }, { prim: 'Pair', args: [(functolib.nat_encode(arg.token1_min)), (functolib.nat_encode(arg.token2_min))] }] }
}
export function removeLiquidity_decode(arg: MichelsonV1Expression): removeLiquidity {
    let before_projection = (functolib.tuple2_decode((functolib.tuple2_decode(functolib.nat_decode, functolib.address_decode)), (functolib.tuple2_decode(functolib.nat_decode, functolib.nat_decode))))(arg);
    return {
        lpAmount: (before_projection[0][0]),
        recipient: (before_projection[0][1]),
        token1_min: (before_projection[1][0]),
        token2_min: (before_projection[1][1])
    }

}

export async function call_removeLiquidity(tk: TezosToolkit,
    removeLiquidity_kt1: string,
    param: removeLiquidity): Promise<functolib.operation_result> {
    let res = removeLiquidity_encode(param);
    //console.log(`res: ${JSON.stringify(res,null,2)}`);
    return functolib.send(tk, removeLiquidity_kt1, 'removeLiquidity', res);
}

export type modifyMaxSwapAmount = functolib.nat
export type initial_modifyMaxSwapAmount = functolib.nat
export function modifyMaxSwapAmount_encode(arg: modifyMaxSwapAmount): MichelsonV1Expression { return functolib.nat_encode(arg) }
let modifyMaxSwapAmount_decode = function(m: MichelsonV1Expression): modifyMaxSwapAmount { return (functolib.nat_decode(m)); }

export async function call_modifyMaxSwapAmount(tk: TezosToolkit,
    modifyMaxSwapAmount_kt1: string,
    param: modifyMaxSwapAmount): Promise<functolib.operation_result> {
    let res = modifyMaxSwapAmount_encode(param);
    //console.log(`res: ${JSON.stringify(res,null,2)}`);
    return functolib.send(tk, modifyMaxSwapAmount_kt1, 'modifyMaxSwapAmount', res);
}

export type modifyFee = { systemFee: functolib.nat, lpFee: functolib.nat }
export type initial_modifyFee = { systemFee: functolib.nat, lpFee: functolib.nat }
export function modifyFee_encode(arg: modifyFee): MichelsonV1Expression {
    return { prim: 'Pair', args: [(functolib.nat_encode(arg.lpFee)), (functolib.nat_encode(arg.systemFee))] }
}
export function modifyFee_decode(arg: MichelsonV1Expression): modifyFee {
    let before_projection = (functolib.tuple2_decode(functolib.nat_decode, functolib.nat_decode))(arg);
    return {
        lpFee: (before_projection[0]),
        systemFee: (before_projection[1])
    }

}

export async function call_modifyFee(tk: TezosToolkit,
    modifyFee_kt1: string,
    param: modifyFee): Promise<functolib.operation_result> {
    let res = modifyFee_encode(param);
    //console.log(`res: ${JSON.stringify(res,null,2)}`);
    return functolib.send(tk, modifyFee_kt1, 'modifyFee', res);
}

export type changeState = functolib.unit
export type initial_changeState = functolib.unit
export function changeState_encode(arg: changeState): MichelsonV1Expression { return functolib.unit_encode(arg) }
let changeState_decode = function(m: MichelsonV1Expression): changeState { return (functolib.unit_decode(m)); }

export async function call_changeState(tk: TezosToolkit,
    changeState_kt1: string,
    param: changeState): Promise<functolib.operation_result> {
    let res = changeState_encode(param);
    //console.log(`res: ${JSON.stringify(res,null,2)}`);
    return functolib.send(tk, changeState_kt1, 'changeState', res);
}

export type changeAdmin = functolib.address
export type initial_changeAdmin = functolib.address
export function changeAdmin_encode(arg: changeAdmin): MichelsonV1Expression { return functolib.address_encode(arg) }
let changeAdmin_decode = function(m: MichelsonV1Expression): changeAdmin { return (functolib.address_decode(m)); }

export async function call_changeAdmin(tk: TezosToolkit,
    changeAdmin_kt1: string,
    param: changeAdmin): Promise<functolib.operation_result> {
    let res = changeAdmin_encode(param);
    //console.log(`res: ${JSON.stringify(res,null,2)}`);
    return functolib.send(tk, changeAdmin_kt1, 'changeAdmin', res);
}

export type addLiquidity = { token2_max: functolib.nat, token1_max: functolib.nat, recipient: functolib.address }
export type initial_addLiquidity = { token2_max: functolib.nat, token1_max: functolib.nat, recipient: functolib.address }
export function addLiquidity_encode(arg: addLiquidity): MichelsonV1Expression {
    return { prim: 'Pair', args: [(functolib.address_encode(arg.recipient)), { prim: 'Pair', args: [(functolib.nat_encode(arg.token1_max)), (functolib.nat_encode(arg.token2_max))] }] }
}
export function addLiquidity_decode(arg: MichelsonV1Expression): addLiquidity {
    let before_projection = (functolib.tuple2_decode(functolib.address_decode, (functolib.tuple2_decode(functolib.nat_decode, functolib.nat_decode))))(arg);
    return {
        recipient: (before_projection[0]),
        token1_max: (before_projection[1][0]),
        token2_max: (before_projection[1][1])
    }

}

export async function call_addLiquidity(tk: TezosToolkit,
    addLiquidity_kt1: string,
    param: addLiquidity): Promise<functolib.operation_result> {
    let res = addLiquidity_encode(param);
    //console.log(`res: ${JSON.stringify(res,null,2)}`);
    return functolib.send(tk, addLiquidity_kt1, 'addLiquidity', res);
}

export type storage = { totalSupply: functolib.nat, token2_pool: functolib.nat, token2_Fee: functolib.nat, token2Id: functolib.nat, token2Check: functolib.bool, token2Address: functolib.address, token1_pool: functolib.nat, token1_Fee: functolib.nat, token1Id: functolib.nat, token1Check: functolib.bool, token1Address: functolib.address, systemFee: functolib.nat, paused: functolib.bool, maxSwapLimit: functolib.nat, lpTokenAddress: functolib.address, lpFee: functolib.nat, admin: functolib.address }
export type initial_storage = { totalSupply: functolib.nat, token2_pool: functolib.nat, token2_Fee: functolib.nat, token2Id: functolib.nat, token2Check: functolib.bool, token2Address: functolib.address, token1_pool: functolib.nat, token1_Fee: functolib.nat, token1Id: functolib.nat, token1Check: functolib.bool, token1Address: functolib.address, systemFee: functolib.nat, paused: functolib.bool, maxSwapLimit: functolib.nat, lpTokenAddress: functolib.address, lpFee: functolib.nat, admin: functolib.address }
export function storage_encode(arg: storage): MichelsonV1Expression {
    return { prim: 'Pair', args: [{ prim: 'Pair', args: [{ prim: 'Pair', args: [{ prim: 'Pair', args: [(functolib.address_encode(arg.admin)), (functolib.nat_encode(arg.lpFee))] }, { prim: 'Pair', args: [(functolib.address_encode(arg.lpTokenAddress)), (functolib.nat_encode(arg.maxSwapLimit))] }] }, { prim: 'Pair', args: [{ prim: 'Pair', args: [(functolib.bool_encode(arg.paused)), (functolib.nat_encode(arg.systemFee))] }, { prim: 'Pair', args: [(functolib.address_encode(arg.token1Address)), (functolib.bool_encode(arg.token1Check))] }] }] }, { prim: 'Pair', args: [{ prim: 'Pair', args: [{ prim: 'Pair', args: [(functolib.nat_encode(arg.token1Id)), (functolib.nat_encode(arg.token1_Fee))] }, { prim: 'Pair', args: [(functolib.nat_encode(arg.token1_pool)), (functolib.address_encode(arg.token2Address))] }] }, { prim: 'Pair', args: [{ prim: 'Pair', args: [(functolib.bool_encode(arg.token2Check)), (functolib.nat_encode(arg.token2Id))] }, { prim: 'Pair', args: [(functolib.nat_encode(arg.token2_Fee)), { prim: 'Pair', args: [(functolib.nat_encode(arg.token2_pool)), (functolib.nat_encode(arg.totalSupply))] }] }] }] }] }
}
export function storage_decode(arg: MichelsonV1Expression): storage {
    let before_projection = (functolib.tuple2_decode((functolib.tuple2_decode((functolib.tuple2_decode((functolib.tuple2_decode(functolib.address_decode, functolib.nat_decode)), (functolib.tuple2_decode(functolib.address_decode, functolib.nat_decode)))), (functolib.tuple2_decode((functolib.tuple2_decode(functolib.bool_decode, functolib.nat_decode)), (functolib.tuple2_decode(functolib.address_decode, functolib.bool_decode)))))), (functolib.tuple2_decode((functolib.tuple2_decode((functolib.tuple2_decode(functolib.nat_decode, functolib.nat_decode)), (functolib.tuple2_decode(functolib.nat_decode, functolib.address_decode)))), (functolib.tuple2_decode((functolib.tuple2_decode(functolib.bool_decode, functolib.nat_decode)), (functolib.tuple2_decode(functolib.nat_decode, (functolib.tuple2_decode(functolib.nat_decode, functolib.nat_decode))))))))))(arg);
    return {
        admin: (before_projection[0][0][0][0]),
        lpFee: (before_projection[0][0][0][1]),
        lpTokenAddress: (before_projection[0][0][1][0]),
        maxSwapLimit: (before_projection[0][0][1][1]),
        paused: (before_projection[0][1][0][0]),
        systemFee: (before_projection[0][1][0][1]),
        token1Address: (before_projection[0][1][1][0]),
        token1Check: (before_projection[0][1][1][1]),
        token1Id: (before_projection[1][0][0][0]),
        token1_Fee: (before_projection[1][0][0][1]),
        token1_pool: (before_projection[1][0][1][0]),
        token2Address: (before_projection[1][0][1][1]),
        token2Check: (before_projection[1][1][0][0]),
        token2Id: (before_projection[1][1][0][1]),
        token2_Fee: (before_projection[1][1][1][0]),
        token2_pool: (before_projection[1][1][1][1][0]),
        totalSupply: (before_projection[1][1][1][1][1])
    }

}


async function deploy_imported_KT1NtsnKQ1c3rYB12ZToP77XaJs8WDBvF221_raw(
    tezosKit: TezosToolkit,
    storage: MichelsonV1Expression,
    debug = false): Promise<string> {
    console.log("[deploy_imported_KT1NtsnKQ1c3rYB12ZToP77XaJs8WDBvF221_raw] Deploying new imported_KT1NtsnKQ1c3rYB12ZToP77XaJs8WDBvF221 smart contract");
    try {
        console.log(`imported_KT1NtsnKQ1c3rYB12ZToP77XaJs8WDBvF221 initial storage ${JSON.stringify(storage)}`);
        var b = await functolib.client.getBlock();
        let origination_op = await tezosKit.contract
            .originate({
                code: imported_KT1NtsnKQ1c3rYB12ZToP77XaJs8WDBvF221_code,
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

export async function deploy_imported_KT1NtsnKQ1c3rYB12ZToP77XaJs8WDBvF221(
    tezosKit: TezosToolkit,
    storage: storage,
    debug = false): Promise<string> {
    let kt1_address = await deploy_imported_KT1NtsnKQ1c3rYB12ZToP77XaJs8WDBvF221_raw(tezosKit, storage_encode(storage), debug);
    return kt1_address;
}

export type Storage_type = storage
export let Storage_type_encode = storage_encode
export let Storage_type_decode = storage_decode


const p = new Parser();
let initial_blockchain_storage: storage = {
    admin: "KT1Kfu13FmNbcZSjTPZLrAUbEYNZim6vtg6d",
    lpFee: BigInt("400"),
    lpTokenAddress: "KT1VDSyTqS95wkB4tRGy6saMa4izRKwrEg26",
    maxSwapLimit: BigInt("40"),
    paused: false,
    systemFee: BigInt("1000"),
    token1Address: "KT1GRSvLoikDsXujKgZPsGLX8k8VvR2Tq95b",
    token1Check: false,
    token1Id: BigInt("0"),
    token1_Fee: BigInt("439019453721214419051"),
    token1_pool: BigInt("158148808677571999947479"),
    token2Address: "KT193D4vozYnhGJQVtw7CoxxqphqUEEwK6Vb",
    token2Check: true,
    token2Id: BigInt("0"),
    token2_Fee: BigInt("23118286"),
    token2_pool: BigInt("6699483272"),
    totalSupply: BigInt("31675818702622933")
}
/*
 {"prim":"Pair","args":[{"prim":"Pair","args":[{"prim":"Pair","args":[{"prim":"Pair","args":[{"string":"KT1Kfu13FmNbcZSjTPZLrAUbEYNZim6vtg6d"},{"int":"400"}]},{"string":"KT1VDSyTqS95wkB4tRGy6saMa4izRKwrEg26"},{"int":"40"}]},{"prim":"Pair","args":[{"prim":"False"},{"int":"1000"}]},{"string":"KT1GRSvLoikDsXujKgZPsGLX8k8VvR2Tq95b"},{"prim":"False"}]},{"prim":"Pair","args":[{"prim":"Pair","args":[{"int":"0"},{"int":"439019453721214419051"}]},{"int":"158148808677571999947479"},{"string":"KT193D4vozYnhGJQVtw7CoxxqphqUEEwK6Vb"}]},{"prim":"Pair","args":[{"prim":"True"},{"int":"0"}]},{"int":"23118286"},{"int":"6699483272"},{"int":"31675818702622933"}]}
*/
