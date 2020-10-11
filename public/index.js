window.onload = function (e) {
  (function () {
    var dropzone = document.getElementById('dropzone');

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
          console.log(results);
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
