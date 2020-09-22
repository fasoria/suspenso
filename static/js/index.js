  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  
  var options = {
   useSSL: false,
    userName: "skillet776@yahoo.com",
    password: "1993orellana768",
    onSuccess:onConnect,
    onFailure:doFail
  }

  
  client.connect(options);
   
  
  function onConnect() {
    
    console.log("Conectado...");
    client.subscribe("skillet776@yahoo.com/test");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "skillet776@yahoo.com/test1";
    client.send(message);

	
  }

  function doFail(e){
    console.log(e);
	
  }

  
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  
  function onMessageArrived(message) {
    console.log("Nuevo mensaje:"+message.payloadString); 
	document.getElementById("sensor1").innerHTML=message.payloadString.split("=")[1];
	document.getElementById("sensor2").innerHTML=message.payloadString.split("=")[2];
    S1=document.getElementById("sensor")
    S2=document.getElementById("sensor1")
    S3=document.getElementById("sensor2")
    S4.innerHTML=" "+Mensaje.split(":")[3];
    S5.innerHTML=" "+Mensaje.split(":")[4];
    S6.innerHTML=" "+Mensaje.split(":")[5];
  }


