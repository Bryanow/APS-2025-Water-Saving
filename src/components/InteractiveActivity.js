import React, { useState } from 'react';
import '../App.css';

function InteractiveActivity() {
  const [draggedItem, setDraggedItem] = useState(null);
  const [targetItems, setTargetItems] = useState({
    waste: [],
    save: [],
  });
  const waterActions = [
    { id: '1', text: 'Tomar banhos demorados', type: 'waste' },
    { id: '2', text: 'Consertar vazamentos', type: 'save' },
    { id: '3', text: 'Usar a mangueira para lavar calçadas', type: 'waste' },
    { id: '4', text: 'Reutilizar água da chuva para regar plantas', type: 'save' },
    { id: '5', text: 'Deixar a torneira aberta ao escovar os dentes', type: 'waste' },
    { id: '6', text: 'Instalar aeradores nas torneiras', type: 'save' },
    { id: '7', text: 'Lavar o carro com balde', type: 'save' },
    { id: '8', text: 'Descartar óleo na pia', type: 'waste' },
  ];

  const handleDragStart = (e, item) => {
    setDraggedItem(item);
    e.dataTransfer.setData('text/plain', item.id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetType) => {
    e.preventDefault();
    if (!draggedItem) return;

    if (draggedItem.type === targetType) {
      setTargetItems(prev => ({
        ...prev,
        [targetType]: [...prev[targetType], draggedItem]
      }));
      // Remove from original list if you want to prevent re-dropping
      // For simplicity, we just add it to the target
    } else {
      alert('Essa ação não corresponde a essa categoria!');
    }
    setDraggedItem(null);
  };

  return (
    <div className="activity-container">
      <div className="activity-card">
        <h2>Atividade Interativa: Classifique as Ações</h2>
        <p>Arraste as ações para a categoria correta: "Desperdício de Água" ou "Economia de Água".</p>
        <div className="activity-drag-area">
          {waterActions.map(action => (
            <div
              key={action.id}
              className="draggable-item"
              draggable
              onDragStart={(e) => handleDragStart(e, action)}
            >
              {action.text}
            </div>
          ))}
        </div>
        <div className="activity-drop-zones">
          <div
            className="drop-zone"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, 'waste')}
          >
            <h3>Desperdício de Água</h3>
            {targetItems.waste.map(item => (
              <div key={item.id} className="dropped-item correct-drop-waste">
                {item.text}
              </div>
            ))}
          </div>
          <div
            className="drop-zone"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, 'save')}
          >
            <h3>Economia de Água</h3>
            {targetItems.save.map(item => (
              <div key={item.id} className="dropped-item correct-drop-save">
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InteractiveActivity;