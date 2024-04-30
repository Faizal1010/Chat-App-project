import './signup.css'
const GenderCheckbox = ({onCheckboxChange,selectedGender}) => {
	return (
	  <div className='flex items-center'>
		<div className='form-control'>
		  <label className='checkbox-label'>
			<span className='checkbox-text'>Male</span>
			<input type='checkbox' className='checkbox-input' checked={selectedGender==='male'}onChange={()=> onCheckboxChange("male")} />
		  </label>
		</div>
		<div className='form-control'>
		  <label className='checkbox-label'>
			<span className='checkbox-text'>Female</span>
			<input type='checkbox' className='checkbox-input' checked={selectedGender==='female'}onChange={()=> onCheckboxChange("female")}/>
		  </label>
		</div>
	  </div>
	);
  };
  export default GenderCheckbox;
//   .checkbox-label {
//     display: flex;
//     align-items: center;
//     margin-top: 10px;
//   }
  
//   .checkbox-input {
//     margin-right: 5px;
//   }
  
//   .checkbox-text {
//     color: #fff; /* Light text color */
//   }