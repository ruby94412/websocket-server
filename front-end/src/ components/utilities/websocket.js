// local test address to be changed when deployed
const url = 'ws://192.168.0.37:8080/websockets';
export const initWsClient = props => {
  const client = new WebSocket(url);
  client.onclose = () => {
    props?.setWsClient(null);
  }
  client.onmessage = msg => {
    props?.setWsMessage(msg.data);
  };
  props?.setWsClient(client);
  return client;
} 