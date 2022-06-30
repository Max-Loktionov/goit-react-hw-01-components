import PropTypes from 'prop-types';

function StatItem({id,label,percentage}) {
 return (
       
     <li key={id}>    
      <span> {label} </span> 
      <span> {percentage} </span> 
     </li>
 ) }
      


StatItem.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,

   }


export default StatItem;