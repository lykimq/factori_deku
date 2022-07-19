open Fa12_code
open Factori_types
open Tzfunc.Proto

type update_metadata = {value : bytes;key : string}

let update_metadata_encode arg = Mprim {prim = `Pair;
args = [(string_encode arg.key);(bytes_encode arg.value)];
annots=[]}

let update_metadata_decode (m : micheline) : update_metadata =
let (key,value) = (tuple2_decode string_decode bytes_decode) m in
{value : bytes;key : string}

let update_metadata_micheline = Mprim {prim = `pair;
args = [(string_micheline);(bytes_micheline)];
annots=[]}

let update_metadata_generator () = {value = bytes_generator ();key = string_generator ()}

let call_update_metadata ?(node = Blockchain.default_node) ?(debug=false) ?(amount=0L) ~from ~kt1 (param : update_metadata) =
     let param =
     {
     entrypoint = EPnamed "update_metadata";
     value = Micheline (update_metadata_encode param);
     } in
     Blockchain.call_entrypoint ~debug ~node ~amount ~from ~dst:kt1 param


type transfer = {value : nat;_to : address;from : address}

let transfer_encode arg = Mprim {prim = `Pair;
args = [(address_encode arg.from);Mprim {prim = `Pair;
args = [(address_encode arg._to);(nat_encode arg.value)];
annots=[]}
];
annots=[]}

let transfer_decode (m : micheline) : transfer =
let (from,(_to,value)) = (tuple2_decode address_decode (tuple2_decode address_decode nat_decode)) m in
{value : nat;_to : address;from : address}

let transfer_micheline = Mprim {prim = `pair;
args = [(address_micheline);Mprim {prim = `pair;
args = [(address_micheline);(nat_micheline)];
annots=[]}
];
annots=[]}

let transfer_generator () = {value = nat_generator ();_to = address_generator ();from = address_generator ()}

let call_transfer ?(node = Blockchain.default_node) ?(debug=false) ?(amount=0L) ~from ~kt1 (param : transfer) =
     let param =
     {
     entrypoint = EPnamed "transfer";
     value = Micheline (transfer_encode param);
     } in
     Blockchain.call_entrypoint ~debug ~node ~amount ~from ~dst:kt1 param

type setPause = bool
let setPause_encode : setPause -> micheline = bool_encode
let setPause_decode (m : micheline) : setPause = bool_decode m
let setPause_micheline = bool_micheline
let setPause_generator () = bool_generator ()

let call_setPause ?(node = Blockchain.default_node) ?(debug=false) ?(amount=0L) ~from ~kt1 (param : setPause) =
     let param =
     {
     entrypoint = EPnamed "setPause";
     value = Micheline (setPause_encode param);
     } in
     Blockchain.call_entrypoint ~debug ~node ~amount ~from ~dst:kt1 param

type setAdministrator = address
let setAdministrator_encode : setAdministrator -> micheline = address_encode
let setAdministrator_decode (m : micheline) : setAdministrator = address_decode m
let setAdministrator_micheline = address_micheline
let setAdministrator_generator () = address_generator ()

let call_setAdministrator ?(node = Blockchain.default_node) ?(debug=false) ?(amount=0L) ~from ~kt1 (param : setAdministrator) =
     let param =
     {
     entrypoint = EPnamed "setAdministrator";
     value = Micheline (setAdministrator_encode param);
     } in
     Blockchain.call_entrypoint ~debug ~node ~amount ~from ~dst:kt1 param


type mint = {value : nat;address : address}

let mint_encode arg = Mprim {prim = `Pair;
args = [(address_encode arg.address);(nat_encode arg.value)];
annots=[]}

let mint_decode (m : micheline) : mint =
let (address,value) = (tuple2_decode address_decode nat_decode) m in
{value : nat;address : address}

let mint_micheline = Mprim {prim = `pair;
args = [(address_micheline);(nat_micheline)];
annots=[]}

let mint_generator () = {value = nat_generator ();address = address_generator ()}

let call_mint ?(node = Blockchain.default_node) ?(debug=false) ?(amount=0L) ~from ~kt1 (param : mint) =
     let param =
     {
     entrypoint = EPnamed "mint";
     value = Micheline (mint_encode param);
     } in
     Blockchain.call_entrypoint ~debug ~node ~amount ~from ~dst:kt1 param

type getTotalSupply = (unit *
 contract)
let getTotalSupply_encode = (tuple2_encode unit_encode
(contract_encode (EzEncoding.destruct micheline_enc.json {|{"prim":"nat"}|})))
let getTotalSupply_decode = (tuple2_decode unit_decode
(contract_decode (EzEncoding.destruct micheline_enc.json {|{"prim":"nat"}|})))
let getTotalSupply_micheline = (tuple2_micheline unit_micheline
(contract_micheline (EzEncoding.destruct micheline_enc.json {|{"prim":"nat"}|})))
let getTotalSupply_generator = (tuple2_generator unit_generator
contract_generator)

