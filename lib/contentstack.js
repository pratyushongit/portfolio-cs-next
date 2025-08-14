import contentstack, { Region } from "@contentstack/delivery-sdk";
import ContentstackLivePreview from "@contentstack/live-preview-utils";

const Stack = contentstack.stack({
  apiKey: process.env.CONTENTSTACK_API_KEY || "",
  deliveryToken: process.env.CONTENTSTACK_DELIVERY_TOKEN || "",
  environment: process.env.CONTENTSTACK_ENVIRONMENT || "development",
  region: Region.US,
  host: "dev11-cdn.csnonprod.com",
  live_preview: {
    enable: true,
    host: "dev11-rest-preview.csnonprod.com",
    preview_token: process.env.CONTENTSTACK_PREVIEW_TOKEN || "",
  },
});

ContentstackLivePreview.init({
  stackDetails: {
    apiKey: process.env.CONTENTSTACK_API_KEY || "",
    environment: process.env.CONTENTSTACK_ENVIRONMENT || "development",
    stackSdk: Stack,
  },
  clientUrlParams: {
    protocol: "https",
    host: "dev11-app.csnonprod.com",
    port: 443,
  },
  mode: "builder",
  editButton: {
    enable: true,
    includeByQueryParameter: true,
    position: "bottom",
    exclude: ["outsideLivePreviewPortal"],
  },
});

export default Stack;
