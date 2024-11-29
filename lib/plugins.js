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

const config = require("../config");
const commands = [];

/**
 * Define a command and store it in the commands array.
 * @param {Object} commandInfo - Information about the command.
 * @param {Function} func - The function to execute when the command is triggered.
 * @returns {Object} - The command information.
 */
function command(commandInfo, func) {
  commandInfo.function = func;
  if (commandInfo.pattern) {
    commandInfo.pattern =
    new RegExp(
      `(${config.HANDLERS})( ?${commandInfo.pattern}(?=\\b|$))(.*)`,
      "is"
    ) || false;
    }
  commandInfo.dontAddCommandList = commandInfo.dontAddCommandList || false;
  commandInfo.fromMe = commandInfo.fromMe || false;
  commandInfo.type = commandInfo.type || "misc";

  commands.push(commandInfo);
  return commandInfo;
}

module.exports = {
  command,
  commands,
};

