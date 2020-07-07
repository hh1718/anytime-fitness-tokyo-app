import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { getAvatarColor } from '../../common/util';
import Title from '../common/Title';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';
import { PageProps } from '../../common/types';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    textAlign: 'left'
  },
  typography: {
    margin: 5
  },
  mailIconWrap: {
    display: 'flex',
    margin: 10
  },
  rankWrap: {
    display: 'flex',
    margin: '20px auto'
  },
  mailIcon: {
    marginRight: 5
  }
}));

const avatarStyles = (avatorColor: string) => makeStyles((theme) => ({
  avatar: {
    backgroundColor: avatorColor,
    margin: 3
  }
}))

export const Top = (props: PageProps) => {
  const classes = useStyles();
  return (
    <>
      <Title>エニタイムフィットネスランキングについて</Title>
      <Grid container spacing={3}>
          <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography className={classes.typography}>
              昨今のフィットネブームにより、生活をする街を選ぶ際の重要な要素として、ジムを条件に入れる方も多いかと思います。
            </Typography>
            <Typography className={classes.typography}>  
              当サイトではそんな方々の役立つような情報を提供するために、
              店舗数の多いanytime fitnessを都内限定ではありますが、以下の5段階でスコアリングし紹介します。
            </Typography>
            <div className={classes.rankWrap}>
              <Avatar className={avatarStyles(getAvatarColor('S'))().avatar}>S</Avatar>
              <Avatar className={avatarStyles(getAvatarColor('A'))().avatar}>A</Avatar>
              <Avatar className={avatarStyles(getAvatarColor('B'))().avatar}>B</Avatar>
              <Avatar className={avatarStyles(getAvatarColor('C'))().avatar}>C</Avatar>
              <Avatar className={avatarStyles(getAvatarColor('D'))().avatar}>D</Avatar>
            </div>
            <Typography className={classes.typography}>
              スコアリングの基準についてはフリーウェイト、プレートロードマシンに比重を置きながら総合的に判断していますが、基本的に私の個人的な主観に依存します。
            </Typography>
            <Typography className={classes.typography}>
              人によっては首をかしげるスコアリングの場合もあるかと思いますが、価値観の違いとして寛大に受け入れて頂きたいと考えております。
              （私にとっては低評価でも人によっては高評価の場合もあるかと思います。逆も然り）
            </Typography>
            <Typography className={classes.typography}>
              またコンテンツのデータが誤っている場合等もあるかと思いますが、その際は以下のメールアドレスに連絡して頂きますと助かります。
            </Typography>
            <Typography className={classes.mailIconWrap}>
              <MailIcon className={classes.mailIcon}/> anytime.fitness.ranking@gmail.com
            </Typography>
          </Paper>
          </Grid>
      </Grid>
    </>
  )
}
