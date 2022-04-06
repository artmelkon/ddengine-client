import ExplorerRoot from './ExplorerRoot';
import { ExplorerProvider } from '../context/explorer-context';
import "./index.scss";



const FileManager = props => {

  return (
    <ExplorerProvider>
      <ExplorerRoot />
    </ExplorerProvider>
  );
};

export default FileManager;
