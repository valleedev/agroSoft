import { useState, useEffect } from 'react';

const UpdateToolModal = ({ isOpen, onClose, onSubmit, initialData }) => {
  const [form, setForm] = useState({
    reference: '',
    name: '',
    status: '',
    buy_date: ''
  });

  // Actualiza el formulario cuando cambian los datos iniciales
  useEffect(() => {
    if (initialData) {
      setForm({
        reference: initialData.reference || '',
        name: initialData.name || '',
        status: initialData.status || '',
        buy_date: initialData.buy_date || ''
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form); 
    onClose(); 
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Actualizar Herramienta</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Referencia</label>
            <input
              type="text"
              name="reference"
              value={form.reference}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Nombre</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Estado</label>
            <input
              type="text"
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Fecha de Compra</label>
            <input
              type="text"
              name="buy_date"
              value={form.buy_date}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="px-4 py-2 border rounded text-gray-600">
              Cancelar
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Actualizar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateToolModal;
