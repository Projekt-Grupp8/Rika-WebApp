import React, { useState, useEffect, useRef } from 'react'
import Review from './review'


export default function ClientReviews() {
   const [reviewsData, setReviewsData] = useState([])

   // Sort functions
   const sortRatingDescending = (a, b) => b.rating - a.rating
   const sortRatingAscending = (a, b) => a.rating - b.rating
   const sortDateOldestFirst = ((a, b) => (new Date(a.date) - new Date(b.date)))
   const sortDateNewestFirst = ((a, b) => (new Date(b.date) - new Date(a.date)))
   //

   useEffect(() => {
      // TODO: Load reviews from database

      const placeholder1 = { name: "Malison Aved", date: "20 June, 2021", rating: 5, textContent: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.", imageURL: "" }
      const placeholder2 = { name: "M2", date: "20 June, 2021", rating: 3, textContent: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.", imageURL: "" }
      const placeholder3 = { name: "M3", date: "23 June, 2021", rating: 4, textContent: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.", imageURL: "" }
      const placeholder4 = { name: "M4", date: "22 June, 2021", rating: 1, textContent: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.", imageURL: "" }
      const placeholder5 = { name: "M5", date: "15 June, 2021", rating: 2, textContent: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.", imageURL: "" }

      const ReviewsArray = [placeholder1, placeholder2, placeholder3, placeholder4, placeholder5]

      setReviewsData(ReviewsArray)
   }, [])

   /**
    * Sorts the reviews and updates the State
    * @param {string} propertyName - Either "rating" or "date"
    * @param {boolean} sortAscending - Sort in increasing order yes or no?
    */
   function SortAndSetListBy(propertyName, sortAscending) {

      if (reviewsData.length === 0)
         // No data, nothing to sort, exit
         return

      //if sorting reviewsData directly React won't re-render, so making a new list to bypass that quirk
      let tList = [...reviewsData]

      if (propertyName === "rating") {
         if (sortAscending) {
            setReviewsData(tList.sort(sortRatingAscending))
         } else {
            setReviewsData(tList.sort(sortRatingDescending))
         }

      } else if (propertyName === "date") {
         if (sortAscending) {
            setReviewsData(tList.sort(sortDateOldestFirst))
         } else {
            setReviewsData(tList.sort(sortDateNewestFirst))
         }
      }
   }
   //

   // Dropdown functionality
   const [isDropdownOpen, setDropdownOpen] = useState(false)
   const dropdownRef = useRef(null);

   const toggleDropdown = () => { setDropdownOpen(!isDropdownOpen) }

   const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
         setDropdownOpen(false)
      }
   }

   useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      }
   }, [])
   //

   return (
      <section id="client-reviews">

         <div className="container">
            <div className="titleAndSort">
               <h4>Reviews Client</h4>
               <div className="sortDropdown" ref={dropdownRef}>
                  <h6 className="sortingButton" onClick={() => toggleDropdown()}>Sort reviews</h6>
                  {
                     isDropdownOpen &&
                     <div className="dropdownContent">
                        <button className="dropdownButton" onClick={() => SortAndSetListBy("date", true)}>Date, newest first</button>
                        <button className="dropdownButton" onClick={() => SortAndSetListBy("date", false)}>Date, oldest first</button>
                        <button className="dropdownButton" onClick={() => SortAndSetListBy("rating", false)}>Rating, descending</button>
                        <button className="dropdownButton" onClick={() => SortAndSetListBy("rating", true)}>Rating, ascending</button>
                     </div>
                  }
               </div>
            </div>

            <div className="gridBox">
               {
                  reviewsData.length === 0 ?
                     <p>Loading reviews...</p> :
                     reviewsData.map((content, i) => { return <Review key={i} {...content} /> })
               }
            </div>
         </div>

      </section>
   )
}