let call_getTotalSupply ?(node = Blockchain.default_node) ?(debug=false) ?(amount=0L) ~from ~kt1 (param : getTotalSupply) =
     let param =
     {
     entrypoint = EPnamed "getTotalSupply";
     value = Micheline (getTotalSupply_encode param);
     } in
     Blockchain.call_entrypoint ~debug ~node ~amount ~from ~dst:kt1 param

type getBalance = (address *
 contract)
let getBalance_encode = (tuple2_encode address_encode
(contract_encode (EzEncoding.destruct micheline_enc.json {|{"prim":"nat"}|})))
let getBalance_decode = (tuple2_decode address_decode
(contract_decode (EzEncoding.destruct micheline_enc.json {|{"prim":"nat"}|})))
let getBalance_micheline = (tuple2_micheline address_micheline
(contract_micheline (EzEncoding.destruct micheline_enc.json {|{"prim":"nat"}|})))
let getBalance_generator = (tuple2_generator address_generator
contract_generator)

let call_getBalance ?(node = Blockchain.default_node) ?(debug=false) ?(amount=0L) ~from ~kt1 (param : getBalance) =
     let param =
     {
     entrypoint = EPnamed "getBalance";
     value = Micheline (getBalance_encode param);
     } in
     Blockchain.call_entrypoint ~debug ~node ~amount ~from ~dst:kt1 param


type type0 = {spender : address;owner : address}

let type0_encode arg = Mprim {prim = `Pair;
args = [(address_encode arg.owner);(address_encode arg.spender)];
annots=[]}

let type0_decode (m : micheline) : type0 =
let (owner,spender) = (tuple2_decode address_decode address_decode) m in
{spender : address;owner : address}

let type0_micheline = Mprim {prim = `pair;
args = [(address_micheline);(address_micheline)];
annots=[]}

let type0_generator () = {spender = address_generator ();owner = address_generator ()}

type getAllowance = ((* Tvar *)type0 *
 contract)
let getAllowance_encode = (tuple2_encode type0_encode
(contract_encode (EzEncoding.destruct micheline_enc.json {|{"prim":"nat"}|})))
let getAllowance_decode = (tuple2_decode type0_decode
(contract_decode (EzEncoding.destruct micheline_enc.json {|{"prim":"nat"}|})))
let getAllowance_micheline = (tuple2_micheline type0_micheline
(contract_micheline (EzEncoding.destruct micheline_enc.json {|{"prim":"nat"}|})))
let getAllowance_generator = (tuple2_generator type0_generator
contract_generator)

let call_getAllowance ?(node = Blockchain.default_node) ?(debug=false) ?(amount=0L) ~from ~kt1 (param : getAllowance) =
     let param =
     {
     entrypoint = EPnamed "getAllowance";
     value = Micheline (getAllowance_encode param);
     } in
     Blockchain.call_entrypoint ~debug ~node ~amount ~from ~dst:kt1 param

type getAdministrator = (unit *
 contract)
let getAdministrator_encode = (tuple2_encode unit_encode
(contract_encode (EzEncoding.destruct micheline_enc.json {|{"prim":"address"}|})))
let getAdministrator_decode = (tuple2_decode unit_decode
(contract_decode (EzEncoding.destruct micheline_enc.json {|{"prim":"address"}|})))
let getAdministrator_micheline = (tuple2_micheline unit_micheline
(contract_micheline (EzEncoding.destruct micheline_enc.json {|{"prim":"address"}|})))
let getAdministrator_generator = (tuple2_generator unit_generator
contract_generator)

let call_getAdministrator ?(node = Blockchain.default_node) ?(debug=false) ?(amount=0L) ~from ~kt1 (param : getAdministrator) =
     let param =
     {
     entrypoint = EPnamed "getAdministrator";
     value = Micheline (getAdministrator_encode param);
     } in
     Blockchain.call_entrypoint ~debug ~node ~amount ~from ~dst:kt1 param

type burn = mint
(* Tvar *)
let burn_encode : burn -> micheline = mint_encode
(* Tvar *)
let burn_decode = mint_decode
(* Tvar *)
let burn_micheline = mint_micheline
(* Tvar *)
let burn_generator () = mint_generator ()

let call_burn ?(node = Blockchain.default_node) ?(debug=false) ?(amount=0L) ~from ~kt1 (param : burn) =
     let param =
     {
     entrypoint = EPnamed "burn";
     value = Micheline (burn_encode param);
     } in
     Blockchain.call_entrypoint ~debug ~node ~amount ~from ~dst:kt1 param


type approve = {value : nat;spender : address}

let approve_encode arg = Mprim {prim = `Pair;
args = [(address_encode arg.spender);(nat_encode arg.value)];
annots=[]}

let approve_decode (m : micheline) : approve =
let (spender,value) = (tuple2_decode address_decode nat_decode) m in
{value : nat;spender : address}

let approve_micheline = Mprim {prim = `pair;
args = [(address_micheline);(nat_micheline)];
annots=[]}

