document.addEventListener('DOMContentLoaded', function() {
    var iceElements = document.querySelectorAll('.interactive-ice');

    iceElements.forEach(function(elem) {
        elem.addEventListener('mouseover', function() {
            this.classList.add('ice-hover-effect');
        });

        elem.addEventListener('mouseout', function() {
            this.classList.remove('ice-hover-effect');
        });
    });
});