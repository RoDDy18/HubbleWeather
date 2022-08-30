const express = require("express")
const fetch = require("node-fetch")

const router = express.Router()
const api_key = "FTL29PTN2DZ4H8TYVBA368TZA"
//const api_key = "V67EZU67DF9MXPP2UQTFGEAUW"
//const api_key = "4Q96YW6N22WAPV66Q325Z63XW"

router.get("/current/:loc/:unit", async (req,res)=>{
    const loc = req.params.loc
    const unit = req.params.unit
    try{
        const fetchAll = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}/today?unitGroup=${unit}&include=current&key=${api_key}&contentType=json`)
        const response = await fetchAll.json()
        res.send(response)
        
    }catch(err){
        console.error(err)
        res.send(err)
    }

})

router.get("/yesterday/:loc/:unit", async (req,res)=>{
    const loc = req.params.loc
    const unit = req.params.unit
    try{
        const fetchAll = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}/yesterday?unitGroup=${unit}&include=days&key=${api_key}&contentType=json`)
        const response = await fetchAll.json()
        res.send(response)
        
    }catch(err){
        console.error(err)
        res.send(err)
    }

})

router.get("/today/:loc/:unit", async (req,res)=>{
    const loc = req.params.loc
    const unit = req.params.unit
    try{
        const fetchAll = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}/today?unitGroup=${unit}&include=hours&key=${api_key}&contentType=json`)
        const response = await fetchAll.json()
        res.send(response)
        
    }catch(err){
        console.error(err)
        res.send(err)
    }

})

router.get("/tomorrow/:loc/:unit", async (req,res)=>{
    const loc = req.params.loc
    const unit = req.params.unit
    try{
        const fetchAll = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}/tomorrow?unitGroup=${unit}&include=days&key=${api_key}&contentType=json`)
        const response = await fetchAll.json()
        res.send(response)
        
    }catch(err){
        console.error(err)
        res.send(err)
    }

})

router.get("/next7/:loc/:unit", async (req,res)=>{
    const loc = req.params.loc
    const unit = req.params.unit
    try{
        const fetchAll = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}/next7days?unitGroup=${unit}&include=days&key=${api_key}&contentType=json`)
        const response = await fetchAll.json()
        res.send(response)
        
    }catch(err){
        console.error(err)
        res.send(err)
    }

})

router.get("/past7/:loc/:unit", async (req,res)=>{
    const loc = req.params.loc
    const unit = req.params.unit
    try{
        const fetchAll = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}/last7days?unitGroup=${unit}&include=days&key=${api_key}&contentType=json`)
        const response = await fetchAll.json()
        res.send(response)
       
    }catch(err){
        console.error(err)
        res.send(err)
    }

})

router.get("/next30/:loc/:unit", async (req,res)=>{
    const loc = req.params.loc
    const unit = req.params.unit
    try{
        const fetchAll = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}/next30days?unitGroup=${unit}&include=days&key=${api_key}&contentType=json`)
        const response = await fetchAll.json()
        res.send(response)
        
    }catch(err){
        console.error(err)
        res.send(err)
    }

})

router.get("/hourly/:loc/:unit", async (req,res)=>{
    const loc = req.params.loc
    const unit = req.params.unit
    try{
        const fetchAll = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}/today?unitGroup=${unit}&include=hours&key=${api_key}&contentType=json`)
        const response = await fetchAll.json()
        res.send(response)
        
    }catch(err){
        console.error(err)
        res.send(err)
    }

})

module.exports = router