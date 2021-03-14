const axios = require('axios');
const admin = require('firebase-admin');


srcImage =""
targetImage=""


async function faceCompare(srcImage,targetImage){
        try {
                const response = await axios.get('https://api.pixlab.io/facecompare',{
                        params:{
                                'key':'',
                                'src':srcImage,
                                'target':targetImage
                        }
        
                });
                return response.data.same_face;
              } catch (error) {
                console.error(error);
        }

}
 
async function IDParsing(img,country){
        try {
                const response = await axios.get('https://api.pixlab.io/docscan',{
                        params:{
                                'key':'',
                                'img':img,
                                'type':'idcard',
                                'country':country
                        }
        
                });
                return response.data.fields;
              } catch (error) {
                console.error(error);
        }
}

async function PassportParse(img){
        try {
                const response = await axios.get('https://api.pixlab.io/docscan',{
                        params:{
                                'key':'',
                                'img':img,
                                'type':'passport',
                        }
        
                });
                return response.data;
              } catch (error) {
                console.error(error);
        }
}

async function dataCompare(){

}

async function MRZParser(MRZString,JSONObject){

}


async function KYCVerification(){
        //var sameFace= await faceCompare(srcImage,targetImage);
        //console.log(sameFace);

        //uses alpha2 country codes
        //var id = await IDParsing(srcImage,'my');
        //switch statement for country codes
        var id = await PassportParse(srcImage);
        console.log(id);
}


KYCVerification();
