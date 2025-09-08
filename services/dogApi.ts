export const fetchDogImage = async (breedId: string): Promise<string | null> => {
  const url = `https://dog.ceo/api/breed/${breedId}/images/random`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const errorBody = await response.text();
      console.error(
        `Failed to fetch dog image for breedId: '${breedId}'. ` +
        `Status: ${response.status}. ` +
        `URL: ${url}. ` +
        `Response: ${errorBody}`
      );
      return null;
    }
    const data = await response.json();
    if (data.status === 'success') {
      return data.message;
    }
    console.warn(`API call for breedId '${breedId}' was successful but status was not 'success'.`, data);
    return null;
  } catch (error) {
    console.error(`Network error or other exception fetching dog image for breedId '${breedId}':`, error);
    return null;
  }
};