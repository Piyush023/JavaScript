// Add the unique Elements in to a array from these 2 arrays.
const arr = [1, 2, 3, 4, 4]
const arr2 = [2, 33, 43, 0, 4];

const resArr = [...arr, ...arr2]
const resObj = {}

for (const i of resArr) {
    resObj[i] = true
}

// console.log(resObj)



// function getWhereIsWishi() {
//     fetch('https://api.wishlink.dev/whereiswishi')
//         .then(res => {
//             if (!res.ok) {
//                 throw new Error(`HTTP error! status: ${res.status}`);
//             }
//             return res.text();  // Read the response as text
//         })
//         .then((text) => {
//             try {
//                 const data = JSON.parse(text);  // Try to parse the text as JSON
//                 if (data.success) {
//                     console.log('Data:', data);
//                     // console.log(data.data)
//                 } else {
//                     console.log('Error: Data retrieval was not successful');
//                 }
//             } catch (e) {
//                 console.error('Error parsing JSON:', e);
//                 console.error('Response Text:', text);
//             }
//         })
//         .catch((err) => {
//             console.error('Fetch error:', err);
//         });
// }

// getWhereIsWishi();