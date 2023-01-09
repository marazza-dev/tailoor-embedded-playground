(function() {
    const resizeEventCallback = ({iframe, height, width, type}) => {
      console.log('*** Resize Event - params', {
        iframe,
        height,
        width,
        type,
      });
    };

    const options = {
      log: false,
      heightCalculationMethod: 'bodyOffset',
      checkOrigin: false,
      onResized: resizeEventCallback,
    };

    iFrameResize(options, '#configurator');
}) ();

