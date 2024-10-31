import React from 'react';

function StatusMessage({ status }) {
  return (
    <div>
      {status === 'active' ? (
        <p>O usuário está ativo.</p>
      ) : (
        <p>O usuário está inativo.</p>
      )}
    </div>
  );
}

export default StatusMessage;