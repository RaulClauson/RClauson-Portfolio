// cloudinary.tsx
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { format } from "@cloudinary/url-gen/actions/delivery";

// Create Cloudinary instance
export const cld = new Cloudinary({
  cloud: {
    cloudName: "dlctgjogh", // Replace with your Cloudinary cloud name
  },
});

// Helper function for videos
export const createVideo = (publicId: string) =>
  cld
    .video(publicId)
    .resize(fill().width("auto"))
    .quality("auto")
    .delivery(format("auto"));
