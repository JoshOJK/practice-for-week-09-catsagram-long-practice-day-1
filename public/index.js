
window.onload = async() => {
    // const kanyeRes = await fetch("https://api.kanye.rest").then(res => res.json())
    // console.log(kanyeRes)

    // let div = document.createElement('div')
    // div.innerText = kanyeRes.quote
    // document.body.appendChild(div)

    let head = document.createElement('h1')
    head.innerText = "Kitten Pic"
    document.body.appendChild(head)

    let redo = document.createElement("button")
    redo.innerText = "New Cat"
    redo.setAttribute("id", "newCat")
    document.body.appendChild(redo)

    async function findCat() {
    let data = await fetch("https://api.thecatapi.com/v1/images/search").then((res) => res.json())
    let url = data[0].url
    let img = document.createElement('img')
    img.setAttribute('id', "catIMG")
    let picture = document.querySelector("#catIMG")
        if(picture) {
            picture.src = url
        } else {
            document.body.appendChild(img)
            img.src = url
            img.alt = "picture of a cat"
        }
    }

    const createUpandDown = () => {
        const btnBowl = document.createElement("div");

        const upVoteBtn = document.createElement("button");
        const downVoteBtn = document.createElement("button");

        upVoteBtn.getAttribute('id', "up")
        downVoteBtn.getAttribute('id', "down")

        upVoteBtn.innerText = "Upvote";
        downVoteBtn.innerText = "Downvote";

        btnBowl.appendChild(upVoteBtn)
        btnBowl.appendChild(downVoteBtn)

        document.body.appendChild(btnBowl)
    }

    createUpandDown()
    findCat()

    redo.addEventListener("click", findCat)


}



// let catButton = document.querySelector("#newCat")
