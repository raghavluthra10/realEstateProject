import React from 'react';
import './Listings.css';
import ListCard from './ListCards';

const Listings = () => {

   

    return (
        <div className='listingsContainer'>
            <div className='listingsHeading'>
                Premier Listings
            </div>

            <div className='listingsHeadingSub'>
                Search OMEGA ESTATES Exclusive Listings database
            </div>

            <ListCard 
            src='https://cdn.decorilla.com/online-decorating/wp-content/uploads/2018/10/modern-interior-designer-nyc.jpg' 
            address='170 East 88th Street' 
            bhk=' 4 Beds | 4 Baths | SQFT 2,610' 
            price='$2,324,000' 
            />

            <ListCard 
            src='https://i.pinimg.com/originals/78/77/c1/7877c117eaef64dba0e9895c818eb103.png'
            address='508 West 24th Street'
            bhk='3 Beds | 3 Baths | SQFT 2,324'
            price='$ 5,222,000'
            />

            <ListCard  
            src='https://media.architecturaldigest.com/photos/571e97c5741fcddb16b559c9/2:1/w_5127,h_2563,c_limit/modernist-decor-inspiration-01.jpg'
            address='426 West 58th Street'
            bhk='4 Beds | 3.5 Baths | SQFT 2,755'
            price='$3,432,000'
            />

        </div>
    )
}

export default Listings
