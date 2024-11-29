/* Copyright (C) 2024 Asmodeus Epzi.
Licensed under the  MIT License;
you may not use this file except in compliance with the License.
Queen D ~ ESI Devs ~ Asmodeus Epzi
-------------------------------------------------------
re-upload? recode? copy code? give credit ya :)
YouTube: @EPZi
instagram: yuren.sasanka
Telegram: t.me/asmodeus_epzi
GitHub: @HaCkr-EPZI-public
WhatsApp: +94759554531
*/

"use strict";
class Base {
  constructor(client, msg) {
    Object.defineProperty(this, "client", { value: client });
    Object.defineProperty(this, "m", { value: msg });
  }

  _clone() {
    return Object.assign(Object.create(this), this);
  }

  _patch(data) {
    return data;
  }
}

module.exports =Base