let approve_generator () = {value = nat_generator ();spender = address_generator ()}

let call_approve ?(node = Blockchain.default_node) ?(debug=false) ?(amount=0L) ~from ~kt1 (param : approve) =
     let param =
     {
     entrypoint = EPnamed "approve";
     value = Micheline (approve_encode param);
     } in
     Blockchain.call_entrypoint ~debug ~node ~amount ~from ~dst:kt1 param


type type1 = {token_info : (string,bytes) map;token_id : nat}

let type1_encode arg = Mprim {prim = `Pair;
args = [(nat_encode arg.token_id);((map_encode string_encode bytes_encode) arg.token_info)];
annots=[]}

let type1_decode (m : micheline) : type1 =
let (token_id,token_info) = (tuple2_decode nat_decode (map_decode string_decode bytes_decode)) m in
{token_info : (string,bytes) map;token_id : nat}

let type1_micheline = Mprim {prim = `pair;
args = [(nat_micheline);((map_micheline string_micheline bytes_micheline))];
annots=[]}

let type1_generator () = {token_info = (map_generator string_generator bytes_generator) ();token_id = nat_generator ()}


type type2 = {balance : nat;approvals : (address,nat) map}

let type2_encode arg = Mprim {prim = `Pair;
args = [((map_encode address_encode nat_encode) arg.approvals);(nat_encode arg.balance)];
annots=[]}

let type2_decode (m : micheline) : type2 =
let (approvals,balance) = (tuple2_decode (map_decode address_decode nat_decode) nat_decode) m in
{balance : nat;approvals : (address,nat) map}

let type2_micheline = Mprim {prim = `pair;
args = [((map_micheline address_micheline nat_micheline));(nat_micheline)];
annots=[]}

let type2_generator () = {balance = nat_generator ();approvals = (map_generator address_generator nat_generator) ()}


type storage = {totalSupply : nat;token_metadata : (nat,type1) big_map;paused : bool;metadata : (string,bytes) big_map;balances : (address,type2) big_map;administrator : address}

let storage_encode arg = Mprim {prim = `Pair;
args = [Mprim {prim = `Pair;
args = [(address_encode arg.administrator);Mprim {prim = `Pair;
args = [((big_map_encode address_encode type2_encode) arg.balances);((big_map_encode string_encode bytes_encode) arg.metadata)];
annots=[]}
];
annots=[]}
;Mprim {prim = `Pair;
args = [(bool_encode arg.paused);Mprim {prim = `Pair;
args = [((big_map_encode nat_encode type1_encode) arg.token_metadata);(nat_encode arg.totalSupply)];
annots=[]}
];
annots=[]}
];
annots=[]}

let storage_decode (m : micheline) : storage =
let ((administrator,(balances,metadata)),(paused,(token_metadata,totalSupply))) = (tuple2_decode (tuple2_decode address_decode (tuple2_decode (big_map_decode address_decode type2_decode) (big_map_decode string_decode bytes_decode))) (tuple2_decode bool_decode (tuple2_decode (big_map_decode nat_decode type1_decode) nat_decode))) m in
{totalSupply : nat;token_metadata : (nat,type1) big_map;paused : bool;metadata : (string,bytes) big_map;balances : (address,type2) big_map;administrator : address}

let storage_micheline = Mprim {prim = `pair;
args = [Mprim {prim = `pair;
args = [(address_micheline);Mprim {prim = `pair;
args = [((big_map_micheline address_micheline type2_micheline));((big_map_micheline string_micheline bytes_micheline))];
annots=[]}
];
annots=[]}
;Mprim {prim = `pair;
args = [(bool_micheline);Mprim {prim = `pair;
args = [((big_map_micheline nat_micheline type1_micheline));(nat_micheline)];
annots=[]}
];
annots=[]}
];
annots=[]}

let storage_generator () = {totalSupply = nat_generator ();token_metadata = (big_map_generator nat_generator type1_generator) ();paused = bool_generator ();metadata = (big_map_generator string_generator bytes_generator) ();balances = (big_map_generator address_generator type2_generator) ();administrator = address_generator ()}

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

let initial_blockchain_storage = {administrator = "tz1W18LSYogRApX5MBnsr7KupHEc9rC8vDvz";
balances = Abstract (Z.of_string ("109015"));
metadata = Abstract (Z.of_string ("109016"));
paused = false;
token_metadata = Abstract (Z.of_string ("109017"));
totalSupply = Z.of_string ("1000000")}
(*
 {"prim":"Pair","args":[{"prim":"Pair","args":[{"string":"tz1W18LSYogRApX5MBnsr7KupHEc9rC8vDvz"},{"int":"109015"},{"int":"109016"}]},{"prim":"False"},{"int":"109017"},{"int":"1000000"}]}
*)
