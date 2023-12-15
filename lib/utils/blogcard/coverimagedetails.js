// CoverImageDetails.js
const extractCoverImageDetails = (item, includes) => {
  let cover_picture = {
    cover_picture_title: "",
    cover_picture_url: "",
  };

  if (
    includes.Asset.find(
      (asset) => asset.sys.id === item.fields.coverImage.sys.id
    )
  ) {
    const { fields: fields } = includes.Asset.find(
      (asset) => asset.sys.id === item.fields.coverImage.sys.id
    );
    cover_picture.cover_picture_title = fields.title;
    cover_picture.cover_picture_url = fields.file.url;
  }

  return cover_picture;
};

export default extractCoverImageDetails;
