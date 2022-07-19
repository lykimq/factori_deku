(* This file is only generated once, but as long as it exists it 
will not be overwritten, you can safely write in it. To find 
examples for your scenarios, you can look at scenarios.example.ml *)

open Tzfunc.Rp
open Fa12_ocaml_interface

let initial_storage_fa12 =
{administrator = "tz1W18LSYogRApX5MBnsr7KupHEc9rC8vDvz";
balances = Literal [];
metadata = Literal [];
paused = false;
token_metadata = Literal [];
totalSupply = Z.of_string ("1000000")}

  let _ = Tzfunc__Node.set_silent true 

  let main () =
  let>? kt1 = Fa12_ocaml_interface.deploy
    ~node:Blockchain.sandbox_node (* change this if you want another network *)
    ~from:Blockchain.bootstrap1
    initial_storage_fa12 in
  let (s1, s2) = kt1 in 
  let _ = Format.eprintf "Contract deployed with KT1: (%s, %s)" s1 s2 in 
  Lwt.return (Ok ())

  let _ = Lwt_main.run (main ())
  