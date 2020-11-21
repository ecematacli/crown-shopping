import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './i18n';
import Root from './Root';
import Loading from './common/loading/Loading';

ReactDOM.render(
  <Suspense fallback={<Loading />}>
    <Root />
  </Suspense>,
  document.getElementById('root')
);
