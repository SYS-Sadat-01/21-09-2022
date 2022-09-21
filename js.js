// const btn = document.getElementById('btn')
    // btn.addEventListener('click', loaddoc)

    // var plc = document.getElementById('demo')
    // function loaddoc(){
        
    //     const xhr = new XMLHttpRequest();
    //     xhr.open('GET','ajax_text.txt')

    //     xhr.onload = function(){
    //         console.log(this.response)
    //         plc.innerHTML = this.response
    //     }

    //     xhr.send();
    // }

    document.getElementById('submitForm').addEventListener('submit', loadEmailfunc)
        function loadEmailfunc(e){
            e.preventDefault();
            var email = document.getElementById('email').Value;
            var params ="email="+email;
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'sub.php')
            xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded')
            xhr.onload = function(){
                console.log(this.response)
            }
            xhr.send(params)

        }

var plc = document.getElementById('demo')
var out = ''
        function bringData(){
            const xhr = new XMLHttpRequest()
            xhr.open('GET','showEmailsData.php')
            xhr.onload = function(){
                console.log(this.response)
                var data = JSON.parse(this.response)
                console.log(data)


                for(let key in data){
                    out += data[key].Email+"<br>"
                    plc.innerHTML = out                   
                }
            }

            xhr.send()

        }

    