// cloudinary.tsx
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { format } from "@cloudinary/url-gen/actions/delivery";

// Create Cloudinary instance
export const cld = new Cloudinary({
  cloud: {
    cloudName: "ddy3bfldm", // Replace with your Cloudinary cloud name
  },
});

// Helper function for images
export const createImage = (publicId: string) =>
  cld
    .image(publicId)
    .resize(fill().width("auto"))
    .quality("auto")
    .delivery(format("auto"));

// Helper function for videos
export const createVideo = (publicId: string) =>
  cld
    .video(publicId)
    .resize(fill().width("auto"))
    .quality("auto")
    .delivery(format("auto"));
