import React from 'react';
import './card-list.styles.css';
import { Card } from '../card.component/card.component';


export const CardList = (props) =>
(
    
     <div className="card-list">
        {  
          props.monsters.map(mon => (
            <Card key={mon.id} monsters={ mon }/>
          ))
          }          
      </div>
);