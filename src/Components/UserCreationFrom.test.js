import { fireEvent, render, screen } from '@testing-library/react';
import UserCreationForm from './UserCreationForm';

describe('UserCreationForm', () => {
  test('validates the First Name field', () => {
    // Renderiza o componente UserCreationForm
    render(<UserCreationForm />);
    
    // Obtém o campo de entrada do First Name
    const firstNameInput = screen.getByLabelText('First Name:');
    
    // Simula a alteração do valor do campo de entrada
    fireEvent.change(firstNameInput, { target: { value: 'abc' } });
    
    // Obtém o botão de envio do formulário
    const submitButton = screen.getByText('Create User');
    
    // Simula o clique no botão de envio do formulário
    fireEvent.click(submitButton);
    
    // Obtém a mensagem de erro correspondente ao campo First Name
    const errorText = screen.getByText('First Name must have at least 4 characters');
    
    // Verifica se a mensagem de erro está presente no documento
    expect(errorText).toBeInTheDocument();
  });

  // Testes para validar os outros campos (Last Name, Email, etc.) podem ser adicionados da mesma forma

  test('submits the form if all fields are valid', () => {
    // Renderiza o componente UserCreationForm
    render(<UserCreationForm />);
    
    // Obtém e preenche os campos de entrada com valores válidos
    const firstNameInput = screen.getByLabelText('First Name:');
    fireEvent.change(firstNameInput, { target: { value: 'John' } });

    const lastNameInput = screen.getByLabelText('Last Name:');
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });

    const emailInput = screen.getByLabelText('Email:');
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });

    // Preencha os outros campos com valores válidos
    
    // Obtém o botão de envio do formulário
    const submitButton = screen.getByText('Create User');
    
    // Simula o clique no botão de envio do formulário
    fireEvent.click(submitButton);
    
    // Verifique se a lógica de envio do formulário é executada corretamente
    // Por exemplo, você pode verificar se os campos são redefinidos ou se uma mensagem de sucesso é exibida
  });
});
