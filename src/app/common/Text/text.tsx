import React from 'react';
import { Element } from './text-styled';

interface TextProps {
  text: string;
  className?: string;
}

const CommonText: React.FunctionComponent<TextProps> = ({ text, ...rest }) => (
  <Element {...rest}>{text}</Element>
);

export default CommonText;
