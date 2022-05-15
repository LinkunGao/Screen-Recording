MediaRecorder()
=================

> 1. Init a ``stream`` by using navigator.mediaDevices.getUserMedia({})

> 2. const recordInstance = new MediaRecorder(stream, {mimeType: "video/webm",});

> 3. Create a blob slice array.

> 4. In recordInstance.ondataavailable callback function add stream data into blob array.

    > recordInstance.start()

    > recordInstance.ondataavailable

    > recordInstance.onstop / recordInstance.stop()


> 5. Create a blob instance ``new Blob(blobSlice, { type: "video/mp4" })``

> 6. Convert the blob instance to a URl, ``URL.createObjectURL(blob)``

> 7. Assignment the url to video tag.


See the origin file, (click this :download:`link <../../../quickStart/examples_learned/05_webrct_mediarecord.html>` to download a copy of this file)

.. literalinclude:: ../../../quickStart/examples_learned/05_webrct_mediarecord.html
    :language: html