
export default function Review({ name, date, rating, textContent, imageURL }) {
   return (
      <>
         <div className="gridContent">

            {/* Image side */}
            <div className="imageSide">
               {
                  imageURL === "" ?
                     <></> :
                     <img src={imageURL} alt="User's profile" />
               }
            </div>

            {/* Info side */}
            <div className="infoSide">

               <div className="details">
                  <div>
                     <h6 className="reviewName">{name}</h6>
                     <p className="reviewDate">{date}</p>
                  </div>

                  <div className="reviewStars">
                     {Array.from({ length: rating }).map((_, i) => { return <span key={i} className='fa-solid fa-star'></span> })}
                  </div>
               </div>

               <p className="reviewText">{textContent}</p>

            </div>
         </div>
      </>
   )
}