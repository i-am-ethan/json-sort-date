//要素の取得
const ul = document.getElementById('ul')


const url = jsonURL = "./news.json"

//日付順に並び替えた後の配列
const newArray = []
let newArrayLength = newArray.length


fetch(url)
.then(response => response.json())
.then(data => {

    //日付順に並び替える関数
    let result = data.sort(function(a, b){
        return (a.date > b.date) ? -1:1;
    })

    //resultの長さだけ繰り返す
    for(let i = 0; i <= result.length; i++){

        //li要素を作る
        const liELe = document.createElement("li")
        const dateEle = document.createElement("p")
        const descriptionEle = document.createElement("p")

        //pタグのテキストを挿入する
        dateEle.textContent = result[i].date
        descriptionEle.textContent = result[i].description

        //liタグにdateとdescriptionタグをappendする
        liELe.appendChild(dateEle)
        liELe.appendChild(descriptionEle)

        //ulタグにliをappendする
        ul.appendChild(liELe)


    }

})
.catch(err => console.log(err))

