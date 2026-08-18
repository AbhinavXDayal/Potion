(function Hi() 
{
  console.log(`Db connected`);
})();

(function Hey() 
{
  console.log(`Db connected two`);
})();

(() => 
{
  console.log(`Db connected three`);
})();

((Name) => 
{
  console.log(`Db connected four ${Name}`);
})("Abhi");