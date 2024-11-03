import Review from './review'

export default function ClientReviews() {

   const placeholder1 = { name: "Malison Aved", date: "20 June, 2021", rating: 5, textContent: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.", imageURL: "" }
   const placeholder2 = { name: "M2", date: "20 June, 2021", rating: 3, textContent: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.", imageURL: "" }
   const placeholder3 = { name: "M3", date: "20 June, 2021", rating: 4, textContent: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.", imageURL: "" }
   const placeholder4 = { name: "M4", date: "20 June, 2021", rating: 1, textContent: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.", imageURL: "" }
   const placeholder5 = { name: "M5", date: "20 June, 2021", rating: 2, textContent: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.", imageURL: "" }

   const ReviewsArray = [placeholder1, placeholder2, placeholder3, placeholder4, placeholder5]

   return (

      <section id="client-reviews">

         <div className="container">
            <h4>Reviews Client</h4>

            <div className="gridBox">
               {
                  ReviewsArray.length == 0 ?
                     <p>Loading reviews...</p> :
                     ReviewsArray.map((content, i) => { return <Review key={i} {...content} /> })
               }
            </div>
         </div>

      </section>
   )
}