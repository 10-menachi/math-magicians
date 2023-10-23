import { useEffect, useState } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = 't7NPmfG79NvtQx1LkBKMYA==y9g5hL38XGJ9q69P';
  const url = 'https://api.api-ninjas.com/v1/quotes';

  const getQuote = () => {
    fetch(url, {
      headers: {
        'X-Api-Key': apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setQuote(data[0].quote);
        setAuthor(data[0].author);
      })
      .catch((error) => {
        setError(error);
      });
  };
  useEffect(getQuote, []);

  if (!quote) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Oops! Something went wrong!</h1>;
  }

  return (
    <div>
      <h1>{quote}</h1>
      <h1>{author}</h1>
    </div>
  );
};

export default Quote;
