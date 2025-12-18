                                                                      PROJECT NOTES

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
3. "contentId": 'song\*' + song.id,
4. "isSong": true,
5. "englishTranslation": song.songTitle.englishTranslation,
6. "customStyle": (customStyle) ? customStyle() : '',
7. "englishTransliteration": song.songTitle.englishTransliteration,
8. "category": (song.songCategory) ? song.songCategory.name : "",
9. "gathering": \*.isEmpty(song.gathering) ? "" : song.gathering.english,
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
6. "poet": poet,
7. "downloadURL": song.downloadURL,
8. "about": (song.about == null) ? song.about : '\'' + song.about + '\'',
9. "words": \_getBasicWordDetails(song.words)
10. "id": word.id,
11. "translation": word.wordTranslation,
12. "transliteration": word.wordTransliteration,
13. "isRootWord": word.rootWord

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

Params used for Reflection page -

1. title:$scope.reflectionDetails.title,
2. image:$scope.reflectionDetails.originalObject.thumbnailURL,
3. description:$scope.reflectionDetails.originalObject.reflectionExcerpt,
4. metaTitle : $scope.reflectionDetails.metaTitle ,
5. metaDescription : $scope.reflectionDetails.metaDescription ,
6. metaKeywords : $scope.reflectionDetails.metaKeywords

<!-- People -->

API-https://ajabshahar.com/api/people

Params used for People's page -

1. title:$scope.person.name,
2. image:$scope.person.thumbnailImg,
3. description:$scope.person.profile,
4. metaTitle : $scope.person.metaTitle ,
5. metaDescription : $scope.person.metaDescription ,
6. metaKeywords : $scope.person.metaKeywords

<!-- Films -->

API-https://ajabshahar.com/api/films/getPublished

Params used for Films detail page -

1. title:filmObj.englishTransliteration,
2. image:filmObj.thumbnailUrl,
3. description:filmObj.aboutText,
4. metaTitle : $scope.filmObj.metaTitle,
5. metaDescription : $scope.filmObj.metaDescription,
6. metaKeywords : $scope.filmObj.metaKeywords
7. title:$scope.filmDetails.filmTitle,
8. image:$scope.filmDetails.filmURL,
9. description:$scope.filmDetails.verb

Params used for Films explore page -

1. title:$scope.filmDetails.title,
2. image:$scope.filmDetails.thumbnailURL,
3. description:$scope.filmDetails.description,
4. metaTitle : $scope.filmDetails.metaTitle,
5. metaDescription : $scope.filmDetails.metaDescription,
6. metaKeywords : $scope.filmDetails.metaKeywords
