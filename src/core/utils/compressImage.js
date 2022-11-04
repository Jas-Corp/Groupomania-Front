const WIDTH = 800;
// CONVERT FILES IMAGES LIST TO COMPRESSED BASE 64
export default function imagesToCompressedBase64(files) {
  let images_file = files;
  let images_compressed = [];

  for (let key in images_file) {
    let image_file = images_file[key];
    if (!image_file.lastModified) break; // CHECK IF IS A FILE

    let reader = new FileReader();
    reader.readAsDataURL(image_file);

    reader.onload = (e) => {
      let image_url = e.target.result;
      let image = document.createElement("img");
      image.src = image_url;

      image.onload = (e) => {
        let canvas = document.createElement("canvas");
        let ratio = WIDTH / e.target.width;

        canvas.width = WIDTH;
        canvas.height = e.target.height * ratio;

        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, canvas.width, canvas.height);

        let new_images_url = context.canvas.toDataURL("image/jpeg", 0.5);
        images_compressed.push(new_images_url);
      };
    };
  }
  return images_compressed;
}
