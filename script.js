const arrs=[
    {
        name:"Emorinken",
        age:21,
        level:"400 level"
    },
    {
        name:"Teslim",
        age:22,
        level:"100 level"
    },
    {
        name:"Jawad",
        age:20,
        level:"200 level"
    }
]
const len= arrs.length
arraySum.apply(this,arrs)
function arraySum(){
    result=[]
    for (i=0;i<len;i++){
        // console.log(arrs[i].name)
        result+=arrs[i].name+"/"+arrs[i].age+"/"+arrs[i].level+","
    }
    console.log([result] )
}