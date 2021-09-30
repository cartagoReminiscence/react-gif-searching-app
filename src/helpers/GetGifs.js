export const getGifs = async( category ) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=DV1cpKHjCbDw5jN4OU3wb1LhZv9CFobj`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    
    const gif = data.map( img => {
        return {
            title: img.title,
            id: img.id,
            url: img.images.downsized_medium.url,
        };
    });
    
    return gif;
};