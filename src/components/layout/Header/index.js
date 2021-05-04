export default {
  name: 'Header',
  inject: ['event_bus'],
  data () {
    return {
      search: ''
    }
  },
  methods: {
    handleSearch: async function () {
      this.event_bus.emit('emit-search', this.search)
    }
  }
}
