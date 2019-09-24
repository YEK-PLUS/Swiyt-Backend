const _ = require('lodash');

export default (ImageModel) => {
  const image = ImageModel.toJSON();
  const filteredImage = _.pick(image, [
    'uid',
    'cdn_uid',
  ]);
  filteredImage.cdn = _.pick(image.cdn_datum, [
    'uid',
    'url',
  ]);
  filteredImage.url = filteredImage.cdn.url;
  return filteredImage;
};
