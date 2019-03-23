import React from 'react';
import { Element } from './image-styled';

interface ImageProps {
  alt?: string;
  src: string;
  className?: string;
  classNameActive?: string;
}

const CommonImage: React.FunctionComponent<ImageProps> = ({
  alt = 'Image',
  src,
  ...rest
}): JSX.Element => {
  return <Element alt={alt} src={src} {...rest} />;
};

export default CommonImage;
