import PropTypes from 'prop-types';
import { Table,TableHeader,TableRow,TableData } from './TransactionHistory.styled';

export default function TransactionHistory({ items}) {
    
    return (
        <Table className="transaction-history">
  <thead>
    <tr>
      <TableHeader>Type</TableHeader>
      <TableHeader>Amount</TableHeader>
      <TableHeader>Currency</TableHeader>
    </tr>
  </thead>

        <tbody>
                {items.map(({id,type,amount,currency}) => {
                    
                    return (
                        <TableRow id={id} key={id}>
                            <TableData>{ type}</TableData>
                            <TableData>{ amount}</TableData>
                            <TableData>{ currency}</TableData>
                        </TableRow>
                    )

                })
                
            }               
        </tbody>
</Table>
    )
}

TransactionHistory.propTypes = {
item: PropTypes.arrayOf(
    PropTypes.shape({
        id:PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency:PropTypes.string.isRequired,
         }),
    )
}