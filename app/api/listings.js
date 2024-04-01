import client from "./client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);

export const addListing = (listing, onUploadProgress) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", parseInt(listing.price, 10));
  data.append("categoryId", listing.category.value);
  data.append("description", listing.description);

  listing.images.forEach((uri, index) => {
    if (uri) {
      data.append("images", {
        name: `image${index}`,
        type: "image/jpeg", // Ensure the MIME type is correct
        uri: uri,
      });
    }
  });

  if (listing.location)
    data.append("location", JSON.stringify(listing.location));

  const total = 100; // Simulate total as 100 for the sake of demonstration
  let loaded = 0;

  const interval = setInterval(() => {
    loaded += 20; // Simulate loading in increments
    onUploadProgress(loaded / total);

    if (loaded >= total) {
      clearInterval(interval);
      // Call the actual upload function or simulate the completion
    }
  }, 500); // Update progress every half second

  // Note: Replace the following line with the actual post request
  // and handle the completion of the upload properly.
  return client.post(endpoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export default {
  addListing,
  getListings,
};
