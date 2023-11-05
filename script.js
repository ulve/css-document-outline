let observers = [];

let startup = () => {
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0
    };

    function callback(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelector('#' + entry.target.id + '-link').classList.add('active');
            }
            else {
                document.querySelector('#' + entry.target.id + '-link').classList.remove('active');
            }
        })
    }

    targets = document.querySelectorAll('h1, h2');
    targets.forEach(target => {
        let observer = new IntersectionObserver(callback, options);
        observer.observe(target);
        observers.push(observer);
    });

}

startup();