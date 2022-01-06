const apiPlayers = (() => {
    const baseUrl = 'http://localhost:3000';
  
    const fetchPlayers = (levelId) => {
      const url = `${baseUrl}/players`;
      return fetch(url)
      .then((result) => result.json())
      .catch(error => {console.error(error)});

    };
  
    return { fetchPlayers };
  })();


  
