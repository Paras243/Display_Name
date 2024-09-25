/*import { useState } from 'react';

function Dis_Name() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [fullname, setFullname] = useState('');

  
  const Submitting = (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    if (fname && lname) {
      setFullname(`${fname} ${lname}`);
    }
  };

  const validity = (fname && lname)?fullname:"Please fill out this field.";

  return (
    <div>
      <h1>Display Fullname</h1>
      
     
      <form onSubmit={Submitting}>
        <div>
         
          <label>
            First Name: 
            <input 
              type="text" 
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Last Name: 
            <input 
              type="text" 
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>

      <h5>Full Name: {fullname}</h5>
    </div>
  );
}

export default Dis_Name;*/

import { useState } from 'react';

function Dis_Name() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [fullname, setFullname] = useState('');

  const [fnameError, setFnameError] = useState('');
  const [lnameError, setLnameError] = useState('');

  const Submitting = (e) => {
    e.preventDefault(); 
    
    setFnameError('');
    setLnameError('');

    let valid = true;

    if (!fname) {
      setFnameError('Please fill out this field');
      valid = false;
    }

    if (!lname) {
      setLnameError('Please fill out this field');
      valid = false;
    }

    if (valid) {
      setFullname(`${fname} ${lname}`);
    }
  };

  return (
    <div>
      <h1>Display Fullname</h1>

      <form onSubmit={Submitting}>
        <div>
          <label>
            First Name: 
            <input 
              type="text" 
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
          </label>
          {fnameError && <span style={{ color: 'red' }}>{fnameError}</span>}
        </div>

        <div>
          <label>
            Last Name: 
            <input 
              type="text" 
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
          </label>
          {lnameError && <span style={{ color: 'red' }}>{lnameError}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>

      {fullname && <h5>Full Name: {fullname}</h5>}
    </div>
  );
}

export default Dis_Name;
