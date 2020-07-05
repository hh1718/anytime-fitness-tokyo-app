import { RouteComponentProps} from 'react-router-dom';
import { StaticContext, } from 'react-router';

export type Page = 'top' | 'ranking' | 'area' | 'train' | ''

export type GymData = {
  namekey: string
  name: string
  score: number
  rank: Rank
  dumbbell: number
  powerRack: number
  smithM: number
  legPress: boolean
  station: Station[]
  area: string
  water: boolean
  commnet: string
  thumbnail: string | undefined
}

export type Station = {
  lines: string[]
  name: string
  rentvalueUrl: string
}

export type Rank = 'S' | 'A' | 'B' | 'C' | 'D'

export type DataProps = {
  gymData: GymData[]
  routerProps: RouteComponentProps<any, StaticContext, any>
}