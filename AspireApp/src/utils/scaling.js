import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

// Dimension of the given design: Aspire
const guidelineBaseWidth = 414;
const guidelineBaseHeight = 606;

export default class Scaling {
  // sw: Scale width => Scaling for all horizontal measures:
  static sw = function (size) {
    return (width / guidelineBaseWidth) * size;
  };

  // sh: Scale height => Scaling for all vertical measures:
  static sh = function (size) {
    return (height / guidelineBaseHeight) * size;
  };

  // ms: ModerateScaling Scaling for other measures: ex: font size, font weight
  static ms = function (size, factor = 0.5) {
    return size + ((width / guidelineBaseWidth) * size - size) * factor;
  };

  // shp: Scale height percentatge => Percentage scaling of height: wrt device height
  static shp = function (hVal) {
    return (height * hVal) / 100;
  };

  // swp: Scale width percentage => Percentage scaling of width: wrt device width
  static swp = function (wVal) {
    (width * wVal) / 100;
  };
}
