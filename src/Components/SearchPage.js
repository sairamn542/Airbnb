import React from 'react'
import './searchpage.css'
import { Button } from '@mui/material'
import SearchResult from './SearchResult'

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage_info'>
        <p>62 stays . 26 august to 30 august . 2 guests</p>
        <h1>Stays nearby</h1>
        <Button variant='outlined'>Cancellation Flexibility</Button>
        <Button variant='outlined'>Type of place</Button>
        <Button variant='outlined'>price</Button>
        <Button variant='outlined'>Rooms and beds</Button>
        <Button variant='outlined'>More filters</Button>
      </div>
      <SearchResult img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU" location="Private room in center of London" title="Stay at this spacious Edwardian House" description="1 guest. 1 bedroom 1 bed. 1.5 shared bthrooms Wifi Kitchen. Free parking Washing Machine" star={4.73} price="£30 / night" total="£117 total" />
      <SearchResult img="https://media.istockphoto.com/id/1201397488/photo/hotel-room-with-panoramic-view-of-the-mountains.jpg?s=612x612&w=0&k=20&c=H9Kt9VK20ivfrksdZrvxPmYgKxRwW7lAkNWJ-g1gZY8=" location="Private room in center of London" title="Independant luxury studio apartment" description="2 guest. 3 bedroom 1 bed 1.5 shared bthrooms Wifi star={4.3} Kitchen" price="£40 / night" total="£157 total" />
      <SearchResult img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg" location="Private room in center of London" title="London Studio Apartments" description="4 guest. 4 bedroom 4 bed 2 bathrooms • Free parking • Washing Machine" star={3.8} price="£35 / night" total="£207 total" />
      <SearchResult img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w2250,h1500.climit/airbnb-plus-london.jpg" location="Private room in center of London" title="Spacious Peaceful Modern Bedroom" description="3 guest 1 bedroom 1 bed 1.5 shared bthrooms Wifi Free parking Dry Cleaning" star={5.0} price="£68/night" total="E450 total" />
      <SearchResult img="https://media.istockphoto.com/id/627892060/photo/hotel-room-suite-with-view.jpg?s=612x612&w=0&k=20&c=YBwxnGH3MkOLLpBKCvWAD8F__T-ypznRUJ_N13Zb1cU=" location="Private room in 50 center of London" title="30 mins to Oxford Street, Excel London" description="1 guest1 bedroom 1 bed 1.5 shared bthrooms Wifi Free parking star={4.1) Kitchen Washing Machine" price="£55 / night" />
      <SearchResult img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp" location="Private room in center of London" title="5 Star Luxury Apartment" description="3 guest 1 bedroom 1 bed 1.5 shared bthrooms. Wifi Kitchen Free parking Washing Machine" star={3.85} price="£90 / night" total="£650 total"
      />
    </div>
  )
}

export default SearchPage
