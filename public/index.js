window.onload = function (e) {
  (function () {
    var dropzone = document.getElementById('dropzone');
    var uploads = document.getElementById('uploads');

    var upload = function (files) {
      const formData = new FormData();

      for (x = 0; x < files.length; x++) {
        formData.append('file', files[x]);
      }

      fetch('/uploads', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })
        .then((res) => res.json())
        .then((results) => {

          uploads.innerHTML = '';

          results.files[0].forEach((e, i, a) => {
            uploads.innerHTML =  uploads.innerHTML  + `<a href="http://localhost:3000/temp/uploads/${e.filename}" target="_blank"> <img src="http://localhost:3000/temp/uploads/${e.filename}"  class="image-upload" /></a><br/>`;
          });

          uploads.className = 'uploads uploads-visible';
        })
        .catch((error) => {
          console.error(error);
        });
    };

    dropzone.ondrop = function (e) {
      e.preventDefault();
      this.className = 'dropzone';
      upload(e.dataTransfer.files);
    };

    dropzone.ondragover = function (e) {
      this.className = 'dropzone dragover';
      return false;
    };

    dropzone.ondragleave = function (e) {
      this.className = 'dropzone';
      return false;
    };
  })();
};
