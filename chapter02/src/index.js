const sum = (x, y) => x + y

console.log(sum(3, 5));

function request() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: [],
        status: 0
      })
    }, 3000);
  })
}
async function init() {
  const result = await request();
  console.log(result);
}

init()