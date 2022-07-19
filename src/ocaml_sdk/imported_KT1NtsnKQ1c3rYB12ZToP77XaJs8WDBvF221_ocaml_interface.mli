open Tzfunc.Proto
open Factori_types
(*Type definition for type0 *)

type type0 = {token2Id : nat;token2Address : address;token1Id : nat;token1Address : address}

val type0_encode : type0 -> micheline
val type0_decode : micheline -> type0
val type0_generator : unit -> type0
val type0_micheline : micheline


(*Type definition for getReserveBalance *)
type getReserveBalance = ((* Tvar *)type0 *
 contract)
val getReserveBalance_encode : getReserveBalance -> micheline
val getReserveBalance_decode : micheline -> getReserveBalance
val getReserveBalance_generator : unit -> getReserveBalance
val getReserveBalance_micheline : micheline


val call_getReserveBalance :   ?node:string -> ?debug:bool -> ?amount:int64 -> from:Blockchain.identity ->
                kt1:Tzfunc.Proto.A.contract ->
                getReserveBalance -> (string, Tzfunc__.Rp.error) result Lwt.t

(*Type definition for getExchangeFee *)
type getExchangeFee = ((* Tvar *)type0 *
 contract)
val getExchangeFee_encode : getExchangeFee -> micheline
val getExchangeFee_decode : micheline -> getExchangeFee
val getExchangeFee_generator : unit -> getExchangeFee
val getExchangeFee_micheline : micheline


val call_getExchangeFee :   ?node:string -> ?debug:bool -> ?amount:int64 -> from:Blockchain.identity ->
                kt1:Tzfunc.Proto.A.contract ->
                getExchangeFee -> (string, Tzfunc__.Rp.error) result Lwt.t

(*Type definition for withdrawSystemFee *)
type withdrawSystemFee = address
val withdrawSystemFee_encode : withdrawSystemFee -> micheline
val withdrawSystemFee_decode : micheline -> withdrawSystemFee
val withdrawSystemFee_generator : unit -> withdrawSystemFee
val withdrawSystemFee_micheline : micheline


val call_withdrawSystemFee :   ?node:string -> ?debug:bool -> ?amount:int64 -> from:Blockchain.identity ->
                kt1:Tzfunc.Proto.A.contract ->
                withdrawSystemFee -> (string, Tzfunc__.Rp.error) result Lwt.t

(*Type definition for swap *)

type swap = {tokenAmountIn : nat;requiredTokenId : nat;requiredTokenAddress : address;recipient : address;minimumTokenOut : nat}

val swap_encode : swap -> micheline
val swap_decode : micheline -> swap
val swap_generator : unit -> swap
val swap_micheline : micheline


val call_swap :   ?node:string -> ?debug:bool -> ?amount:int64 -> from:Blockchain.identity ->
                kt1:Tzfunc.Proto.A.contract ->
                swap -> (string, Tzfunc__.Rp.error) result Lwt.t

(*Type definition for removeLiquidity *)

type removeLiquidity = {token2_min : nat;token1_min : nat;recipient : address;lpAmount : nat}

val removeLiquidity_encode : removeLiquidity -> micheline
val removeLiquidity_decode : micheline -> removeLiquidity
val removeLiquidity_generator : unit -> removeLiquidity
val removeLiquidity_micheline : micheline


val call_removeLiquidity :   ?node:string -> ?debug:bool -> ?amount:int64 -> from:Blockchain.identity ->
                kt1:Tzfunc.Proto.A.contract ->
                removeLiquidity -> (string, Tzfunc__.Rp.error) result Lwt.t

(*Type definition for modifyMaxSwapAmount *)
type modifyMaxSwapAmount = nat
val modifyMaxSwapAmount_encode : modifyMaxSwapAmount -> micheline
val modifyMaxSwapAmount_decode : micheline -> modifyMaxSwapAmount
val modifyMaxSwapAmount_generator : unit -> modifyMaxSwapAmount
val modifyMaxSwapAmount_micheline : micheline


val call_modifyMaxSwapAmount :   ?node:string -> ?debug:bool -> ?amount:int64 -> from:Blockchain.identity ->
                kt1:Tzfunc.Proto.A.contract ->
                modifyMaxSwapAmount -> (string, Tzfunc__.Rp.error) result Lwt.t

(*Type definition for modifyFee *)

type modifyFee = {systemFee : nat;lpFee : nat}

val modifyFee_encode : modifyFee -> micheline
val modifyFee_decode : micheline -> modifyFee
val modifyFee_generator : unit -> modifyFee
val modifyFee_micheline : micheline


val call_modifyFee :   ?node:string -> ?debug:bool -> ?amount:int64 -> from:Blockchain.identity ->
                kt1:Tzfunc.Proto.A.contract ->
                modifyFee -> (string, Tzfunc__.Rp.error) result Lwt.t

(*Type definition for changeState *)
type changeState = unit
val changeState_encode : changeState -> micheline
val changeState_decode : micheline -> changeState
val changeState_generator : unit -> changeState
val changeState_micheline : micheline


val call_changeState :   ?node:string -> ?debug:bool -> ?amount:int64 -> from:Blockchain.identity ->
                kt1:Tzfunc.Proto.A.contract ->
                changeState -> (string, Tzfunc__.Rp.error) result Lwt.t

(*Type definition for changeAdmin *)
type changeAdmin = address
val changeAdmin_encode : changeAdmin -> micheline
val changeAdmin_decode : micheline -> changeAdmin
val changeAdmin_generator : unit -> changeAdmin
val changeAdmin_micheline : micheline


val call_changeAdmin :   ?node:string -> ?debug:bool -> ?amount:int64 -> from:Blockchain.identity ->
                kt1:Tzfunc.Proto.A.contract ->
                changeAdmin -> (string, Tzfunc__.Rp.error) result Lwt.t

(*Type definition for addLiquidity *)

type addLiquidity = {token2_max : nat;token1_max : nat;recipient : address}

val addLiquidity_encode : addLiquidity -> micheline
val addLiquidity_decode : micheline -> addLiquidity
val addLiquidity_generator : unit -> addLiquidity
val addLiquidity_micheline : micheline


val call_addLiquidity :   ?node:string -> ?debug:bool -> ?amount:int64 -> from:Blockchain.identity ->
                kt1:Tzfunc.Proto.A.contract ->
                addLiquidity -> (string, Tzfunc__.Rp.error) result Lwt.t

(*Type definition for storage *)

type storage = {totalSupply : nat;token2_pool : nat;token2_Fee : nat;token2Id : nat;token2Check : bool;token2Address : address;token1_pool : nat;token1_Fee : nat;token1Id : nat;token1Check : bool;token1Address : address;systemFee : nat;paused : bool;maxSwapLimit : nat;lpTokenAddress : address;lpFee : nat;admin : address}

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
        