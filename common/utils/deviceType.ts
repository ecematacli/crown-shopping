import { IncomingMessage } from 'http';
import MobileDetect from 'mobile-detect';

const getDeviceType = (req: IncomingMessage) => {
  let userAgent: any;
  let deviceType: string;

  if (req) {
    userAgent = req.headers['user-agent'];
  } else {
    userAgent = navigator.userAgent;
  }
  const md = new MobileDetect(userAgent);

  if (md.tablet()) {
    deviceType = 'tablet';
  } else if (md.mobile()) {
    deviceType = 'mobile';
  } else {
    deviceType = 'desktop';
  }

  return deviceType;
};

export default getDeviceType;
