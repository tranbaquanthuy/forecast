import React from 'react';

type Props = {
  value: string;
};

const BoldLabel: React.FC<Props> = ({ value }) => {
  return <strong>{value}</strong>;
};

export default BoldLabel;