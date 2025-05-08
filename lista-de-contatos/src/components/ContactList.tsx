import { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { RootState } from '../store';
import { removeContact, Contact } from '../store/slices/contactSlice';

import {
    Container,
    SearchContainer,
    SearchLabel,
    Input,
    TabsContainer,
    TabButton,
    TableContainer,
    Table,
    TableHeader,
    TableHeader2,
    TableRow,
    TableCell,
    TableCell2,
    Actions,
    EditButton,
    RemoveButton
} from './ContactList.styled';

interface ContactListProps {
    onEditContact?: (contact: Contact) => void;
}

export default function ContactList({ onEditContact }: ContactListProps) {
    const dispatch = useDispatch();
    const contacts = useSelector((state: RootState) => state.contacts.contacts);

    const [search, setSearch] = useState('');
    const [selectedLetter, setSelectedLetter] = useState<string>('');
    const [currentPage, setCurrentPage] = useState(0);

    const itemsPerPage = 5;

    const filteredContacts = useMemo(() => {
        return contacts.filter((c) =>
            c.fullName.toLowerCase().includes(search.toLowerCase()) ||
            c.email.toLowerCase().includes(search.toLowerCase()) ||
            c.phone.toLowerCase().includes(search.toLowerCase())
        );
    }, [contacts, search]);

    const letters = useMemo(() => {
        const uniqueLetters = new Set<string>();
        filteredContacts.forEach((c) => {
            const firstLetter = c.fullName.charAt(0).toUpperCase();
            uniqueLetters.add(firstLetter);
        });
        return Array.from(uniqueLetters).sort();
    }, [filteredContacts]);

    const contactsByLetter = useMemo(() => {
        if (!selectedLetter) return filteredContacts;
        return filteredContacts.filter((c) =>
            c.fullName.charAt(0).toUpperCase() === selectedLetter
        );
    }, [filteredContacts, selectedLetter]);

    const handleRemoveContact = (id: string) => {
        dispatch(removeContact(id));
    };

    const pageCount = Math.ceil(contactsByLetter.length / itemsPerPage);

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const contactsPaginated = contactsByLetter.slice(startIndex, endIndex);

    const handlePageChange = (selectedItem: { selected: number }) => {
        setCurrentPage(selectedItem.selected);
    };

    return (
        <Container>
            <SearchContainer>
                <SearchLabel htmlFor="search">Buscar:</SearchLabel>
                <Input
                    id="search"
                    type="text"
                    placeholder="Nome, email ou telefone..."
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setCurrentPage(0);
                    }}
                />
            </SearchContainer>

            <TabsContainer>
                <TabButton
                    key="all-contacts"
                    active={selectedLetter === ''}
                    onClick={() => {
                        setSelectedLetter('');
                        setCurrentPage(0);
                    }}
                >
                    Todos
                </TabButton>

                {letters.map((letter) => (
                    <TabButton
                        key={letter}
                        active={selectedLetter === letter}
                        onClick={() => {
                            setSelectedLetter(selectedLetter === letter ? '' : letter);
                            setCurrentPage(0);
                        }}
                    >
                        {letter}
                    </TabButton>
                ))}
            </TabsContainer>

            {/* Tabela de Contatos */}
            <TableContainer>
                <Table>
                    <thead>
                        <TableRow header>
                            <TableHeader>Nome</TableHeader>
                            <TableHeader2>Telefone</TableHeader2>
                            <TableHeader2>Email</TableHeader2>
                            <TableHeader></TableHeader>
                        </TableRow>
                    </thead>
                    <tbody>
                        {contactsPaginated.map((contact: Contact) => (
                            <TableRow key={contact.id}>
                                <TableCell>{contact.fullName}</TableCell>
                                <TableCell2>{contact.phone}</TableCell2>
                                <TableCell2>{contact.email}</TableCell2>
                                <TableCell>
                                    <Actions>
                                        <EditButton onClick={() => onEditContact?.(contact)}>
                                            Editar
                                        </EditButton>
                                        <RemoveButton onClick={() => handleRemoveContact(contact.id)}>
                                            Remover
                                        </RemoveButton>
                                    </Actions>
                                </TableCell>
                            </TableRow>
                        ))}
                    </tbody>
                </Table>
            </TableContainer>

            {pageCount > 1 && (
                <ReactPaginate
                    previousLabel={'◄ '}
                    nextLabel={' ►'}
                    breakLabel={'...'}
                    pageCount={pageCount}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={2}
                    onPageChange={handlePageChange}
                    forcePage={currentPage}
                    containerClassName={'pagination'}
                    pageLinkClassName={'page-num'}
                    previousLinkClassName={'page-num'}
                    nextLinkClassName={'page-num'}
                    activeClassName={'active'}
                />
            )}
        </Container>
    );
}
