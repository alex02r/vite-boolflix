import { reactive } from 'vue';

export const store = reactive({
    APIKey: 'b07c7d12dec7a7e46d131121599a8195',
    urlFilms: 'https://api.themoviedb.org/3/search/movie?api_key=',
    urlTv: 'https://api.themoviedb.org/3/search/tv?api_key=',
    searchValue: '',
    arrayFilms: [],
    arrayTv: []
})