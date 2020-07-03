import { pink, red, orange, yellow, grey } from '@material-ui/core/colors';
import { Rank } from '../common/types';

// https://material-ui.com/customization/color/
const ranks: any = {
  S: pink[600],
  A: red[600],
  B: orange[600],
  C: yellow[600],
  D: grey[600]
}

export const getAvatarColor = (rank: Rank) => {
  return ranks[rank] as string
}