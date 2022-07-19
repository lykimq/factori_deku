
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

let fa2_code = require('./fa2_code.json')


export type add_operator = { token_id: functolib.nat, operator: functolib.address, owner: functolib.address }
export type initial_add_operator = { token_id: functolib.nat, operator: functolib.address, owner: functolib.address }
export function add_operator_encode(arg: add_operator): MichelsonV1Expression {
    return { prim: 'Pair', args: [(functolib.address_encode(arg.owner)), (functolib.address_encode(arg.operator)), (functolib.nat_encode(arg.token_id))] }
}
export function add_operator_decode(arg: MichelsonV1Expression): add_operator {
    let before_projection = (functolib.tuple3_decode(functolib.address_decode, functolib.address_decode, functolib.nat_decode))(arg);
    return {
        owner: (before_projection[0]),
        operator: (before_projection[1]),
        token_id: (before_projection[2])
    }

}


type type0_Remove_operator_constructor_subtype = { kind: "Remove_operator_constructor"; Remove_operator_element: add_operator }
type type0_Add_operator_constructor_subtype = { kind: "Add_operator_constructor"; Add_operator_element: add_operator }
export type type0 =
    type0_Remove_operator_constructor_subtype |
    type0_Add_operator_constructor_subtype

export type initial_type0 =
    type0_Remove_operator_constructor_subtype |
    type0_Add_operator_constructor_subtype

export function type0_encode(arg: type0): MichelsonV1Expression {

    switch (arg.kind) {
        case ("Add_operator_constructor"):
            return {
                prim: 'Left',
                args: [add_operator_encode(arg.Add_operator_element)]
            }

        case ("Remove_operator_constructor"):
            return {
                prim: 'Right',
                args: [add_operator_encode(arg.Remove_operator_element)]
            }

    }
}
export let type0_decode = function(arg: MichelsonV1Expression): type0 {
    let p = functolib.retrieve_path_from_sumtype_typescript(arg);

    switch (p[0]) {
        case [true]:
            return { kind: "Add_operator_constructor", Add_operator_element: (add_operator_decode(p[1])) }

        case [false]:
            return { kind: "Remove_operator_constructor", Remove_operator_element: (add_operator_decode(p[1])) }
        default: throw "unknown primitive in output_sumtype_decode"
    }
}

export type update_operators = type0[]
export type initial_update_operators = type0[]
export function update_operators_encode(arg: update_operators): MichelsonV1Expression { return functolib.list_encode(type0_encode)(arg) }
export function update_operators_decode(arg: MichelsonV1Expression): update_operators { return (functolib.list_decode(type0_decode))(arg) }

export async function call_update_operators(tk: TezosToolkit,
    update_operators_kt1: string,
    param: update_operators): Promise<functolib.operation_result> {
    let res = update_operators_encode(param);
    //console.log(`res: ${JSON.stringify(res,null,2)}`);
    return functolib.send(tk, update_operators_kt1, 'update_operators', res);
}

export type type1 = { amount: functolib.nat, token_id: functolib.nat, to_: functolib.address }
export type initial_type1 = { amount: functolib.nat, token_id: functolib.nat, to_: functolib.address }
export function type1_encode(arg: type1): MichelsonV1Expression {
    return { prim: 'Pair', args: [(functolib.address_encode(arg.to_)), (functolib.nat_encode(arg.token_id)), (functolib.nat_encode(arg.amount))] }
}
export function type1_decode(arg: MichelsonV1Expression): type1 {
    let before_projection = (functolib.tuple3_decode(functolib.address_decode, functolib.nat_decode, functolib.nat_decode))(arg);
    return {
        to_: (before_projection[0]),
        token_id: (before_projection[1]),
        amount: (before_projection[2])
    }

}

export type type2 = { txs: type1[], from_: functolib.address }
export type initial_type2 = { txs: type1[], from_: functolib.address }
export function type2_encode(arg: type2): MichelsonV1Expression {
    return { prim: 'Pair', args: [(functolib.address_encode(arg.from_)), (functolib.list_encode(type1_encode)(arg.txs))] }
}
export function type2_decode(arg: MichelsonV1Expression): type2 {
    let before_projection = (functolib.tuple2_decode(functolib.address_decode, functolib.list_decode(type1_decode)))(arg);
    return {
        from_: (before_projection[0]),
        txs: (before_projection[1])
    }

}

