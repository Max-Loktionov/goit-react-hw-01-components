import PropTypes from 'prop-types';
import StatItem from './StatItem';
import {StatList, GetRandomHexColor, } from './Statistics.styled'


 function Statistics({items}) {
   
     return (         
            <StatList>    
                {items.map(item => (
                    
                    <StatItem
                    backgroundColor={GetRandomHexColor()}
                    id={item.id}      
                    label={item.label} 
                    percentage={item.percentage}
                    key={item.id}
                     />         
                ))}
                  
         </StatList>
    );
}

Statistics.propTypes = {
  items: PropTypes.array,
};



export default Statistics;