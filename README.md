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

8. Fetch songs dynamically from:
   https://ajabshahar.com/api/songs/getPublishedSongs
9. Map API fields to the cloned UI’s card layout.
10. Support features such as:
Dynamic song list
filter-based sections
Individual song detail page

<!-- Songs Page -->
API-https://ajabshahar.com/api/songs/getPublishedSongs

Features-
1. Filtering Cards with names that start with the alphabet chosen.
2. Filter content where we can filter by name of the singers/poets(the names are fetched from the API).

Params used for songs page-
1. "id": song.id,
2. "contentType":song.contentFormat,
3. "contentId": 'song*' + song.id,
4. "isSong": true,
5. "englishTranslation": song.songTitle.englishTranslation,
6. "customStyle": (customStyle) ? customStyle() : '',
7. "englishTransliteration": song.songTitle.englishTransliteration,
8. "category": (song.songCategory) ? song.songCategory.name : "",
9. "gathering": *.isEmpty(song.gathering) ? "" : song.gathering.english,
10. "duration": song.duration,
11. "singer": (song.singers == null || song.singers.length == 0) ? '' : song.singers[0].name + (song.singers[1] != null ? ' ......' : ''),
12. "singers": (song.singers != null && song.singers.length > 1) ? getSingers(song.singers) : '',
13. "poet": (song.poets == null || song.poets.length == 0) ? 'Unknown' : song.poets[0].name,
14. "thumbnailUrl": song.thumbnailURL,
15. "words": \_getBasicWordDetails(song.words),
16. "singersAsList": song.singers,
17. "showOnLandingPage": song.showOnLandingPage
18. "videoId": song.youtubeVideoId,
19. "singer": getSingers(song.singers),
20. "audioId": song.soundCloudTrackId,
21. "noun": song.singers.length > 1 ? 'sing' : 'sings',
22. "downloadUrl": song.downloadURL,
23. "words": getWords(song.words)

<!-- Songs Details -->
API-https://ajabshahar.com/api/songs/getPublishedSongs

Features-

1. 4 versions of songs card whichever selected at the start of the page.
2. Youtube Video - `https://www.youtube.com/embed/${song.youtubeVideoId}`
3. The lyrics Original/Translation/Transliteration fetched from the API-(https://ajabshahar.com/api/songs/getPublishedSongs)
4. The Related song cards are randomly fetched from the API.

Params used for songsdetails page-
1. "id": song.id,
2. "contentId": "song\_" + song.id,
3. "videoId": song.youtubeVideoId,
4. "audioUrl": song.soundCloudTrackId,
5. "singer": getSingers(song.singers),
5. "poet": poet,
6. "downloadURL": song.downloadURL,
7. "about": (song.about == null) ? song.about : '\'' + song.about + '\'',
8. "words": \_getBasicWordDetails(song.words)
9. "id": word.id,
10. "translation": word.wordTranslation,
11. "transliteration": word.wordTransliteration,
12. "isRootWord": word.rootWord

<!-- Poems page -->
API-https://ajabshahar.com/api/couplets/getPublished

Params used for poems page-
1. "id": couplet.id,
2. "isPublished": true,
3. "englishTranslation": couplet.englishTranslation,
4. "englishTransliteration": couplet.englishTransliteration,
5. "originalText": couplet.originalText,
6. "englishTranslationText": couplet.englishTranslationText,
7. "englishTransliterationText": couplet.englishTransliterationText,
8. "category": (couplet.category) ? couplet.category.name : "",
9. "coupletTranslations": couplet.coupletTranslations,
10. "coupletAudios": couplet.coupletAudios,
11. "poet": getAllPoets(couplet),
12. "thumbnailUrl": couplet.thumbnailURL,
13. "words": \_getBasicWordDetails(couplet.words),

<!-- Reflection page -->

API-https://ajabshahar.com/api/reflections/completeInfo?content=authoringComplete
https://ajabshahar.com/api/reflections/completeInfo?content=featured

<!-- People -->

API-https://ajabshahar.com/api/people

<!-- Films -->

API-https://ajabshahar.com/api/films/getPublished