export type transfer = type2[]
export type initial_transfer = type2[]
export function transfer_encode(arg: transfer): MichelsonV1Expression { return functolib.list_encode(type2_encode)(arg) }
export function transfer_decode(arg: MichelsonV1Expression): transfer { return (functolib.list_decode(type2_decode))(arg) }

export async function call_transfer(tk: TezosToolkit,
    transfer_kt1: string,
    param: transfer): Promise<functolib.operation_result> {
    let res = transfer_encode(param);
    //console.log(`res: ${JSON.stringify(res,null,2)}`);
    return functolib.send(tk, transfer_kt1, 'transfer', res);
}

export type type3 = { amount: functolib.nat, owner: functolib.address }
export type initial_type3 = { amount: functolib.nat, owner: functolib.address }
export function type3_encode(arg: type3): MichelsonV1Expression {
    return { prim: 'Pair', args: [(functolib.address_encode(arg.owner)), (functolib.nat_encode(arg.amount))] }
}
export function type3_decode(arg: MichelsonV1Expression): type3 {
    let before_projection = (functolib.tuple2_decode(functolib.address_decode, functolib.nat_decode))(arg);
    return {
        owner: (before_projection[0]),
        amount: (before_projection[1])
    }

}


type tokens_Mint_tokens_constructor_subtype = { kind: "Mint_tokens_constructor"; Mint_tokens_element: type3[] }
type tokens_Burn_tokens_constructor_subtype = { kind: "Burn_tokens_constructor"; Burn_tokens_element: type3[] }
export type tokens =
    tokens_Mint_tokens_constructor_subtype |
    tokens_Burn_tokens_constructor_subtype

export type initial_tokens =
    tokens_Mint_tokens_constructor_subtype |
    tokens_Burn_tokens_constructor_subtype

export function tokens_encode(arg: tokens): MichelsonV1Expression {

    switch (arg.kind) {
        case ("Burn_tokens_constructor"):
            return {
                prim: 'Left',
                args: [functolib.list_encode(type3_encode)(arg.Burn_tokens_element)]
            }

        case ("Mint_tokens_constructor"):
            return {
                prim: 'Right',
                args: [functolib.list_encode(type3_encode)(arg.Mint_tokens_element)]
            }

    }
}
export let tokens_decode = function(arg: MichelsonV1Expression): tokens {
    let p = functolib.retrieve_path_from_sumtype_typescript(arg);

    switch (p[0]) {
        case [true]:
            return { kind: "Burn_tokens_constructor", Burn_tokens_element: (functolib.list_decode(type3_decode)(p[1])) }

        case [false]:
            return { kind: "Mint_tokens_constructor", Mint_tokens_element: (functolib.list_decode(type3_decode)(p[1])) }
        default: throw "unknown primitive in output_sumtype_decode"
    }
}

export async function call_tokens(tk: TezosToolkit,
    tokens_kt1: string,
    param: tokens): Promise<functolib.operation_result> {
    let res = tokens_encode(param);
    //console.log(`res: ${JSON.stringify(res,null,2)}`);
    return functolib.send(tk, tokens_kt1, 'tokens', res);
}

export type set_admin = functolib.address
export type initial_set_admin = functolib.address
export function set_admin_encode(arg: set_admin): MichelsonV1Expression { return functolib.address_encode(arg) }
let set_admin_decode = function(m: MichelsonV1Expression): set_admin { return (functolib.address_decode(m)); }

export async function call_set_admin(tk: TezosToolkit,
    set_admin_kt1: string,
    param: set_admin): Promise<functolib.operation_result> {
    let res = set_admin_encode(param);
    //console.log(`res: ${JSON.stringify(res,null,2)}`);
    return functolib.send(tk, set_admin_kt1, 'set_admin', res);
}

export type pause = functolib.bool
export type initial_pause = functolib.bool
export function pause_encode(arg: pause): MichelsonV1Expression { return functolib.bool_encode(arg) }
let pause_decode = function(m: MichelsonV1Expression): pause { return (functolib.bool_decode(m)); }

export async function call_pause(tk: TezosToolkit,
    pause_kt1: string,
    param: pause): Promise<functolib.operation_result> {
    let res = pause_encode(param);
    //console.log(`res: ${JSON.stringify(res,null,2)}`);
    return functolib.send(tk, pause_kt1, 'pause', res);
}

