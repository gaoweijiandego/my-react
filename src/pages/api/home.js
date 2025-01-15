import path from "path";
import fs from "fs";

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      // 处理返回所有 .jpg 图片的请求
      const imagesDir = path.join(process.cwd(), "public", "images", "swiper");
      fs.readdir(imagesDir, (err, files) => {
        if (err) {
          res.status(500).json({ message: "Unable to read images directory" });
          return;
        }
        const jpgFiles = files.filter((file) => file.endsWith(".jpg"));
        const imagePromises = jpgFiles.map((file) => {
          return new Promise((resolve, reject) => {
            fs.readFile(path.join(imagesDir, file), (err, data) => {
              if (err) {
                reject(err);
              } else {
                resolve({ filename: file, data: data.toString("base64") });
              }
            });
          });
        });

        Promise.all(imagePromises)
          .then((images) => {
            res.status(200).json(images);
          })
          .catch(() => {
            res.status(500).json({ message: "Error reading image files" });
          });
      });
      break;
  }
}
