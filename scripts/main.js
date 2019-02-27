function toggle_btn(id) {
    let div = document.getElementById(id)

        if(div.style.display == 'none'){
        div.style.display = 'block'
        }
        else{
        div.style.display = 'none'
        }
}

function login(){
    let input_1 = document.getElementById("password1")
    let input_2 = document.getElementById("password2")
    let pass_1 = document.getElementById("password1").value
    let pass_2 = document.getElementById("password2").value
    let label_1 = document.getElementById("one")
    let label_2 = document.getElementById("two")
    let login = document.getElementById("login")
    //let logout = document.getElementById("logout")
    let slideshow = document.getElementById("slideshow")
    let profile = document.getElementById("profile")
    let csscontrol = document.getElementById("csscontrol")
    
        if ((pass_1 == pass_2) && (pass_1 != "") && (pass_2 != "")){
            
            input_1.style.display = 'none'
            input_2.style.display = 'none'
            label_1.style.display = 'none'
            label_2.style.display = 'none'
            login.style.display = 'none'
            //logout.style.display = 'block'
            slideshow.style.display = 'block'
            profile.style.display = 'block'
            csscontrol.style.display = 'block'
            return false
        }
        else{
            alert("Passwords do not match, try again")
            return true
        }
}

function logout(){
    document.getElementById("password1").value = ""
    document.getElementById("password2").value = ""
    let input_1 = document.getElementById("password1")
    let input_2 = document.getElementById("password2")
    let label_1 = document.getElementById("one")
    let label_2 = document.getElementById("two")
    let login = document.getElementById("login")
    //let logout = document.getElementById("logout")
    let slideshow = document.getElementById("slideshow")
    let profile = document.getElementById("profile")
        
        input_1.style.display = 'block'
        input_2.style.display = 'block'
        label_1.style.display = 'block'
        label_2.style.display = 'block'
        login.style.display = 'block'
        //logout.style.display = 'none'
        slideshow.style.display = 'none'
        profile.style.display = 'none'
        


}

var index = 0 

function next() {
    let imgs = document.getElementsByClassName("slides")
    
    imgs[index].style.display = "none"
    if(index == 24) {
      index = 0
    }
    else{ 
      index++
    }
    imgs[index].style.display = "block"

}

function prev() {
    let imgs = document.getElementsByClassName("slides")
    
    imgs[index].style.display = "none"
    if(index == 0) {
      index = 24
    }
    else{ 
      index--
    }
    imgs[index].style.display = "block"
    
}

function userGame() {
    let profile = document.getElementById("profile")
    let slideshow = document.getElementById("slideshow")
    let controls = document.getElementById("controls")
    let btn = document.getElementById("csscontrol")
    let thegame = document.getElementById("gamecontrol")

    
        profile.style.display = "none"
        slideshow.style.display = "none"
        controls.style.display = "none"
        thegame.style.display = "block"
        btn.style.display = "none"
        

}

function profileReturn() {
    let profile = document.getElementById("profile")
    let slideshow = document.getElementById("slideshow")
    let controls = document.getElementById("controls")
    let btn = document.getElementById("csscontrol")
    let thegame = document.getElementById("gamecontrol")

    
        profile.style.display = "block"
        slideshow.style.display = "block"
        controls.style.display = "block"
        btn.style.display = "block"
        thegame.style.display = "none"

}

function change() {
    let bgc = document.getElementById("mani1").value
    let bdc = document.getElementById("mani2").value
    let bdw = document.getElementById("mani3").value
    let target = document.getElementById("manipulatee")


    if (bgc == "Blue") {
        target.style.background = "Blue"
    }
    else if (bgc == "Green") {
        target.style.background = "Green"
    }
    else if (bgc == "Red") {
        target.style.background = "Red"
    }
    else {
        target.style.background = "None"
    }

    /////////////////////////////////////////

    if (bdc == "Blue") {
        target.style.borderStyle = "solid";
        target.style.borderColor = "Blue"
    }
    else if (bdc == "Green") {
        target.style.borderStyle = "solid";
        target.style.borderColor = "Green"
    }
    else if (bdc == "Red") {
        target.style.borderStyle = "solid";
        target.style.borderColor = "Red"
    }
    else {
        target.style.borderStyle = "none";
    }

    /////////////////////////////////////////

    if (bdw == "Thick") {
        target.style.borderStyle = "solid";
        target.style.borderWidth = "Thick"
    }
    else if (bdw == "Medium") {
        target.style.borderStyle = "solid";
        target.style.borderWidth = "Medium"
    }
    else if (bdw == "Thin") {
        target.style.borderStyle = "solid";
        target.style.borderWidth = "Thin"
    }
    else {
        target.style.borderStyle = "none";
    }

}