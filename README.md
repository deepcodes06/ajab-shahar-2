<!-- Home Page -->
Fonts-("https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300;400;500;600&display=swap")

Features - random tile of each module

Using hooks and utils for API calls -
1. id
2. img
3. title
4. subtitle
5. umbrellaTitle
6. desc
7. linkText

1. Fetch songs dynamically from:
https://ajabshahar.com/api/songs/getPublishedSongs

2. Map API fields to the cloned UI’s card layout.

3. Support features such as:

Dynamic song list

filter-based sections

Individual song detail page


<!-- Songs Page- -->
API-https://ajabshahar.com/api/songs/getPublishedSongs

Features-
1. Filtering Cards with names that start with the alphabet chosen.
2. Filter content where we can filter by name of the singers/poets(the names are fetched from the API).

<!-- Songs Details -->
API-https://ajabshahar.com/api/songs/getPublishedSongs

Features-
1. 4 versions of songs card whichever selected at the start of the page.
2. Youtube Video - `https://www.youtube.com/embed/${song.youtubeVideoId}`
3. The lyrics Original/Translation/Transliteration fetched from the API-(https://ajabshahar.com/api/songs/getPublishedSongs)
4. The Related song cards are randomly fetched from the API.

<!-- Poems page -->
API-https://ajabshahar.com/api/couplets/getPublished

<!-- Reflection page -->
API-https://ajabshahar.com/api/reflections/completeInfo?content=authoringComplete
    https://ajabshahar.com/api/reflections/completeInfo?content=featured

<!-- People -->
API-https://ajabshahar.com/api/people