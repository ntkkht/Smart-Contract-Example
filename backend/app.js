const ContractClass = require('./contract/contract');
const contract = new ContractClass(require('../contract/artifacts/contracts/certificate.sol/Certificate.json'));
const express = require('express')
const app = express()

app.use(express.json())

app.use((_, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET,POST,DELETE');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    next()
})

app.get("/certified", async (req, res) => {
    try{
        const certified = await contract.readContract("getCertified");
        return res.json({
            status: "success",
            data: certified
        })
    }catch (e){
        return res.json({
            status: "error",
            error: e
        })
    }
});

app.post("/certified", async (req, res) => {
    try{
        await contract.writeContract("addCertified", `${req.body.name} ${req.body.lastname}`);
        return res.json({
            status: "success",
        })
    }catch (e){
        return res.json({
            status: "error",
            error: e
        })
    }
});

app.delete("/certified/:index", async (req, res) => {
    try{
        await contract.writeContract("removeCertified", req.params.index);
        return res.json({
            status: "success",
        })
    }catch (e){
        return res.json({
            status: "error",
            error: e
        })
    }
})

app.get("/certifiedLogs", async (req, res) => {
    try{
        const events = await contract.getEventLogs(req.query.eventName);
        events.sort((a, b) => b.value.timeStamp - a.value.timeStamp)
        return res.json({
            status: "success",
            data: events
        })
    }catch (e){
        return res.json({
            status: "error",
            error: e
        })
    }
})

app.listen(process.env.WEB_PORT, () => {
    console.log("Listening to ", process.env.WEB_PORT);
});