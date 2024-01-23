import React, { useEffect } from 'react';
import { DocumentView, RNPdftron } from '@pdftron/react-native-pdf';

const ApyrsePdftronDemoScreen = () => {
  const path =
    'https://pdftron.s3.amazonaws.com/downloads/pl/PDFTRON_mobile_about.pdf';

  useEffect(() => {
    RNPdftron.initialize('Insert commercial license key here after purchase');
    RNPdftron.enableJavaScript(true);
  }, []);
  // !!! request permission for android

  const onLeadingNavButtonPressed = () => {
    console.log('leading nav button pressed');
  };
  return (
    <DocumentView
      document={path}
      showLeadingNavButton={true}
      leadingNavButtonIcon={'ic_close_black_24px.png'}
      onLeadingNavButtonPressed={onLeadingNavButtonPressed}
    />
  );
};

export default ApyrsePdftronDemoScreen;
