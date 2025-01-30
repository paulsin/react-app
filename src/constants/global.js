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

export {Url}        
export {propertyTypes}
export {transactionType}