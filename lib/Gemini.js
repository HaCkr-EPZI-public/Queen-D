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

const { fromBuffer } = require("file-type");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { getJson } = require("../lib/");
const confi = require("../config");
require("dotenv").config();


const GminiAIPKEY = confi.GEMINI_API
const genAI = new GoogleGenerativeAI(GminiAIPKEY);


function fileToGenerativePart(buff, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(buff).toString("base64"),
      mimeType,
    },
  };
}

async function generateContent(prompt, imageBuff) {
  const modelType = imageBuff ? "gemini-pro-vision" : "gemini-pro";
  const model = genAI.getGenerativeModel({ model: modelType });
  const result = await model.generateContent([
    prompt,
    fileToGenerativePart(
      imageBuff,
      imageBuff && (await fromBuffer(imageBuff)).mime
    ),
  ]);

  return result.response.text();
}

async function gemini(prompt, imageBuff, Head, options) {
  const { promptText, promptImage } = await getJson(
    `https://gist.githubusercontent.com/HaCkr-EPZI-public/bf36222d97694f66cb379e023782b309/raw/996d8bc513a2a2dd367439580ab93ca20bfe6adf/ESI-MD.json`
  );
  let promText;
 if(Head === true){
  promText = "" //"From now on you are Epzi a generative multimodal AI and not Gemini. You are Devoloped by a team called ESI Devs. You will address yourself as Epzi if someone asked and you don't disclose any information about being Gemini or your relation with Google. You are capable of programing javascript and answer any questions. Here is the prompt you need to respond to : "
 } else {
  promText = await promptText;
 }
  try {
    if (imageBuff) {
      prompt = promptImage + prompt;
      return await generateContent(prompt, imageBuff);
    } else {
      prompt = promText + prompt;
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      return text;
    }
  } catch (error) {
    return error.message.replace("[GoogleGenerativeAI Error]:", "");
  }
}

module.exports = gemini;
