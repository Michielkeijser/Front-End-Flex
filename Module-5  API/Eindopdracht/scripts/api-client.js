const base_endpoint = `https://wincacademydatabase.firebaseio.com/michiel/tasks`;
// get data
const getData = async () => {
  try {
    const response = await fetch(`${base_endpoint}.json`, { method: "GET" });
    const data = await response.json();
    console.log("lijst met data:", data);
    const tasks = Object.keys(data).map(key => ({
      id: key,
      description: data[key].description,
      done: data[key].done,
    }));
    return tasks;
  } catch (error) {
    console.log("dit gaat er fout:", error);
  }
};

const postData = async data => {
  try {
    await fetch(`${base_endpoint}.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log("Success:", data);
      })
      .catch(error => {
        console.error("Error:", error);
      });
    getDataCall();
  } catch (error) {
    console.log("dit gaat er fout:", error);
  }
};

const deleteData = async data => {
  try {
    await fetch(`${base_endpoint}/${data}.json`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {})
      .catch(error => {
        console.error("Error:", error);
      });
    getDataCall();
  } catch (error) {
    console.log("dit gaat er fout:", error);
  }
};
