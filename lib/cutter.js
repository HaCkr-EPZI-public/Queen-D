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

const fs = require('fs');
const Duration = require('./trimdur');

class MP3Cutter {
    /**
     * Cuts mp3 files and creates a new file with it.
     * 
     * @param {{src:String, target:String, start:Number, end:Number}} o 
     */
    static cut(o={}) {
        var src = o.src,
            size = fs.statSync(src).size,
            {duration, offset} = Duration.getDuration(src),
            startTime = o.start || 0,
            endTime = o.end || duration,
            valuePerSecond = (size - offset) / duration,
            start = startTime * valuePerSecond,
            end = endTime * valuePerSecond;

        var fd = fs.openSync(src, 'r');
        try {
            var offsetBuffer = Buffer.alloc(offset);
            fs.readSync(fd, offsetBuffer, 0, offsetBuffer.length, offset);
            fs.writeFileSync(o.target, offsetBuffer)

            var audioBuffer = Buffer.alloc(end-start);
            fs.readSync(fd, audioBuffer, 0, audioBuffer.length, parseInt(start+offset));
            fs.writeFileSync(o.target, audioBuffer);
        } catch(e) {
            console.error(e);
        } finally {
            fs.closeSync(fd);
        }
    }
}

module.exports = MP3Cutter;