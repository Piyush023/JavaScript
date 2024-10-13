let n = 3;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= 2 * (n - i) + 1; j++) {
    console.log('*');
  }
  console.log('\n');
}
