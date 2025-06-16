import { useState, useEffect } from 'react';

const UpdateCollaboratorModal = ({ isOpen, onClose, onSubmit, initialData }) => {
  const [form, setForm] = useState({
    identification: '',
    name: '',
    charge: '',
    contact: ''
  });

  // Actualiza el formulario cuando cambian los datos iniciales
  useEffect(() => {
    if (initialData) {
      setForm({
        identification: initialData.identification || '',
        name: initialData.name || '',
        charge: initialData.charge || '',
        contact: initialData.contact || ''
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form); // Debe incluir el id por fuera si se necesita
    onClose(); // Cierra el modal
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Actualizar Colaborador</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Identificación</label>
            <input
              type="number"
              name="identification"
              value={form.identification}
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
            <label className="block text-sm font-medium">Cargo</label>
            <input
              type="text"
              name="charge"
              value={form.charge}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Contacto</label>
            <input
              type="text"
              name="contact"
              value={form.contact}
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

export default UpdateCollaboratorModal;
