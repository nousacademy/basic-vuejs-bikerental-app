new Vue({
  el: "#bikerentals_app",
  data: {
    bikes: []
  },
  created() {
    // fetch produce item from database on initial load
    fetch('/bikerentals')
    .then((response) => response.text())
    .then((text) => this.bikes = JSON.parse(text))
    .catch((error) => console.log(error));
  },
  methods: {
    selected: (arg) => {
      alert(`You've selected the ${arg}!`);
    }
  }
});
