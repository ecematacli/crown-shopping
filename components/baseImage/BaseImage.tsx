import { useEffect, useRef } from 'react';

interface Props {
  src: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
}

const BaseImage = ({ src, fallbackSrc, ...rest }: Props) => {
  const imgEl = useRef(null);

  const isImageSrcValid = async (src: string) => new Promise(resolve => {
    let img = document.createElement('img');
    img.onerror = () => resolve(false);
    img.onload = () => resolve(true);
    img.src = src;
  });

  useEffect(
    () => {
      const checkImageValidity = async () => {
        const isValid = await isImageSrcValid(src);
        if (!isValid && imgEl.current) {
          imgEl.current.src = fallbackSrc;
        }
      }
      checkImageValidity();
    },
    [src]
  );

  return <img {...rest} ref={imgEl} src={src} />;
};

export default BaseImage;
