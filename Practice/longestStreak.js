function Longestconsecutivepresentstreak(strArr) {
  const res = [];
  const idData = {};
  strArr.forEach((item) => {
    const [id, date, status] = item.split(' ').map((item) => item.trim());
    if (!idData[id]) {
      idData[id] = { date: [], isPresent: false };
    }
    if (status === 'Present') {
      idData[id].date.push(new Date(date));
      idData[id].isPresent = true;
    }
  });

  for (const [id, info] of Object.entries(idData)) {
    let curr = 0;
    let max = 0;
    if (!info.isPresent) {
      res.push(`${id} ${max}`);
      continue;
    }
    const date = info.date.sort((a, b) => a - b);
    for (let i = 0; i < date.length; i++) {
      const diff = (date[i] - date[i - 1]) / (1000 * 60 * 60 * 24);
      if (i === 0 || diff === 1) {
        curr = curr + 1;
        max = Math.max(max, curr);
      } else {
        curr = 1;
      }
    }
    res.push(`${id} ${max}`);
  }
  return res;
}

// keep this function call here
const strArr = [
  '1 2024-01-01 present',
  '2 2024-01-01 halfDay',
  '1 2024-01-02 absent',
  '2 2024-01-02 absent',
];

console.log(Longestconsecutivepresentstreak(strArr));