export type mint_tokens = type3[]
export type initial_mint_tokens = type3[]
export function mint_tokens_encode(arg: mint_tokens): MichelsonV1Expression { return functolib.list_encode(type3_encode)(arg) }
export function mint_tokens_decode(arg: MichelsonV1Expression): mint_tokens { return (functolib.list_decode(type3_decode))(arg) }

export async function call_mint_tokens(tk: TezosToolkit,
    mint_tokens_kt1: string,
    param: mint_tokens): Promise<functolib.operation_result> {
    let res = mint_tokens_encode(param);
    //console.log(`res: ${JSON.stringify(res,null,2)}`);
    return functolib.send(tk, mint_tokens_kt1, 'mint_tokens', res);
}

export type confirm_admin = functolib.unit
export type initial_confirm_admin = functolib.unit
export function confirm_admin_encode(arg: confirm_admin): MichelsonV1Expression { return functolib.unit_encode(arg) }
let confirm_admin_decode = function(m: MichelsonV1Expression): confirm_admin { return (functolib.unit_decode(m)); }

export async function call_confirm_admin(tk: TezosToolkit,
    confirm_admin_kt1: string,
    param: confirm_admin): Promise<functolib.operation_result> {
    let res = confirm_admin_encode(param);
    //console.log(`res: ${JSON.stringify(res,null,2)}`);
    return functolib.send(tk, confirm_admin_kt1, 'confirm_admin', res);
}

export type burn_tokens = type3[]
export type initial_burn_tokens = type3[]
export function burn_tokens_encode(arg: burn_tokens): MichelsonV1Expression { return functolib.list_encode(type3_encode)(arg) }
export function burn_tokens_decode(arg: MichelsonV1Expression): burn_tokens { return (functolib.list_decode(type3_decode))(arg) }

export async function call_burn_tokens(tk: TezosToolkit,
    burn_tokens_kt1: string,
    param: burn_tokens): Promise<functolib.operation_result> {
    let res = burn_tokens_encode(param);
    //console.log(`res: ${JSON.stringify(res,null,2)}`);
    return functolib.send(tk, burn_tokens_kt1, 'burn_tokens', res);
}

export type type4 = { token_id: functolib.nat, owner: functolib.address }
export type initial_type4 = { token_id: functolib.nat, owner: functolib.address }
export function type4_encode(arg: type4): MichelsonV1Expression {
    return { prim: 'Pair', args: [(functolib.address_encode(arg.owner)), (functolib.nat_encode(arg.token_id))] }
}
export function type4_decode(arg: MichelsonV1Expression): type4 {
    let before_projection = (functolib.tuple2_decode(functolib.address_decode, functolib.nat_decode))(arg);
    return {
        owner: (before_projection[0]),
        token_id: (before_projection[1])
    }

}

export type balance_of = { callback: functolib.contract, requests: type4[] }
export type initial_balance_of = { callback: functolib.contract, requests: type4[] }
export function balance_of_encode(arg: balance_of): MichelsonV1Expression {
    return { prim: 'Pair', args: [(functolib.list_encode(type4_encode)(arg.requests)), (functolib.contract_encode(new Parser().parseJSON({ "prim": "list", "args": [{ "prim": "pair", "args": [{ "prim": "pair", "args": [{ "prim": "address", "annots": ["%owner"] }, { "prim": "nat", "annots": ["%token_id"] }], "annots": ["%request"] }, { "prim": "nat", "annots": ["%balance"] }] }] }))(arg.callback))] }
}
export function balance_of_decode(arg: MichelsonV1Expression): balance_of {
    let before_projection = (functolib.tuple2_decode(functolib.list_decode(type4_decode), functolib.contract_decode(new Parser().parseJSON({ "prim": "list", "args": [{ "prim": "pair", "args": [{ "prim": "pair", "args": [{ "prim": "address", "annots": ["%owner"] }, { "prim": "nat", "annots": ["%token_id"] }], "annots": ["%request"] }, { "prim": "nat", "annots": ["%balance"] }] }] }))))(arg);
    return {
        requests: (before_projection[0]),
        callback: (before_projection[1])
    }

}

