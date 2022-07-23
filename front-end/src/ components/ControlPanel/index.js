import {useState, useEffect, useRef} from 'react';
import Connection from './Connection';
import Read from './Read';
import Write from './Write';
import DataLog from './DataLog';
import {initWsClient} from '../utilities/websocket';

export default () => {
  const [wsClient, setWsClient] = useState(null);
  const [wsMessage, setWsMessage] = useState('');
  const handleWsConnection = connected => {
    if (connected) {
      wsClient.close();
    } else {
      initWsClient({
        setWsClient,
        setWsMessage,
      });
    }
  }

  return (
    <div>
        <Connection handleWsConnection={handleWsConnection} />
        {
          wsClient
            && <>
              <Read
                wsMessage={wsMessage}
              />
              {/* <Write />
              <DataLog
                currentReadingData={currentReadingData}
              /> */}
            </>
        }
    </div>
  );
};
