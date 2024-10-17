export const getRandomMedicalList =(list:any)=>{
  return list[Math.floor(Math.random()* list.length)]
}