const handleVisibilityChange = () => {
    if(document.visibilityState == "hidden"){
        alert("user left the page")
        confirm()
    } else{
        alert("user open the page")
    }
}

document.addEventListener("visibilitychange", handleVisibilityChange);