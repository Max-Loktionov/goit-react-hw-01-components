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
                {items.map(item => {
                    
                    return (
                        <TableRow id={item.id} key={item.id}>
                            <TableData>{ item.type}</TableData>
                            <TableData>{ item.amount}</TableData>
                            <TableData>{ item.currency}</TableData>
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
        amoumt: PropTypes.number.isRequired,
        currency:PropTypes.string.isRequired,
         }),
    )
}