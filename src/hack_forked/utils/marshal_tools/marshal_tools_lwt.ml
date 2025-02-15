(*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *)

module Marshal_tools_lwt = Marshal_tools.MarshalToolsFunctor (struct
  type 'a result = 'a Lwt.t

  type fd = Lwt_unix.file_descr

  let return = Lwt.return

  let ( >>= ) = Lwt.( >>= )

  let write ?timeout fd ~buffer ~offset ~size =
    if timeout <> None then raise (Invalid_argument "Use Lwt timeouts directly");
    Lwt_unix.write fd buffer offset size

  let read ?timeout fd ~buffer ~offset ~size =
    if timeout <> None then raise (Invalid_argument "Use lwt timeouts directly");
    Lwt_unix.read fd buffer offset size
end)

include Marshal_tools_lwt

(* The Timeout module probably doesn't work terribly well with Lwt. Luckily, timeouts are super easy
 * to write in Lwt, so we don't **really** need them *)
let to_fd ?flags fd obj = to_fd ?flags fd obj

let from_fd fd = from_fd fd
