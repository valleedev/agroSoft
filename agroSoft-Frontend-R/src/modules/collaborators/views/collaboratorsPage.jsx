import Aside from '../../../components/Aside';
import Header from '../../../components/Header';
import LoadingOverlay from '../../../components/LoadingOverlay';
import CollaboratorContent from '../components/CollaboratorContent';


export default function DashboardView() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Aside />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <CollaboratorContent/>
      </div>
      <LoadingOverlay />
    </div>
  );
}