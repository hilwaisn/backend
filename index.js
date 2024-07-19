import express from "express";
const app = express();
app.use(express.json());

let datas=[];

app.get("/coba",(req,res)=>{
    res.send("Hello Hilwa");
})

app.post("/addData",(req,res)=>{
    datas.push(req.body);
    res.send("data berhasil ditambah");
})

app.get("/getData", (req,res)=>{
    res.send(datas);
})

app.put("/updateData/:index", (req,res)=>{
    const dataIndex=datas.findIndex((data,i)=>i==req.params.index)
    if(dataIndex === -1){
        res.send("data tidak ditemukan");
    }
    datas[dataIndex]=req.body;
    console.log(datas[dataIndex]);
    res.send("data berhasil diubah");
})

app.delete("/deleteData/:index", (req,res)=>{
    const dataIndex=datas.findIndex((data,i)=>i==req.params.index)
    if(dataIndex === -1){
        res.send("data tidak ditemukan");
    }
    datas.splice(dataIndex,1);
    res.send("data berhasil dihapus");
})

app.listen(3000, ()=> console.log("server berjalan"));