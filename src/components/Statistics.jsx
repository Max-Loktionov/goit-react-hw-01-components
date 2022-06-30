import PropTypes from 'prop-types';
import StatItem from './StatItem'


 function Statistics({items}) {
    //  console.log(items[1].id)
    return (
        // <section className="statistics">
        //     <h2 className="title">{items.title}</h2>

            <ul className="stat-list">
                
                {items.map(item => (
                   
                 <StatItem
                    key={item.id}      
                    label={item.label} 
                    percentage={item.percentage}
                     />   
                       
                ))}
                  
         </ul>
        // </section>
    );
}



Statistics.propTypes = {
  items: PropTypes.array,
};



export default Statistics;