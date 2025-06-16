import Aside from '../../../components/Aside';
import Header from '../../../components/Header';
import LoadingOverlay from '../../../components/LoadingOverlay';
import Seedings from '../components/SeedingContent';




export default function SeedingView() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Aside />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <Seedings/>
      </div>
      <LoadingOverlay />
    </div>
  );
}