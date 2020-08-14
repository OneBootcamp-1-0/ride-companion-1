const getData = () => fetch(`/data.json`)
.then((res) => res.json())
.then((data) => data);

window.getData = getData;
