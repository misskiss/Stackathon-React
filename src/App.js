// const philter = require('philter')
// import philter from 'philter';
// new philter();

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');

let img = new Image();
let fileName = '';

const downloadBtn = document.getElementById('download-btn');
const uploadFile = document.getElementById('upload-file');
const revertBtn = document.getElementById('revert-btn');


      // philter(['index.html', 'post.html'], { tag: true, customFilterDir: '', customFilters: [] }, (css, svg) => {
      //   console.log('CSS: ', css),
      //   console.log('SVG: ', svg)
      // })

      // let imgFilter = new philter();

      // <img data-philter-contrast="120" data-philter-duotone="#009efd #2af598"src=""></img>

// Add filters & Effects
document.addEventListener('click', (event) => {
  if(event.target.classList.contains('filter-btn')) {
    if(event.target.classList.contains('brightness-add')) {
      Caman('#canvas', img, function() {
        this.brightness(10).render();
      })
    } else if(event.target.classList.contains('brightness-remove')) {
      Caman('#canvas', img, function() {
        this.brightness(-10).render();
      })
    } else if(event.target.classList.contains('contrast-add')) {
      Caman('#canvas', img, function() {
        this.contrast(10).render();
      })
    } else if(event.target.classList.contains('contrast-remove')) {
      Caman('#canvas', img, function() {
        this.contrast(-10).render();
      })
    } else if(event.target.classList.contains('saturation-add')) {
      Caman('#canvas', img, function() {
        this.saturation(10).render();
      })
    } else if(event.target.classList.contains('saturation-remove')) {
      Caman('#canvas', img, function() {
        this.saturation(-10).render();
      })
    } else if(event.target.classList.contains('vibrance-add')) {
      Caman('#canvas', img, function() {
        this.vibrance(10).render();
      })
    } else if(event.target.classList.contains('vibrance-remove')) {
      Caman('#canvas', img, function() {
        this.vibrance(-10).render();
      })
    } else if(event.target.classList.contains('vintage-add')) {
      Caman('#canvas', img, function() {
        this.vintage().render();
      })
    } else if(event.target.classList.contains('lomo-add')) {
      Caman('#canvas', img, function() {
        this.lomo().render();
      })
    } else if(event.target.classList.contains('clarity-add')) {
      Caman('#canvas', img, function() {
        this.clarity().render();
      })
    } else if(event.target.classList.contains('sincity-add')) {
      Caman('#canvas', img, function() {
        this.sinCity().render();
      })
    } else if(event.target.classList.contains('crossprocess-add')) {
      Caman('#canvas', img, function() {
        this.crossProcess().render();
      })
    } else if(event.target.classList.contains('pinhole-add')) {
      Caman('#canvas', img, function() {
        this.pinhole().render();
      })
    } else if(event.target.classList.contains('nostalgia-add')) {
      Caman('#canvas', img, function() {
        this.nostalgia().render();
      })
    } else if(event.target.classList.contains('hermajesty-add')) {
      Caman('#canvas', img, function() {
        this.herMajesty().render();
      })
    } 
    // else if(event.target.classList.contains('data-philter-duotone')) {
    //   <img data-philter-duotone="#7028e4 #e5b2ca" src={img} class="img-fluid" alt="hover"/>

      // let duotone = new Philter();
      // {<img data-philter-duotone="#7028e4 #e5b2ca" src="https://source.unsplash.com/9417pueOkiE/763x480" class="img-fluid" alt="hover"/>}
      // Caman('#canvas', img, function() {
      //   this.philter().render();
      // }
    // }
    
  }
});

// Revert Filters
revertBtn.addEventListener('click', (event) => {
  Caman('#canvas', img, function() {
    this.revert();
  });
})

// Upload File
uploadFile.addEventListener('change', (event) => {
  //Get File
  const file = document.getElementById('upload-file')
  .files[0];

  // Init FileReader
  const reader = new FileReader();
  if(file) {
    // Set File Name
    fileName = file.name;
    // Read data as URL
    reader.readAsDataURL(file);
  }

  // Add image to canvas
  reader.addEventListener('load', () => {
    // Create img
    img = new Image();
    // Set src
    img.src = reader.result;
    // On image load, add to canvas
    img.onload = function() {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);
      canvas.removeAttribute('data-caman-id');
    }
  }, false);
});

// Download Event
downloadBtn.addEventListener('click', (event) => {
  // Get file ext
  const fileExtension = fileName.slice(-4);

  // Initialize new filename
  let newFileName;

  // Check image type
  if(fileExtension === '.jpg' || fileExtension === '.png') {
    newFileName = fileName.substring(0, fileName.length - 4) + '-edited.jpg';
  }

  // Call download
  download(canvas, newFileName);
})

// Download function
function download(canvas, fileName) {
  // Init event
  let event;

  // Create link
  const link = document.createElement('a');

  // Set properties
  link.download = fileName;
  link.href = canvas.toDataURL('image/jpeg', 0.8);
  
  // New mouse event
  event = new MouseEvent('click');

  // Dispatch event
  link.dispatchEvent(event);
}


