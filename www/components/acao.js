// This is a JavaScript file
$(document).on("click", "#alertaUm", function(){
  navigator.notification.alert("Mensagem de Alerta 1");
});

$(document).on("click", "#alertaDois",function(){
  function retorno(){
  }
  navigator.notification.alert("Mensagem de Alerta 2", retorno, "Aviso", "Blz");
});

$(document).on("click", "#alertaTres",function(){
  function onConfirm(buttonIndex){
      if (buttonIndex == 1){
        navigator.notification.alert('Escolheu a opção sim!');
      } else {
        navigator.notification.alert ('Escolheu a opção não!');
      }
  }
  navigator.notification.confirm("Escolha sim ou não!", onConfirm, "Escolha", ['Sim', 'Não']);
});

$(document).on("click", "#alertaQuatro",function(){
  navigator.notification.beep(2);
});

$(document).on("click","#codigoBarra",function(){
  cordova.plugins.barcodeScanner.scan(
    function (result) {
      if (result.text == 888){
      $(location).attr("href", "pag2.html")
      }
      navigator.notification.alert("Leitura do Código de Barra\n")
      "Resultado: " + result.text + "\n" +
      "Formato: " + result.format + "\n" +
      "Cancelado: " + result.cancelled;
    },
    function (error) {
      navigator.notification.alert("Scanning failed: " + error);
    },
          {
          preferFrontCamera : false, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: true, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "Place a barcode inside the scan area", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
      }

  )

  
});

//camera
$(document).on("click","#camera",function(){

  navigator.camera.getPicture(onSuccess, onFail, { 
    quality: 50,
    destinationType: Camera.DestinationType.FILE_URI,
    correctOrientation: true,
    saveToPhotoAlbum: true,	
     });

function onSuccess(imageURI) {
    var image = document.getElementById('imagem');
    image.src = imageURI;
}

function onFail(message) {
    alert('Failed because: ' + message);
}

});

$(document).on("click","#local",function(){
var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);

});
