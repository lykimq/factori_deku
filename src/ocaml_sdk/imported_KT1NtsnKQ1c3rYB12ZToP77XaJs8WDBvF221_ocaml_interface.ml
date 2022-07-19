open Imported_KT1NtsnKQ1c3rYB12ZToP77XaJs8WDBvF221_code
open Factori_types
open Tzfunc.Proto

type type0 = {token2Id : nat;token2Address : address;token1Id : nat;token1Address : address}

let type0_encode arg = Mprim {prim = `Pair;
args = [Mprim {prim = `Pair;
args = [(address_encode arg.token1Address);(nat_encode arg.token1Id)];
annots=[]}
;Mprim {prim = `Pair;
args = [(address_encode arg.token2Address);(nat_encode arg.token2Id)];
annots=[]}
];
annots=[]}

let type0_decode (m : micheline) : type0 =
let ((token1Address,token1Id),(token2Address,token2Id)) = (tuple2_decode (tuple2_decode address_decode nat_decode) (tuple2_decode address_decode nat_decode)) m in
{token2Id : nat;token2Address : address;token1Id : nat;token1Address : address}

let type0_micheline = Mprim {prim = `pair;
args = [Mprim {prim = `pair;
args = [(address_micheline);(nat_micheline)];
annots=[]}
;Mprim {prim = `pair;
args = [(address_micheline);(nat_micheline)];
annots=[]}
];
annots=[]}

let type0_generator () = {token2Id = nat_generator ();token2Address = address_generator ();token1Id = nat_generator ();token1Address = address_generator ()}

type getReserveBalance = ((* Tvar *)type0 *
 contract)
let getReserveBalance_encode = (tuple2_encode type0_encode
(contract_encode (EzEncoding.destruct micheline_enc.json {|{"prim":"pair","args":[{"prim":"nat","annots":["%token1_pool"]},{"prim":"nat","annots":["%token2_pool"]}]}|})))
let getReserveBalance_decode = (tuple2_decode type0_decode
(contract_decode (EzEncoding.destruct micheline_enc.json {|{"prim":"pair","args":[{"prim":"nat","annots":["%token1_pool"]},{"prim":"nat","annots":["%token2_pool"]}]}|})))
let getReserveBalance_micheline = (tuple2_micheline type0_micheline
(contract_micheline (EzEncoding.destruct micheline_enc.json {|{"prim":"pair","args":[{"prim":"nat","annots":["%token1_pool"]},{"prim":"nat","annots":["%token2_pool"]}]}|})))
let getReserveBalance_generator = (tuple2_generator type0_generator
contract_generator)

let call_getReserveBalance ?(node = Blockchain.default_node) ?(debug=false) ?(amount=0L) ~from ~kt1 (param : getReserveBalance) =
     let param =
     {
     entrypoint = EPnamed "getReserveBalance";
     value = Micheline (getReserveBalance_encode param);
     } in
     Blockchain.call_entrypoint ~debug ~node ~amount ~from ~dst:kt1 param

type getExchangeFee = ((* Tvar *)type0 *
 contract)
let getExchangeFee_encode = (tuple2_encode type0_encode
(contract_encode (EzEncoding.destruct micheline_enc.json {|{"prim":"pair","args":[{"prim":"nat","annots":["%lpFee"]},{"prim":"nat","annots":["%systemFee"]}]}|})))
let getExchangeFee_decode = (tuple2_decode type0_decode
(contract_decode (EzEncoding.destruct micheline_enc.json {|{"prim":"pair","args":[{"prim":"nat","annots":["%lpFee"]},{"prim":"nat","annots":["%systemFee"]}]}|})))
let getExchangeFee_micheline = (tuple2_micheline type0_micheline
(contract_micheline (EzEncoding.destruct micheline_enc.json {|{"prim":"pair","args":[{"prim":"nat","annots":["%lpFee"]},{"prim":"nat","annots":["%systemFee"]}]}|})))
let getExchangeFee_generator = (tuple2_generator type0_generator
contract_generator)

let call_getExchangeFee ?(node = Blockchain.default_node) ?(debug=false) ?(amount=0L) ~from ~kt1 (param : getExchangeFee) =
     let param =
     {
     entrypoint = EPnamed "getExchangeFee";
     value = Micheline (getExchangeFee_encode param);
     } in
     Blockchain.call_entrypoint ~debug ~node ~amount ~from ~dst:kt1 param

