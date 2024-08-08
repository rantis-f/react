// Menggunakan Promises
const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Successfully retrieved data");
    }, 1500);
  });
};

getData().then(response => console.log(response)); // Output: Successfully retrieved data

// Menggunakan Async/Await
const fetchData = async () => {
  try {
    const response = await getData();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

fetchData(); // Output: Successfully retrieved data