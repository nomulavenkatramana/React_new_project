import React from 'react';

import Contactus from '../Contactus/ContactUs.js'

function ListsAndKeys() {
let studentDetails =[
    {
        id:1,
        name: 'tom',
        age: 18,
    },
    {
        id:2,
        name: 'duck',
        age: 18,
    },
    {
        id:3,
        name: 'jerry',
        age: 18,
    } ,

]
const details =studentDetails.map(studentdetail =>(
    <li key={studentdetail.id}>{studentdetail.name}</li>
))
return (
    <div>
        <ul>{details}</ul>
        <Contactus carName="Hero" model="2005" />
        
    </div>
)
}
export default ListsAndKeys;
