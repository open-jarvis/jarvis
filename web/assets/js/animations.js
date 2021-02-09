export function initializeLoadingAnimation() {
    setInterval(function() {
        document.querySelectorAll(".loading-dots").forEach(el => {
            if (el.classList.contains("has-loading-animation")) {
                return;
            }

            const _el = el;
            const MAX_DOTS = 3;
            let dots = 0;

            _el.classList.add("has-loading-animation");
            setInterval(_ => {
                _el.innerHTML += ".";
                dots++;

                try {
                    if (!_el.classList.contains("loading-dots")) {
                        _el.innerHTML = _el.innerHTML.slice(0, -dots);
                        dots = 0;
                        return;
                    }

                    if (dots > MAX_DOTS) {
                        _el.innerHTML = _el.innerHTML.slice(0, -MAX_DOTS - 1);
                        dots = 0;
                    }
                } catch (error) {
                    console.error(error);
                }
            }, 150);
        });
    }, 500);
}