const getData = () => fetch(`/data.json`)
.then((res) => res.json())
.then((data) => data)
.catch((err) => err);

window.getData = getData;
