import { NotAcceptableException } from "@nestjs/common";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import { diskStorage } from "multer";
import { extname, join } from "path";
import {v4 as uuid} from "uuid"

export const multerConfigs = {
    fileFilter: (request, file, callback) => {
        if (file.mimetype.match(/\/(jpg|jpeg|png|heic)$/)) {
            // allowed image formats
            callback(null, true);
        } else {
            throw new NotAcceptableException("The format must be in jpg, jpeg, png, heic.")
        }
    },
    storage: diskStorage({
        destination: (request, file, callback) => {
            const uploadPath = join(__dirname, "..", "..", "public", "reqImages");
            
            if (!existsSync(uploadPath)) {
                // Create uploadPath if not exists
                mkdirSync(uploadPath, {recursive: true});
            }

            const temporalImagePath = join(uploadPath, "temporalImage.json")
            if (!existsSync(temporalImagePath)) {
                // Create survivedImages list - json file
                writeFileSync(temporalImagePath, JSON.stringify({temporalImage: []}));
            }

            callback(null, uploadPath);
        },

        filename: (request, file, callback) => {
            // file name when it is saved
            callback(null, `${uuid()}${extname(file.originalname)}`);
        }
    })
}

export const createImageURL = (file): string => {
    return `${__dirname}/../../public/reqImages/${file.filename}`
}

