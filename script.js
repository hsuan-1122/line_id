document.getElementById("input").addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                fetch("http://localhost:8000/api/message", {
                    method: "POST",
                    headers: {
                        "Content-Type":  "text/plain; charset=UTF-8",
                    },
                    body: document.getElementById("input").value
                })
                .then(res => res.json())
                .then(data => {
                    document.getElementById("result").innerText = data.message;
                })
                .catch(err => {
                    document.getElementById("result").innerText = "錯誤：" + err;
                });
            }
            
        });