export async function call_balance_of(tk: TezosToolkit,
    balance_of_kt1: string,
    param: balance_of): Promise<functolib.operation_result> {
    let res = balance_of_encode(param);
    //console.log(`res: ${JSON.stringify(res,null,2)}`);
    return functolib.send(tk, balance_of_kt1, 'balance_of', res);
}


type assets_Update_operators_constructor_subtype = { kind: "Update_operators_constructor"; Update_operators_element: type0[] }
type assets_Transfer_constructor_subtype = { kind: "Transfer_constructor"; Transfer_element: type2[] }
type assets_Balance_of_constructor_subtype = { kind: "Balance_of_constructor"; Balance_of_element: balance_of }
export type assets =
    assets_Update_operators_constructor_subtype |
    assets_Transfer_constructor_subtype |
    assets_Balance_of_constructor_subtype

export type initial_assets =
    assets_Update_operators_constructor_subtype |
    assets_Transfer_constructor_subtype |
    assets_Balance_of_constructor_subtype

export function assets_encode(arg: assets): MichelsonV1Expression {

    switch (arg.kind) {
        case ("Balance_of_constructor"):
            return {
                prim: 'Left',
                args: [{
                    prim: 'Left',
                    args: [balance_of_encode(arg.Balance_of_element)]
                }
                ]
            }

        case ("Transfer_constructor"):
            return {
                prim: 'Left',
                args: [{
                    prim: 'Right',
                    args: [functolib.list_encode(type2_encode)(arg.Transfer_element)]
                }
                ]
            }

        case ("Update_operators_constructor"):
            return {
                prim: 'Right',
                args: [functolib.list_encode(type0_encode)(arg.Update_operators_element)]
            }

    }
}
export let assets_decode = function(arg: MichelsonV1Expression): assets {
    let p = functolib.retrieve_path_from_sumtype_typescript(arg);

    switch (p[0]) {
        case [true, true]:
            return { kind: "Balance_of_constructor", Balance_of_element: (balance_of_decode(p[1])) }

        case [true, false]:
            return { kind: "Transfer_constructor", Transfer_element: (functolib.list_decode(type2_decode)(p[1])) }

        case [false]:
            return { kind: "Update_operators_constructor", Update_operators_element: (functolib.list_decode(type0_decode)(p[1])) }
        default: throw "unknown primitive in output_sumtype_decode"
    }
}

export async function call_assets(tk: TezosToolkit,
    assets_kt1: string,
    param: assets): Promise<functolib.operation_result> {
    let res = assets_encode(param);
    //console.log(`res: ${JSON.stringify(res,null,2)}`);
    return functolib.send(tk, assets_kt1, 'assets', res);
}


type admin_Set_admin_constructor_subtype = { kind: "Set_admin_constructor"; Set_admin_element: functolib.address }
type admin_Pause_constructor_subtype = { kind: "Pause_constructor"; Pause_element: functolib.bool }
type admin_Confirm_admin_constructor_subtype = { kind: "Confirm_admin_constructor" }
export type admin =
    admin_Set_admin_constructor_subtype |
    admin_Pause_constructor_subtype |
    admin_Confirm_admin_constructor_subtype

export type initial_admin =
    admin_Set_admin_constructor_subtype |
    admin_Pause_constructor_subtype |
    admin_Confirm_admin_constructor_subtype

export function admin_encode(arg: admin): MichelsonV1Expression {

    switch (arg.kind) {
        case ("Confirm_admin_constructor"):
            return {
                prim: 'Left',
                args: [{
                    prim: 'Left',
                    args: [functolib.unit_encode(null)]
                }
                ]
            }

        case ("Pause_constructor"):
            return {
                prim: 'Left',
                args: [{
                    prim: 'Right',
                    args: [functolib.bool_encode(arg.Pause_element)]
                }
                ]
            }

        case ("Set_admin_constructor"):
            return {
                prim: 'Right',
                args: [functolib.address_encode(arg.Set_admin_element)]
            }

    }
}
export let admin_decode = function(arg: MichelsonV1Expression): admin {
    let p = functolib.retrieve_path_from_sumtype_typescript(arg);

    switch (p[0]) {
        case ([true, true]):
            return { kind: "Confirm_admin_constructor" }

        case [true, false]:
            return { kind: "Pause_constructor", Pause_element: (functolib.bool_decode(p[1])) }

        case [false]:
            return { kind: "Set_admin_constructor", Set_admin_element: (functolib.address_decode(p[1])) }
        default: throw "unknown primitive in output_sumtype_decode"
    }
}

