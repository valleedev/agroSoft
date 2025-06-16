import React from 'react'

const estadoColor = {
  Plantado: "bg-yellow-100 text-yellow-800",
  Crecimiento: "bg-blue-100 text-blue-800",
  Floración: "bg-purple-100 text-purple-800",
  Producción: "bg-green-100 text-green-800",
  Cosechado: "bg-gray-100 text-gray-800",
}

const SeedingCards = ({ siembras, editSiembra, viewSiembra, addActivity, deleteSiembra }) => {
  if (!siembras || siembras.length === 0) {
    return <p className="text-gray-500">No hay siembras registradas.</p>
  }

  return (
    <div id="siembra-cards" className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {siembras.map((siembra) => (
        <div
          key={siembra.id}
          className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 text-sm card-hover"
        >
          <div className="flex justify-between items-start mb-3">
            <div>
              <h4 className="text-base font-semibold text-gray-900">{siembra.cultivation}</h4>
              <p className="text-xs text-gray-500">{siembra.location}</p>
            </div>
            <span className={`status-badge ${estadoColor[siembra.estado] || "bg-gray-100 text-gray-800"} text-xs px-2 py-1 rounded`}>
              {siembra.estado}
            </span>
          </div>

          <div className="space-y-2 mb-3 text-xs text-gray-600">
            <div className="flex items-center">
              <i className="fas fa-calendar w-4 mr-2 text-xs"></i>
              <span>Fecha: {siembra.seeding_date}</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-weight w-4 mr-2 text-xs"></i>
              <span>Cantidad: {siembra.quantity}</span>
            </div>
          </div>

          <div className="mb-3">
            <p className="text-[10px] text-gray-500 mb-1">Insumos utilizados:</p>
            <p className="text-xs text-gray-700">{siembra.used_consumables}</p>
          </div>

          <div className="flex justify-end space-x-1 pt-3 border-t border-gray-100">
            <button
              className="text-blue-600 hover:text-blue-900 p-1.5"
              onClick={() => editSiembra(siembra.id)}
              title="Editar"
            >
              <i className="fas fa-edit text-sm"></i>
            </button>
            <button
              className="text-green-600 hover:text-green-900 p-1.5"
              onClick={() => viewSiembra(siembra.id)}
              title="Ver detalles"
            >
              <i className="fas fa-eye text-sm"></i>
            </button>
            <button
              className="text-yellow-600 hover:text-yellow-900 p-1.5"
              onClick={() => addActivity(siembra.id)}
              title="Agregar actividad"
            >
              <i className="fas fa-plus-circle text-sm"></i>
            </button>
            <button
              className="text-red-600 hover:text-red-900 p-1.5"
              onClick={() => deleteSiembra(siembra.id)}
              title="Eliminar"
            >
              <i className="fas fa-trash text-sm"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SeedingCards
