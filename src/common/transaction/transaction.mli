(*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *)

type t

val add : commit:(unit -> unit) -> rollback:(unit -> unit) -> t -> unit

val with_transaction : (t -> 'a Lwt.t) -> 'a Lwt.t
