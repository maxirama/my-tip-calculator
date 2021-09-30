import React, { useState } from 'react';

const Input = ({onChange, name, value}) => {
  return (
    <>
      <label for={name}>{name.toUpperCase()}</label>
      <input type='text' name={name} onChange={onChange} value={value}/>
    </>
  )
}

function App() {
  const initialValues = {
    bill: 0,
    tip: 0,
    people: 1,
    }
    const [values , setValues] = useState(initialValues);

  return (
    <>
      <Input name='bill' onChange={(e=>{setValues({...values, bill: parseFloat(e.target.value)})})} value={values.bill} />
      <Input name='tip' onChange={(e=>{setValues({...values, tip: parseFloat(e.target.value)})})} value={values.tip} />
      <Input name='people' onChange={(e=>{setValues({...values, people: parseInt(e.target.value)})})} value={values.people} />
      {/* <Total values={values} /> */}
      <div>
          <p> Tip per person : {values.bill * (0.01 * values.tip) / values.people}</p>
          <p> Total per person: {values.bill / values.people} </p>
          <button onClick={(e=>{setValues(initialValues)})}> Reset </button>
      </div>

    </>
  )
}

export default App;
