 const Url = 'http://localhost:3000/backend/' ;// For localhost
//const Url = 'https://haberoceanstock.com/backend/' // For website
const NoImage="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
const propertyTypes = [
    { value: '', label: 'Property type' },
    { value: 'House', label: 'House' },
    { value: 'Villa', label: 'Villa' },
    { value: 'Apartment', label: 'Apartment' },
    { value: 'Flat', label: 'Flat' },
    { value: 'Plot', label: 'Plot' },
    { value: 'Land', label: 'Land' },
  ];

  const transactionType = [
    { value: '', label: 'Sale / rent' },
    { value: 'Rent', label: 'Rent' },
    { value: 'Sale', label: 'Sale' },
  ];

const facingPolarity = [
  { value: '', label: 'Facing Polarity' },
    { value: 'North', label: 'North' },
    { value: 'East', label: 'East' },
    { value: 'West', label: 'West' },
    { value: 'South', label: 'South' },
  ];

export {Url}   
export {NoImage}     
export {propertyTypes}
export {transactionType}
export {facingPolarity}