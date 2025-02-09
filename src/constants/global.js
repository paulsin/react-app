 const Url = 'http://localhost:3000/backend/' ;// For localhost
//const Url = 'https://haberoceanstock.com/backend/' // For website
const Noimage="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
const propertyTypes = [
    { value: '', label: 'Property type' },
    { value: 'House', label: 'House' },
    { value: 'Villa', label: 'Villa' },
  ];

  const transactionType = [
    { value: '', label: 'Sale / rent' },
    { value: 'Rent', label: 'Rent' },
    { value: 'Sale', label: 'Sale' },
  ];

const facingPolarity = [
    { value: 'North', label: 'North' },
    { value: 'East', label: 'East' },
    { value: 'West', label: 'West' },
    { value: 'South', label: 'South' },
  ];

export {Url}        
export {propertyTypes}
export {transactionType}
export {facingPolarity}