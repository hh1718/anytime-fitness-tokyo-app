import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

type OwnProps = {
  children: ReactNode
}
export default function Title(props: OwnProps) {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};