async function fetchCharacterWithMovies(characterId: number): Promise<any> {
  const apiUrl = `https://swapi.dev/api/people/${characterId}/`;

  try {
    // Fetch character information
    const characterResponse = await fetch(apiUrl);

    if (!characterResponse.ok) {
      throw new Error("Failed to fetch character information");
    }

    const characterData = await characterResponse.json();

    // Fetch films and handle errors for each film fetch
    const films = await Promise.all(
      characterData.films.map(async (filmUrl: string) => {
        const filmResponse = await fetch(filmUrl);

        if (!filmResponse.ok) {
          throw new Error(`Failed to fetch film information for ${characterData.name}`);
        }

        const filmData = await filmResponse.json();
        return filmData.title;
      })
    );

    const result = {
      name: characterData.name,
      films: films,
    };

    return result;
  } catch

