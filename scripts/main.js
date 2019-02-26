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
    
        if ((pass_1 == pass_2) && (pass_1 != "") && (pass_2 != "")){
            
            input_1.style.display = 'none'
            input_2.style.display = 'none'
            label_1.style.display = 'none'
            label_2.style.display = 'none'
            login.style.display = 'none'
            //logout.style.display = 'block'
            slideshow.style.display = 'block'
            profile.style.display = 'block'
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

function red() {
    let mani = document.getElementsById("mani")

    mani.style.fontSize = "60px";
    //mani.style.backgroundColor = "rgb(0, 90, 65)"
}