import PropTypes from 'prop-types';
import StatItem from './StatItem';
import {StatList, GetRandomHexColor, } from './Statistics.styled'


 function Statistics({items}) {
   
     return (
         // <section className="statistics">
         //     <h2 className="title">{items.title}</h2>
         
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
        // </section>
    );
}



Statistics.propTypes = {
  items: PropTypes.array,
};



export default Statistics;