type withdrawSystemFee = address
let withdrawSystemFee_encode : withdrawSystemFee -> micheline = address_encode
let withdrawSystemFee_decode (m : micheline) : withdrawSystemFee = address_decode m
let withdrawSystemFee_micheline = address_micheline
let withdrawSystemFee_generator () = address_generator ()

let call_withdrawSystemFee ?(node = Blockchain.default_node) ?(debug=false) ?(amount=0L) ~from ~kt1 (param : withdrawSystemFee) =
     let param =
     {
     entrypoint = EPnamed "WithdrawSystemFee";
     value = Micheline (withdrawSystemFee_encode param);
     } in
     Blockchain.call_entrypoint ~debug ~node ~amount ~from ~dst:kt1 param


type swap = {tokenAmountIn : nat;requiredTokenId : nat;requiredTokenAddress : address;recipient : address;minimumTokenOut : nat}

let swap_encode arg = Mprim {prim = `Pair;
args = [Mprim {prim = `Pair;
args = [(nat_encode arg.minimumTokenOut);(address_encode arg.recipient)];
annots=[]}
;Mprim {prim = `Pair;
args = [(address_encode arg.requiredTokenAddress);Mprim {prim = `Pair;
args = [(nat_encode arg.requiredTokenId);(nat_encode arg.tokenAmountIn)];
annots=[]}
];
annots=[]}
];
annots=[]}

let swap_decode (m : micheline) : swap =
let ((minimumTokenOut,recipient),(requiredTokenAddress,(requiredTokenId,tokenAmountIn))) = (tuple2_decode (tuple2_decode nat_decode address_decode) (tuple2_decode address_decode (tuple2_decode nat_decode nat_decode))) m in
{tokenAmountIn : nat;requiredTokenId : nat;requiredTokenAddress : address;recipient : address;minimumTokenOut : nat}

let swap_micheline = Mprim {prim = `pair;
args = [Mprim {prim = `pair;
args = [(nat_micheline);(address_micheline)];
annots=[]}
;Mprim {prim = `pair;
args = [(address_micheline);Mprim {prim = `pair;
args = [(nat_micheline);(nat_micheline)];
annots=[]}
];
annots=[]}
];
annots=[]}

let swap_generator () = {tokenAmountIn = nat_generator ();requiredTokenId = nat_generator ();requiredTokenAddress = address_generator ();recipient = address_generator ();minimumTokenOut = nat_generator ()}

let call_swap ?(node = Blockchain.default_node) ?(debug=false) ?(amount=0L) ~from ~kt1 (param : swap) =
     let param =
     {
     entrypoint = EPnamed "Swap";
     value = Micheline (swap_encode param);
     } in
     Blockchain.call_entrypoint ~debug ~node ~amount ~from ~dst:kt1 param


type removeLiquidity = {token2_min : nat;token1_min : nat;recipient : address;lpAmount : nat}

let removeLiquidity_encode arg = Mprim {prim = `Pair;
args = [Mprim {prim = `Pair;
args = [(nat_encode arg.lpAmount);(address_encode arg.recipient)];
annots=[]}
;Mprim {prim = `Pair;
args = [(nat_encode arg.token1_min);(nat_encode arg.token2_min)];
annots=[]}
];
annots=[]}

let removeLiquidity_decode (m : micheline) : removeLiquidity =
let ((lpAmount,recipient),(token1_min,token2_min)) = (tuple2_decode (tuple2_decode nat_decode address_decode) (tuple2_decode nat_decode nat_decode)) m in
{token2_min : nat;token1_min : nat;recipient : address;lpAmount : nat}

let removeLiquidity_micheline = Mprim {prim = `pair;
args = [Mprim {prim = `pair;
args = [(nat_micheline);(address_micheline)];
annots=[]}
;Mprim {prim = `pair;
args = [(nat_micheline);(nat_micheline)];
annots=[]}
];
annots=[]}

let removeLiquidity_generator () = {token2_min = nat_generator ();token1_min = nat_generator ();recipient = address_generator ();lpAmount = nat_generator ()}

