

const toTopBtn = () => {
    
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

        document.getElementById("myBtn").style.display = "block";

    } else {

        document.getElementById("myBtn").style.display = "none";

    }
}

export default {toTopBtn}


