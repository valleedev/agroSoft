import Aside from '../../../components/Aside';
import Header from '../../../components/Header';
import LoadingOverlay from '../../../components/LoadingOverlay';



const MainContent = () => (
  <main className="flex-1 overflow-y-auto p-6">
    {/* Aquí irá el contenido principal dinámico */}
  </main>
);


export default function DashboardView() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Aside />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <MainContent />
      </div>
      <LoadingOverlay />
    </div>
  );
}