let call_removeLiquidity ?(node = Blockchain.default_node) ?(debug=false) ?(amount=0L) ~from ~kt1 (param : removeLiquidity) =
     let param =
     {
     entrypoint = EPnamed "RemoveLiquidity";
     value = Micheline (removeLiquidity_encode param);
     } in
     Blockchain.call_entrypoint ~debug ~node ~amount ~from ~dst:kt1 param

type modifyMaxSwapAmount = nat
let modifyMaxSwapAmount_encode : modifyMaxSwapAmount -> micheline = nat_encode
let modifyMaxSwapAmount_decode (m : micheline) : modifyMaxSwapAmount = nat_decode m
let modifyMaxSwapAmount_micheline = nat_micheline
let modifyMaxSwapAmount_generator () = nat_generator ()

let call_modifyMaxSwapAmount ?(node = Blockchain.default_node) ?(debug=false) ?(amount=0L) ~from ~kt1 (param : modifyMaxSwapAmount) =
     let param =
     {
     entrypoint = EPnamed "ModifyMaxSwapAmount";
     value = Micheline (modifyMaxSwapAmount_encode param);
     } in
     Blockchain.call_entrypoint ~debug ~node ~amount ~from ~dst:kt1 param


type modifyFee = {systemFee : nat;lpFee : nat}

let modifyFee_encode arg = Mprim {prim = `Pair;
args = [(nat_encode arg.lpFee);(nat_encode arg.systemFee)];
annots=[]}

let modifyFee_decode (m : micheline) : modifyFee =
let (lpFee,systemFee) = (tuple2_decode nat_decode nat_decode) m in
{systemFee : nat;lpFee : nat}

let modifyFee_micheline = Mprim {prim = `pair;
args = [(nat_micheline);(nat_micheline)];
annots=[]}

let modifyFee_generator () = {systemFee = nat_generator ();lpFee = nat_generator ()}

let call_modifyFee ?(node = Blockchain.default_node) ?(debug=false) ?(amount=0L) ~from ~kt1 (param : modifyFee) =
     let param =
     {
     entrypoint = EPnamed "ModifyFee";
     value = Micheline (modifyFee_encode param);
     } in
     Blockchain.call_entrypoint ~debug ~node ~amount ~from ~dst:kt1 param

type changeState = unit
let changeState_encode : changeState -> micheline = unit_encode
let changeState_decode (m : micheline) : changeState = unit_decode m
let changeState_micheline = unit_micheline
let changeState_generator () = unit_generator ()

let call_changeState ?(node = Blockchain.default_node) ?(debug=false) ?(amount=0L) ~from ~kt1 (param : changeState) =
     let param =
     {
     entrypoint = EPnamed "ChangeState";
     value = Micheline (changeState_encode param);
     } in
     Blockchain.call_entrypoint ~debug ~node ~amount ~from ~dst:kt1 param

type changeAdmin = address
let changeAdmin_encode : changeAdmin -> micheline = address_encode
let changeAdmin_decode (m : micheline) : changeAdmin = address_decode m
let changeAdmin_micheline = address_micheline
let changeAdmin_generator () = address_generator ()

let call_changeAdmin ?(node = Blockchain.default_node) ?(debug=false) ?(amount=0L) ~from ~kt1 (param : changeAdmin) =
     let param =
     {
     entrypoint = EPnamed "ChangeAdmin";
     value = Micheline (changeAdmin_encode param);
     } in
     Blockchain.call_entrypoint ~debug ~node ~amount ~from ~dst:kt1 param


type addLiquidity = {token2_max : nat;token1_max : nat;recipient : address}

let addLiquidity_encode arg = Mprim {prim = `Pair;
args = [(address_encode arg.recipient);Mprim {prim = `Pair;
args = [(nat_encode arg.token1_max);(nat_encode arg.token2_max)];
annots=[]}
];
annots=[]}

let addLiquidity_decode (m : micheline) : addLiquidity =
let (recipient,(token1_max,token2_max)) = (tuple2_decode address_decode (tuple2_decode nat_decode nat_decode)) m in
{token2_max : nat;token1_max : nat;recipient : address}

let addLiquidity_micheline = Mprim {prim = `pair;
args = [(address_micheline);Mprim {prim = `pair;
args = [(nat_micheline);(nat_micheline)];
annots=[]}
];
annots=[]}

let addLiquidity_generator () = {token2_max = nat_generator ();token1_max = nat_generator ();recipient = address_generator ()}

