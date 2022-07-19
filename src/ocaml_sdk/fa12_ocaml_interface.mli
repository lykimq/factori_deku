open Tzfunc.Proto
open Factori_types
(*Type definition for update_metadata *)

type update_metadata = {value : bytes;key : string}

val update_metadata_encode : update_metadata -> micheline
val update_metadata_decode : micheline -> update_metadata
val update_metadata_generator : unit -> update_metadata
val update_metadata_micheline : micheline


val call_update_metadata :   ?node:string -> ?debug:bool -> ?amount:int64 -> from:Blockchain.identity ->
                kt1:Tzfunc.Proto.A.contract ->
                update_metadata -> (string, Tzfunc__.Rp.error) result Lwt.t

(*Type definition for transfer *)

type transfer = {value : nat;_to : address;from : address}

val transfer_encode : transfer -> micheline
val transfer_decode : micheline -> transfer
val transfer_generator : unit -> transfer
val transfer_micheline : micheline


val call_transfer :   ?node:string -> ?debug:bool -> ?amount:int64 -> from:Blockchain.identity ->
                kt1:Tzfunc.Proto.A.contract ->
                transfer -> (string, Tzfunc__.Rp.error) result Lwt.t

(*Type definition for setPause *)
type setPause = bool
val setPause_encode : setPause -> micheline
val setPause_decode : micheline -> setPause
val setPause_generator : unit -> setPause
val setPause_micheline : micheline


val call_setPause :   ?node:string -> ?debug:bool -> ?amount:int64 -> from:Blockchain.identity ->
                kt1:Tzfunc.Proto.A.contract ->
                setPause -> (string, Tzfunc__.Rp.error) result Lwt.t

(*Type definition for setAdministrator *)
type setAdministrator = address
val setAdministrator_encode : setAdministrator -> micheline
val setAdministrator_decode : micheline -> setAdministrator
val setAdministrator_generator : unit -> setAdministrator
val setAdministrator_micheline : micheline


val call_setAdministrator :   ?node:string -> ?debug:bool -> ?amount:int64 -> from:Blockchain.identity ->
                kt1:Tzfunc.Proto.A.contract ->
                setAdministrator -> (string, Tzfunc__.Rp.error) result Lwt.t

(*Type definition for mint *)

type mint = {value : nat;address : address}

val mint_encode : mint -> micheline
val mint_decode : micheline -> mint
val mint_generator : unit -> mint
val mint_micheline : micheline


val call_mint :   ?node:string -> ?debug:bool -> ?amount:int64 -> from:Blockchain.identity ->
                kt1:Tzfunc.Proto.A.contract ->
                mint -> (string, Tzfunc__.Rp.error) result Lwt.t

(*Type definition for getTotalSupply *)
type getTotalSupply = (unit *
 contract)
val getTotalSupply_encode : getTotalSupply -> micheline
val getTotalSupply_decode : micheline -> getTotalSupply
val getTotalSupply_generator : unit -> getTotalSupply
val getTotalSupply_micheline : micheline


val call_getTotalSupply :   ?node:string -> ?debug:bool -> ?amount:int64 -> from:Blockchain.identity ->
                kt1:Tzfunc.Proto.A.contract ->
                getTotalSupply -> (string, Tzfunc__.Rp.error) result Lwt.t

(*Type definition for getBalance *)
type getBalance = (address *
 contract)
val getBalance_encode : getBalance -> micheline
val getBalance_decode : micheline -> getBalance
val getBalance_generator : unit -> getBalance
val getBalance_micheline : micheline


val call_getBalance :   ?node:string -> ?debug:bool -> ?amount:int64 -> from:Blockchain.identity ->
                kt1:Tzfunc.Proto.A.contract ->
                getBalance -> (string, Tzfunc__.Rp.error) result Lwt.t

(*Type definition for type0 *)

type type0 = {spender : address;owner : address}

val type0_encode : type0 -> micheline
val type0_decode : micheline -> type0
val type0_generator : unit -> type0
val type0_micheline : micheline


(*Type definition for getAllowance *)
type getAllowance = ((* Tvar *)type0 *
 contract)
val getAllowance_encode : getAllowance -> micheline
val getAllowance_decode : micheline -> getAllowance
val getAllowance_generator : unit -> getAllowance
val getAllowance_micheline : micheline


val call_getAllowance :   ?node:string -> ?debug:bool -> ?amount:int64 -> from:Blockchain.identity ->
                kt1:Tzfunc.Proto.A.contract ->
                getAllowance -> (string, Tzfunc__.Rp.error) result Lwt.t

(*Type definition for getAdministrator *)
type getAdministrator = (unit *
 contract)
val getAdministrator_encode : getAdministrator -> micheline
val getAdministrator_decode : micheline -> getAdministrator
val getAdministrator_generator : unit -> getAdministrator
val getAdministrator_micheline : micheline


val call_getAdministrator :   ?node:string -> ?debug:bool -> ?amount:int64 -> from:Blockchain.identity ->
                kt1:Tzfunc.Proto.A.contract ->
                getAdministrator -> (string, Tzfunc__.Rp.error) result Lwt.t

(*Type definition for burn *)
type burn = mint
val burn_encode : burn -> micheline
val burn_decode : micheline -> burn
val burn_generator : unit -> burn
val burn_micheline : micheline


val call_burn :   ?node:string -> ?debug:bool -> ?amount:int64 -> from:Blockchain.identity ->
                kt1:Tzfunc.Proto.A.contract ->
                burn -> (string, Tzfunc__.Rp.error) result Lwt.t

(*Type definition for approve *)

type approve = {value : nat;spender : address}

val approve_encode : approve -> micheline
val approve_decode : micheline -> approve
val approve_generator : unit -> approve
val approve_micheline : micheline


val call_approve :   ?node:string -> ?debug:bool -> ?amount:int64 -> from:Blockchain.identity ->
                kt1:Tzfunc.Proto.A.contract ->
                approve -> (string, Tzfunc__.Rp.error) result Lwt.t

(*Type definition for type1 *)

type type1 = {token_info : (string,bytes) map;token_id : nat}

val type1_encode : type1 -> micheline
val type1_decode : micheline -> type1
val type1_generator : unit -> type1
val type1_micheline : micheline


(*Type definition for type2 *)

type type2 = {balance : nat;approvals : (address,nat) map}

val type2_encode : type2 -> micheline
val type2_decode : micheline -> type2
val type2_generator : unit -> type2
val type2_micheline : micheline


(*Type definition for storage *)

type storage = {totalSupply : nat;token_metadata : (nat,type1) big_map;paused : bool;metadata : (string,bytes) big_map;balances : (address,type2) big_map;administrator : address}

val storage_encode : storage -> micheline
val storage_decode : micheline -> storage
val storage_generator : unit -> storage
val storage_micheline : micheline


val deploy :             ?amount:int64 ->
                         ?node:string ->
                         ?name:string ->
                         ?from:Blockchain.identity ->
                         storage -> (string * string, Tzfunc__.Rp.error) result Lwt.t
                         
val test_storage_download : 
kt1:Proto.A.contract -> base:EzAPI__Url.TYPES.base_url -> unit -> (unit, Tzfunc__.Rp.error) result
(* Initial storage as seen on the blockchain at the time of import. One possible use of this value is to copy it and modify it easily. *)
val initial_blockchain_storage : storage
        