MediaDevices (WebRTC API)
===========================

MediaDevices interface provides a way to allow users to connect media input devices, such as: Camera, Microphone, and Screen-Share. It also allows users can get any media data from devices resouce.


``getUserMedia()``: Allows users to open camera or Screen-Share, it
provides MediaStream.


Open Camera:

.. code:: js

    const init = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({
           video: {
             width: 600,
             height: 500,
           },
         });

        oVideo.srcObject = stream;
        oVideo.play();
      };


Screen-Share:

.. code:: js

    const init = async () => {

        const stream = await navigator.mediaDevices.getDisplayMedia({
          video: true,
        });

        oVideo.srcObject = stream;
        oVideo.play();
      };

See the origin file, (click this :download:`link <../../../quickStart/examples_learned/05_webrct.html>` to download a copy of this file)

.. literalinclude:: ../../../quickStart/examples_learned/05_webrct.html
    :language: html