export async function call_admin(tk: TezosToolkit,
    admin_kt1: string,
    param: admin): Promise<functolib.operation_result> {
    let res = admin_encode(param);
    //console.log(`res: ${JSON.stringify(res,null,2)}`);
    return functolib.send(tk, admin_kt1, 'admin', res);
}

export type type5 = { token_info: functolib.map<string, functolib.bytes>, token_id: functolib.nat }
export type initial_type5 = { token_info: MichelsonMap<any, any>, token_id: functolib.nat }
export function type5_encode(arg: type5): MichelsonV1Expression {
    return { prim: 'Pair', args: [(functolib.nat_encode(arg.token_id)), (functolib.map_encode(functolib.string_encode, functolib.bytes_encode)(arg.token_info))] }
}
export function type5_decode(arg: MichelsonV1Expression): type5 {
    let before_projection = (functolib.tuple2_decode(functolib.nat_decode, functolib.map_decode(functolib.string_decode, functolib.bytes_decode)))(arg);
    return {
        token_id: (before_projection[0]),
        token_info: (before_projection[1])
    }

}

export type custom = { config_api: functolib.option<functolib.address>, tag: string }
export type initial_custom = { config_api: functolib.option<functolib.address>, tag: string }
export function custom_encode(arg: custom): MichelsonV1Expression {
    return { prim: 'Pair', args: [(functolib.string_encode(arg.tag)), (functolib.option_encode(functolib.address_encode)(arg.config_api))] }
}
export function custom_decode(arg: MichelsonV1Expression): custom {
    let before_projection = (functolib.tuple2_decode(functolib.string_decode, functolib.option_decode(functolib.address_decode)))(arg);
    return {
        tag: (before_projection[0]),
        config_api: (before_projection[1])
    }

}


type sender_Required_owner_hook_constructor_subtype = { kind: "Required_owner_hook_constructor" }
type sender_Optional_owner_hook_constructor_subtype = { kind: "Optional_owner_hook_constructor" }
type sender_Owner_no_hook_constructor_subtype = { kind: "Owner_no_hook_constructor" }
export type sender =
    sender_Required_owner_hook_constructor_subtype |
    sender_Optional_owner_hook_constructor_subtype |
    sender_Owner_no_hook_constructor_subtype

export type initial_sender =
    sender_Required_owner_hook_constructor_subtype |
    sender_Optional_owner_hook_constructor_subtype |
    sender_Owner_no_hook_constructor_subtype

export function sender_encode(arg: sender): MichelsonV1Expression {

    switch (arg.kind) {
        case ("Owner_no_hook_constructor"):
            return {
                prim: 'Left',
                args: [functolib.unit_encode(null)]
            }

        case ("Optional_owner_hook_constructor"):
            return {
                prim: 'Right',
                args: [{
                    prim: 'Left',
                    args: [functolib.unit_encode(null)]
                }
                ]
            }

        case ("Required_owner_hook_constructor"):
            return {
                prim: 'Right',
                args: [{
                    prim: 'Right',
                    args: [functolib.unit_encode(null)]
                }
                ]
            }

    }
}
export let sender_decode = function(arg: MichelsonV1Expression): sender {
    let p = functolib.retrieve_path_from_sumtype_typescript(arg);

    switch (p[0]) {
        case ([true]):
            return { kind: "Owner_no_hook_constructor" }

        case ([false, true]):
            return { kind: "Optional_owner_hook_constructor" }

        case ([false, false]):
            return { kind: "Required_owner_hook_constructor" }
        default: throw "unknown primitive in output_sumtype_decode"
    }
}


type operator_Owner_or_operator_transfer_constructor_subtype = { kind: "Owner_or_operator_transfer_constructor" }
type operator_Owner_transfer_constructor_subtype = { kind: "Owner_transfer_constructor" }
type operator_No_transfer_constructor_subtype = { kind: "No_transfer_constructor" }
export type operator =
    operator_Owner_or_operator_transfer_constructor_subtype |
    operator_Owner_transfer_constructor_subtype |
    operator_No_transfer_constructor_subtype

export type initial_operator =
    operator_Owner_or_operator_transfer_constructor_subtype |
    operator_Owner_transfer_constructor_subtype |
    operator_No_transfer_constructor_subtype

