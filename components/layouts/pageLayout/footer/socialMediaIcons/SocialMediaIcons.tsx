import { StyledSocialMediaIcons } from './SocialMediaIcons.styles';
import PaddedLayout from '../../../paddedLayout/PaddedLayout';
import Facebook from '../../../../../public/images/facebook.svg';
import Instagram from '../../../../../public/images/instagram.svg';
import Twitter from '../../../../../public/images/twitter.svg';
import Youtube from '../../../../../public/images/youtube.svg';
import Pinterest from '../../../../../public/images/pinterest.svg';
import TikTok from '../../../../../public/images/tiktok.svg';
import Linkedin from '../../../../../public/images/linkedin.svg';
import useScreenWidth from '../../../../../common/hooks/useScreenWidth';

const SocialMediaIcons = () => {
  const { isLargeScreen } = useScreenWidth();

  const padding = !isLargeScreen
    ? { top: '1', bottom: '1', rightLeft: '8' }
    : { rightLeft: '0' };

  return (
    <StyledSocialMediaIcons>
      <PaddedLayout padding={padding}>
        <div className='social-media-icons'>
          <Facebook />
          <Instagram />
          <Twitter />
          <Pinterest />
          <TikTok />
          <Youtube />
          <Linkedin />
        </div>
      </PaddedLayout>
    </StyledSocialMediaIcons>
  );
};

export default SocialMediaIcons;
