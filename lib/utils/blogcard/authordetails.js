// AuthorDetails.js
const extractAuthorDetails = (item, includes) => {
  let author_name = null,
    author_image_url = null,
    author_picture = {};

  const authorEntry = includes.Entry.find(
    (entry) => entry.sys.id === item.fields.author.sys.id
  );

  if (authorEntry) {
    const { fields: authorFields } = authorEntry;
    author_name = authorFields.name;
    author_picture = authorFields.picture;

    const authorPictureAsset = includes.Asset.find(
      (asset) => asset.sys.id === author_picture.sys.id
    );

    if (authorPictureAsset) {
      const { fields: pictureFields } = authorPictureAsset;
      author_image_url = pictureFields.file.url;
    }
  }

  return { author_name, author_image_url };
};

export default extractAuthorDetails;
