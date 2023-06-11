/**
 * Componente UserCreationForm
 *
 * Este componente é responsável por renderizar um formulário de criação de usuário.
 * Ele contém campos para o primeiro nome, sobrenome, e-mail, número de telefone e senha.
 * Valida os campos antes de permitir o envio do formulário.
 *
 * Exemplo de uso:
 * ```jsx
 * import UserCreationForm from './UserCreationForm';
 *
 * const App = () => {
 *   return (
 *     <div>
 *       <h1>Criar Usuário</h1>
 *       <UserCreationForm />
 *     </div>
 *   );
 * };
 *
 * export default App;
 * ```
 */
import React, { useState } from 'react';
import './UserCreationForm.css';

const UserCreationForm = () => {
  // Estado do usuário e erros de validação
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
  });

  // Dicionário de códigos de país
  const countryCodes = {
    '+1': 'USA',
    '+44': 'UK',
    '+86': 'China',
    '+91': 'India',
    '+81': 'Japan',
    '+49': 'Germany',
    '+33': 'France',
    '+39': 'Italy',
    '+34': 'Spain',
    '+55': 'Brazil',
  };

/**
   * Valida os campos do formulário.
   * 
   * Verifica se os campos atendem aos critérios de validação.
   * Atualiza os erros e retorna true se não houver erros.
   * 
   * @returns {boolean} true se os campos forem válidos, caso contrário false
   */

  const validateFields = () => {
    let hasErrors = false;
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
    };

    // Valida o campo firstName

    if (user.firstName.length < 4) {
      newErrors.firstName = 'First Name must have at least 4 characters';
      hasErrors = true;
    }

    // Valida o campo lastName

    if (user.lastName.length < 4) {
      newErrors.lastName = 'O sobrenome deve ter pelo menos 4 caracteres';
      hasErrors = true;
    }

    // Valida o campo email

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.email)) {
      newErrors.email = 'Formato de e-mail inválido';
      hasErrors = true;
    }

    // Valida o campo phoneNumber

    const phoneNumberRegex = /^\d+$/;
    if (user.phoneNumber.length !== 0 && !phoneNumberRegex.test(user.phoneNumber)) {
      newErrors.phoneNumber = 'Número de telefone inválido';
      hasErrors = true;
    }

    // Valida o campo password

    if (user.password.length < 8) {
      newErrors.password = 'A senha deve ter pelo menos 8 caracteres';
      hasErrors = true;
    }

    setErrors(newErrors);
    return !hasErrors;
  };

  /**
   * Função responsável por manipular a alteração de entrada do usuário.
   *
   * Esta função é chamada quando ocorre uma alteração nos valores de entrada fornecidos pelo usuário.
   * Ela atualiza o estado do usuário com os novos valores fornecidos.
   *
   * @param {Object} e - O objeto de evento que representa a alteração ocorrida.
   */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  /**
   * Função para manipular a alteração do número de telefone.
   *
   * Esta função é chamada quando ocorre uma alteração no número de telefone fornecido pelo usuário.
   * Ela formata o número de telefone e atualiza o estado do usuário com o novo valor formatado.
   *
   * @param {Object} e - O objeto de evento que representa a alteração ocorrida.
   */

  const handlePhoneNumberChange = (e) => {
    const { value } = e.target;
    let phoneNumber = value;

    phoneNumber = phoneNumber.replace(/\D/g, '');

    setUser((prevUser) => ({
      ...prevUser,
      phoneNumber,
    }));
  };

  /**
   * Manipulador de alteração de código de país
   *
   * Atualiza o código de país selecionado no estado do usuário.
   * Foca no campo de número de telefone após a alteração.
   *
   * @param {Object} e - Objeto do evento de alteração
   */

  const handleCountryCodeChange = (e) => {
    const { value } = e.target;
    const selectedCode = value.split(' ')[0]; // Extrai o código de país selecionado

    setUser((prevUser) => ({
      ...prevUser,
      countryCode: selectedCode,
    }));

    const phoneNumberInput = document.getElementById('phoneNumberInput');
    if (phoneNumberInput) {
      phoneNumberInput.focus();
    }
  };

/**
   * Função para manipular o pressionamento de tecla.
   *
   * Esta função é chamada quando a tecla Enter é pressionada em um campo de entrada.
   * Ela move o foco para o próximo campo de entrada disponível.
   *
   * @param {Object} e - O objeto de evento que representa o pressionamento de tecla.
   */

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const inputs = Array.from(e.target.form.elements);
      const currentIndex = inputs.indexOf(e.target);
      const nextIndex = currentIndex + 1;

      if (nextIndex < inputs.length) {
        inputs[nextIndex].focus();
      }
    }
  };

/**
   * Função para manipular o envio do formulário.
   *
   * Esta função é chamada quando o formulário é enviado.
   * Ela executa a validação dos campos e, se todos os campos forem válidos, lida com o envio do formulário.
   * Após o envio bem-sucedido, ela limpa o estado do usuário e exibe um alerta de "Usuário criado".
   *
   * @param {Object} e - O objeto de evento que representa o envio do formulário.
   */

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateFields()) {
      // Lógica para lidar com o envio do formulário
      console.log(user);
      setUser({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        passwordConfirmation: '',
      });
      alert('Usuário criado');
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        {errors.firstName && <span className="error">{errors.firstName}</span>}
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        {errors.lastName && <span className="error">{errors.lastName}</span>}
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </label>
      <br />
      <label>
        Phone Number:
        <div className="phone-input-container custom-flex">
          <div className="country-code">
            <select
              name="countryCode"
              value={user.countryCode}
              onChange={handleCountryCodeChange}
            >
              {Object.entries(countryCodes).map(([code, country]) => (
                <option key={code} value={code}>
                  {country} ({code})
                </option>
              ))}
            </select>
          </div>
          <input
            id="phoneNumberInput"
            type="text"
            name="phoneNumber"
            value={user.phoneNumber}
            onChange={handlePhoneNumberChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </label>
      <br />
      <button type="submit">Create User</button>
    </form>
  );
};

export default UserCreationForm;
