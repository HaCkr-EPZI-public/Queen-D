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

const ffmpeg = require('fluent-ffmpeg')
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffprobePath = require('@ffprobe-installer/ffprobe').path;

ffmpeg.setFfmpegPath(ffmpegPath);
ffmpeg.setFfprobePath(ffprobePath);

module.exports = ffmpeg;
