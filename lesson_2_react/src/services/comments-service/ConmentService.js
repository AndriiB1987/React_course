export default class commentService {
    url = 'https://jsonplaceholder.typicode.com/comments'

    async comments() {
        return await fetch(this.url).then(value => value.json())
    }

    async comment(id) {
        return await fetch(this.url +  `/${id}`).then(value => value.json())
    }
}