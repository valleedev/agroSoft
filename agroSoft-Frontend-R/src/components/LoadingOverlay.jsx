const LoadingOverlay = () => (
  <div className="fixed inset-0 bg-black bg-opacity-50 hidden items-center justify-center z-50" id="loading-overlay">
    <div className="bg-white rounded-lg p-6 flex items-center space-x-3">
      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-600"></div>
      <span>Cargando...</span>
    </div>
  </div>
);

export default LoadingOverlay;