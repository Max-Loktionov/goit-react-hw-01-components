import PropTypes from 'prop-types';
import { StatsItem } from './Statistics.styled'

function StatItem({ id, label, percentage, backgroundColor }) {
    
 return (
       
     <StatsItem backgroundColor={backgroundColor}  key={id}>    
      <span> {label} </span> 
      <span> {percentage} </span> 
     </StatsItem>
 ) }
      


StatItem.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,

   }


export default StatItem;