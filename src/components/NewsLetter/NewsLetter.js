import React,{useState,useEffect} from 'react'

function NewsLetter() {

    const [showNewsConfirmation, setShowNewsConfirmation] = useState(false);

    useEffect(() => {
        let timeoutId;
        if (showNewsConfirmation) {
          timeoutId = setTimeout(() => {
            setShowNewsConfirmation(false);
          }, 10000); // 1 minute in milliseconds
        }
        return () => {
          clearTimeout(timeoutId);
        };
      }, [showNewsConfirmation]);
    
      const handlenewsSubmit = (event) => {
        event.preventDefault();
        setShowNewsConfirmation(true);
        
      };


  return (
    <section className='newsletter'>
        <div className="newsletter-div">
          <div className="newsletter-div-heading">
            <h1 className="newsletter-div-heading-h2">Sign up for newsletter</h1>
            <p className="newsletter-div-heading-p">Subscribe to Our Newsletter for the Latest Health Updates and Hospital News</p>
          </div>
          <div className="newsletter-div-input">
          < form   className=" newsletter-div-input-form" onSubmit={handlenewsSubmit}  >
            <input type="email" id="email" name="email" placeholder="Your Email ID"  required />
            <input type="submit" value="Subscribe" />
          </form>
            {showNewsConfirmation && (
              <p className="newsletter-div-input-form-submit-p" > You will be getting newsletters from now on  </p>
            )}
          
          </div>
        </div>
    </section>
  )
}

export default NewsLetter
