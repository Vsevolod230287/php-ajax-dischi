var app = new Vue({
  el: "#root",
  data: {
    disks: [],
    selected: "",
    authors: [],
  },
  created() {
    axios
      .get("http://localhost/PHP/php-ajax-dischi/database.php")
      .then((result) => {
        this.disks = result.data;
        this.disks.forEach((disk, i, array) => {
          if (!this.authors.includes(disk.author)) {
            this.authors.push(disk.author);
          }
        });

      });
  },


});
