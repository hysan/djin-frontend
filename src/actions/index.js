export const setBpm = (bpm) => ({
  type: 'SET_BPM',
  bpm: bpm
})
export const setCrossfade = (crossfade) => ({
  type: 'SET_CROSSFADE',
  crossfade: crossfade
})
export const setAllSongs = (allSongs) => ({
  type: 'SET_ALL_SONGS',
  allSongs: allSongs
})
export const setFilteredSongs = (filteredSongs) => ({
  type: 'SET_FILTERED_SONGS',
  filteredSongs: filteredSongs
})
export const setBrowserFilterQuery = (browserFilterQuery) => ({
  type: 'SET_BROWSER_FILTER_QUERY',
  browserFilterQuery: browserFilterQuery
})
