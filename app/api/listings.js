import client from "./client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);

export const addListing = (listing, onUploadProgress) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", parseInt(listing.price, 10));
  data.append("categoryId", listing.category.value);
  data.append("description", listing.description);

  listing.images.forEach((image, index) =>
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image.uri,
    })
  );

  if (listing.location)
    data.append("location", JSON.stringify(listing.location));

  console.log(data);
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
