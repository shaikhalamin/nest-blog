import { HttpException, HttpStatus } from '@nestjs/common';
import { existsSync, mkdirSync } from 'fs';
import { diskStorage } from 'multer';
import { extname } from 'path';

export const multerOptions = {
  //   limits: {
  //     fileSize: 100000,
  //   },
  //   fileFilter: (req: any, file: any, cb: any) => {
  //     if (file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
  //       cb(null, true);
  //     } else {
  //       cb(
  //         new HttpException(
  //           `Unsupported file type ${extname(file.originalname)}`,
  //           HttpStatus.BAD_REQUEST,
  //         ),
  //         false,
  //       );
  //     }
  //   },
  storage: diskStorage({
    // Destination storage path details
    destination: (req: any, file: any, cb: any) => {
      const uploadPath = './file_uploads';
      if (!existsSync(uploadPath)) {
        mkdirSync(uploadPath);
      }
      cb(null, uploadPath);
    },
    filename: (req: any, file: any, cb: any) => {
      console.log('request ', req.params, req.query);
      cb(null, `shaikh_image${extname(file.originalname)}`);
    },
  }),
};
