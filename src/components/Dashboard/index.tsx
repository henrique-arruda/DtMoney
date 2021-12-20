import { Container } from './styles'
import React from "react";
import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';

export function Dashboard() {
    return (
    <Container>
    <Summary />
    <TransactionsTable />
    </Container>
 );
}