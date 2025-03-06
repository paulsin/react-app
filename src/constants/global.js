const baseUrl = 'http://localhost:3000/'; // For localhost
//const baseUrl = 'https://www.agentfreedeal.com/'    // For website

const Url = baseUrl + 'backend/' ;// For localhost

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
  const OwnerorBuilderorDeveloper=[
    { value: '', label: 'Owner or Builder or Developer' },
    { value: 'Owner', label: 'Owner' },
    { value: 'Builder', label: 'Builder' },
    { value: 'Developer', label: 'Developer' }
  ]
  const PropertyStatus=[
    { value:'',label:'Property Status'},
    { value:'Public',label:'Public'},
    { value:'Hot',label:'Hot'},
    { value:'Sold',label:'Sold'},
    { value:'Draft',label:'Draft'},
 
  ]

export {Url}   
export {baseUrl}
export {NoImage}     
export {propertyTypes}
export {transactionType}
export {facingPolarity}
export {OwnerorBuilderorDeveloper}
export {PropertyStatus}