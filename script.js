var currentPage = 1;
var rowsPerPage = 5;

function sortTable(columnIndex) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;

    while (switching) {
        switching = false;
        rows = table.rows;

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[columnIndex];
            y = rows[i + 1].getElementsByTagName("td")[columnIndex];

            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }

        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

function showPage(page) {
    var table = document.getElementById("myTable");
    var rows = table.rows;

    var startIndex = (page - 1) * rowsPerPage;
    var endIndex = startIndex + rowsPerPage;

    for (var i = 1; i < rows.length; i++) {
        if (i > startIndex && i <= endIndex) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}

function setupPagination() {
    var table = document.getElementById("myTable");
    var rows = table.rows;
    var pageCount = Math.ceil((rows.length - 1) / rowsPerPage);

    var pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    for (var i = 1; i <= pageCount; i++) {
        var link = document.createElement("a");
        link.href = "javascript:void(0)";
        link.innerHTML = i;
        link.addEventListener("click", function() {
            currentPage = parseInt(this.innerHTML);
            showPage(currentPage);
        });

        pagination.appendChild(link);
    }
}

showPage(currentPage);
setupPagination();

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}
function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
}