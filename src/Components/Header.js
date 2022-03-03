import { useEffect, useState } from 'react';

const Header = () => {
  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState()


  useEffect(() => {

    const response = fetch("https://type.fit/api/quotes")
      .then(res => res.json())
      .then(data => {
        var random_num = data[Math.floor(Math.random() * data.length)]
        console.log(random_num["text"])
        setQuote(random_num["text"])
        setAuthor(random_num["author"])
      })
    if (response.ok) {
      console.log("nice")
    }
  }
    , [])
  return (
    <div>
      <div className='sign'>
        <h1>TODO LIST</h1>
      </div>
      <h3>{quote}
        <span>  -{author}</span>
      </h3>
    </div>
  )
}

export default Header