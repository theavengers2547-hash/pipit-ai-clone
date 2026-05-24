const generateBtn =
document.getElementById("generateBtn");

const loading =
document.getElementById("loading");

const videoPreview =
document.getElementById("videoPreview");

const downloadBtn =
document.getElementById("downloadBtn");

generateBtn.addEventListener(
"click",
async ()=>{

const image =
document.getElementById("imageInput")
.files[0];

const audio =
document.getElementById("audioInput")
.files[0];

const prompt =
document.getElementById("prompt")
.value;

const duration =
document.getElementById("duration")
.value;

if(!image || !audio){
alert("Upload foto dan audio");
return;
}

loading.style.display="block";

const formData =
new FormData();

formData.append("image",image);
formData.append("audio",audio);
formData.append("prompt",prompt);
formData.append("duration",duration);

try{

const response =
await fetch(
"http://localhost:3000/generate",
{
method:"POST",
body:formData
});

const blob =
await response.blob();

const videoURL =
URL.createObjectURL(blob);

videoPreview.src =
videoURL;

videoPreview.style.display=
"block";

downloadBtn.href=
videoURL;

downloadBtn.style.display=
"block";

}
catch(error){

alert("Gagal membuat video");

}

loading.style.display="none";

});