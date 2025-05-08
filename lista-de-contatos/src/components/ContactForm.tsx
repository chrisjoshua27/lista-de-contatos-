import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, updateContact, Contact } from '../store/slices/contactSlice';
import {
    Card,
    FormTitle,
    Label,
    Input,
    Button
} from './ContactForm.styled';

interface ContactFormProps {
    contact?: Contact | null;
    onFinishEditing?: () => void;
}


function formatPhone(value: string): string {
    const digits = value.replace(/\D/g, '').slice(0, 11);

    if (!digits) return '';

    const length = digits.length;

    if (length < 3) {

        return '(' + digits;
    }

    if (length < 7) {
        return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    }

    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export default function ContactForm({ contact, onFinishEditing }: ContactFormProps) {
    const dispatch = useDispatch();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        if (contact) {
            setFullName(contact.fullName);
            setEmail(contact.email);
            setPhone(contact.phone);
        } else {
            setFullName('');
            setEmail('');
            setPhone('');
        }
    }, [contact]);

    // Formulário de envio
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!fullName || !email || !phone) {
            alert('Preencha todos os campos');
            return;
        }

        if (contact) {
            // Edição
            dispatch(updateContact({ ...contact, fullName, email, phone }));
            onFinishEditing?.();
        } else {
            // Criação
            dispatch(addContact({
                id: Date.now().toString(),
                fullName,
                email,
                phone,
            }));
        }

        // Reset
        setFullName('');
        setEmail('');
        setPhone('');
    };

    const isEditing = !!contact;

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formatted = formatPhone(e.target.value);
        setPhone(formatted);
    };

    return (
        <Card onSubmit={handleSubmit}>
            <FormTitle>
                {isEditing ? 'Editar Contato' : 'Adicionar Novo Contato'}
            </FormTitle>

            <Label>Nome Completo</Label>
            <Input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
            />

            <Label>E-mail</Label>
            <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <Label>Telefone</Label>
            <Input
                type="text"
                value={phone}
                onChange={handlePhoneChange}
            />

            <Button type="submit">
                {isEditing ? 'Atualizar Contato' : 'Adicionar Contato'}
            </Button>
        </Card>
    );
}