export function operator_encode(arg: operator): MichelsonV1Expression {

    switch (arg.kind) {
        case ("No_transfer_constructor"):
            return {
                prim: 'Left',
                args: [functolib.unit_encode(null)]
            }

        case ("Owner_transfer_constructor"):
            return {
                prim: 'Right',
                args: [{
                    prim: 'Left',
                    args: [functolib.unit_encode(null)]
                }
                ]
            }

        case ("Owner_or_operator_transfer_constructor"):
            return {
                prim: 'Right',
                args: [{
                    prim: 'Right',
                    args: [functolib.unit_encode(null)]
                }
                ]
            }

    }
}
export let operator_decode = function(arg: MichelsonV1Expression): operator {
    let p = functolib.retrieve_path_from_sumtype_typescript(arg);

    switch (p[0]) {
        case ([true]):
            return { kind: "No_transfer_constructor" }

        case ([false, true]):
            return { kind: "Owner_transfer_constructor" }

        case ([false, false]):
            return { kind: "Owner_or_operator_transfer_constructor" }
        default: throw "unknown primitive in output_sumtype_decode"
    }
}

export type permissions = { custom: functolib.option<custom>, sender: sender, receiver: sender, operator: operator }
export type initial_permissions = { custom: functolib.option<custom>, sender: sender, receiver: sender, operator: operator }
export function permissions_encode(arg: permissions): MichelsonV1Expression {
    return { prim: 'Pair', args: [(operator_encode(arg.operator)), (sender_encode(arg.receiver)), (sender_encode(arg.sender)), (functolib.option_encode(custom_encode)(arg.custom))] }
}
export function permissions_decode(arg: MichelsonV1Expression): permissions {
    let before_projection = (functolib.tuple4_decode(operator_decode, sender_decode, sender_decode, functolib.option_decode(custom_decode)))(arg);
    return {
        operator: (before_projection[0]),
        receiver: (before_projection[1]),
        sender: (before_projection[2]),
        custom: (before_projection[3])
    }

}

export type assets6 = { total_supply: functolib.nat, token_metadata: functolib.big_map<functolib.nat, type5>, permissions: permissions, operators: functolib.big_map<[functolib.address, [functolib.address, functolib.nat]], functolib.unit>, ledger: functolib.big_map<functolib.address, functolib.nat> }
export type initial_assets6 = { total_supply: functolib.nat, token_metadata: MichelsonMap<any, any>, permissions: permissions, operators: MichelsonMap<any, any>, ledger: MichelsonMap<any, any> }
export function assets6_encode(arg: assets6): MichelsonV1Expression {
    return { prim: 'Pair', args: [{ prim: 'Pair', args: [{ prim: 'Pair', args: [(functolib.big_map_encode(functolib.address_encode, functolib.nat_encode)(arg.ledger)), (functolib.big_map_encode(functolib.tuple2_encode(functolib.address_encode, functolib.tuple2_encode(functolib.address_encode, functolib.nat_encode)), functolib.unit_encode)(arg.operators))] }, { prim: 'Pair', args: [(permissions_encode(arg.permissions)), (functolib.big_map_encode(functolib.nat_encode, type5_encode)(arg.token_metadata))] }] }, (functolib.nat_encode(arg.total_supply))] }
}
export function assets6_decode(arg: MichelsonV1Expression): assets6 {
    let before_projection = (functolib.tuple2_decode((functolib.tuple2_decode((functolib.tuple2_decode(functolib.big_map_decode(functolib.address_decode, functolib.nat_decode), functolib.big_map_decode(functolib.tuple2_decode(functolib.address_decode, functolib.tuple2_decode(functolib.address_decode, functolib.nat_decode)), functolib.unit_decode))), (functolib.tuple2_decode(permissions_decode, functolib.big_map_decode(functolib.nat_decode, type5_decode))))), functolib.nat_decode))(arg);
    return {
        ledger: (before_projection[0][0][0]),
        operators: (before_projection[0][0][1]),
        permissions: (before_projection[0][1][0]),
        token_metadata: (before_projection[0][1][1]),
        total_supply: (before_projection[1])
    }

}

