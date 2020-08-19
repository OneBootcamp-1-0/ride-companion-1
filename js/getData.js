const getData = () => fetch(`/dta.json`)
  .then((res) => {
    if (res.status === 200) {
      return res;
    }
    throw new Error(res.status);
  })
  .then((res) => res.json());

window.getData = getData;
