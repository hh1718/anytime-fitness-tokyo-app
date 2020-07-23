import { RouteComponentProps} from 'react-router-dom';
import { StaticContext, } from 'react-router';

export type Page = 'about' | 'ranking' | 'area' | 'train' | 'favorite' | 'map' | ''

export interface GymData {
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

export interface Station {
  lines: string[]
  name: string
  rentvalueUrl: string
}

export type Rank = 'S' | 'A' | 'B' | 'C' | 'D'

export interface BaseProps {
  gymData: GymData[]
  routerProps: RouteComponentProps<any, StaticContext, any>
}

export interface DataPageProps extends BaseProps {
  cookie: any
  handleCookie: (gym: string) => void
}

export interface PageProps extends BaseProps {}

export type Cookie =  {
  [name: string]: any;
}