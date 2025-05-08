import styled from "styled-components";

export const Container = styled.div`
	max-width: 900px;
	margin: 0 auto;
`;

export const SearchContainer = styled.div`
	display: flex;
	gap: ${({ theme }) => theme.spacing(2)};
	align-items: center;
	width: 80%;
	margin: 22px auto;
`;

export const SearchLabel = styled.label`
	font-weight: 500;
`;

export const Input = styled.input`
	flex: 1;
	padding: ${({ theme }) => theme.spacing(2)};
	font-size: ${({ theme }) => theme.fontSizes.md};
	border: 1px solid #ccc;
	border-radius: ${({ theme }) => theme.borderRadius};

	&:focus {
		border-color: ${({ theme }) => theme.colors.primary};
		outline: none;
	}
`;

export const TabsContainer = styled.div`
	display: flex;
	gap: ${({ theme }) => theme.spacing(1)};
	margin-bottom: ${({ theme }) => theme.spacing(2)};
	flex-wrap: wrap;
`;

export const TabButton = styled.button<{ active: boolean }>`
	padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
	cursor: pointer;
	background-color: ${({ active, theme }) =>
		active ? theme.colors.primary : "#000000"};
	color: ${({ active, theme }) =>
		active ? theme.colors.textLight : theme.colors.text};
	border-radius: ${({ theme }) => theme.borderRadius};
	font-weight: 500;
	font-size: 18px;
	transition: background-color 0.2s ease;

	&:hover {
		background-color: ${({ active, theme }) =>
			active ? theme.colors.secondary : "#bbb"};
		color:rgb(240, 11, 11);
	}
`;

/* Estilização da Tabela */
export const TableContainer = styled.div`
	overflow-x: auto;
	margin-top: 20px;
	display: flex;
	justify-content: space-around;
	border-radius: 12px;
`;

export const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
	background-color:rgb(0, 194, 229);
	color:rgba(108, 3, 255, 0.62);
	text-align: left;
	border-radius: 12px;
`;

export const TableRow = styled.tr<{ header?: boolean }>`
	background-color: ${({ header }) => (header ? "#b4b" : "transparent")};
	border-bottom: 1px solid #555;

	&:hover {
		background-color: ${({ header }) => (header ? "#222" : "#444")};
	}
`;

export const TableHeader = styled.th`
	padding: 12px;
	font-weight: bold;
`;

export const TableHeader2 = styled.th`
	padding: 12px;
	font-weight: bold;
	text-align: center;
`;

export const TableCell = styled.td`
	padding: 12px;
	font-size: 20px;
	font-weight: 600;
	color: #e8e9e9;
`;

export const TableCell2 = styled.td`
	padding: 12px;
	text-align: center;
`;

export const Actions = styled.div`
	display: flex;
	gap: ${({ theme }) => theme.spacing(2)};
	justify-content: end;
`;

export const EditButton = styled.button`
	background-color: ${({ theme }) => theme.colors.accent};
	color: #000;
	padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
	border-radius: ${({ theme }) => theme.borderRadius};
	cursor: pointer;
	font-weight: 400;
	width: 72px;

	&:hover {
		background-color:rgb(115, 121, 168);
	}
`;

export const RemoveButton = styled.button`
	background-color: ${({ theme }) => theme.colors.danger};
	color: ${({ theme }) => theme.colors.textLight};
	padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
	border-radius: ${({ theme }) => theme.borderRadius};
	cursor: pointer;
	font-weight: 400;
	width: 72px;

	&:hover {
		background-color:rgb(253, 25, 0);
	}
`;
