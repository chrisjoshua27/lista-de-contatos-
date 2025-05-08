import styled from 'styled-components';

export const Card = styled.form`
  background-color:rgb(242, 9, 9);
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(4)};
  margin-bottom: 36px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  max-width: 400px;
`;

export const FormTitle = styled.h2`
  margin: 0 auto;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color:rgba(212, 211, 211, 0.78);
`;

export const Label = styled.label`
  font-weight: 500;
`;

export const Input = styled.input`
  padding: ${({ theme }) => theme.spacing(2)};
  font-size: ${({ theme }) => theme.fontSizes.md};
  border: 1px solid #ccc;
  border-radius: ${({ theme }) => theme.borderRadius};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textLight};
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 400;
  transition: background-color 0.2s ease;
  cursor: pointer;
  margin-top: 12px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;
