


const printName= (req, res)=>{
    res.send('Wellcome to Name program');
};
const story= (req, res)=>{
res.send('Story telling is interesting game');
};

module.exports={printName, story};