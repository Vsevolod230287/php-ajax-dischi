var app = new Vue({
  el: '#root',
  data: {
    disks: [],
      selected: '',
      optionGenre: [],
  },
  created() {
    axios.get('http://localhost/PHP/php-ajax-dischi/database.php').then((result) => {
      this.disks = result.data;
      this.disks.forEach((disk, i, array) => {
        if (!this.optionGenre.includes(disk.genre)) {
          this.optionGenre.push(disk.genre)

        }
      })
    })
  }
})
