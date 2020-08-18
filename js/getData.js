const getData = () => fetch(`/data.json`)
  .then((res) => res.json())

window.getData = getData;
