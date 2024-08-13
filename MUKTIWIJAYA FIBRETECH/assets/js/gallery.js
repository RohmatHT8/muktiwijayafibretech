const data = [
    {
        "jenis" : "panel",
        "name" : "panel1.jpeg"
    },
    {
        "jenis" : "panel",
        "name" : "panel2.jpeg"
    },
    {
        "jenis" : "panel",
        "name" : "panel3.jpeg"
    },
    {
        "jenis" : "panel",
        "name" : "panel4.jpeg"
    },
    {
        "jenis" : "panel",
        "name" : "panel5.jpeg"
    },
    {
        "jenis" : "stp",
        "name" : "stp1.jpeg"
    },
    {
        "jenis" : "stp",
        "name" : "stp2.jpeg"
    },
    {
        "jenis" : "stp",
        "name" : "stp3.jpeg"
    },
    {
        "jenis" : "stp",
        "name" : "stp4.jpeg"
    },
    {
        "jenis" : "stp",
        "name" : "stp5.jpeg"
    },
    {
        "jenis" : "stp",
        "name" : "stp6.jpeg"
    },
    {
        "jenis" : "stp",
        "name" : "stp7.jpeg"
    },
    {
        "jenis" : "bahan-baku",
        "name" : "g1.jpg"
    },
    {
        "jenis" : "bahan-baku",
        "name" : "g2.jpg"
    },
    {
        "jenis" : "bahan-baku",
        "name" : "g3.jpg"
    },
    {
        "jenis" : "bahan-baku",
        "name" : "g4.jpg"
    },
    {
        "jenis" : "bahan-baku",
        "name" : "g4.jpg"
    },
    {
        "jenis" : "bahan-baku",
        "name" : "g5.jpg"
    },
    {
        "jenis" : "bahan-baku",
        "name" : "g6.jpg"
    },
    {
        "jenis" : "bahan-baku",
        "name" : "g7.jpg"
    },
    {
        "jenis" : "bahan-baku",
        "name" : "g8.jpg"
    },
    {
        "jenis" : "bahan-baku",
        "name" : "g9.jpg"
    },
    {
        "jenis" : "bahan-baku",
        "name" : "g10.jpg"
    },
    {
        "jenis" : "bahan-baku",
        "name" : "g11.jpg"
    },
    {
        "jenis" : "bahan-baku",
        "name" : "g12.jpg"
    },
    {
        "jenis" : "bahan-baku",
        "name" : "g13.jpg"
    },
    {
        "jenis" : "bahan-baku",
        "name" : "g14.jpg"
    },
    {
        "jenis" : "bahan-baku",
        "name" : "g15.jpg"
    },
    {
        "jenis" : "bahan-baku",
        "name" : "g16.jpg"
    },
    {
        "jenis" : "bahan-baku",
        "name" : "g17.jpg"
    },
    {
        "jenis" : "bahan-baku",
        "name" : "g18.jpg"
    },
    {
        "jenis" : "bahan-baku",
        "name" : "g19.jpg"
    },
    {
        "jenis" : "bahan-baku",
        "name" : "g20.jpg"
    },
    {
        "jenis" : "bahan-baku",
        "name" : "g21.jpg"
    },
    {
        "jenis" : "bahan-baku",
        "name" : "g22.jpg"
    },
    {
        "jenis" : "bahan-baku",
        "name" : "g23.jpg"
    },
    {
        "jenis" : "bahan-baku",
        "name" : "g24.jpg"
    },
    {
        "jenis" : "bahan-baku",
        "name" : "g25.jpg"
    },
    {
        "jenis" : "bahan-baku",
        "name" : "g26.jpg"
    }

]

function render(data) {
    let result = data
    let temp = ''
    for(let i = 0; i < data.length; i++){
        temp += `<div class="col-lg-4 col-md-6 col-sm-4 portfolio-item ${data[i].jenis}">
        <div class="portfolio-content h-100">
          <img src="./assets/img/gallery/${data[i].name}" class="img-fluid" alt="" width="100%" height="100%">
          <div class="portfolio-info">
            <a href="./assets/img/gallery/${data[i].name}" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
          </div>
        </div>
      </div><!-- End Projects Item -->`
    }

    document.getElementById('card-gallery').innerHTML = temp
}

render(data)