const url="http://localhost:1337/api/products/";

const customFetch = (url, method = "GET", body = null) => {
    fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json"
      },
      body: body ? JSON.stringify(body) : null
    })
      .then((response) => {
        const data = response.json();
        return data;
      })
      .then((data) => {
        console.log("data", data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function getProducts(){
     customFetch(url);
  }

  function addProducts(){
      const method="POST";
      const body={
          data:{
          name:"ball",
          desc:"some product of varius type of ball"
          }
      }
      customFetch(url,method,body);
  }

  function deleteProducts(id){
     const method="DELETE";
     customFetch(`${url}${id}`,method);
 }

 function updateProducts(id){
    const method="PUT";
      const body={
          data:{
          name:"Cricket bat",
          description:"A cricket bat is a specialised piece of equipment used by batters in the sport of cricket to hit the ball, typically consisting of a cane handle attached to a flat-fronted willow-wood blade. It may also be used by a batter who is making ground to avoid a run out, by holding the bat and touching the ground with it."
          }
      }
      customFetch(`${url}${id}`,method,body);
 }
