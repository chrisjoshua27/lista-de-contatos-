import { useState } from "react";
import styled from "styled-components";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import { Contact } from "./store/slices/contactSlice";

const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	max-width: 1200px;
	margin: 0 auto;
	padding: ${({ theme }) => theme.spacing(4)};
`;

const ContentWrapper = styled.div`
	flex-grow: 1; /* Faz o conteúdo expandir e empurrar o footer para baixo */
`;

const Title = styled.h1`
	color:rgb(64, 0, 255);
	font-size: ${({ theme }) => theme.fontSizes.xl};
	text-align: center;
	margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

const Hr = styled.hr`
	width: 80%;
	margin: 0 auto;
	margin-top: 48px;
`;

export default function App() {
	const [editingContact, setEditingContact] = useState<Contact | null>(null);

	function handleEditContact(contact: Contact) {
		setEditingContact(contact);
	}

	function handleFinishEditing() {
		setEditingContact(null);
	}

	return (
		<AppContainer>
			<ContentWrapper>
				<Title>Gerenciador de Contatos</Title>
				<ContactForm
					contact={editingContact}
					onFinishEditing={handleFinishEditing}
				/>
				<ContactList onEditContact={handleEditContact} />
			</ContentWrapper>
			<Hr />
		</AppContainer>
	);
}
