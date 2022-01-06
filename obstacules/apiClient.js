const api = (() => {
    const baseUrl = 'http://localhost:3000';
  
    const fetchObstacles = (levelId) => {
      const url = `${baseUrl}/obstacles/${levelId}`;
      return fetch(url)
      .then((result) => result.json())
      .catch(error => {console.error(error)});

    };
  
    return { fetchObstacles };
  })();