let call_addLiquidity ?(node = Blockchain.default_node) ?(debug=false) ?(amount=0L) ~from ~kt1 (param : addLiquidity) =
     let param =
     {
     entrypoint = EPnamed "AddLiquidity";
     value = Micheline (addLiquidity_encode param);
     } in
     Blockchain.call_entrypoint ~debug ~node ~amount ~from ~dst:kt1 param


type storage = {totalSupply : nat;token2_pool : nat;token2_Fee : nat;token2Id : nat;token2Check : bool;token2Address : address;token1_pool : nat;token1_Fee : nat;token1Id : nat;token1Check : bool;token1Address : address;systemFee : nat;paused : bool;maxSwapLimit : nat;lpTokenAddress : address;lpFee : nat;admin : address}

let storage_encode arg = Mprim {prim = `Pair;
args = [Mprim {prim = `Pair;
args = [Mprim {prim = `Pair;
args = [Mprim {prim = `Pair;
args = [(address_encode arg.admin);(nat_encode arg.lpFee)];
annots=[]}
;Mprim {prim = `Pair;
args = [(address_encode arg.lpTokenAddress);(nat_encode arg.maxSwapLimit)];
annots=[]}
];
annots=[]}
;Mprim {prim = `Pair;
args = [Mprim {prim = `Pair;
args = [(bool_encode arg.paused);(nat_encode arg.systemFee)];
annots=[]}
;Mprim {prim = `Pair;
args = [(address_encode arg.token1Address);(bool_encode arg.token1Check)];
annots=[]}
];
annots=[]}
];
annots=[]}
;Mprim {prim = `Pair;
args = [Mprim {prim = `Pair;
args = [Mprim {prim = `Pair;
args = [(nat_encode arg.token1Id);(nat_encode arg.token1_Fee)];
annots=[]}
;Mprim {prim = `Pair;
args = [(nat_encode arg.token1_pool);(address_encode arg.token2Address)];
annots=[]}
];
annots=[]}
;Mprim {prim = `Pair;
args = [Mprim {prim = `Pair;
args = [(bool_encode arg.token2Check);(nat_encode arg.token2Id)];
annots=[]}
;Mprim {prim = `Pair;
args = [(nat_encode arg.token2_Fee);Mprim {prim = `Pair;
args = [(nat_encode arg.token2_pool);(nat_encode arg.totalSupply)];
annots=[]}
];
annots=[]}
];
annots=[]}
];
annots=[]}
];
annots=[]}

let storage_decode (m : micheline) : storage =
let ((((admin,lpFee),(lpTokenAddress,maxSwapLimit)),((paused,systemFee),(token1Address,token1Check))),(((token1Id,token1_Fee),(token1_pool,token2Address)),((token2Check,token2Id),(token2_Fee,(token2_pool,totalSupply))))) = (tuple2_decode (tuple2_decode (tuple2_decode (tuple2_decode address_decode nat_decode) (tuple2_decode address_decode nat_decode)) (tuple2_decode (tuple2_decode bool_decode nat_decode) (tuple2_decode address_decode bool_decode))) (tuple2_decode (tuple2_decode (tuple2_decode nat_decode nat_decode) (tuple2_decode nat_decode address_decode)) (tuple2_decode (tuple2_decode bool_decode nat_decode) (tuple2_decode nat_decode (tuple2_decode nat_decode nat_decode))))) m in
{totalSupply : nat;token2_pool : nat;token2_Fee : nat;token2Id : nat;token2Check : bool;token2Address : address;token1_pool : nat;token1_Fee : nat;token1Id : nat;token1Check : bool;token1Address : address;systemFee : nat;paused : bool;maxSwapLimit : nat;lpTokenAddress : address;lpFee : nat;admin : address}