export type admin7 = { pending_admin: functolib.option<functolib.address>, paused: functolib.bool, admin: functolib.address }
export type initial_admin7 = { pending_admin: functolib.option<functolib.address>, paused: functolib.bool, admin: functolib.address }
export function admin7_encode(arg: admin7): MichelsonV1Expression {
    return { prim: 'Pair', args: [{ prim: 'Pair', args: [(functolib.address_encode(arg.admin)), (functolib.bool_encode(arg.paused))] }, (functolib.option_encode(functolib.address_encode)(arg.pending_admin))] }
}
export function admin7_decode(arg: MichelsonV1Expression): admin7 {
    let before_projection = (functolib.tuple2_decode((functolib.tuple2_decode(functolib.address_decode, functolib.bool_decode)), functolib.option_decode(functolib.address_decode)))(arg);
    return {
        admin: (before_projection[0][0]),
        paused: (before_projection[0][1]),
        pending_admin: (before_projection[1])
    }

}

export type storage = { metadata: functolib.big_map<string, functolib.bytes>, assets: assets6, admin: admin7 }
export type initial_storage = { metadata: MichelsonMap<any, any>, assets: assets6, admin: admin7 }
export function storage_encode(arg: storage): MichelsonV1Expression {
    return { prim: 'Pair', args: [{ prim: 'Pair', args: [(admin7_encode(arg.admin)), (assets6_encode(arg.assets))] }, (functolib.big_map_encode(functolib.string_encode, functolib.bytes_encode)(arg.metadata))] }
}
export function storage_decode(arg: MichelsonV1Expression): storage {
    let before_projection = (functolib.tuple2_decode((functolib.tuple2_decode(admin7_decode, assets6_decode)), functolib.big_map_decode(functolib.string_decode, functolib.bytes_decode)))(arg);
    return {
        admin: (before_projection[0][0]),
        assets: (before_projection[0][1]),
        metadata: (before_projection[1])
    }

}


async function deploy_fa2_raw(
    tezosKit: TezosToolkit,
    storage: MichelsonV1Expression,
    debug = false): Promise<string> {
    console.log("[deploy_fa2_raw] Deploying new fa2 smart contract");
    try {
        console.log(`fa2 initial storage ${JSON.stringify(storage)}`);
        var b = await functolib.client.getBlock();
        let origination_op = await tezosKit.contract
            .originate({
                code: fa2_code,
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

export async function deploy_fa2(
    tezosKit: TezosToolkit,
    storage: storage,
    debug = false): Promise<string> {
    let kt1_address = await deploy_fa2_raw(tezosKit, storage_encode(storage), debug);
    return kt1_address;
}

export type Storage_type = storage
export let Storage_type_encode = storage_encode
export let Storage_type_decode = storage_decode


const p = new Parser();
let initial_blockchain_storage: storage = {
    admin: {
        admin: "tz1TGuqJBnQU3BUQJ8EmYjtsKZzNkoHG7MhW",
        paused: false,
        pending_admin: null
    },
    assets: {
        ledger: { kind: 'abstract', value: BigInt("52861") },
        operators: { kind: 'abstract', value: BigInt("52862") },
        permissions: {
            operator: /* TODO: fix constructors */{ kind: "Owner_or_operator_transfer_constructor" },
            receiver: /* TODO: fix constructors */{ kind: "Optional_owner_hook_constructor" },
            sender: /* TODO: fix constructors */{ kind: "Optional_owner_hook_constructor" },
            custom: null
        },
        token_metadata: { kind: 'abstract', value: BigInt("52863") },
        total_supply: BigInt("69980")
    },
    metadata: { kind: 'abstract', value: BigInt("52864") }
}
/*
 {"prim":"Pair","args":[{"prim":"Pair","args":[{"prim":"Pair","args":[{"prim":"Pair","args":[{"string":"tz1TGuqJBnQU3BUQJ8EmYjtsKZzNkoHG7MhW"},{"prim":"False"}]},{"prim":"None"}]},{"prim":"Pair","args":[{"prim":"Pair","args":[{"int":"52861"},{"int":"52862"}]},{"prim":"Pair","args":[{"prim":"Right","args":[{"prim":"Right","args":[{"prim":"Unit"}]}]},{"prim":"Right","args":[{"prim":"Left","args":[{"prim":"Unit"}]}]},{"prim":"Right","args":[{"prim":"Left","args":[{"prim":"Unit"}]}]},{"prim":"None"}]},{"int":"52863"}]},{"int":"69980"}]},{"int":"52864"}]}
*/
