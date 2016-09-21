
	 //
        var my_media = null;
        var mediaTimer = null;

        // Play audio
        //
        function playAudio(src) {
            // Create Media object from src
            my_media = new Media(src, onSuccess, onError);

            // Play audio
            my_media.play();

            // Update my_media position every second
            if (mediaTimer == null) {
                mediaTimer = setInterval(function() {
                    // get my_media position
                    my_media.getCurrentPosition(
                        // success callback
                        function(position) {
                            if (position > -1) {
                                setAudioPosition((position) + " sec");
                            }
                        },
                        // error callback
                        function(e) {
                            console.log("Error getting pos=" + e);
                            setAudioPosition("Error: " + e);
                        }
                    );
                }, 1000);
            }
        }

// Set audio volume
        //
        function setVolume(volume) {
            if (my_media) {
                my_media.setVolume(volume);
            }
        }

        // Pause audio
        //

        function pauseAudio() {
            if (my_media) {
                my_media.pause();
            }
        }

        // Stop audio
        //
        function stopAudio() {
            if (my_media) {
                my_media.stop();
            }
            clearInterval(mediaTimer);
            mediaTimer = null;
        }

        // onSuccess Callback
        //
        function onSuccess() {
            console.log("playAudio():Audio Success");
        }

        // onError Callback
        //
        function onError(error) {
            alert('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
        }

        // Set audio position
        //
        function setAudioPosition(position) {
            document.getElementById('audio_position').innerHTML = position;
        }
	
	function radio(){
	
	 if ($("#radio").hasClass('glyphicon glyphicon-pause')){
	 $("#radio").removeClass();
	 $("#radio").addClass("glyphicon glyphicon-play");
        stopAudio();
    }else{
	 $("#radio").removeClass();
	 $("#radio").addClass(" glyphicon glyphicon-pause");
       playAudio('Kalimba.mp3');
    }

    }
	
	
	
	 function enviarcorreo(){
             
             	var number = $("#nombre").val();
             	var message = $("#mensaje").val();
				archivoValidacion = "http://fenix951.com.ar/nuevo_2013/Ajdh/formulario.php?jsoncallback=?"
	$.getJSON( archivoValidacion, {nombre:number, mensaje:message})
	            .done(function(data) 
	{
		$("#alertaco").append(
								
								data.ex
								);              
             }); 
      }
		 

		
		
		
	
			
		
	