let storage_micheline = Mprim {prim = `pair;
args = [Mprim {prim = `pair;
args = [Mprim {prim = `pair;
args = [Mprim {prim = `pair;
args = [(address_micheline);(nat_micheline)];
annots=[]}
;Mprim {prim = `pair;
args = [(address_micheline);(nat_micheline)];
annots=[]}
];
annots=[]}
;Mprim {prim = `pair;
args = [Mprim {prim = `pair;
args = [(bool_micheline);(nat_micheline)];
annots=[]}
;Mprim {prim = `pair;
args = [(address_micheline);(bool_micheline)];
annots=[]}
];
annots=[]}
];
annots=[]}
;Mprim {prim = `pair;
args = [Mprim {prim = `pair;
args = [Mprim {prim = `pair;
args = [(nat_micheline);(nat_micheline)];
annots=[]}
;Mprim {prim = `pair;
args = [(nat_micheline);(address_micheline)];
annots=[]}
];
annots=[]}
;Mprim {prim = `pair;
args = [Mprim {prim = `pair;
args = [(bool_micheline);(nat_micheline)];
annots=[]}
;Mprim {prim = `pair;
args = [(nat_micheline);Mprim {prim = `pair;
args = [(nat_micheline);(nat_micheline)];
annots=[]}
];
annots=[]}
];
annots=[]}
];
annots=[]}
];
annots=[]}

let storage_generator () = {totalSupply = nat_generator ();token2_pool = nat_generator ();token2_Fee = nat_generator ();token2Id = nat_generator ();token2Check = bool_generator ();token2Address = address_generator ();token1_pool = nat_generator ();token1_Fee = nat_generator ();token1Id = nat_generator ();token1Check = bool_generator ();token1Address = address_generator ();systemFee = nat_generator ();paused = bool_generator ();maxSwapLimit = nat_generator ();lpTokenAddress = address_generator ();lpFee = nat_generator ();admin = address_generator ()}

let deploy ?(amount=0L) ?(node="https://tz.functori.com") ?(name="No name provided") ?(from=Blockchain.bootstrap1) storage =
               let storage = storage_encode storage in
               Blockchain.deploy ~amount ~node ~name ~from ~code (Micheline storage)

let test_storage_download ~kt1 ~base () =
     let open Tzfunc.Rp in
     let open Blockchain in
     Lwt_main.run @@
     let>? storage = get_storage ~base ~debug:(!Factori_types.debug > 0) kt1 storage_decode in
     let storage_reencoded = storage_encode storage in
     Lwt.return_ok @@ Factori_types.output_debug @@ Format.asprintf "Done downloading storage: %s."
     (Ezjsonm_interface.to_string
     (Json_encoding.construct
     micheline_enc.json
     storage_reencoded))

let initial_blockchain_storage = {admin = "KT1Kfu13FmNbcZSjTPZLrAUbEYNZim6vtg6d";
lpFee = Z.of_string ("400");
lpTokenAddress = "KT1VDSyTqS95wkB4tRGy6saMa4izRKwrEg26";
maxSwapLimit = Z.of_string ("40");
paused = false;
systemFee = Z.of_string ("1000");
token1Address = "KT1GRSvLoikDsXujKgZPsGLX8k8VvR2Tq95b";
token1Check = false;
token1Id = Z.of_string ("0");
token1_Fee = Z.of_string ("439019453721214419051");
token1_pool = Z.of_string ("158148808677571999947479");
token2Address = "KT193D4vozYnhGJQVtw7CoxxqphqUEEwK6Vb";
token2Check = true;
token2Id = Z.of_string ("0");
token2_Fee = Z.of_string ("23118286");
token2_pool = Z.of_string ("6699483272");
totalSupply = Z.of_string ("31675818702622933")}
(*
 {"prim":"Pair","args":[{"prim":"Pair","args":[{"prim":"Pair","args":[{"prim":"Pair","args":[{"string":"KT1Kfu13FmNbcZSjTPZLrAUbEYNZim6vtg6d"},{"int":"400"}]},{"string":"KT1VDSyTqS95wkB4tRGy6saMa4izRKwrEg26"},{"int":"40"}]},{"prim":"Pair","args":[{"prim":"False"},{"int":"1000"}]},{"string":"KT1GRSvLoikDsXujKgZPsGLX8k8VvR2Tq95b"},{"prim":"False"}]},{"prim":"Pair","args":[{"prim":"Pair","args":[{"int":"0"},{"int":"439019453721214419051"}]},{"int":"158148808677571999947479"},{"string":"KT193D4vozYnhGJQVtw7CoxxqphqUEEwK6Vb"}]},{"prim":"Pair","args":[{"prim":"True"},{"int":"0"}]},{"int":"23118286"},{"int":"6699483272"},{"int":"31675818702622933"}]}
*)
