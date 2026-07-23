import cloudinary from "./cloudinary.js";

const CLOUDINARY_PERMISSION_ERROR =
  "Cloudinary API key lacks upload permissions. In the Cloudinary Console, open Settings → API Keys, select your key, and assign a role with upload/create access (or use your environment's root API key).";

export async function uploadImage(imageData) {
  try {
    const uploadResponse = await cloudinary.uploader.upload(imageData);
    return uploadResponse.secure_url;
  } catch (error) {
    if (error.http_code === 403) {
      if (process.env.NODE_ENV === "development") {
        console.warn(
          "Cloudinary upload denied (missing create permission). Storing image as base64 in development."
        );
        return imageData;
      }

      throw new Error(CLOUDINARY_PERMISSION_ERROR);
    }

    throw error;
  }
}

export async function verifyCloudinaryUploadAccess() {
  const tinyImage =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==";

  try {
    await cloudinary.uploader.upload(tinyImage);
    console.log("Cloudinary upload access verified");
  } catch (error) {
    if (error.http_code === 403) {
      if (process.env.NODE_ENV === "development") {
        console.warn(
          "Cloudinary uploads are blocked for this API key. Profile and image messages will use base64 storage in development."
        );
        console.warn(CLOUDINARY_PERMISSION_ERROR);
        return;
      }

      console.error(CLOUDINARY_PERMISSION_ERROR);
      return;
    }

    console.error("Cloudinary configuration error:", error.message);
  }
}
