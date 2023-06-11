import React from 'react';
import UserCreationForm from './Components/UserCreationForm';

/**
 * Componente principal da aplicação.
 *
 * Renderiza o formulário de criação de usuário.
 */
function App() {
  return (
    <div className="App">
      <h1>Create User</h1>
      <UserCreationForm />
    </div>
  );
}

export default App;
